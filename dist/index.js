"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=i(function(w,u){
var y=require('@stdlib/stats-base-dvariancetk/dist'),x=require('@stdlib/math-base-special-sqrt/dist');function f(e,r,t,a){return x(y(e,r,t,a))}u.exports=f
});var d=i(function(z,n){
var j=require('@stdlib/stats-base-dvariancetk/dist').ndarray,m=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,t,a,p){return m(j(e,r,t,a,p))}n.exports=l
});var c=i(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),_=d();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),s,k=O(E(__dirname,"./native.js"));b(k)?s=g:s=k;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
