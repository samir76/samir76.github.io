(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{4709:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let r=i(7677),o=i(544),s=i(4848),n=o._(i(6540)),l=r._(i(961)),a=r._(i(3248)),u=i(3297),d=i(3436),c=i(2454);i(4636);let f=i(4671),g=r._(i(701)),p=i(4293),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,i,r,o,s,n){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function v(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,n.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:o,height:l,width:a,decoding:u,className:d,style:c,fetchPriority:f,placeholder:g,loading:m,unoptimized:b,fill:w,onLoadRef:y,onLoadingCompleteRef:S,setBlurComplete:_,setShowAltText:x,sizesInput:j,onLoad:C,onError:z,...P}=e,E=(0,n.useCallback)(e=>{e&&(z&&(e.src=e.src),e.complete&&h(e,g,y,S,_,b,j))},[i,g,y,S,_,z,b,j]),M=(0,p.useMergedRef)(t,E);return(0,s.jsx)("img",{...P,...v(f),loading:m,width:a,height:l,decoding:u,"data-nimg":w?"fill":"1",className:d,style:c,sizes:o,srcSet:r,src:i,ref:M,onLoad:e=>{h(e.currentTarget,g,y,S,_,b,j)},onError:e=>{x(!0),"empty"!==g&&_(!0),z&&z(e)}})});function w(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...v(i.fetchPriority)};return t&&l.default.preload?(l.default.preload(i.src,r),null):(0,s.jsx)(a.default,{children:(0,s.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let y=(0,n.forwardRef)((e,t)=>{let i=(0,n.useContext)(f.RouterContext),r=(0,n.useContext)(c.ImageConfigContext),o=(0,n.useMemo)(()=>{var e;let t=m||r||d.imageConfigDefault,i=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),o=t.deviceSizes.sort((e,t)=>e-t),s=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:i,deviceSizes:o,qualities:s}},[r]),{onLoad:l,onLoadingComplete:a}=e,p=(0,n.useRef)(l);(0,n.useEffect)(()=>{p.current=l},[l]);let h=(0,n.useRef)(a);(0,n.useEffect)(()=>{h.current=a},[a]);let[v,y]=(0,n.useState)(!1),[S,_]=(0,n.useState)(!1),{props:x,meta:j}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:o,blurComplete:v,showAltText:S});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{...x,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:_,sizesInput:e.sizes,ref:t}),j.priority?(0,s.jsx)(w,{isAppRouter:!i,imgAttributes:x}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3297:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),i(4636);let r=i(7688),o=i(3436);function s(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var i,l;let a,u,d,{src:c,sizes:f,unoptimized:g=!1,priority:p=!1,loading:m,className:h,quality:v,width:b,height:w,fill:y=!1,style:S,overrideSrc:_,onLoad:x,onLoadingComplete:j,placeholder:C="empty",blurDataURL:z,fetchPriority:P,decoding:E="async",layout:M,objectFit:O,objectPosition:R,lazyBoundary:I,lazyRoot:k,...N}=e,{imgConf:A,showAltText:D,blurComplete:B,defaultLoader:F}=t,G=A||o.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t),r=null==(i=G.qualities)?void 0:i.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===F)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=N.loader||F;delete N.loader,delete N.srcSet;let W="__next_img_default"in L;if(W){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:i,...r}=t;return e(r)}}if(M){"fill"===M&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(S={...S,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!f&&(f=t)}let q="",T=n(b),U=n(w);if((l=c)&&"object"==typeof l&&(s(l)||void 0!==l.src)){let e=s(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,d=e.blurHeight,z=z||e.blurDataURL,q=e.src,!y){if(T||U){if(T&&!U){let t=T/e.width;U=Math.round(e.height*t)}else if(!T&&U){let t=U/e.height;T=Math.round(e.width*t)}}else T=e.width,U=e.height}}let V=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:q)||c.startsWith("data:")||c.startsWith("blob:"))&&(g=!0,V=!1),a.unoptimized&&(g=!0),W&&!a.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(g=!0);let J=n(v),Y=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:R}:{},D?{}:{color:"transparent"},S),H=B||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:T,heightInt:U,blurWidth:u,blurHeight:d,blurDataURL:z||"",objectFit:Y.objectFit})+'")':'url("'+C+'")',$=H?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},K=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:s,sizes:n,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,n),d=a.length-1;return{sizes:n||"w"!==u?n:"100vw",srcSet:a.map((e,r)=>l({config:t,src:i,quality:s,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:l({config:t,src:i,quality:s,width:a[d]})}}({config:a,src:c,unoptimized:g,width:T,quality:J,sizes:f,loader:L});return{props:{...N,loading:V?"lazy":m,fetchPriority:P,width:T,height:U,decoding:E,className:h,style:{...Y,...$},sizes:K.sizes,srcSet:K.srcSet,src:_||K.src},meta:{unoptimized:g,priority:p,placeholder:C,fill:y}}}},7688:(e,t)=>{"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:s,objectFit:n}=e,l=r?40*r:t,a=o?40*o:i,u=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},1709:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return a},getImageProps:function(){return l}});let r=i(7677),o=i(3297),s=i(4709),n=r._(i(701));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let a=s.Image},701:(e,t)=>{"use strict";function i(e){var t;let{config:i,src:r,width:o,quality:s}=e,n=s||(null==(t=i.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return i.path+"?url="+encodeURIComponent(r)+"&w="+o+"&q="+n+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},9965:(e,t,i)=>{e.exports=i(1709)}}]);