var E,c,B,z,P,G,X,J,U={},K=[],xe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x(e,t){for(var _ in t)e[_]=t[_];return e}function Q(e){var t=e.parentNode;t&&t.removeChild(e)}function N(e,t,_){var r,i,n,l={};for(n in t)n=="key"?r=t[n]:n=="ref"?i=t[n]:l[n]=t[n];if(arguments.length>2&&(l.children=arguments.length>3?E.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)l[n]===void 0&&(l[n]=e.defaultProps[n]);return S(e,l,r,i,null)}function S(e,t,_,r,i){var n={type:e,props:t,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++B:i};return i==null&&c.vnode!=null&&c.vnode(n),n}function Ce(){return{current:null}}function w(e){return e.children}function A(e,t){this.props=e,this.context=t}function $(e,t){if(t==null)return e.__?$(e.__,e.__.__k.indexOf(e)+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?$(e):null}function Y(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return Y(e)}}function R(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!D.__r++||X!==c.debounceRendering)&&((X=c.debounceRendering)||G)(D)}function D(){for(var e;D.__r=P.length;)e=P.sort(function(t,_){return t.__v.__b-_.__v.__b}),P=[],e.some(function(t){var _,r,i,n,l,a;t.__d&&(l=(n=(_=t).__v).__e,(a=_.__P)&&(r=[],(i=x({},n)).__v=n.__v+1,L(a,n,i,_.__n,a.ownerSVGElement!==void 0,n.__h!=null?[l]:null,r,l==null?$(n):l,n.__h),ie(r,n),n.__e!=l&&Y(n)))})}function Z(e,t,_,r,i,n,l,a,p,d){var o,h,f,u,s,C,v,y=r&&r.__k||K,b=y.length;for(_.__k=[],o=0;o<t.length;o++)if((u=_.__k[o]=(u=t[o])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?S(null,u,null,null,u):Array.isArray(u)?S(w,{children:u},null,null,null):u.__b>0?S(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=_,u.__b=_.__b+1,(f=y[o])===null||f&&u.key==f.key&&u.type===f.type)y[o]=void 0;else for(h=0;h<b;h++){if((f=y[h])&&u.key==f.key&&u.type===f.type){y[h]=void 0;break}f=null}L(e,u,f=f||U,i,n,l,a,p,d),s=u.__e,(h=u.ref)&&f.ref!=h&&(v||(v=[]),f.ref&&v.push(f.ref,null,u),v.push(h,u.__c||s,u)),s!=null?(C==null&&(C=s),typeof u.type=="function"&&u.__k===f.__k?u.__d=p=ee(u,p,e):p=_e(e,u,f,y,s,p),typeof _.type=="function"&&(_.__d=p)):p&&f.__e==p&&p.parentNode!=e&&(p=$(f))}for(_.__e=C,o=b;o--;)y[o]!=null&&(typeof _.type=="function"&&y[o].__e!=null&&y[o].__e==_.__d&&(_.__d=$(r,o+1)),ue(y[o],y[o]));if(v)for(o=0;o<v.length;o++)le(v[o],v[++o],v[++o])}function ee(e,t,_){for(var r,i=e.__k,n=0;i&&n<i.length;n++)(r=i[n])&&(r.__=e,t=typeof r.type=="function"?ee(r,t,_):_e(_,r,r,i,r.__e,t));return t}function te(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(_){te(_,t)}):t.push(e)),t}function _e(e,t,_,r,i,n){var l,a,p;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(_==null||i!=n||i.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(i),l=null;else{for(a=n,p=0;(a=a.nextSibling)&&p<r.length;p+=2)if(a==i)break e;e.insertBefore(i,n),l=n}return l!==void 0?l:i.nextSibling}function $e(e,t,_,r,i){var n;for(n in _)n==="children"||n==="key"||n in t||F(e,n,null,_[n],r);for(n in t)i&&typeof t[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||_[n]===t[n]||F(e,n,t[n],_[n],r)}function ne(e,t,_){t[0]==="-"?e.setProperty(t,_):e[t]=_==null?"":typeof _!="number"||xe.test(t)?_:_+"px"}function F(e,t,_,r,i){var n;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)_&&t in _||ne(e.style,t,"");if(_)for(t in _)r&&_[t]===r[t]||ne(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")n=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=_,_?r||e.addEventListener(t,n?oe:re,n):e.removeEventListener(t,n?oe:re,n);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=_==null?"":_;break e}catch{}typeof _=="function"||(_!=null&&(_!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,_):e.removeAttribute(t))}}function re(e){this.l[e.type+!1](c.event?c.event(e):e)}function oe(e){this.l[e.type+!0](c.event?c.event(e):e)}function L(e,t,_,r,i,n,l,a,p){var d,o,h,f,u,s,C,v,y,b,H,k=t.type;if(t.constructor!==void 0)return null;_.__h!=null&&(p=_.__h,a=t.__e=_.__e,t.__h=null,n=[a]),(d=c.__b)&&d(t);try{e:if(typeof k=="function"){if(v=t.props,y=(d=k.contextType)&&r[d.__c],b=d?y?y.props.value:d.__:r,_.__c?C=(o=t.__c=_.__c).__=o.__E:("prototype"in k&&k.prototype.render?t.__c=o=new k(v,b):(t.__c=o=new A(v,b),o.constructor=k,o.render=Pe),y&&y.sub(o),o.props=v,o.state||(o.state={}),o.context=b,o.__n=r,h=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),k.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=x({},o.__s)),x(o.__s,k.getDerivedStateFromProps(v,o.__s))),f=o.props,u=o.state,h)k.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,b),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,b)===!1||t.__v===_.__v){o.props=v,o.state=o.__s,t.__v!==_.__v&&(o.__d=!1),o.__v=t,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(T){T&&(T.__=t)}),o.__h.length&&l.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,b),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,u,s)})}o.context=b,o.props=v,o.state=o.__s,(d=c.__r)&&d(t),o.__d=!1,o.__v=t,o.__P=e,d=o.render(o.props,o.state,o.context),o.state=o.__s,o.getChildContext!=null&&(r=x(x({},r),o.getChildContext())),h||o.getSnapshotBeforeUpdate==null||(s=o.getSnapshotBeforeUpdate(f,u)),H=d!=null&&d.type===w&&d.key==null?d.props.children:d,Z(e,Array.isArray(H)?H:[H],t,_,r,i,n,l,a,p),o.base=t.__e,t.__h=null,o.__h.length&&l.push(o),C&&(o.__E=o.__=null),o.__e=!1}else n==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=Ee(_.__e,t,_,r,i,n,l,p);(d=c.diffed)&&d(t)}catch(T){t.__v=null,(p||n!=null)&&(t.__e=a,t.__h=!!p,n[n.indexOf(a)]=null),c.__e(T,t,_)}}function ie(e,t){c.__c&&c.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(r){r.call(_)})}catch(r){c.__e(r,_.__v)}})}function Ee(e,t,_,r,i,n,l,a){var p,d,o,h=_.props,f=t.props,u=t.type,s=0;if(u==="svg"&&(i=!0),n!=null){for(;s<n.length;s++)if((p=n[s])&&"setAttribute"in p==!!u&&(u?p.localName===u:p.nodeType===3)){e=p,n[s]=null;break}}if(e==null){if(u===null)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,f.is&&f),n=null,a=!1}if(u===null)h===f||a&&e.data===f||(e.data=f);else{if(n=n&&E.call(e.childNodes),d=(h=_.props||U).dangerouslySetInnerHTML,o=f.dangerouslySetInnerHTML,!a){if(n!=null)for(h={},s=0;s<e.attributes.length;s++)h[e.attributes[s].name]=e.attributes[s].value;(o||d)&&(o&&(d&&o.__html==d.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if($e(e,f,h,i,a),o)t.__k=[];else if(s=t.props.children,Z(e,Array.isArray(s)?s:[s],t,_,r,i&&u!=="foreignObject",n,l,n?n[0]:_.__k&&$(_,0),a),n!=null)for(s=n.length;s--;)n[s]!=null&&Q(n[s]);a||("value"in f&&(s=f.value)!==void 0&&(s!==h.value||s!==e.value||u==="progress"&&!s)&&F(e,"value",s,h.value,!1),"checked"in f&&(s=f.checked)!==void 0&&s!==e.checked&&F(e,"checked",s,h.checked,!1))}return e}function le(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(r){c.__e(r,_)}}function ue(e,t,_){var r,i;if(c.unmount&&c.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||le(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){c.__e(n,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&ue(r[i],t,typeof e.type!="function");_||e.__e==null||Q(e.__e),e.__e=e.__d=void 0}function Pe(e,t,_){return this.constructor(e,_)}function ce(e,t,_){var r,i,n;c.__&&c.__(e,t),i=(r=typeof _=="function")?null:_&&_.__k||t.__k,n=[],L(t,e=(!r&&_||t).__k=N(w,null,[e]),i||U,U,t.ownerSVGElement!==void 0,!r&&_?[_]:i?null:t.firstChild?E.call(t.childNodes):null,n,!r&&_?_:i?i.__e:t.firstChild,r),ie(n,e)}function fe(e,t){ce(e,t,fe)}function Se(e,t,_){var r,i,n,l=x({},e.props);for(n in t)n=="key"?r=t[n]:n=="ref"?i=t[n]:l[n]=t[n];return arguments.length>2&&(l.children=arguments.length>3?E.call(arguments,2):_),S(e.type,l,r||e.key,i||e.ref,null)}function we(e,t){var _={__c:t="__cC"+J++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,n;return this.getChildContext||(i=[],(n={})[t]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(R)},this.sub=function(l){i.push(l);var a=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),a&&a.call(l)}}),r.children}};return _.Provider.__=_.Consumer.contextType=_}E=K.slice,c={__e:function(e,t){for(var _,r,i;t=t.__;)if((_=t.__c)&&!_.__)try{if((r=_.constructor)&&r.getDerivedStateFromError!=null&&(_.setState(r.getDerivedStateFromError(e)),i=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(e),i=_.__d),i)return _.__E=_}catch(n){e=n}throw e}},B=0,z=function(e){return e!=null&&e.constructor===void 0},A.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},_),this.props)),e&&x(_,e),e!=null&&this.__v&&(t&&this.__h.push(t),R(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),R(this))},A.prototype.render=w,P=[],G=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0,J=0;var Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",render:ce,hydrate:fe,createElement:N,h:N,Fragment:w,createRef:Ce,get isValidElement(){return z},Component:A,cloneElement:Se,createContext:we,toChildArray:te,get options(){return c}}),O,g,se,W=0,ae=[],pe=c.__b,de=c.__r,he=c.diffed,ve=c.__c,ye=c.unmount;function me(e,t){c.__h&&c.__h(g,e,W||t),W=0;var _=g.__H||(g.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({}),_.__[e]}function Ie(e){return W=1,He(be,e)}function He(e,t,_){var r=me(O++,2);return r.t=e,r.__c||(r.__=[_?_(t):be(void 0,t),function(i){var n=r.t(r.__[0],i);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=g),r.__}function Be(e,t){var _=me(O++,3);!c.__s&&Ue(_.__H,t)&&(_.__=e,_.__H=t,g.__H.__h.push(_))}function Te(){for(var e;e=ae.shift();)if(e.__P)try{e.__H.__h.forEach(M),e.__H.__h.forEach(V),e.__H.__h=[]}catch(t){e.__H.__h=[],c.__e(t,e.__v)}}c.__b=function(e){g=null,pe&&pe(e)},c.__r=function(e){de&&de(e),O=0;var t=(g=e.__c).__H;t&&(t.__h.forEach(M),t.__h.forEach(V),t.__h=[])},c.diffed=function(e){he&&he(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ae.push(t)!==1&&se===c.requestAnimationFrame||((se=c.requestAnimationFrame)||function(_){var r,i=function(){clearTimeout(n),ge&&cancelAnimationFrame(r),setTimeout(_)},n=setTimeout(i,100);ge&&(r=requestAnimationFrame(i))})(Te)),g=null},c.__c=function(e,t){t.some(function(_){try{_.__h.forEach(M),_.__h=_.__h.filter(function(r){return!r.__||V(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],c.__e(r,_.__v)}}),ve&&ve(e,t)},c.unmount=function(e){ye&&ye(e);var t,_=e.__c;_&&_.__H&&(_.__H.__.forEach(function(r){try{M(r)}catch(i){t=i}}),t&&c.__e(t,_.__v))};var ge=typeof requestAnimationFrame=="function";function M(e){var t=g,_=e.__c;typeof _=="function"&&(e.__c=void 0,_()),g=t}function V(e){var t=g;e.__c=e.__(),g=t}function Ue(e,t){return!e||e.length!==t.length||t.some(function(_,r){return _!==e[r]})}function be(e,t){return typeof t=="function"?t(e):t}var j,De=new Uint8Array(16);function Fe(){if(!j&&(j=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!j))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return j(De)}var Me=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function je(e){return typeof e=="string"&&Me.test(e)}var m=[];for(var q=0;q<256;++q)m.push((q+256).toString(16).substr(1));function Ne(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,_=(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase();if(!je(_))throw TypeError("Stringified UUID is invalid");return _}function ze(e,t,_){e=e||{};var r=e.random||(e.rng||Fe)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){_=_||0;for(var i=0;i<16;++i)t[_+i]=r[i];return t}return Ne(r)}function Re(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(_){var r=Object.getOwnPropertyDescriptor(e,_);Object.defineProperty(t,_,r.get?r:{enumerable:!0,get:function(){return e[_]}})}),t}var Le=Re(Ae),Oe,We,Ve,I=Le,qe=0;function ke(e,t,_,r,i){var n,l,a={};for(l in t)l=="ref"?n=t[l]:a[l]=t[l];var p={type:e,props:a,key:_,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--qe,__source:r,__self:i};if(typeof e=="function"&&(n=e.defaultProps))for(l in n)a[l]===void 0&&(a[l]=n[l]);return I.options.vnode&&I.options.vnode(p),p}Ve=I.Fragment,We=ke,Oe=ke;export{Ve as F,ce as S,Oe as a,We as j,Ie as l,ze as v,Be as y};
