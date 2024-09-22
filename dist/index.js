"use strict";var d=function(r,v){return function(){return v||r((v={exports:{}}).exports,v),v.exports}};var p=d(function(A,m){
var s=require('@stdlib/number-float64-base-to-float32/dist');function T(r,v,l,n){var c,e,a,i,u,o,t;if(o=r-v,r<=0||o<=0)return NaN;if(r===1||n===0)return 0;for(n<0?i=(1-r)*n:i=0,a=0,e=0,t=0;t<r;t++)u=l[i],c=s(u-e),e=s(e+s(c/(t+1))),a=s(a+s(c*s(u-e))),i+=n;return s(a/o)}m.exports=T
});var y=d(function(B,w){
var f=require('@stdlib/number-float64-base-to-float32/dist');function _(r,v,l,n,c){var e,a,i,u,o,t,q;if(t=r-v,r<=0||t<=0)return NaN;if(r===1||n===0)return 0;for(u=c,i=0,a=0,q=0;q<r;q++)o=l[u],e=f(o-a),a=f(a+f(e/(q+1))),i=f(i+f(e*f(o-a))),u+=n;return f(i/t)}w.exports=_
});var M=d(function(C,F){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=p(),O=y();E(j,"ndarray",O);F.exports=j
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=M(),x,R=g(b(__dirname,"./native.js"));h(R)?x=k:x=R;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
