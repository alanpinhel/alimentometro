(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(n,e,t){n.exports=t(168)},168:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(6),i=t.n(o),c=t(30),l=t(31),u=t(72),s=t(32),d=t.n(s),f="LIST_FOODS",m="SELECT_FOOD",b={list:d.a.getAlimentos(),item:{}};var p=Object(c.b)({foods:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return Object(u.a)({},n,{list:d.a.getAlimentos()});case m:return Object(u.a)({},n,{item:n.list.find(function(n){return n.id===+e.payload.id})});default:return n}}}),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}var v=t(10),O=t(11),j=t(169),y=t(171),E=t(170),w=t(42),x=t(43),k=t(47),C=t(44),S=t(49),A=t(48);function z(){var n=Object(v.a)(["\n  display: block;\n  color: #000;\n  line-height: 1;\n  text-decoration: none;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n"]);return z=function(){return n},n}function F(){var n=Object(v.a)(["\n  &:not(:last-child) a {\n    border-bottom: 1px solid #e0e0e0;\n  }\n"]);return F=function(){return n},n}function W(){var n=Object(v.a)(["\n  margin: 0;\n  padding-left: 0.5rem;\n  list-style: none;\n"]);return W=function(){return n},n}function L(){var n=Object(v.a)(["\n  width: 100%;\n"]);return L=function(){return n},n}function P(){var n=Object(v.a)(["\n  font-size: 1.2rem;\n  text-align: center;\n  margin: 0rem;\n"]);return P=function(){return n},n}function R(){var n=Object(v.a)(["\n  display: inline-flex;\n  align-items: center;\n  color: #007aff;\n  text-decoration: none;\n  line-height: 1;\n"]);return R=function(){return n},n}function T(){var n=Object(v.a)(["\n  position: sticky;\n  top: 0;\n  padding: 0.5rem;\n  background-color: #f8f8f8;\n  border-bottom: solid 1px #e0e0e0;\n  box-sizing: border-box;\n  z-index: 1;\n"]);return T=function(){return n},n}var U=O.b.header(T()),B=Object(O.b)(j.a)(R()),D=O.b.h1(P()),I=O.b.main(L()),M=O.b.ul(W()),N=O.b.li(F()),H=Object(O.b)(j.a)(z()),J=function(n){function e(){return Object(w.a)(this,e),Object(k.a)(this,Object(C.a)(e).apply(this,arguments))}return Object(S.a)(e,n),Object(x.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.handleList)()}},{key:"render",value:function(){var n=this.props.list;return a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,a.a.createElement(B,{to:"/"},a.a.createElement(A.a,{size:"1.5rem"}),"Tela Inicial"),a.a.createElement(D,null,"Alimentos")),a.a.createElement(I,null,a.a.createElement(M,null,n.map(function(n){return a.a.createElement(N,{key:n.id},a.a.createElement(H,{to:"/foods/".concat(n.id)},n.nome))}))))}}]),e}(a.a.PureComponent),_=Object(l.b)(function(n){return{list:n.foods.list}},function(n){return{handleList:function(){return n({type:f})}}})(J),Q=t(70),$=t.n(Q),q=t(92),G=t(99),K=(t(112),t(71)),V=t(45);var X=function(n){var e=n.handleFormat,t=n.handleChange;return a.a.createElement(K.a,{onChange:t,min:0,max:5e3,step:100,handle:function(n){var t=n.value,r=(n.dragging,n.index),o=Object(G.a)(n,["value","dragging","index"]);return a.a.createElement(V.a,{prefixCls:"rc-slider-tooltip",overlay:e(t),visible:!0,placement:"topRight",key:r,overlayStyle:{touchAction:"none"}},a.a.createElement(K.a.Handle,Object.assign({value:t},o)))}})};function Y(){var n=Object(v.a)(["\n  text-align: center;\n  margin: 0;\n"]);return Y=function(){return n},n}function Z(){var n=Object(v.a)(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 0.5rem;\n  background-color: #f8f8f8;\n  border-top: solid 1px #e0e0e0;\n  box-sizing: border-box;\n  z-index: 1;\n"]);return Z=function(){return n},n}function nn(){var n=Object(v.a)(["\n  padding: 2.5rem;\n  box-sizing: border-box;\n"]);return nn=function(){return n},n}function en(){var n=Object(v.a)(["\n  text-align: center;\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n  line-height: 1;\n"]);return en=function(){return n},n}function tn(){var n=Object(v.a)(["\n  font-size: 1.2rem;\n  text-align: center;\n  margin: 0;\n"]);return tn=function(){return n},n}function rn(){var n=Object(v.a)(["\n  display: inline-flex;\n  align-items: center;\n  color: #007aff;\n  text-decoration: none;\n  line-height: 1;\n"]);return rn=function(){return n},n}function an(){var n=Object(v.a)(["\n  position: sticky;\n  top: 0;\n  padding: 0.5rem;\n  background-color: #f8f8f8;\n  border-bottom: solid 1px #e0e0e0;\n  box-sizing: border-box;\n  z-index: 1;\n"]);return an=function(){return n},n}var on=O.b.header(an()),cn=Object(O.b)(j.a)(rn()),ln=O.b.h1(tn()),un=O.b.p(en()),sn=O.b.main(nn()),dn=O.b.footer(Z()),fn=O.b.p(Y()),mn=function(n){function e(){var n,t;Object(w.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(k.a)(this,(n=Object(C.a)(e)).call.apply(n,[this].concat(a)))).state={output:"0g"},t.handleCalculate=function(n){var e=t.props.item;t.setState({output:d.a.formata(e.pesoBruto*n)})},t}return Object(S.a)(e,n),Object(x.a)(e,[{key:"componentDidMount",value:function(){var n=Object(q.a)($.a.mark(function n(){var e,t,r;return $.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=this.props,t=e.handleSelect,r=e.match,t(r.params.id);case 2:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.props.item,e=this.state.output;return a.a.createElement(a.a.Fragment,null,a.a.createElement(on,null,a.a.createElement(cn,{to:"/foods"},a.a.createElement(A.a,{size:"1.5rem"}),"Alimentos"),a.a.createElement(ln,null,n.nome),a.a.createElement(un,null,"Quanto voc\xea precisa consumir?")),a.a.createElement(sn,null,a.a.createElement(X,{handleFormat:function(n){return d.a.formata(n)},handleChange:this.handleCalculate})),a.a.createElement(dn,null,a.a.createElement(fn,null,"Prepare",a.a.createElement("b",null," ".concat(e," ")),"de"," ".concat(n.nome,"."))))}}]),e}(a.a.PureComponent),bn=Object(l.b)(function(n){return{item:n.foods.item}},function(n){return{handleSelect:function(e){return n(function(n){return{type:m,payload:{id:n}}}(e))}}})(mn);function pn(){var n=Object(v.a)(['\n  html, body, #root {\n    margin: 0;\n    width: 100%;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,\n    Cantarell, "Helvetica Neue", sans-serif;\n  }\n']);return pn=function(){return n},n}var hn=function(){return a.a.createElement(j.a,{to:"/foods"},"Alimentos")};var gn=Object(O.a)(pn()),vn=function(){return a.a.createElement(y.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(gn,null),a.a.createElement(E.a,{path:"/",exact:!0,component:hn}),a.a.createElement(E.a,{path:"/foods",exact:!0,component:_}),a.a.createElement(E.a,{path:"/foods/:id",component:bn})))},On=Object(c.c)(p);i.a.render(a.a.createElement(l.a,{store:On},a.a.createElement(vn,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/alimentometro",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/alimentometro","/service-worker.js");h?(function(n,e){fetch(n).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):g(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):g(e,n)})}}()}},[[100,2,1]]]);
//# sourceMappingURL=main.45270335.chunk.js.map