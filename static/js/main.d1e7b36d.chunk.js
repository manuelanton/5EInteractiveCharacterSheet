(this["webpackJsonpfith-ed-ehar-sheet"]=this["webpackJsonpfith-ed-ehar-sheet"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=(a(25),a(8)),u=a(9);function i(){var e=Object(o.a)(['\n  display: grid;\n  margin: 0px;\n  height: 100vh;\n  max-height: 100vh;\n  width: 100vw;\n  grid-template-rows: 25% 1fr;\n  grid-template-columns: 20% 1fr;\n  grid-template-areas:\n    "stats details"\n    "stats attacks";\n  box-sizing: border-box;\n']);return i=function(){return e},e}var s=u.a.div(i()),d=a(1);function m(){var e=Object(o.a)(["\n  margin: 0 auto;\n"]);return m=function(){return e},e}function f(){var e=Object(o.a)(["\n  height: 10%;\n  width: 85%;\n  border-radius: 25px;\n  background-color: white;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-items: center;\n  padding: 2%;\n  margin: 0.1em;\n  border: 2px solid black;\n"]);return f=function(){return e},e}var b,g,p=u.a.div(f()),E=u.a.h5(m()),v=function(e){var t=Object(d.c)((function(e){return e.saves})),a=Object(d.c)((function(t){return t.stats[e.stat]})),n=Object(d.b)();return r.a.createElement(p,null,r.a.createElement("input",{type:"checkbox",checked:t.includes(e.stat),onChange:function(){return n(t.includes(e.stat)?{type:"REMOVE_SAVE",payload:e.stat}:{type:"ADD_SAVE",payload:e.stat})}}),r.a.createElement(E,null,e.name.toUpperCase()),r.a.createElement("span",null,e.stat,": ",Math.floor((a-10)/2)),r.a.createElement("input",{type:"number",style:{width:"75%",textAlign:"center",boxSizing:"border-box"},value:a,onChange:function(t){return n((a=e.stat,r=t.currentTarget.valueAsNumber,{type:"CHANGE_MOD",payload:{stat:a,value:r}}));var a,r}}))},h=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e}));return Object(n.useEffect)((function(){localStorage.store&&e({type:"PERSIST_STORE",payload:JSON.parse(localStorage.store)})}),[]),Object(n.useEffect)((function(){if(t)try{var e=JSON.stringify(t);localStorage.setItem("store",e)}catch(a){console.log(a)}}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{name:"Strength",stat:"STR"}),r.a.createElement(v,{name:"Dexterity",stat:"DEX"}),r.a.createElement(v,{name:"Constitution",stat:"CON"}),r.a.createElement(v,{name:"Intelligence",stat:"INT"}),r.a.createElement(v,{name:"Wisdom",stat:"WIS"}),r.a.createElement(v,{name:"Charisma",stat:"CHA"}))},O=a(11),y=a(13),C=a(2);!function(e){e[e.Artificer=0]="Artificer",e[e.Barbarian=1]="Barbarian",e[e.Bard=2]="Bard",e[e.Cleric=3]="Cleric",e[e.Druid=4]="Druid",e[e.Fighter=5]="Fighter",e[e.Monk=6]="Monk",e[e.Paladin=7]="Paladin",e[e.Ranger=8]="Ranger",e[e.Rogue=9]="Rogue",e[e.Sorcerer=10]="Sorcerer",e[e.Warlock=11]="Warlock",e[e.Wizard=12]="Wizard"}(b||(b={})),function(e){e[e.Acid=0]="Acid",e[e.Bludgeoning=1]="Bludgeoning",e[e.Cold=2]="Cold",e[e.Fire=3]="Fire",e[e.Force=4]="Force",e[e.Lightning=5]="Lightning",e[e.Necrotic=6]="Necrotic",e[e.Piercing=7]="Piercing",e[e.Poison=8]="Poison",e[e.Psychic=9]="Psychic",e[e.Radiant=10]="Radiant",e[e.Slashing=11]="Slashing",e[e.Thunder=12]="Thunder"}(g||(g={}));var j={stats:{STR:10,DEX:10,CON:10,INT:10,WIS:10,CHA:10},name:"",race:"",class:"",background:"",level:1,profBonus:2,AC:10,HP:{max:1,current:1},saves:[],attacks:[{name:"Dagger",stat:"DEX",damage:{diceSides:4,diceAmount:1,damageType:g.Piercing}}]};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_MOD":switch(t.payload.stat){case"STR":return Object(C.a)({},e,{stats:Object(C.a)({},e.stats,{STR:t.payload.value})});case"DEX":return Object(C.a)({},e,{stats:Object(C.a)({},e.stats,{DEX:t.payload.value})});case"CON":return Object(C.a)({},e,{stats:Object(C.a)({},e.stats,{CON:t.payload.value})});case"INT":return Object(C.a)({},e,{stats:Object(C.a)({},e.stats,{INT:t.payload.value})});case"WIS":return Object(C.a)({},e,{stats:Object(C.a)({},e.stats,{WIS:t.payload.value})});case"CHA":return Object(C.a)({},e,{stats:Object(C.a)({},e.stats,{CHA:t.payload.value})})}case"CHANGE_NAME":return Object(C.a)({},e,{name:t.payload});case"CHANGE_RACE":return Object(C.a)({},e,{race:t.payload});case"CHANGE_LEVEL":return Object(C.a)({},e,{level:t.payload,profBonus:1+Math.ceil(t.payload/4)});case"CHANGE_CLASS":return Object(C.a)({},e,{class:t.payload});case"CHANGE_AC":return Object(C.a)({},e,{AC:t.payload});case"ADD_SAVE":return Object(C.a)({},e,{saves:[].concat(Object(y.a)(e.saves),[t.payload])});case"REMOVE_SAVE":return Object(C.a)({},e,{saves:e.saves.filter((function(e){return e!==t.payload}))});case"CHANGE_BACKGROUND":return Object(C.a)({},e,{background:t.payload});case"CHANGE_HP_MAX":return Object(C.a)({},e,{HP:Object(C.a)({},e.HP,{max:t.payload})});case"CHANGE_HP_CURRENT":return Object(C.a)({},e,{HP:Object(C.a)({},e.HP,{current:t.payload})});case"ADD_ATTACK":return Object(C.a)({},e,{attacks:[].concat(Object(y.a)(e.attacks),[t.payload])});case"REMOVE_ATTACK":return Object(C.a)({},e,{attacks:e.attacks.filter((function(e){return e.name!==t.payload}))});case"PERSIST_STORE":return Object(C.a)({},t.payload);default:return e}}function S(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n={total:a,rolls:[],critical:!1};t;){var r=Math.ceil(Math.random()*e);n.rolls.push(r),n.total+=r,n.critical=20===e&&20===r,t--}return console.log(n),n}function T(e){var t=[];for(var a in e)t.push(e[a]);return t.slice(0,t.length/2)}var N=function(){var e=Object(d.c)((function(e){return e.stats})),t=Object(d.c)((function(e){return e.HP})),a=Object(d.c)((function(e){return e.name})),n=Object(d.c)((function(e){return e.background})),c=Object(d.c)((function(e){return e.race})),l=Object(d.c)((function(e){return e.class})),o=T(b),u=Object(d.c)((function(e){return e.level})),i=Object(d.c)((function(e){return e.profBonus})),s=Object(d.c)((function(e){return e.AC})),m=Object(d.b)(),f=function(){switch(l){case"Artificer":case"Wizard":return 8+Math.floor((e.INT-10)/2)+i;case"Bard":case"Paladin":case"Sorcerer":case"Warlock":return 8+Math.floor((e.CHA-10)/2)+i;case"Cleric":case"Druid":case"Ranger":return 8+Math.floor((e.WIS-10)/2)+i;default:return null}}(),g=f-8;return r.a.createElement("div",{style:{margin:"1em"}},r.a.createElement("h2",null,"Character Details "),"Name: \xa0",r.a.createElement("input",{type:"text",value:a,onChange:function(e){return m(function(e){return{type:"CHANGE_NAME",payload:e}}(e.currentTarget.value))}}),"\xa0 Background: \xa0",r.a.createElement("input",{type:"text",value:n,onChange:function(e){return m(function(e){return{type:"CHANGE_BACKGROUND",payload:e}}(e.currentTarget.value))}}),"\xa0 Race: \xa0",r.a.createElement("input",{type:"text",value:c,onChange:function(e){return m(function(e){return{type:"CHANGE_RACE",payload:e}}(e.currentTarget.value))}}),r.a.createElement("br",null),"Class: \xa0",r.a.createElement("select",{value:l,onChange:function(e){return m(function(e){return{type:"CHANGE_CLASS",payload:e}}(e.target.value))}},r.a.createElement("option",{value:"",disabled:!0},"choose one"),o.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))),"\xa0 Level: \xa0",r.a.createElement("input",{type:"number",value:u,onChange:function(e){m(function(e){return{type:"CHANGE_LEVEL",payload:e}}(e.currentTarget.valueAsNumber))}}),"\xa0 Prof. Bonus: ",i,"\xa0 HP(max):"," ",r.a.createElement("input",{type:"number",value:t.max,onChange:function(e){return m({type:"CHANGE_HP_MAX",payload:e.currentTarget.valueAsNumber})}}),"HP(current):",r.a.createElement("input",{type:"number",value:t.current,onChange:function(e){return m({type:"CHANGE_HP_CURRENT",payload:e.currentTarget.valueAsNumber})}}),r.a.createElement("br",null),"AC: \xa0",r.a.createElement("input",{type:"number",value:s,onChange:function(e){return m({type:"CHANGE_AC",payload:e.currentTarget.valueAsNumber})}}),"\xa0",null!==f&&"Spell Save DC: ".concat(f," Spell Attack Bonus: ").concat(g))},w=a(3),k=function(){var e=T(g),t=Object(d.b)(),a=Object(n.useState)(""),c=Object(w.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(20),i=Object(w.a)(u,2),s=i[0],m=i[1],f=Object(n.useState)(1),b=Object(w.a)(f,2),p=b[0],E=b[1],v=Object(n.useState)(""),h=Object(w.a)(v,2),O=h[0],y=h[1],C=Object(n.useState)(""),j=Object(w.a)(C,2),A=j[0],S=j[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("input",{type:"text",defaultValue:"attack name",name:"name",onChange:function(e){return o(e.currentTarget.value)}}),"\xa0",r.a.createElement("select",{name:"stat",defaultValue:"",onChange:function(e){return S(e.currentTarget.value)}},r.a.createElement("option",{value:"",disabled:!0},"choose one"),r.a.createElement("option",{value:"STR"},"STR"),r.a.createElement("option",{value:"DEX"},"DEX"),r.a.createElement("option",{value:"CON"},"CON"),r.a.createElement("option",{value:"INT"},"INT"),r.a.createElement("option",{value:"WIS"},"WIS"),r.a.createElement("option",{value:"CHA"},"CHA"))," ","\xa0",r.a.createElement("select",{name:"amount",onChange:function(e){return E(parseInt(e.currentTarget.value))}},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2")),"D",r.a.createElement("select",{name:"sides",defaultValue:"4",onChange:function(e){return m(parseInt(e.currentTarget.value))}},[4,6,8,10,12,20,100].filter((function(e){return e<13})).map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))," ","\xa0",r.a.createElement("select",{defaultValue:"",onChange:function(e){return y(e.currentTarget.value)}},r.a.createElement("option",{value:"",disabled:!0},"choose one"),e.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))),"\xa0",r.a.createElement("button",{type:"submit",onClick:function(){return""!==l?t(function(e,t,a,n,r){return{type:"ADD_ATTACK",payload:{name:e,stat:t,damage:{diceSides:a,diceAmount:n,damageType:r}}}}(l,A,s,p,O)):alert("Please fill out all fields before submitting.")}},"add new attack"),r.a.createElement("br",null))},_=function(){var e=Object(n.useState)(20),t=Object(w.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),o=Object(w.a)(l,2),u=o[0],i=o[1],s=Object(n.useState)(0),d=Object(w.a)(s,2),m=d[0],f=d[1],b=Object(n.useState)({total:0,rolls:[],critical:!1}),g=Object(w.a)(b,2),p=g[0],E=g[1],v=Object(n.useState)(!1),h=Object(w.a)(v,2),O=h[0],y=h[1],C=Object(n.useState)(!1),j=Object(w.a)(C,2),A=j[0],T=j[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Misc. Rolls"),"How many sides do your dice have? \xa0",r.a.createElement("select",{name:"sides",defaultValue:a,onChange:function(e){return c(parseInt(e.currentTarget.value))}},[4,6,8,10,12,20,100].map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement("br",null),20===a&&r.a.createElement("div",null,"Are we rolling with advantage \xa0",r.a.createElement("input",{type:"checkbox",name:"advantage",onChange:function(){return T(!A)}})," ","disadvantage \xa0",r.a.createElement("input",{type:"checkbox",name:"disadvantage",onChange:function(){return y(!O)}}),"?"),"How many are we rolling? \xa0",r.a.createElement("input",{type:"number",value:u,onChange:function(e){return i(e.currentTarget.valueAsNumber)}}),r.a.createElement("br",null),"Are there any bonuses to the roll? \xa0",r.a.createElement("input",{type:"number",value:m,onChange:function(e){return f(e.currentTarget.valueAsNumber)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return E(function(e,t,a){if(O&&!A){var n=S(e,t,a),r=S(e,t,a);return n.total<r.total?n:r}if(A&&!O){var c=S(e,t,a),l=S(e,t,a);return c.total>l.total?c:l}return S(e,t,a)}(a,u,m))}},"Let's roll!"),"\xa0 ",p.total>0&&"".concat(p.total,"! "),p.critical&&"Critical hit! ",p.rolls.length>1&&"Individual rolls: ".concat(p.rolls))},H=function(){var e=Object(d.c)((function(e){return e.stats})),t=Object(d.c)((function(e){return e.level})),a=Object(d.c)((function(e){return e.class})),c=Object(d.c)((function(e){return e.race})),l=Object(d.c)((function(e){return e.profBonus})),o=Object(d.c)((function(e){return e.attacks})),u=Object(d.b)(),i=Object(n.useState)({total:0,rolls:[],critical:!1}),s=Object(w.a)(i,2),m=s[0],f=s[1],b=function(){var e=0;return"Barbarian"===a&&(t>=9&&e++,t>=13&&e++,t>=17&&e++),"Half-Orc"===c&&e++,e}();return r.a.createElement("div",{style:{marginLeft:"1em"}},r.a.createElement("h4",null,"Attacks"),r.a.createElement("div",{style:{maxHeight:"5em",overflowY:"scroll"}},o.map((function(t){return r.a.createElement("div",{key:t.name,style:{padding:"3px"}},t.name," (",t.stat,") ~ Damage: ",t.damage.diceAmount,"D",t.damage.diceSides," \xa0",7!==t.damage.damageType?t.damage.damageType:"Piercing","\xa0",r.a.createElement("button",{onClick:function(){return f(S(20,1,Math.floor((e[t.stat]-10)/2)+l))}},"attack"),"\xa0",r.a.createElement("button",{onClick:function(){return f(S(t.damage.diceSides,m.critical?2*t.damage.diceAmount+b:t.damage.diceAmount,Math.floor((e[t.stat]-10)/2)))}},"damage"),"\xa0",r.a.createElement("button",{onClick:function(){return u({type:"REMOVE_ATTACK",payload:t.name})}},"X"))}))),r.a.createElement(k,null),r.a.createElement("br",null),r.a.createElement("div",{style:{maxHeight:"2em"}},"\xa0 ",m.total>0&&"Total: ".concat(m.total,"! "),m.critical&&"Critical hit! ",m.rolls.length>1&&"Individual rolls: ".concat(m.rolls.join(", "))),r.a.createElement("br",null),r.a.createElement(_,null))},R=function(){return r.a.createElement(d.a,{store:Object(O.b)(A,e,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(s,null,r.a.createElement("div",{style:{gridArea:"stats",display:"flex",flexFlow:"row wrap",justifyContent:"space-around",alignItems:"center"}},r.a.createElement(h,null)),r.a.createElement("div",{style:{gridArea:"details"}},r.a.createElement(N,null)),r.a.createElement("div",{style:{gridArea:"attacks",maxHeight:"100%"}},r.a.createElement(H,null))));var e},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(R,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/5eInteractiveCharacterSheet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/5eInteractiveCharacterSheet","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.d1e7b36d.chunk.js.map