(this.webpackJsonpboilerplate=this.webpackJsonpboilerplate||[]).push([[0],{18:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return LauncherModal}));var D_Drive_Shared_JavaScript_Electron_ignis_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19),D_Drive_Shared_JavaScript_Electron_ignis_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),D_Drive_Shared_JavaScript_Electron_ignis_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_Tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20),_Toasts__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),_Icons_LogoFlat_png__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(21),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__),commands={help:{description:"Lists all of the available commands."},js:{description:"Executes the specified arguments as JavaScript.",arguments:"<code>",handle:function handle(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return eval(args.join(" "))}}},fs=window.require("fs"),path=window.require("path"),childProcess=window.require("child_process");function getPathFromString(e){var _,t=window.require("process"),r=e.split("/"),n=null!==(_={appdata:t.env.APPDATA,local:t.env.LOCALAPPDATA,localappdata:t.env.LOCALAPPDATA,home:t.env.HOMEPATH,public:t.env.PUBLIC,user:t.env.USERPROFILE,programfiles86:t.env.ProgramFiles,programfiles:t.env.ProgramW6432}[r[0].toLowerCase().replaceAll("%","")])&&void 0!==_?_:r[0];return path.join(n,r.slice(1).join("/")).replaceAll("\\","/")}function LauncherModal(){var e=react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(),_=react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),t=Object(D_Drive_Shared_JavaScript_Electron_ignis_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_,2),r=t[0],n=t[1];function a(_){var t=_.match(/[^\s"']+|"([^"]*)"|'([^']*)'/gm);if(_.startsWith("!")){var r=commands[_.split(" ")[0].slice(1).toLowerCase()];if(r){var n=r.handle.apply(r,Object(D_Drive_Shared_JavaScript_Electron_ignis_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(t.slice(1)));n&&_Toasts__WEBPACK_IMPORTED_MODULE_7__.a.showToast(n.toString()),console.log(n)}else _Toasts__WEBPACK_IMPORTED_MODULE_7__.a.showToast(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span",{children:[arguments[0].slice(1)," is not a valid command"]}),"Failure")}else try{childProcess.exec('start "" "'.concat(getPathFromString(_),'"')),window.close()}catch(a){console.error(a),_Toasts__WEBPACK_IMPORTED_MODULE_7__.a.showToast("Error opening file, check console for details","Failure")}e.current.value=""}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"LauncherModal",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"Title",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img",{alt:"Icon",src:_Icons_LogoFlat_png__WEBPACK_IMPORTED_MODULE_8__.a,height:20}),"Ignis Launcher"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"Flex",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input",{className:"LauncherModalField",ref:e,onKeyDown:function(e){return"Enter"===e.key&&a(e.currentTarget.value)},onChange:function(_){var t=_.currentTarget.value;if(t.startsWith("!")){var r,a=t.slice(1).toLowerCase(),s=Object.keys(commands).filter((function(e){return~e.indexOf(a)})),i=[],o=Object(D_Drive_Shared_JavaScript_Electron_ignis_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(s);try{var c=function(){var _=r.value,t=commands[_];i.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"Item",onClick:function(){return e.current.value="!"+_},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.a,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.d}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("b",{children:["!",_]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span",{style:{opacity:.5},children:[" - ",t.description]})]})]},_)),n(i)};for(o.s();!(r=o.n()).done;)c()}catch(O){o.e(O)}finally{o.f()}}else{var l=getPathFromString(t),u=l.split("/").slice(0,-1).join("/"),d=!fs.existsSync(l)&&fs.existsSync(u)?u:l;if(t&&fs.existsSync(d)){var E=fs.readdirSync(d).filter((function(e){return~path.join(d,e).toLowerCase().indexOf(l.split("/").slice(-1)[0].toLowerCase())})).slice(0,10).map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"Item",onClick:function(){return e.current.value=path.join(d,_)},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.a,{icon:fs.lstatSync(path.join(d,_)).isDirectory()?_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.c:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.a}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span",{children:_})]},_)}));n(E)}else n([])}},placeholder:"Example - !help"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"Button",onClick:function(){return a(e.current.value)},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.a,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.b}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_6__.a,{children:"Run Command"})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"AutoComplete",children:r})]})}},20:function(e,_,t){"use strict";t.d(_,"a",(function(){return o}));t(6);var r=t(3),n=t(1),a=t.n(n),s=(t(34),t(4)),i=(t(11),t(0));function o(e){var _=e.children,t=e.direction,n=void 0===t?"up":t,o=e.className,c=void 0===o?"":o,l=e.color,u=e.style,d=e.onClick,E=a.a.useState(!1),O=Object(r.a)(E,2),m=O[0],f=(O[1],a.a.useRef());return a.a.useEffect((function(){return f.current.parentElement.classList.add("HasTooltip"),function(){f.current&&f.current.parentElement.classList.remove("HasTooltip")}}),[_,n]),Object(i.jsxs)("div",{ref:f,className:Object(s.b)("TooltipContainer",n.toLowerCase(),[m,"Visible"],c),style:u,onClick:d,children:[Object(i.jsx)("div",{className:"Tooltip",style:{backgroundColor:l},children:_}),Object(i.jsx)("div",{className:"TooltipArrow",style:{backgroundColor:l}})]})}},21:function(e,_,t){"use strict";_.a=t.p+"static/media/LogoFlat.a9c26e3e.png"},28:function(e,_,t){},34:function(e,_,t){},36:function(e,_,t){},37:function(e,_,t){"use strict";t.r(_);var r=t(1),n=t.n(r),a=t(11),s=t.n(a),i=t(6),o=t(3),c=(t(28),t(18)),l=t(7),u=t(0);function d(){var e=n.a.useRef(),_=n.a.useState(0),t=Object(o.a)(_,2),r=t[0],a=t[1],s={onMouseUp:function(e){e.target===e.currentTarget&&(a(0),setTimeout(window.close.bind(window),250))}};return n.a.useEffect((function(){var e=function(){return a(1)};return window.addEventListener("focus",e),function(){return window.removeEventListener("focus",e)}}),[]),Object(u.jsxs)("div",Object(i.a)(Object(i.a)({className:"App"},s),{},{ref:e,style:{opacity:r},children:[Object(u.jsx)(c.a,{}),Object(u.jsx)(l.a,{})]}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,_,t){"use strict";function r(){for(var e="",_=0;_<arguments.length;_++){switch(typeof arguments[_]){case Array.isArray(arguments[_])&&"boolean"===typeof arguments[_][0]&&"object":!0===arguments[_][0]?e+=arguments[_][1]:arguments[_][2]&&(e+=arguments[_][2]);break;default:e+=arguments[_]}e+=" "}return e.trim()}function n(){return Math.random().toString(36).substr(7)}t.d(_,"b",(function(){return r})),t.d(_,"a",(function(){return n}))},7:function(e,_,t){"use strict";t.d(_,"a",(function(){return m}));var r=t(14),n=t(12),a=t(13),s=t(23),i=t(22),o=t(3),c=t(1),l=t.n(c),u=(t(36),t(4)),d=function(){function e(_,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Object(n.a)(this,e),this.callback=_,this.duration=t,this.remainingTime=t,r&&this.resume()}return Object(a.a)(e,[{key:"resume",value:function(){this.startTime=Date.now(),clearTimeout(this.id),this.id=setTimeout(this.callback,this.remainingTime)}},{key:"pause",value:function(){clearTimeout(this.id),this.remainingTime-=Date.now()-this.startTime}},{key:"end",value:function(){clearTimeout(this.id),this.callback()}}]),e}(),E=t(0);function O(e){var _=e.children,t=e.type,r=e.life,n=e.remove,a=e.callback,s=e.color,i=e.fixedTime,c=void 0!==i&&i,O=function(){v(!0),setTimeout(n,500)},m=l.a.useState(!1),f=Object(o.a)(m,2),h=f[0],v=f[1],D=l.a.useMemo((function(){return new d(O,1e3*r,!1)}),[]),P=l.a.useRef(),j=function(){D.pause(),P.current.style.animationPlayState="paused"},b=function(){D.resume(),P.current.style.animationPlayState="running"};return l.a.useEffect((function(){var e=function(){return!c&&b()},_=function(){return!c&&j()};return window.addEventListener("focus",e),window.addEventListener("blur",_),(c||document.hasFocus())&&b(),function(){window.removeEventListener("focus",e),window.removeEventListener("blur",_)}})),Object(E.jsxs)("div",{className:Object(u.b)("Toast",[h,"Closing"],t),onMouseEnter:c?null:j,onMouseLeave:c?null:b,onClick:a?function(e){a(e),D.end()}:function(){D.end()},style:{cursor:a?"pointer":null,backgroundColor:s},children:[_,Object(E.jsx)("div",{className:"ProgressBarContainer",children:Object(E.jsx)("div",{ref:P,className:"ProgressBar",style:{animationDuration:r+"s"}})})]})}var m=function(e){Object(s.a)(t,e);var _=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=_.call.apply(_,[this].concat(a))).state={toasts:[]},e}return Object(a.a)(t,[{key:"componentDidMount",value:function(){t.instance=this}},{key:"horizontalStyle",get:function(){return"Center"}},{key:"verticalStyle",get:function(){return"Bottom"}},{key:"render",value:function(){var e,_=this;return Object(E.jsxs)("div",{ref:t.ref,className:Object(u.b)("ToastsContainer",this.horizontalStyle,this.verticalStyle),children:[Object(E.jsx)("div",{className:Object(u.b)("ClearButton",[!!(null===(e=this.state.toasts)||void 0===e?void 0:e.length),"Visible"]),onClick:function(){return _.setState({toasts:[]})},children:Object(E.jsx)("u",{children:"Close all"})}),this.state.toasts]})}}],[{key:"showToast",value:function(e){var _=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=a.callback,i=void 0===s?null:s,o=a.color,c=void 0===o?null:o,d=a.fixedTime,E=void 0!==d&&d,m=l.a.createElement(O,{key:Object(u.a)(),children:e,type:t,life:n,color:c,fixedTime:E,remove:function(){_.instance.setState({toasts:_.instance.state.toasts.filter((function(e){return e!==m}))})},callback:i});return this.instance.setState({toasts:[].concat(Object(r.a)(this.instance.state.toasts),[m])}),m}}]),t}(l.a.Component);m.ref=l.a.createRef()}},[[37,1,2]]]);
//# sourceMappingURL=main.010e5eef.chunk.js.map