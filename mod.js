// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var a,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,t)||f.call(r,t)?(a=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=a):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var a=t;function l(r,t,e){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(r){var t=function(r){return"/"===r.charAt(0)}(r),e="/"===y(r,-1);return(r=function(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}(p(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function p(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var y="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},b=/./;function v(r){return"boolean"==typeof r}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return d&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var w,m="function"==typeof Symbol?Symbol.toStringTag:"";w=j()?function(r){var t,e,n,o,u;if(null==r)return _.call(r);e=r[m],u=m,t=null!=(o=r)&&g.call(o,u);try{r[m]=void 0}catch(t){return _.call(r)}return n=_.call(r),t?r[m]=e:delete r[m],n}:function(r){return _.call(r)};var h=w,O=Boolean.prototype.toString;var E=j();function S(r){return"object"==typeof r&&(r instanceof Boolean||(E?function(r){try{return O.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function A(r){return v(r)||S(r)}function P(){return new Function("return this;")()}l(A,"isPrimitive",v),l(A,"isObject",S);var k="object"==typeof self?self:null,B="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof T?T:null;var x=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return P()}if(k)return k;if(B)return B;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),V=x.document&&x.document.childNodes,C=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var G,L=/^\s*function\s*([^(]*)/i;l(F,"REGEXP",L),G=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};var M=G;function q(r){return null!==r&&"object"==typeof r}var I=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!M(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(q);function J(r){var t,e,n,o;if(("Object"===(e=h(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=L.exec(n.toString()))return t[1]}return q(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(q,"isObjectLikeArray",I);var R="function"==typeof b||"object"==typeof C||"function"==typeof V?function(r){return J(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?J(r).toLowerCase():t};var U,X,z=Object.getPrototypeOf;X=Object.getPrototypeOf,U="function"===R(X)?z:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D,H=U;function K(r){return null==r?null:(r=Object(r),H(r))}function Q(r,t,e,n){var o,u,i,c,f,a;if(f=r-t,r<=0||f<=0)return NaN;if(1===r||0===n)return 0;for(u=n<0?(1-r)*n:0,o=0,i=0,a=0;a<r;a++)o+=(c=e[u])*c,i+=c,u+=n;return(o-i/r*i)/f}l(Q,"ndarray",(function(r,t,e,n,o){var u,i,c,f,a,l;if(a=r-t,r<=0||a<=0)return NaN;if(1===r||0===n)return 0;for(i=o,u=0,c=0,l=0;l<r;l++)u+=(f=e[i])*f,c+=f,i+=n;return(u-c/r*c)/a}));var W=function(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===h(r))return!0;r=K(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return s(p(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/stats-base-dstdevtk/stats-base-dstdevtk/node_modules/@stdlib/stats-base-dvariancetk/lib","./native.js")),Y=D=W instanceof Error?Q:W;const{ndarray:Z}=D;var $=Math.sqrt;function rr(r,t,e,n){return $(Y(r,t,e,n))}function tr(r,t,e,n,o){return $(Z(r,t,e,n,o))}l(rr,"ndarray",tr);export{rr as default,tr as ndarray};
//# sourceMappingURL=mod.js.map
