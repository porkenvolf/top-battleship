(()=>{"use strict";var e={672:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(537),s=n.n(r),i=n(645),o=n.n(i)()(s());o.push([e.id,"#App {\n  position: relative;\n  width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n","",{version:3,sources:["webpack://./src/css/UI/App.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB",sourcesContent:["#App {\n  position: relative;\n  width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n"],sourceRoot:""}]);const a=o},427:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(537),s=n.n(r),i=n(645),o=n.n(i)()(s());o.push([e.id,"#Obfuscator {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: rgb(181, 181, 181);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  text-align: center;\n  padding: 15px;\n}\n","",{version:3,sources:["webpack://./src/css/UI/Obfuscator.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,aAAa;AACf",sourcesContent:["#Obfuscator {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: rgb(181, 181, 181);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  text-align: center;\n  padding: 15px;\n}\n"],sourceRoot:""}]);const a=o},941:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(537),s=n.n(r),i=n(645),o=n.n(i)()(s());o.push([e.id,"#PlayerView {\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n","",{version:3,sources:["webpack://./src/css/UI/PlayerView.css"],names:[],mappings:"AAAA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,OAAO;AACT",sourcesContent:["#PlayerView {\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n"],sourceRoot:""}]);const a=o},76:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(537),s=n.n(r),i=n(645),o=n.n(i)()(s());o.push([e.id,'#UIBoard {\n  background: rgb(82, 82, 82);\n  display: grid;\n  max-height: 45vh;\n  max-width: 45vh;\n  aspect-ratio: 1/1;\n  flex: 1;\n}\n#UIBoard .tile {\n  aspect-ratio: 1/1;\n  border-bottom: 1px solid rgb(168, 168, 168);\n  border-right: 1px solid rgb(168, 168, 168);\n}\n#UIBoard .tile[data-row="0"] {\n  border-top: 1px solid rgb(168, 168, 168);\n}\n#UIBoard .tile[data-col="0"] {\n  border-left: 1px solid rgb(168, 168, 168);\n}\n\n#UIBoard .tile.O {\n  background: grey;\n}\n#UIBoard .tile.W {\n  background: white;\n}\n',"",{version:3,sources:["webpack://./src/css/UI/UIBoard.css"],names:[],mappings:"AAAA;EACE,2BAA2B;EAC3B,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,OAAO;AACT;AACA;EACE,iBAAiB;EACjB,2CAA2C;EAC3C,0CAA0C;AAC5C;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,yCAAyC;AAC3C;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB",sourcesContent:['#UIBoard {\n  background: rgb(82, 82, 82);\n  display: grid;\n  max-height: 45vh;\n  max-width: 45vh;\n  aspect-ratio: 1/1;\n  flex: 1;\n}\n#UIBoard .tile {\n  aspect-ratio: 1/1;\n  border-bottom: 1px solid rgb(168, 168, 168);\n  border-right: 1px solid rgb(168, 168, 168);\n}\n#UIBoard .tile[data-row="0"] {\n  border-top: 1px solid rgb(168, 168, 168);\n}\n#UIBoard .tile[data-col="0"] {\n  border-left: 1px solid rgb(168, 168, 168);\n}\n\n#UIBoard .tile.O {\n  background: grey;\n}\n#UIBoard .tile.W {\n  background: white;\n}\n'],sourceRoot:""}]);const a=o},797:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(537),s=n.n(r),i=n(645),o=n.n(i)()(s());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]),o.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Roboto", sans-serif;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\ninput,\ntextarea,\nselect,\nbutton {\n  width: 150px;\n  box-sizing: border-box;\n}\n',"",{version:3,sources:["webpack://./src/css/equalize.css"],names:[],mappings:"AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;AACnC;AACA;;;;EAIE,oBAAoB;EACpB,eAAe;AACjB;AACA;;;;EAIE,YAAY;EACZ,sBAAsB;AACxB",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Roboto", sans-serif;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\ninput,\ntextarea,\nselect,\nbutton {\n  width: 150px;\n  box-sizing: border-box;\n}\n'],sourceRoot:""}]);const a=o},402:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(537),s=n.n(r),i=n(645),o=n.n(i),a=n(797),l=o()(s());l.i(a.Z),l.push([e.id,"body {\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n}\n","",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;AACf",sourcesContent:['@import url("./equalize.css");\n\nbody {\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n}\n'],sourceRoot:""}]);const c=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(s," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],d=i[c]||0,h="".concat(c," ").concat(d);i[c]=d+1;var u=n(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var A=s(p,r);r.byIndex=a,t.splice(a,0,{identifier:h,updater:A,references:1})}o.push(h)}return o}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var i=r(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var a=n(i[o]);t[a].references--}for(var l=r(e,s),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{#e;constructor(){this.#e=document.createElement("div")}getContainer(){return this.#e}removeAllEventListeners(){const e=this.#e.cloneNode(!0);return this.#e.replaceWith(e),this.#e=e,this}}class t{#t;constructor(e,t){this.name=e,this.#t=t}getBoard(){return this.#t}}class r{#n;#r;#s;constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x";this.#n=e,this.#r="x"===t?[1,0]:[0,1],this.#s=0}hit(){return this.#s+=1,this}isSunk(){return this.#s>=this.#n}getAxis(){return this.#r}getLength(){return this.#n}}const s={Pubsub:{},on(e,t){this.Pubsub[e]=this.Pubsub[e]||[],this.Pubsub[e].push(t)},off(e,t){if(this.Pubsub[e])for(let n=0;n<this.Pubsub[e].length;n++)if(this.Pubsub[e][n]===t){this.Pubsub[e].splice(n,1);break}},emit(e,t){this.Pubsub[e]&&this.Pubsub[e].forEach((e=>{e(t)}))}};class i{#t=[];constructor(e,t){this.shipsTemplate=t;for(let t=0;t<e[0];t++){this.#t[t]=[];for(let n=0;n<e[1];n++)this.#t[t].push({hit:!1,obj:null})}}placeShip(e,t,n){const r=e,i=t,o=n.getAxis()[0]*(n.getLength()-1)+r,a=n.getAxis()[1]*(n.getLength()-1)+i;return!!this.#i(r,i,o,a)&&(this.#o({ship:n,x1:r,y1:i,x2:o,y2:a}),s.emit("UI.renderBoard"),!0)}getBoard(){return this.#t}receiveAttack(e,t){return!this.#a(e,t)&&(this.#t[e][t].hit=!0,this.#t[e][t].obj&&this.#t[e][t].obj.hit(),s.emit("UI.renderBoard"),!0)}render(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=[];for(let n=0;n<this.#t.length;n++){t[n]=[];for(let r=0;r<this.#t[0].length;r++)this.#t[n][r].hit||e?this.#t[n][r].obj?this.#t[n][r].obj.isSunk()?t[n][r]="X":t[n][r]="S":t[n][r]="W":t[n][r]="O"}return t}#o(e){let{ship:t,x1:n,y1:r,x2:s,y2:i}=e;for(let e=n;e<=s;e++)for(let n=r;n<=i;n++)this.#t[e][n].obj=t}#i(e,t){let n,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(!this.#l(e,t,s,i))return!1;s&&i?(n=s,r=i):(n=e,r=t);for(let s=e;s<=n;s++)for(let e=t;e<=r;e++)if(this.#t[s][e].obj)return!1;return!0}#l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return!(e<0||t<0||e>=this.#t.length||t>=this.#t[0].length||n<0||r<0||n>=this.#t.length||r>=this.#t[0].length)}#a(e,t){return!!this.#l(e,t)&&this.#t[e][t].hit}randomizeShips(){const e=[...this.shipsTemplate];for(;e.length>0;){const t=e[0],n=Math.round(Math.random())>0?"x":"y",s=Math.floor(10*Math.random()),i=Math.floor(10*Math.random()),o=new r(t,n);this.placeShip(s,i,o)&&e.shift()}return this}}class o{#c;#d=[];constructor(){this.shipsTemplate=[5,4,4,3,3,3,2,2,2,2];const e=[10,10];this.#d.push(new t("player 1",new i(e,this.shipsTemplate).randomizeShips())),this.#d.push(new t("player 2",new i(e,this.shipsTemplate).randomizeShips()))}getPlayers(){return this.#d}}var a=n(379),l=n.n(a),c=n(795),d=n.n(c),h=n(569),u=n.n(h),p=n(565),A=n.n(p),g=n(216),f=n.n(g),b=n(589),m=n.n(b),C=n(76),y={};y.styleTagTransform=m(),y.setAttributes=A(),y.insert=u().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=f(),l()(C.Z,y),C.Z&&C.Z.locals&&C.Z.locals;class v extends e{constructor(e){super(),this.getContainer().id="UIBoard",this.gameBoardObject=e;const t=e.getBoard().length,n=e.getBoard()[0].length;this.getContainer().style.gridTemplateColumns=`repeat(${t},1fr)`,this.getContainer().style.gridTemplateRows=`repeat(${n},1fr)`;for(let e=0;e<t*n;e++){const t=document.createElement("div");t.classList="tile",t.setAttribute("data-col",e%n),t.setAttribute("data-row",Math.floor(e/10)),this.getContainer().append(t)}this.bindEvents(),this.render()}render(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.gameBoardObject.render(e);for(let e=0;e<this.gameBoardObject.getBoard().length;e++)for(let n=0;n<this.gameBoardObject.getBoard()[0].length;n++){const r=this.getContainer().querySelector(`.tile[data-row="${e}"][data-col="${n}"]`);r.className="tile",r.classList.add(t[e][n])}}bindEvents(){}}var B=n(941),E={};E.styleTagTransform=m(),E.setAttributes=A(),E.insert=u().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=f(),l()(B.Z,E),B.Z&&B.Z.locals&&B.Z.locals;class x extends e{#h;constructor(e){super(),this.getContainer().id="PlayerView",this.#h=e;const t=document.createElement("div");this.getContainer().append(t),t.innerText=e.name,this.divInfo=document.createElement("div"),this.getContainer().append(this.divInfo),this.myBoard=new v(e.getBoard()),this.getContainer().append(this.myBoard.getContainer())}setInfo(e){return this.divInfo.innerText=e,this}getUIBoard(){return this.myBoard}}var w=n(427),I={};I.styleTagTransform=m(),I.setAttributes=A(),I.insert=u().bind(null,"head"),I.domAPI=d(),I.insertStyleElement=f(),l()(w.Z,I),w.Z&&w.Z.locals&&w.Z.locals;class k extends e{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"the next player";super(),this.getContainer().id="Obfuscator",this.bindEvents();const t=document.createElement("div");t.innerText=`Please pass the device to ${e}`,this.getContainer().append(t)}bindEvents(){this.getContainer().addEventListener("click",(()=>{this.getContainer().remove()}))}}var U=n(672),T={};T.styleTagTransform=m(),T.setAttributes=A(),T.insert=u().bind(null,"head"),T.domAPI=d(),T.insertStyleElement=f(),l()(U.Z,T),U.Z&&U.Z.locals&&U.Z.locals;var Z=n(402),j={};j.styleTagTransform=m(),j.setAttributes=A(),j.insert=u().bind(null,"head"),j.domAPI=d(),j.insertStyleElement=f(),l()(Z.Z,j),Z.Z&&Z.Z.locals&&Z.Z.locals,document.querySelector("body").append((new class extends e{constructor(){super(),this.getContainer().id="App",this.game=new o,this.playerViews=[],this.game.getPlayers().forEach((e=>{const t=new x(e);this.playerViews.push(t)})),this.stateManager(),s.emit("UI.playTurn",0)}stateManager(){s.on("UI.setupPlayer",(e=>{const t=this.playerViews[e];t.setInfo("Please set up your ships").getUIBoard().getContainer().querySelectorAll(".tile").forEach((e=>{e.addEventListener("click",(e=>{console.log(e.target)}))})),this.getContainer().append(t.getContainer())})),s.on("UI.playTurn",(e=>{this.removeAllEventListeners();const t=0===e?1:0;for(;this.getContainer().firstChild;)this.getContainer().removeChild(this.getContainer().firstChild);this.getContainer().append(this.playerViews[t].getContainer()),this.getContainer().append(this.playerViews[e].getContainer()),this.getContainer().append(new k(this.game.getPlayers()[e].name).getContainer()),this.playerViews[t].getUIBoard().render(!1),this.playerViews[e].getUIBoard().render(),this.playerViews[t].getUIBoard().getContainer().querySelectorAll(".tile").forEach((n=>{n.addEventListener("click",(n=>{console.log(n.target);const r=n.target.getAttribute("data-row"),i=n.target.getAttribute("data-col");this.game.getPlayers()[t].getBoard().receiveAttack(r,i)&&(this.playerViews[t].getUIBoard().render(!1),s.emit("UI.resultFeedback",e))}))}))})),s.on("UI.resultFeedback",(e=>{const t=0===e?1:0;this.removeAllEventListeners(),this.getContainer().addEventListener("click",(()=>{s.emit("UI.playTurn",t)}))}))}}).getContainer())})()})();
//# sourceMappingURL=index.bundle.js.map