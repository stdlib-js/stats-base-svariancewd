"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=d(function(B,p){
var a=require('@stdlib/number-float64-base-to-float32/dist');function E(r,e,u,i,_){var s,t,v,o,q,c,n;if(c=r-e,r<=0||c<=0)return NaN;if(r===1||i===0)return 0;for(o=_,v=0,t=0,n=0;n<r;n++)q=u[o],s=a(q-t),t=a(t+a(s/(n+1))),v=a(v+a(s*a(q-t))),o+=i;return a(v/c)}p.exports=E
});var y=d(function(C,x){
var F=require('@stdlib/strided-base-stride2offset/dist'),M=f();function O(r,e,u,i){return M(r,e,u,i,F(r,i))}x.exports=O
});var j=d(function(D,w){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=y(),b=f();T(m,"ndarray",b);w.exports=m
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),z=j(),l,R=h(g(__dirname,"./native.js"));k(R)?l=z:l=R;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
