//#Framework
function DummyFn(){};
//
function TypeFn(e){return typeof e=="function"};
//




/*
w=window;
d=w.document;
//
(function(x,p,q,j,fe,dn){
	var e=x[p],g=function(){},ap=Array[p],op=Object[p];
	w.Jsonfy=(JSON.stringify||g);
	w.isObj =function(o){return !!o && (o.constructor === Object)};
	w.asObj=function(e,p){var r,o={},f=isObj;if(p){r=e[p];r=f(r)?r:o;e[p]=r}else{r=f(e)?e:o};return r};
	w[j]=Array[j]||function(a){return op.toString.call(a)==="[object Array]"};
	if(!ap[fe]){ap[fe]=function(f,s){'use strict';var i,l,e=this;for (i=0,l=e.length;i<l;++i){if(i in e){f.call(s,e[i],i,e)}}}};
	x[dn]=g;
	if(!e[q]){
	  e[q]=function(k){
		  if(typeof this !== "function"){throw new TypeError(q+":bound not callable")};
			var f=ap.slice.call,a=arguments,m=f(a,1),o=this,t=function(){return o.apply((this instanceof g)&&k?this:k,m.concat(f(a)))};
			g[p]=this[p];t[p]=new g();
			return t;
	  };
	};
	return w;
})(Function,'prototype','bind','isArray','forEach','doNothing').has=function(p){var e=this, o=asObj(e,"hold"), r=!!e[p];if(r){o[p]=1};return r};
*/
/*
//#Time
w.time={
	now:function(){return new Date()},
	stamp:function(k){
		var i=this.now(),a=i.getMinutes(),b=i.getSeconds(),c=i.getMilliseconds(),n=(a+":"+b+"|"+c),o;
		if(k){o={date:(i.getFullYear()+"-"+i.getMonth()+"-"+i.getUTCDate()),hms:(i.getHours()+":"+a+":"+b),ms:c};Object.defineProperty(o,"line",{enumerable:0,value:n})}else{o=n};
		alert(o);
		return o;
	}//,...
};
//
console.timestamp=function(s){console.log(time.stamp(0),s?s:"")};
console.timestamp();
//
*/




//#FixConsole
(function(o,p){if(!o[p]){o[p]={};['log','info','warn','error','assert','dir','clear','profile','profileEnd'].forEach(function(i){o[p][i]=DummyFn})}})(window,'console');

//#FixFunctionNameProperty
(function Fix(o,p){if(!DummyFn[p]){o(Function.prototype,p,{get:function(){var e=this,s=e.toString().match(/^\s*function\s*(\w*)\s*\(/)[1];o(this,p,{value:s});return s},enumerable:1})}})(Object.defineProperty,'name');

//#domReady
(function(w,k,alias){
	var g,s=0,d=w.document,e=d.addEventListener,c=e?'DOMContentLoaded':'onreadystatechange';// DOMContentLoaded ~ addEventListener || onreadystatechange ~ attachEvent
	e=e?e:d.attachEvent;
	if(e){s=e.name;g=function(x){d[s](c,x,0)}}else{g=function(x){var p="onload",f=w[p];w[p]=function(){x();if(TypeFn(f)){f()}}}};
	w[k]=function(f){if(TypeFn(f)){if(/in/.test(d.readyState)){g(f)}else{f()}}};
	w[alias]=s;
})(window,'domReady','addEventMethod');
/*
console.log(addEventMethod);
*/



window.onload=function(){alert('loaded')};
function zz(x){alert("pageloaded readystate_counts?")};
domReady(zz);










//console.log(c,method.name);
//if(tf(x)){}
//,tf=function(o){return typeof o=="function"}
/*
//time.stamp()
*/
