"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{5692:(e,t,n)=>{var r=n(4848),o=n(6540),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e,t){var n,r;switch(t.type){case"TYPE":return i(i({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length+1)});case"DELAY":return i(i({},e),{speed:t.payload});case"DELETE":return i(i({},e),{speed:t.speed,text:null===(r=t.payload)||void 0===r?void 0:r.substring(0,e.text.length-1)});case"COUNT":return i(i({},e),{count:e.count+1});default:return e}}var c=function(e){var t=e.words,n=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,r=e.loop,i=void 0===r?1:r,c=e.typeSpeed,l=void 0===c?80:c,a=e.deleteSpeed,s=void 0===a?50:a,d=e.delaySpeed,f=void 0===d?1500:d,p=e.onLoopDone,m=e.onType,g=e.onDelete,y=e.onDelay,h=o.useReducer(u,{speed:l,text:"",count:0}),v=h[0],b=v.speed,x=v.text,S=v.count,E=h[1],w=o.useRef(0),O=o.useRef(!1),D=o.useRef(!1),T=o.useRef(!1),k=o.useRef(!1),A=o.useCallback(function(){var e=S%n.length,t=n[e];D.current?(E({type:"DELETE",payload:t,speed:s}),""===x&&(D.current=!1,E({type:"COUNT"}))):(E({type:"TYPE",payload:t,speed:l}),T.current=!0,x===t&&(E({type:"DELAY",payload:f}),T.current=!1,k.current=!0,setTimeout(function(){k.current=!1,D.current=!0},f),i>0&&(w.current+=1,w.current/n.length===i&&(k.current=!1,O.current=!0)))),T.current&&m&&m(w.current),D.current&&g&&g(),k.current&&y&&y()},[S,f,s,i,l,n,x,m,g,y]);return o.useEffect(function(){var e=setTimeout(A,b);return O.current&&clearTimeout(e),function(){return clearTimeout(e)}},[A,b]),o.useEffect(function(){p&&O.current&&p()},[p]),[x,{isType:T.current,isDelay:k.current,isDelete:D.current,isDone:O.current}]};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var l=o.memo(function(e){var t=e.cursorBlinking,n=e.cursorStyle,o=e.cursorColor;return r.jsx("span",i({style:{color:void 0===o?"inherit":o},className:"".concat("styles-module_blinkingCursor__yugAC"," ").concat(void 0===t||t?"styles-module_blinking__9VXRT":"")},{children:void 0===n?"|":n}))});t.cU=function(e){var t=e.words,n=e.loop,o=e.typeSpeed,i=e.deleteSpeed,u=e.delaySpeed,a=e.cursor,s=e.cursorStyle,d=e.cursorColor,f=e.cursorBlinking,p=c({words:void 0===t?["Hello World!","This is","a simple Typewriter"]:t,loop:void 0===n?1:n,typeSpeed:void 0===o?80:o,deleteSpeed:void 0===i?50:i,delaySpeed:void 0===u?1500:u,onLoopDone:e.onLoopDone,onType:e.onType,onDelay:e.onDelay,onDelete:e.onDelete})[0];return r.jsxs(r.Fragment,{children:[r.jsx("span",{children:p}),void 0!==a&&a&&r.jsx(l,{cursorStyle:void 0===s?"|":s,cursorColor:void 0===d?"inherit":d,cursorBlinking:void 0===f||f})]})}},3362:(e,t,n)=>{n.d(t,{DX:()=>u});var r=n(6540),o=n(1071),i=n(4848),u=r.forwardRef((e,t)=>{let{children:n,...o}=e,u=r.Children.toArray(n),l=u.find(a);if(l){let e=l.props.children,n=u.map(t=>t!==l?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(c,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,i.jsx)(c,{...o,ref:t,children:n})});u.displayName="Slot";var c=r.forwardRef((e,t)=>{let{children:n,...i}=e;if(r.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n),u=function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props);return n.type!==r.Fragment&&(u.ref=t?(0,o.t)(t,e):e),r.cloneElement(n,u)}return r.Children.count(n)>1?r.Children.only(null):null});c.displayName="SlotClone";var l=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function a(e){return r.isValidElement(e)&&e.type===l}},5317:(e,t,n)=>{n.d(t,{A:()=>o});let r={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function o(e={}){let t,n,i,u;let c=null,l=0,a=!1,s=!1,d=!1,f=!1;function p(){if(!i){if(y()){d=!0;return}a||n.emit("autoplay:play"),function(){let{ownerWindow:e}=n.internalEngine();e.clearTimeout(l),l=e.setTimeout(S,u[n.selectedScrollSnap()]),c=new Date().getTime(),n.emit("autoplay:timerset")}(),a=!0}}function m(){i||(a&&n.emit("autoplay:stop"),function(){let{ownerWindow:e}=n.internalEngine();e.clearTimeout(l),l=0,c=null,n.emit("autoplay:timerstopped")}(),a=!1)}function g(){if(y())return d=a,m();d&&p()}function y(){let{ownerDocument:e}=n.internalEngine();return"hidden"===e.visibilityState}function h(){s||m()}function v(){s||p()}function b(){s=!0,m()}function x(){s=!1,p()}function S(){let{index:e}=n.internalEngine(),r=e.clone().add(1).get(),o=n.scrollSnapList().length-1,i=t.stopOnLastSnap&&r===o;if(n.canScrollNext()?n.scrollNext(f):n.scrollTo(0,f),n.emit("autoplay:select"),i)return m();p()}return{name:"autoplay",options:e,init:function(c,l){n=c;let{mergeOptions:a,optionsAtMedia:s}=l,d=a(r,o.globalOptions);if(t=s(a(d,e)),n.scrollSnapList().length<=1)return;f=t.jump,i=!1,u=function(e,t){let n=e.scrollSnapList();return"number"==typeof t?n.map(()=>t):t(n,e)}(n,t.delay);let{eventStore:y,ownerDocument:S}=n.internalEngine(),E=!!n.internalEngine().options.watchDrag,w=function(e,t){let n=e.rootNode();return t&&t(n)||n}(n,t.rootNode);y.add(S,"visibilitychange",g),E&&n.on("pointerDown",h),E&&!t.stopOnInteraction&&n.on("pointerUp",v),t.stopOnMouseEnter&&y.add(w,"mouseenter",b),t.stopOnMouseEnter&&!t.stopOnInteraction&&y.add(w,"mouseleave",x),t.stopOnFocusIn&&n.on("slideFocusStart",m),t.stopOnFocusIn&&!t.stopOnInteraction&&y.add(n.containerNode(),"focusout",p),t.playOnInit&&p()},destroy:function(){n.off("pointerDown",h).off("pointerUp",v).off("slideFocusStart",m),m(),i=!0,a=!1},play:function(e){void 0!==e&&(f=e),p()},stop:function(){a&&m()},reset:function(){a&&p()},isPlaying:function(){return a},timeUntilNext:function(){return c?u[n.selectedScrollSnap()]-(new Date().getTime()-c):null}}}o.globalOptions=void 0},5193:(e,t,n)=>{n.d(t,{A:()=>D});var r=n(6540);function o(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function i(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let r=e[n],u=t[n];return"function"==typeof r?`${r}`==`${u}`:o(r)&&o(u)?i(r,u):r===u})}function u(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function c(e){return"number"==typeof e}function l(e){return"string"==typeof e}function a(e){return"boolean"==typeof e}function s(e){return"[object Object]"===Object.prototype.toString.call(e)}function d(e){return Math.abs(e)}function f(e){return Math.sign(e)}function p(e){return h(e).map(Number)}function m(e){return e[g(e)]}function g(e){return Math.max(0,e.length-1)}function y(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function h(e){return Object.keys(e)}function v(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function b(){let e=[],t={add:function(n,r,o,i={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,o,i),u=()=>n.removeEventListener(r,o,i)):(n.addListener(o),u=()=>n.removeListener(o)),e.push(u),t},clear:function(){e=e.filter(e=>e())}};return t}function x(e=0,t=0){let n=d(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function S(e){let t=e;function n(e){return c(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function E(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},r=t.style,o=null,i=!1;return{clear:function(){i||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){if(i)return;let u=Math.round(100*e.direction(t))/100;u!==o&&(r.transform=n(u),o=u)},toggleActive:function(e){i=!e}}}let w={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function O(e,t,n){let r,o,i,u,D;let T=e.ownerDocument,k=T.defaultView,A=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(h(n).forEach(r=>{let o=t[r],i=n[r],u=s(o)&&s(i);t[r]=u?e(o,i):i}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let r=n.breakpoints||{},o=h(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{});return t(n,o)},optionsMediaQueries:function(t){return t.map(e=>h(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(k),L=(D=[],{init:function(e,t){return(D=t.filter(({options:e})=>!1!==A.optionsAtMedia(e).active)).forEach(t=>t.init(e,A)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){D=D.filter(e=>e.destroy())}}),I=b(),C=function(){let e,t={},n={init:function(t){e=t},emit:function(r){return(t[r]||[]).forEach(t=>t(e,r)),n},off:function(e,r){return t[e]=(t[e]||[]).filter(e=>e!==r),n},on:function(e,r){return t[e]=(t[e]||[]).concat([r]),n},clear:function(){t={}}};return n}(),{mergeOptions:N,optionsAtMedia:j,optionsMediaQueries:F}=A,{on:M,off:_,emit:R}=C,P=!1,V=N(w,O.globalOptions),H=N(V),B=[];function z(t,n){!P&&(H=j(V=N(V,t)),B=n||B,function(){let{container:t,slides:n}=H;i=(l(t)?e.querySelector(t):t)||e.children[0];let r=l(n)?i.querySelectorAll(n):n;u=[].slice.call(r||i.children)}(),r=function t(n){let r=function(e,t,n,r,o,i,u){let s,w;let{align:O,axis:D,direction:T,startIndex:k,loop:A,duration:L,dragFree:I,dragThreshold:C,inViewThreshold:N,slidesToScroll:j,skipSnaps:F,containScroll:M,watchResize:_,watchSlides:R,watchDrag:P,watchFocus:V}=i,H={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:o}=e;return{top:t,right:n+r,bottom:t+o,left:n,width:r,height:o}}},B=H.measure(t),z=n.map(H.measure),U=function(e,t){let n="rtl"===t,r="y"===e,o=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(e){let{height:t,width:n}=e;return r?t:n},direction:function(e){return e*o}}}(D,T),q=U.measureSize(B),W={measure:function(e){return e/100*q}},$=function(e,t){let n={start:function(){return 0},center:function(e){return(t-e)/2},end:function(e){return t-e}};return{measure:function(r,o){return l(e)?n[e](r):e(t,r,o)}}}(O,q),X=!A&&!!M,{slideSizes:Y,slideSizesWithGaps:J,startGap:Q,endGap:Z}=function(e,t,n,r,o,i){let{measureSize:u,startEdge:c,endEdge:l}=e,a=n[0]&&o,s=function(){if(!a)return 0;let e=n[0];return d(t[c]-e[c])}(),f=a?parseFloat(i.getComputedStyle(m(r)).getPropertyValue(`margin-${l}`)):0,p=n.map(u),y=n.map((e,t,n)=>{let r=t===g(n);return t?r?p[t]+f:n[t+1][c]-e[c]:p[t]+s}).map(d);return{slideSizes:p,slideSizesWithGaps:y,startGap:s,endGap:f}}(U,B,z,n,A||!!M,o),G=function(e,t,n,r,o,i,u,l,a){let{startEdge:s,endEdge:f,direction:y}=e,h=c(n);return{groupSlides:function(e){return h?p(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?p(e).reduce((n,c,a)=>{let p=m(n)||0,h=c===g(e),v=o[s]-i[p][s],b=o[s]-i[c][f],x=r||0!==p?0:y(u),S=d(b-(!r&&h?y(l):0)-(v+x));return a&&S>t+2&&n.push(c),h&&n.push(e.length),n},[]).map((t,n,r)=>{let o=Math.max(r[n-1]||0);return e.slice(o,t)}):[]}}}(U,q,j,A,B,z,Q,Z,0),{snaps:K,snapsAligned:ee}=function(e,t,n,r,o){let{startEdge:i,endEdge:u}=e,{groupSlides:c}=o,l=c(r).map(e=>m(e)[u]-e[0][i]).map(d).map(t.measure),a=r.map(e=>n[i]-e[i]).map(e=>-d(e)),s=c(a).map(e=>e[0]).map((e,t)=>e+l[t]);return{snaps:a,snapsAligned:s}}(U,$,B,z,G),et=-m(K)+m(J),{snapsContained:en,scrollContainLimit:er}=function(e,t,n,r,o){let i=x(-t+e,0),u=n.map((e,t)=>{let{min:r,max:o}=i,u=i.constrain(e),c=t===g(n);return t?c||1>=d(r-u)?r:1>=d(o-u)?o:u:o}).map(e=>parseFloat(e.toFixed(3))),c=function(){let e=u[0],t=m(u);return x(u.lastIndexOf(e),u.indexOf(t)+1)}();return{snapsContained:function(){if(t<=e+2)return[i.max];if("keepSnaps"===r)return u;let{min:n,max:o}=c;return u.slice(n,o)}(),scrollContainLimit:c}}(q,et,ee,M,0),eo=X?en:ee,{limit:ei}=function(e,t,n){let r=t[0];return{limit:x(n?r-e:m(t),r)}}(et,eo,A),eu=function e(t,n,r){let{constrain:o}=x(0,t),i=t+1,u=c(n);function c(e){return r?d((i+e)%i):o(e)}function l(){return e(t,u,r)}let a={get:function(){return u},set:function(e){return u=c(e),a},add:function(e){return l().set(u+e)},clone:l};return a}(g(eo),k,A),ec=eu.clone(),el=p(n),ea=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},es=({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:o,scrollLooper:i,slideLooper:u,dragHandler:c,animation:l,eventHandler:a,scrollBounds:s,options:{loop:d}},f)=>{let p=e.settled(),m=!s.shouldConstrain(),g=d?p:p&&m;g&&!c.pointerDown()&&(l.stop(),a.emit("settle")),g||a.emit("scroll");let y=n.get()*f+o.get()*(1-f);r.set(y),d&&(i.loop(e.direction()),u.loop()),t.to(r.get())},ed=function(e,t,n,r){let o=b(),i=1e3/60,u=null,c=0,l=0;function a(e){if(!l)return;u||(u=e,n(),n());let o=e-u;for(u=e,c+=o;c>=i;)n(),c-=i;r(c/i),l&&(l=t.requestAnimationFrame(a))}function s(){t.cancelAnimationFrame(l),u=null,c=0,l=0}return{init:function(){o.add(e,"visibilitychange",()=>{e.hidden&&(u=null,c=0)})},destroy:function(){s(),o.clear()},start:function(){l||(l=t.requestAnimationFrame(a))},stop:s,update:n,render:r}}(r,o,()=>ea(eD),e=>es(eD,e)),ef=eo[eu.get()],ep=S(ef),em=S(ef),eg=S(ef),ey=S(ef),eh=function(e,t,n,r,o,i){let u=0,c=0,l=o,a=.68,s=e.get(),p=0;function m(e){return l=e,y}function g(e){return a=e,y}let y={direction:function(){return c},duration:function(){return l},velocity:function(){return u},seek:function(){let t=r.get()-e.get(),o=0;return l?(n.set(e),u+=t/l,u*=a,s+=u,e.add(u),o=s-p):(u=0,n.set(r),e.set(r),o=t),c=f(o),p=s,y},settled:function(){return .001>d(r.get()-t.get())},useBaseFriction:function(){return g(.68)},useBaseDuration:function(){return m(o)},useFriction:g,useDuration:m};return y}(ep,eg,em,ey,L,0),ev=function(e,t,n,r,o){let{reachedAny:i,removeOffset:u,constrain:c}=r;function l(e){return e.concat().sort((e,t)=>d(e)-d(t))[0]}function a(t,r){let o=[t,t+n,t-n];if(!e)return t;if(!r)return l(o);let i=o.filter(e=>f(e)===r);return i.length?l(i):m(o)-n}return{byDistance:function(n,r){let l=o.get()+n,{index:s,distance:f}=function(n){let r=e?u(n):c(n),{index:o}=t.map((e,t)=>({diff:a(e-r,0),index:t})).sort((e,t)=>d(e.diff)-d(t.diff))[0];return{index:o,distance:r}}(l),p=!e&&i(l);if(!r||p)return{index:s,distance:n};let m=n+a(t[s]-f,0);return{index:s,distance:m}},byIndex:function(e,n){let r=a(t[e]-o.get(),n);return{index:e,distance:r}},shortcut:a}}(A,eo,et,ei,ey),eb=function(e,t,n,r,o,i,u){function c(o){let c=o.distance,l=o.index!==t.get();i.add(c),c&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),l&&(n.set(t.get()),t.set(o.index),u.emit("select"))}return{distance:function(e,t){c(o.byDistance(e,t))},index:function(e,n){let r=t.clone().set(e);c(o.byIndex(r.get(),n))}}}(ed,eu,ec,eh,ev,ey,u),ex=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(ei),eS=b(),eE=function(e,t,n,r){let o;let i={},u=null,c=null,l=!1;return{init:function(){o=new IntersectionObserver(e=>{l||(e.forEach(e=>{i[t.indexOf(e.target)]=e}),u=null,c=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:r}),t.forEach(e=>o.observe(e))},destroy:function(){o&&o.disconnect(),l=!0},get:function(e=!0){if(e&&u)return u;if(!e&&c)return c;let t=h(i).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:o}=i[r];return(e&&o||!e&&!o)&&t.push(r),t},[]);return e&&(u=t),e||(c=t),t}}}(t,n,u,N),{slideRegistry:ew}=function(e,t,n,r,o,i){let{groupSlides:u}=o,{min:c,max:l}=r;return{slideRegistry:function(){let r=u(i);return 1===n.length?[i]:e&&"keepSnaps"!==t?r.slice(c,l).map((e,t,n)=>{let r=t===g(n);return t?r?y(g(i)-m(n)[0]+1,m(n)[0]):e:y(m(n[0])+1)}):r}()}}(X,M,eo,er,G,el),eO=function(e,t,n,r,o,i,u,l){let s={passive:!0,capture:!0},d=0;function f(e){"Tab"===e.code&&(d=new Date().getTime())}return{init:function(p){l&&(i.add(document,"keydown",f,!1),t.forEach((t,f)=>{i.add(t,"focus",t=>{(a(l)||l(p,t))&&function(t){if(new Date().getTime()-d>10)return;u.emit("slideFocusStart"),e.scrollLeft=0;let i=n.findIndex(e=>e.includes(t));c(i)&&(o.useDuration(0),r.index(i,0),u.emit("slideFocus"))}(f)},s)}))}}}(e,n,ew,eb,eh,eS,u,V),eD={ownerDocument:r,ownerWindow:o,eventHandler:u,containerRect:B,slideRects:z,animation:ed,axis:U,dragHandler:function(e,t,n,r,o,i,u,c,l,s,p,m,g,y,h,S,E,w,O){let{cross:D,direction:T}=e,k=["INPUT","SELECT","TEXTAREA"],A={passive:!1},L=b(),I=b(),C=x(50,225).constrain(y.measure(20)),N={mouse:300,touch:400},j={mouse:500,touch:600},F=h?43:25,M=!1,_=0,R=0,P=!1,V=!1,H=!1,B=!1;function z(e){if(!v(e,r)&&e.touches.length>=2)return U(e);let t=i.readPoint(e),n=i.readPoint(e,D),u=d(t-_),l=d(n-R);if(!V&&!B&&(!e.cancelable||!(V=u>l)))return U(e);let a=i.pointerMove(e);u>S&&(H=!0),s.useFriction(.3).useDuration(.75),c.start(),o.add(T(a)),e.preventDefault()}function U(e){let t=p.byDistance(0,!1).index!==m.get(),n=i.pointerUp(e)*(h?j:N)[B?"mouse":"touch"],r=function(e,t){let n=m.add(-1*f(e)),r=p.byDistance(e,!h).distance;return h||d(e)<C?r:E&&t?.5*r:p.byIndex(n.get(),0).distance}(T(n),t),o=function(e,t){var n,r;if(0===e||0===t||d(e)<=d(t))return 0;let o=(n=d(e),r=d(t),d(n-r));return d(o/e)}(n,r);V=!1,P=!1,I.clear(),s.useDuration(F-10*o).useFriction(.68+o/50),l.distance(r,!h),B=!1,g.emit("pointerUp")}function q(e){H&&(e.stopPropagation(),e.preventDefault(),H=!1)}return{init:function(e){O&&L.add(t,"dragstart",e=>e.preventDefault(),A).add(t,"touchmove",()=>void 0,A).add(t,"touchend",()=>void 0).add(t,"touchstart",c).add(t,"mousedown",c).add(t,"touchcancel",U).add(t,"contextmenu",U).add(t,"click",q,!0);function c(c){(a(O)||O(e,c))&&function(e){let c=v(e,r);B=c,H=h&&c&&!e.buttons&&M,M=d(o.get()-u.get())>=2,c&&0!==e.button||function(e){let t=e.nodeName||"";return k.includes(t)}(e.target)||(P=!0,i.pointerDown(e),s.useFriction(0).useDuration(0),o.set(u),function(){let e=B?n:t;I.add(e,"touchmove",z,A).add(e,"touchend",U).add(e,"mousemove",z,A).add(e,"mouseup",U)}(),_=i.readPoint(e),R=i.readPoint(e,D),g.emit("pointerDown"))}(c)}},destroy:function(){L.clear(),I.clear()},pointerDown:function(){return P}}}(U,e,r,o,ey,function(e,t){let n,r;function o(e){return e.timeStamp}function i(n,r){let o=r||e.scroll,i=`client${"x"===o?"X":"Y"}`;return(v(n,t)?n:n.touches[0])[i]}return{pointerDown:function(e){return n=e,r=e,i(e)},pointerMove:function(e){let t=i(e)-i(r),u=o(e)-o(n)>170;return r=e,u&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=i(r)-i(n),u=o(e)-o(n),c=o(e)-o(r)>170,l=t/u;return u&&!c&&d(l)>.1?l:0},readPoint:i}}(U,o),ep,ed,eb,eh,ev,eu,u,W,I,C,F,0,P),eventStore:eS,percentOfView:W,index:eu,indexPrevious:ec,limit:ei,location:ep,offsetLocation:eg,previousLocation:em,options:i,resizeHandler:function(e,t,n,r,o,i,u){let c,l;let s=[e].concat(r),f=[],p=!1;function m(e){return o.measureSize(u.measure(e))}return{init:function(o){i&&(l=m(e),f=r.map(m),c=new ResizeObserver(n=>{(a(i)||i(o,n))&&function(n){for(let i of n){if(p)return;let n=i.target===e,u=r.indexOf(i.target),c=n?l:f[u];if(d(m(n?e:r[u])-c)>=.5){o.reInit(),t.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{s.forEach(e=>c.observe(e))}))},destroy:function(){p=!0,c&&c.disconnect()}}}(t,u,o,n,U,_,H),scrollBody:eh,scrollBounds:function(e,t,n,r,o){let i=o.measure(10),u=o.measure(50),c=x(.1,.99),l=!1;function a(){return!!(!l&&e.reachedAny(n.get())&&e.reachedAny(t.get()))}return{shouldConstrain:a,constrain:function(o){if(!a())return;let l=e.reachedMin(t.get())?"min":"max",s=d(e[l]-t.get()),f=n.get()-t.get(),p=c.constrain(s/u);n.subtract(f*p),!o&&d(f)<i&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){l=!e}}}(ei,eg,ey,eh,W),scrollLooper:function(e,t,n,r){let{reachedMin:o,reachedMax:i}=x(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?i(n.get()):-1===t&&o(n.get())))return;let u=-1*t*e;r.forEach(e=>e.add(u))}}}(et,ei,eg,[ep,eg,em,ey]),scrollProgress:ex,scrollSnapList:eo.map(ex.get),scrollSnaps:eo,scrollTarget:ev,scrollTo:eb,slideLooper:function(e,t,n,r,o,i,u,c,l){let a=p(o),s=m(f(p(o).reverse(),u[0]),n,!1).concat(m(f(a,t-u[0]-1),-n,!0));function d(e,t){return e.reduce((e,t)=>e-o[t],t)}function f(e,t){return e.reduce((e,n)=>d(e,t)>0?e.concat([n]):e,[])}function m(o,u,a){let s=i.map((e,n)=>({start:e-r[n]+.5+u,end:e+t-.5+u}));return o.map(t=>{let r=a?0:-n,o=a?n:0,i=s[t][a?"end":"start"];return{index:t,loopPoint:i,slideLocation:S(-1),translate:E(e,l[t]),target:()=>c.get()>i?r:o}})}return{canLoop:function(){return s.every(({index:e})=>.1>=d(a.filter(t=>t!==e),t))},clear:function(){s.forEach(e=>e.translate.clear())},loop:function(){s.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,o=t();o!==r.get()&&(n.to(o),r.set(o))})},loopPoints:s}}(U,q,et,Y,J,K,eo,eg,n),slideFocus:eO,slidesHandler:(w=!1,{init:function(e){R&&(s=new MutationObserver(t=>{!w&&(a(R)||R(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),u.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){s&&s.disconnect(),w=!0}}),slidesInView:eE,slideIndexes:el,slideRegistry:ew,slidesToScroll:G,target:ey,translate:E(U,t)};return eD}(e,i,u,T,k,n,C);return n.loop&&!r.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):r}(H),F([V,...B.map(({options:e})=>e)]).forEach(e=>I.add(e,"change",U)),H.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(X),r.eventHandler.init(X),r.resizeHandler.init(X),r.slidesHandler.init(X),r.options.loop&&r.slideLooper.loop(),i.offsetParent&&u.length&&r.dragHandler.init(X),o=L.init(X,B)))}function U(e,t){let n=$();q(),z(N({startIndex:n},e),t),C.emit("reInit")}function q(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),L.destroy(),I.clear()}function W(e,t,n){H.active&&!P&&(r.scrollBody.useBaseFriction().useDuration(!0===t?0:H.duration),r.scrollTo.index(e,n||0))}function $(){return r.index.get()}let X={canScrollNext:function(){return r.index.add(1).get()!==$()},canScrollPrev:function(){return r.index.add(-1).get()!==$()},containerNode:function(){return i},internalEngine:function(){return r},destroy:function(){P||(P=!0,I.clear(),q(),C.emit("destroy"),C.clear())},off:_,on:M,emit:R,plugins:function(){return o},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:U,rootNode:function(){return e},scrollNext:function(e){W(r.index.add(1).get(),e,-1)},scrollPrev:function(e){W(r.index.add(-1).get(),e,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:W,selectedScrollSnap:$,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return z(t,n),setTimeout(()=>C.emit("init"),0),X}function D(e={},t=[]){let n=(0,r.useRef)(e),o=(0,r.useRef)(t),[c,l]=(0,r.useState)(),[a,s]=(0,r.useState)(),d=(0,r.useCallback)(()=>{c&&c.reInit(n.current,o.current)},[c]);return(0,r.useEffect)(()=>{i(n.current,e)||(n.current=e,d())},[e,d]),(0,r.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=u(e),r=u(t);return n.every((e,t)=>i(e,r[t]))}(o.current,t)&&(o.current=t,d())},[t,d]),(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&a){O.globalOptions=D.globalOptions;let e=O(a,n.current,o.current);return l(e),()=>e.destroy()}l(void 0)},[a,l]),[s,c]}O.globalOptions=void 0,D.globalOptions=void 0},9138:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(9079).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},7157:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(9079).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])}}]);