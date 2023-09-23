// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).dstdevtk=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function i(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function p(r){return"string"==typeof r}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,b,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===f.call(r.specifier)?f.call(t):u.call(t)}function k(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var i=e-r.length;return i<0?r:r=t?r+k(i):k(i)+r}var S=String.fromCharCode,j=isNaN,_=Array.isArray;function $(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,i,n,o,c,l,u,f;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,u=0;u<r.length;u++)if(p(i=r[u]))c+=i;else{if(e=void 0!==i.precision,!(i=$(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,j(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,j(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!j(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=j(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=E(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),c+=i.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,i,n;for(t=[],n=0,i=T.exec(r);i;)(e=r.slice(n,T.lastIndex-i[0].length)).length&&t.push(e),t.push(A(i)),n=T.lastIndex,i=T.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function I(r){return"string"==typeof r}function C(r){var e,t,i;if(!I(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return V.apply(null,t)}var O,R=Object.prototype,Z=R.toString,P=R.__defineGetter__,L=R.__defineSetter__,N=R.__lookupGetter__,W=R.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(r,e)||W.call(r,e)?(i=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&L&&L.call(r,e,t.set),r};var G=O;function q(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=Object,U=/./;function X(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return M&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var H,K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";H=z()?function(r){var e,t,i,n,a;if(null==r)return D.call(r);t=r[Q],a=Q,e=null!=(n=r)&&J.call(n,a);try{r[Q]=void 0}catch(e){return D.call(r)}return i=D.call(r),e?r[Q]=t:delete r[Q],i}:function(r){return D.call(r)};var Y=H,rr=Boolean,er=Boolean.prototype.toString;var tr=z();function ir(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function nr(r){return X(r)||ir(r)}function ar(r){return"number"==typeof r}function or(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function cr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+or(n):or(n)+r,i&&(r="-"+r)),r}q(nr,"isPrimitive",X),q(nr,"isObject",ir);var sr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase;function lr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!ar(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=cr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=cr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===pr.call(r.specifier)?pr.call(t):sr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ur(r){return"string"==typeof r}var fr=Math.abs,gr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase,hr=String.prototype.replace,wr=/e\+(\d)$/,br=/e-(\d)$/,yr=/^(\d+)$/,vr=/^(\d+)e/,mr=/\.0$/,Er=/\.0*e/,kr=/(\..*[^0])0*e/;function xr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!ar(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":fr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=hr.call(t,kr,"$1e"),t=hr.call(t,Er,"e"),t=hr.call(t,mr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=hr.call(t,wr,"e+0$1"),t=hr.call(t,br,"e-0$1"),r.alternate&&(t=hr.call(t,yr,"$1."),t=hr.call(t,vr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===dr.call(r.specifier)?dr.call(t):gr.call(t)}function Sr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function jr(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Sr(i):Sr(i)+r}var _r=String.fromCharCode,$r=isNaN,Vr=Array.isArray;function Tr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ar(r){var e,t,i,n,a,o,c,s,p;if(!Vr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(ur(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=Tr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,$r(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,$r(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=lr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!$r(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$r(a)?String(i.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=xr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=cr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=jr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Cr(r){var e,t,i,n;for(t=[],n=0,i=Fr.exec(r);i;)(e=r.slice(n,Fr.lastIndex-i[0].length)).length&&t.push(e),t.push(Ir(i)),n=Fr.lastIndex,i=Fr.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Or(r){return"string"==typeof r}function Rr(r){var e,t,i;if(!Or(r))throw new TypeError(Rr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Cr(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Ar.apply(null,t)}function Zr(){return new Function("return this;")()}var Pr="object"==typeof self?self:null,Lr="object"==typeof window?window:null,Nr="object"==typeof global?global:null,Wr="object"==typeof globalThis?globalThis:null;var Gr=function(r){if(arguments.length){if(!X(r))throw new TypeError(Rr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Zr()}if(Wr)return Wr;if(Pr)return Pr;if(Lr)return Lr;if(Nr)return Nr;throw new Error("unexpected error. Unable to resolve global object.")}(),qr=Gr.document&&Gr.document.childNodes,Br=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Xr,Mr=/^\s*function\s*([^(]*)/i;q(Ur,"REGEXP",Mr),Xr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};var zr=Xr;function Dr(r){return"number"==typeof r}function Jr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Hr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+Jr(n):Jr(n)+r,i&&(r="-"+r)),r}var Kr=String.prototype.toLowerCase,Qr=String.prototype.toUpperCase;function Yr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Dr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Hr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=Hr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Qr.call(r.specifier)?Qr.call(t):Kr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function re(r){return"string"==typeof r}var ee=Math.abs,te=String.prototype.toLowerCase,ie=String.prototype.toUpperCase,ne=String.prototype.replace,ae=/e\+(\d)$/,oe=/e-(\d)$/,ce=/^(\d+)$/,se=/^(\d+)e/,pe=/\.0$/,le=/\.0*e/,ue=/(\..*[^0])0*e/;function fe(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Dr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":ee(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=ne.call(t,ue,"$1e"),t=ne.call(t,le,"e"),t=ne.call(t,pe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ne.call(t,ae,"e+0$1"),t=ne.call(t,oe,"e-0$1"),r.alternate&&(t=ne.call(t,ce,"$1."),t=ne.call(t,se,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ie.call(r.specifier)?ie.call(t):te.call(t)}function ge(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function de(r,e,t){var i=e-r.length;return i<0?r:r=t?r+ge(i):ge(i)+r}var he=String.fromCharCode,we=isNaN,be=Array.isArray;function ye(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ve(r){var e,t,i,n,a,o,c,s,p;if(!be(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(re(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=ye(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,we(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,we(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Yr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!we(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=we(a)?String(i.arg):he(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=fe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Hr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=de(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ee(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function ke(r){var e,t,i,n;for(t=[],n=0,i=me.exec(r);i;)(e=r.slice(n,me.lastIndex-i[0].length)).length&&t.push(e),t.push(Ee(i)),n=me.lastIndex,i=me.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function xe(r){return"string"==typeof r}function Se(r){var e,t,i;if(!xe(r))throw new TypeError(Se("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=ke(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return ve.apply(null,t)}function je(r){return null!==r&&"object"==typeof r}var _e=function(r){if("function"!=typeof r)throw new TypeError(Se("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!zr(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(je);function $e(r){var e,t,i,n;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=Mr.exec(i.toString()))return e[1]}return je(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}q(je,"isObjectLikeArray",_e);var Ve="function"==typeof U||"object"==typeof Br||"function"==typeof qr?function(r){return $e(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?$e(r).toLowerCase():e};var Te,Ae,Fe=Object.getPrototypeOf;Ae=Object.getPrototypeOf,Te="function"===Ve(Ae)?Fe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ie=Te;function Ce(r){return null==r?null:(r=B(r),Ie(r))}function Oe(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Y(r))return!0;r=Ce(r)}return!1}function Re(r,e,t,i){var n,a,o,c,s,p;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===i)return 0;for(a=i<0?(1-r)*i:0,n=0,o=0,p=0;p<r;p++)n+=(c=t[a])*c,o+=c,a+=i;return(n-o/r*o)/s}q(Re,"ndarray",(function(r,e,t,i,n){var a,o,c,s,p,l;if(p=r-e,r<=0||p<=0)return NaN;if(1===r||0===i)return 0;for(o=n,a=0,c=0,l=0;l<r;l++)a+=(s=t[o])*s,c+=s,o+=i;return(a-c/r*c)/p}));var Ze,Pe=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Oe(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),Le=Ze=Oe(Pe)?Re:Pe;const{ndarray:Ne}=Ze;var We=Math.sqrt;function Ge(r,e,t,i){return We(Le(r,e,t,i))}return q(Ge,"ndarray",(function(r,e,t,i,n){return We(Ne(r,e,t,i,n))})),Ge}));
//# sourceMappingURL=index.js.map
