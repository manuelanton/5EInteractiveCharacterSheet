import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeBackground,
  changeClass,
  changeLevel,
  changeAC,
  changeRace
} from "../actions/details";
import { classes } from "../reducers/index";
import { enumIntoArray } from "../utils";

const CharacterDetail = () => {
  const stats: any = useSelector<any>(state => state.stats);
  const name: any = useSelector<any>(state => state.name);
  const background: any = useSelector<any>(state => state.background);
  const race: any = useSelector<any>(state => state.race);
  const characterClass: any = useSelector<any>(state => state.class);
  let classesArray: string[] = enumIntoArray(classes);
  const level: any = useSelector<any>(state => state.level);
  const profBonus: any = useSelector<any>(state => state.profBonus);
  const AC: any = useSelector<any>(state => state.AC);
  const dispatch = useDispatch();

  const calculateSpellDC = () => {
    switch (characterClass) {
      case "Artificer":
      case "Wizard": {
        return 8 + Math.floor((stats.INT - 10) / 2) + profBonus;
      }
      case "Bard":
      case "Paladin":
      case "Sorcerer":
      case "Warlock": {
        return 8 + Math.floor((stats.CHA - 10) / 2) + profBonus;
      }
      case "Cleric":
      case "Druid":
      case "Ranger": {
        return 8 + Math.floor((stats.WIS - 10) / 2) + profBonus;
      }
      default:
        return null;
    }
  };

  const DC = calculateSpellDC();
  const spellBonus = DC - 8;

  return (
    <div style={{ margin: "1em" }}>
      <h2>Character Details</h2>
      <br />
      Name: &nbsp;
      <input
        type="text"
        value={name}
        onChange={e => dispatch(changeName(e.currentTarget.value))}
      />
      &nbsp; Background: &nbsp;
      <input
        type="text"
        value={background}
        onChange={e => dispatch(changeBackground(e.currentTarget.value))}
      />
      &nbsp; Race: &nbsp;
      <input
        type="text"
        value={race}
        onChange={e => dispatch(changeRace(e.currentTarget.value))}
      />
      <br />
      Class: &nbsp;
      <select
        defaultValue={characterClass}
        onChange={e => dispatch(changeClass(e.target.value))}
      >
        <option value={""} disabled>
          choose one
        </option>
        {classesArray.map(classOption => (
          <option value={classOption} key={classOption}>
            {classOption}
          </option>
        ))}
      </select>
      &nbsp; Level: &nbsp;
      <input
        type="number"
        value={level}
        onChange={e => dispatch(changeLevel(e.currentTarget.valueAsNumber))}
      />
      &nbsp; Prof. Bonus: {profBonus}
      <br />
      AC: &nbsp;
      <input
        type="number"
        value={AC}
        onChange={e => dispatch(changeAC(e.currentTarget.valueAsNumber))}
      />
      &nbsp;
      {DC !== null && `Spell Save DC: ${DC} Spell Attack Bonus: ${spellBonus}`}
    </div>
  );
};

export default CharacterDetail;