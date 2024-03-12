import{s as S,C as D,i as v,f as u,w as F,k as B,q as b,x as G,F as w,a5 as V,e as L,c as q,b as j,J as I,a6 as z,a7 as O,a8 as J,p as de,t as H,d as K,h as y,a9 as me,L as Q,y as $e,M as U,a as X,g as Y,m as he,aa as ke,ab as Ae,n as se}from"../chunks/scheduler.Cglc-E-6.js";import{S as R,i as T,g as x,b as _,e as ee,t as d,c as k,a as A,m as C,d as E,f as Ce}from"../chunks/index.9iPnfnGV.js";import{g as P,c as N,b as te}from"../chunks/index.BALLBs5G.js";import{n as Ee}from"../chunks/stores.ByXjrq1h.js";import{g as ge,a as pe,b as be,F as Fe,c as Ie,s as De,z as Ne,l as Pe,C as Me,d as Se,S as Ve}from"../chunks/index.DSCnVugL.js";import{I as Le}from"../chunks/input.CyNn_tG7.js";import{e as Z}from"../chunks/each.Dtgx6mEA.js";const qe=n=>({descriptionAttrs:n&4}),le=n=>({descriptionAttrs:n[2]}),je=n=>({descriptionAttrs:n&4}),re=n=>({descriptionAttrs:n[2]});function ze(n){let e,l;const t=n[9].default,s=V(t,n,n[8],le);let r=[n[2]],a={};for(let i=0;i<r.length;i+=1)a=b(a,r[i]);return{c(){e=L("div"),s&&s.c(),this.h()},l(i){e=q(i,"DIV",{});var o=j(e);s&&s.l(o),o.forEach(u),this.h()},h(){I(e,a)},m(i,o){v(i,e,o),s&&s.m(e,null),n[10](e),l=!0},p(i,o){s&&s.p&&(!l||o&260)&&z(s,t,i,i[8],l?J(t,i[8],o,qe):O(i[8]),le),I(e,a=P(r,[o&4&&i[2]]))},i(i){l||(d(s,i),l=!0)},o(i){_(s,i),l=!1},d(i){i&&u(e),s&&s.d(i),n[10](null)}}}function Oe(n){let e;const l=n[9].default,t=V(l,n,n[8],re);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,r){t&&t.m(s,r),e=!0},p(s,r){t&&t.p&&(!e||r&260)&&z(t,l,s,s[8],e?J(l,s[8],r,je):O(s[8]),re)},i(s){e||(d(t,s),e=!0)},o(s){_(t,s),e=!1},d(s){t&&t.d(s)}}}function Je(n){let e,l,t,s;const r=[Oe,ze],a=[];function i(o,f){return o[1]?0:1}return e=i(n),l=a[e]=r[e](n),{c(){l.c(),t=D()},l(o){l.l(o),t=D()},m(o,f){a[e].m(o,f),v(o,t,f),s=!0},p(o,[f]){let c=e;e=i(o),e===c?a[e].p(o,f):(x(),_(a[c],1,1,()=>{a[c]=null}),ee(),l=a[e],l?l.p(o,f):(l=a[e]=r[e](o),l.c()),d(l,1),l.m(t.parentNode,t))},i(o){s||(d(l),s=!0)},o(o){_(l),s=!1},d(o){o&&u(t),a[e].d(o)}}}function Re(n,e,l){let t;const s=["id","asChild","el"];let r=F(e,s),a,i,{$$slots:o={},$$scope:f}=e;const{descriptionId:c,errors:m}=ge();B(n,c,p=>l(7,i=p)),B(n,m,p=>l(6,a=p));let{id:h=be()}=e,{asChild:g=!1}=e,{el:M=void 0}=e;function W(p){w[p?"unshift":"push"](()=>{M=p,l(0,M)})}return n.$$set=p=>{e=b(b({},e),G(p)),l(11,r=F(e,s)),"id"in p&&l(5,h=p.id),"asChild"in p&&l(1,g=p.asChild),"el"in p&&l(0,M=p.el),"$$scope"in p&&l(8,f=p.$$scope)},n.$$.update=()=>{n.$$.dirty&32&&c.set(h),l(2,t={id:i,"data-fs-error":pe(a),"data-fs-description":"",...r})},[M,g,t,c,m,h,a,i,f,o,W]}class Te extends R{constructor(e){super(),T(this,e,Re,Je,S,{id:5,asChild:1,el:0})}}function ne(n,e,l){const t=n.slice();return t[14]=e[l],t}const Be=n=>({errors:n&4,fieldErrorsAttrs:n&16,errorAttrs:n&8}),oe=n=>({errors:n[2],fieldErrorsAttrs:n[4],errorAttrs:n[3]}),Ge=n=>({errors:n&4,fieldErrorsAttrs:n&16,errorAttrs:n&8}),ae=n=>({errors:n[2],fieldErrorsAttrs:n[4],errorAttrs:n[3]});function He(n){let e,l;const t=n[11].default,s=V(t,n,n[10],oe),r=s||Qe(n);let a=[n[4]],i={};for(let o=0;o<a.length;o+=1)i=b(i,a[o]);return{c(){e=L("div"),r&&r.c(),this.h()},l(o){e=q(o,"DIV",{});var f=j(e);r&&r.l(f),f.forEach(u),this.h()},h(){I(e,i)},m(o,f){v(o,e,f),r&&r.m(e,null),n[12](e),l=!0},p(o,f){s?s.p&&(!l||f&1052)&&z(s,t,o,o[10],l?J(t,o[10],f,Be):O(o[10]),oe):r&&r.p&&(!l||f&12)&&r.p(o,l?f:-1),I(e,i=P(a,[f&16&&o[4]]))},i(o){l||(d(r,o),l=!0)},o(o){_(r,o),l=!1},d(o){o&&u(e),r&&r.d(o),n[12](null)}}}function Ke(n){let e;const l=n[11].default,t=V(l,n,n[10],ae);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,r){t&&t.m(s,r),e=!0},p(s,r){t&&t.p&&(!e||r&1052)&&z(t,l,s,s[10],e?J(l,s[10],r,Ge):O(s[10]),ae)},i(s){e||(d(t,s),e=!0)},o(s){_(t,s),e=!1},d(s){t&&t.d(s)}}}function ie(n){let e,l=n[14]+"",t,s=[n[3]],r={};for(let a=0;a<s.length;a+=1)r=b(r,s[a]);return{c(){e=L("div"),t=H(l),this.h()},l(a){e=q(a,"DIV",{});var i=j(e);t=K(i,l),i.forEach(u),this.h()},h(){I(e,r)},m(a,i){v(a,e,i),y(e,t)},p(a,i){i&4&&l!==(l=a[14]+"")&&me(t,l,r.contenteditable),I(e,r=P(s,[i&8&&a[3]]))},d(a){a&&u(e)}}}function Qe(n){let e,l=Z(n[2]),t=[];for(let s=0;s<l.length;s+=1)t[s]=ie(ne(n,l,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=D()},l(s){for(let r=0;r<t.length;r+=1)t[r].l(s);e=D()},m(s,r){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(s,r);v(s,e,r)},p(s,r){if(r&12){l=Z(s[2]);let a;for(a=0;a<l.length;a+=1){const i=ne(s,l,a);t[a]?t[a].p(i,r):(t[a]=ie(i),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(s){s&&u(e),de(t,s)}}}function Ue(n){let e,l,t,s;const r=[Ke,He],a=[];function i(o,f){return o[1]?0:1}return e=i(n),l=a[e]=r[e](n),{c(){l.c(),t=D()},l(o){l.l(o),t=D()},m(o,f){a[e].m(o,f),v(o,t,f),s=!0},p(o,[f]){let c=e;e=i(o),e===c?a[e].p(o,f):(x(),_(a[c],1,1,()=>{a[c]=null}),ee(),l=a[e],l?l.p(o,f):(l=a[e]=r[e](o),l.c()),d(l,1),l.m(t.parentNode,t))},i(o){s||(d(l),s=!0)},o(o){_(l),s=!1},d(o){o&&u(t),a[e].d(o)}}}function We(n,e,l){let t,s,r;const a=["id","asChild","el"];let i=F(e,a),o,f,{$$slots:c={},$$scope:m}=e;const{fieldErrorsId:h,errors:g}=ge();B(n,h,$=>l(9,o=$)),B(n,g,$=>l(2,f=$));let{id:M=be()}=e,{asChild:W=!1}=e,{el:p=void 0}=e;function ve($){w[$?"unshift":"push"](()=>{p=$,l(0,p)})}return n.$$set=$=>{e=b(b({},e),G($)),l(13,i=F(e,a)),"id"in $&&l(7,M=$.id),"asChild"in $&&l(1,W=$.asChild),"el"in $&&l(0,p=$.el),"$$scope"in $&&l(10,m=$.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&l(8,t=pe(f)),n.$$.dirty&128&&h.set(M),l(4,s={id:o,"data-fs-error":t,"data-fs-field-errors":"","aria-live":"assertive",...i}),n.$$.dirty&256&&l(3,r={"data-fs-field-error":"","data-fs-error":t})},[p,W,f,r,s,h,g,M,t,o,m,c,ve]}class Xe extends R{constructor(e){super(),T(this,e,We,Ue,S,{id:7,asChild:1,el:0})}}const Ye=n=>({descriptionAttrs:n&16}),fe=n=>({descriptionAttrs:n[4]});function Ze(n){let e;const l=n[2].default,t=V(l,n,n[3],fe);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,r){t&&t.m(s,r),e=!0},p(s,r){t&&t.p&&(!e||r&24)&&z(t,l,s,s[3],e?J(l,s[3],r,Ye):O(s[3]),fe)},i(s){e||(d(t,s),e=!0)},o(s){_(t,s),e=!1},d(s){t&&t.d(s)}}}function we(n){let e,l;const t=[{class:N("text-[0.8rem] text-muted-foreground",n[0])},n[1]];let s={$$slots:{default:[Ze,({descriptionAttrs:r})=>({4:r}),({descriptionAttrs:r})=>r?16:0]},$$scope:{ctx:n}};for(let r=0;r<t.length;r+=1)s=b(s,t[r]);return e=new Te({props:s}),{c(){k(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,a){C(e,r,a),l=!0},p(r,[a]){const i=a&3?P(t,[a&1&&{class:N("text-[0.8rem] text-muted-foreground",r[0])},a&2&&te(r[1])]):{};a&24&&(i.$$scope={dirty:a,ctx:r}),e.$set(i)},i(r){l||(d(e.$$.fragment,r),l=!0)},o(r){_(e.$$.fragment,r),l=!1},d(r){E(e,r)}}}function ye(n,e,l){const t=["class"];let s=F(e,t),{$$slots:r={},$$scope:a}=e,{class:i=void 0}=e;return n.$$set=o=>{e=b(b({},e),G(o)),l(1,s=F(e,t)),"class"in o&&l(0,i=o.class),"$$scope"in o&&l(3,a=o.$$scope)},[i,s,r,a]}class xe extends R{constructor(e){super(),T(this,e,ye,we,S,{class:0})}}function ce(n,e,l){const t=n.slice();return t[8]=e[l],t}const et=n=>({errors:n&32,fieldErrorsAttrs:n&64,errorAttrs:n&128}),ue=n=>({errors:n[5],fieldErrorsAttrs:n[6],errorAttrs:n[7]});function _e(n){let e,l=n[8]+"",t,s,r=[n[7],{class:s=N(n[1])}],a={};for(let i=0;i<r.length;i+=1)a=b(a,r[i]);return{c(){e=L("div"),t=H(l),this.h()},l(i){e=q(i,"DIV",{class:!0});var o=j(e);t=K(o,l),o.forEach(u),this.h()},h(){I(e,a)},m(i,o){v(i,e,o),y(e,t)},p(i,o){o&32&&l!==(l=i[8]+"")&&me(t,l,a.contenteditable),I(e,a=P(r,[o&128&&i[7],o&2&&s!==(s=N(i[1]))&&{class:s}]))},d(i){i&&u(e)}}}function tt(n){let e,l=Z(n[5]),t=[];for(let s=0;s<l.length;s+=1)t[s]=_e(ce(n,l,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=D()},l(s){for(let r=0;r<t.length;r+=1)t[r].l(s);e=D()},m(s,r){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(s,r);v(s,e,r)},p(s,r){if(r&162){l=Z(s[5]);let a;for(a=0;a<l.length;a+=1){const i=ce(s,l,a);t[a]?t[a].p(i,r):(t[a]=_e(i),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(s){s&&u(e),de(t,s)}}}function st(n){let e;const l=n[3].default,t=V(l,n,n[4],ue),s=t||tt(n);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,a){s&&s.m(r,a),e=!0},p(r,a){t?t.p&&(!e||a&240)&&z(t,l,r,r[4],e?J(l,r[4],a,et):O(r[4]),ue):s&&s.p&&(!e||a&162)&&s.p(r,e?a:-1)},i(r){e||(d(s,r),e=!0)},o(r){_(s,r),e=!1},d(r){s&&s.d(r)}}}function lt(n){let e,l;const t=[{class:N("text-[0.8rem] font-medium text-destructive",n[0])},n[2]];let s={$$slots:{default:[st,({errors:r,fieldErrorsAttrs:a,errorAttrs:i})=>({5:r,6:a,7:i}),({errors:r,fieldErrorsAttrs:a,errorAttrs:i})=>(r?32:0)|(a?64:0)|(i?128:0)]},$$scope:{ctx:n}};for(let r=0;r<t.length;r+=1)s=b(s,t[r]);return e=new Xe({props:s}),{c(){k(e.$$.fragment)},l(r){A(e.$$.fragment,r)},m(r,a){C(e,r,a),l=!0},p(r,[a]){const i=a&5?P(t,[a&1&&{class:N("text-[0.8rem] font-medium text-destructive",r[0])},a&4&&te(r[2])]):{};a&242&&(i.$$scope={dirty:a,ctx:r}),e.$set(i)},i(r){l||(d(e.$$.fragment,r),l=!0)},o(r){_(e.$$.fragment,r),l=!1},d(r){E(e,r)}}}function rt(n,e,l){const t=["class","errorClasses"];let s=F(e,t),{$$slots:r={},$$scope:a}=e,{class:i=void 0}=e,{errorClasses:o=void 0}=e;return n.$$set=f=>{e=b(b({},e),G(f)),l(2,s=F(e,t)),"class"in f&&l(0,i=f.class),"errorClasses"in f&&l(1,o=f.errorClasses),"$$scope"in f&&l(4,a=f.$$scope)},[i,o,s,r,a]}class nt extends R{constructor(e){super(),T(this,e,rt,lt,S,{class:0,errorClasses:1})}}function ot(n){let e,l,t,s,r;const a=n[3].default,i=V(a,n,n[2],null);let o=[{class:l=N("rounded-xl border bg-card text-card-foreground shadow",n[0])},n[1]],f={};for(let c=0;c<o.length;c+=1)f=b(f,o[c]);return{c(){e=L("div"),i&&i.c(),this.h()},l(c){e=q(c,"DIV",{class:!0});var m=j(e);i&&i.l(m),m.forEach(u),this.h()},h(){I(e,f)},m(c,m){v(c,e,m),i&&i.m(e,null),t=!0,s||(r=[Q(e,"click",n[4]),Q(e,"focusin",n[5]),Q(e,"focusout",n[6]),Q(e,"mouseenter",n[7]),Q(e,"mouseleave",n[8])],s=!0)},p(c,[m]){i&&i.p&&(!t||m&4)&&z(i,a,c,c[2],t?J(a,c[2],m,null):O(c[2]),null),I(e,f=P(o,[(!t||m&1&&l!==(l=N("rounded-xl border bg-card text-card-foreground shadow",c[0])))&&{class:l},m&2&&c[1]]))},i(c){t||(d(i,c),t=!0)},o(c){_(i,c),t=!1},d(c){c&&u(e),i&&i.d(c),s=!1,$e(r)}}}function at(n,e,l){const t=["class"];let s=F(e,t),{$$slots:r={},$$scope:a}=e,{class:i=void 0}=e;function o(g){U.call(this,n,g)}function f(g){U.call(this,n,g)}function c(g){U.call(this,n,g)}function m(g){U.call(this,n,g)}function h(g){U.call(this,n,g)}return n.$$set=g=>{e=b(b({},e),G(g)),l(1,s=F(e,t)),"class"in g&&l(0,i=g.class),"$$scope"in g&&l(2,a=g.$$scope)},[i,s,a,r,o,f,c,m,h]}class it extends R{constructor(e){super(),T(this,e,at,ot,S,{class:0})}}function ft(n){let e,l,t;const s=n[3].default,r=V(s,n,n[2],null);let a=[{class:l=N("p-6 pt-0",n[0])},n[1]],i={};for(let o=0;o<a.length;o+=1)i=b(i,a[o]);return{c(){e=L("div"),r&&r.c(),this.h()},l(o){e=q(o,"DIV",{class:!0});var f=j(e);r&&r.l(f),f.forEach(u),this.h()},h(){I(e,i)},m(o,f){v(o,e,f),r&&r.m(e,null),t=!0},p(o,[f]){r&&r.p&&(!t||f&4)&&z(r,s,o,o[2],t?J(s,o[2],f,null):O(o[2]),null),I(e,i=P(a,[(!t||f&1&&l!==(l=N("p-6 pt-0",o[0])))&&{class:l},f&2&&o[1]]))},i(o){t||(d(r,o),t=!0)},o(o){_(r,o),t=!1},d(o){o&&u(e),r&&r.d(o)}}}function ct(n,e,l){const t=["class"];let s=F(e,t),{$$slots:r={},$$scope:a}=e,{class:i=void 0}=e;return n.$$set=o=>{e=b(b({},e),G(o)),l(1,s=F(e,t)),"class"in o&&l(0,i=o.class),"$$scope"in o&&l(2,a=o.$$scope)},[i,s,a,r]}class ut extends R{constructor(e){super(),T(this,e,ct,ft,S,{class:0})}}function _t(n){let e;return{c(){e=H("Password")},l(l){e=K(l,"Password")},m(l,t){v(l,e,t)},d(l){l&&u(e)}}}function dt(n){let e,l,t,s,r;e=new Se({props:{$$slots:{default:[_t]},$$scope:{ctx:n}}});const a=[n[9],{type:"password"},{class:"bg-accent focus-visible:ring-2"}];function i(f){n[8](f)}let o={};for(let f=0;f<a.length;f+=1)o=b(o,a[f]);return n[0].password!==void 0&&(o.value=n[0].password),t=new Le({props:o}),w.push(()=>Ce(t,"value",i)),{c(){k(e.$$.fragment),l=X(),k(t.$$.fragment)},l(f){A(e.$$.fragment,f),l=Y(f),A(t.$$.fragment,f)},m(f,c){C(e,f,c),v(f,l,c),C(t,f,c),r=!0},p(f,c){const m={};c&1024&&(m.$$scope={dirty:c,ctx:f}),e.$set(m);const h=c&512?P(a,[te(f[9]),a[1],a[2]]):{};!s&&c&1&&(s=!0,h.value=f[0].password,Ae(()=>s=!1)),t.$set(h)},i(f){r||(d(e.$$.fragment,f),d(t.$$.fragment,f),r=!0)},o(f){_(e.$$.fragment,f),_(t.$$.fragment,f),r=!1},d(f){f&&u(l),E(e,f),E(t,f)}}}function mt(n){let e;return{c(){e=H("Enter the password to login.")},l(l){e=K(l,"Enter the password to login.")},m(l,t){v(l,e,t)},d(l){l&&u(e)}}}function ht(n){let e,l,t,s,r,a;return e=new Me({props:{$$slots:{default:[dt,({attrs:i})=>({9:i}),({attrs:i})=>i?512:0]},$$scope:{ctx:n}}}),t=new xe({props:{class:"sr-only",$$slots:{default:[mt]},$$scope:{ctx:n}}}),r=new nt({}),{c(){k(e.$$.fragment),l=X(),k(t.$$.fragment),s=X(),k(r.$$.fragment)},l(i){A(e.$$.fragment,i),l=Y(i),A(t.$$.fragment,i),s=Y(i),A(r.$$.fragment,i)},m(i,o){C(e,i,o),v(i,l,o),C(t,i,o),v(i,s,o),C(r,i,o),a=!0},p(i,o){const f={};o&1537&&(f.$$scope={dirty:o,ctx:i}),e.$set(f);const c={};o&1024&&(c.$$scope={dirty:o,ctx:i}),t.$set(c)},i(i){a||(d(e.$$.fragment,i),d(t.$$.fragment,i),d(r.$$.fragment,i),a=!0)},o(i){_(e.$$.fragment,i),_(t.$$.fragment,i),_(r.$$.fragment,i),a=!1},d(i){i&&(u(l),u(s)),E(e,i),E(t,i),E(r,i)}}}function gt(n){let e;return{c(){e=H("Masuk")},l(l){e=K(l,"Masuk")},m(l,t){v(l,e,t)},i:se,o:se,d(l){l&&u(e)}}}function pt(n){let e,l,t;return e=new Ve({props:{class:"mr-2 h-4 w-4 animate-spin"}}),{c(){k(e.$$.fragment),l=H(`
			Loading`)},l(s){A(e.$$.fragment,s),l=K(s,`
			Loading`)},m(s,r){C(e,s,r),v(s,l,r),t=!0},i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),t=!1},d(s){s&&u(l),E(e,s)}}}function bt(n){let e,l,t,s;const r=[pt,gt],a=[];function i(o,f){return o[1]||o[2]?0:1}return e=i(n),l=a[e]=r[e](n),{c(){l.c(),t=D()},l(o){l.l(o),t=D()},m(o,f){a[e].m(o,f),v(o,t,f),s=!0},p(o,f){let c=e;e=i(o),e!==c&&(x(),_(a[c],1,1,()=>{a[c]=null}),ee(),l=a[e],l||(l=a[e]=r[e](o),l.c()),d(l,1),l.m(t.parentNode,t))},i(o){s||(d(l),s=!0)},o(o){_(l),s=!1},d(o){o&&u(t),a[e].d(o)}}}function vt(n){let e,l,t,s,r,a,i;return l=new Fe({props:{form:n[3],name:"password",$$slots:{default:[ht]},$$scope:{ctx:n}}}),s=new Ie({props:{class:"mt-2 w-full focus-visible:ring-2",disabled:n[1]||!!n[2],$$slots:{default:[bt]},$$scope:{ctx:n}}}),{c(){e=L("form"),k(l.$$.fragment),t=X(),k(s.$$.fragment),this.h()},l(o){e=q(o,"FORM",{method:!0});var f=j(e);A(l.$$.fragment,f),t=Y(f),A(s.$$.fragment,f),f.forEach(u),this.h()},h(){he(e,"method","POST")},m(o,f){v(o,e,f),C(l,e,null),y(e,t),C(s,e,null),r=!0,a||(i=ke(n[5].call(null,e)),a=!0)},p(o,[f]){const c={};f&1025&&(c.$$scope={dirty:f,ctx:o}),l.$set(c);const m={};f&6&&(m.disabled=o[1]||!!o[2]),f&1030&&(m.$$scope={dirty:f,ctx:o}),s.$set(m)},i(o){r||(d(l.$$.fragment,o),d(s.$$.fragment,o),r=!0)},o(o){_(l.$$.fragment,o),_(s.$$.fragment,o),r=!1},d(o){o&&u(e),E(l),E(s),a=!1,i()}}}function $t(n,e,l){let t,s,r;B(n,Ee,h=>l(2,r=h));let{data:a}=e;const i=De(a,{validators:Ne(Pe),delayMs:150}),{form:o,enhance:f,delayed:c}=i;B(n,o,h=>l(0,t=h)),B(n,c,h=>l(1,s=h));function m(h){n.$$.not_equal(t.password,h)&&(t.password=h,o.set(t))}return n.$$set=h=>{"data"in h&&l(7,a=h.data)},[t,s,r,i,o,f,c,a,m]}class kt extends R{constructor(e){super(),T(this,e,$t,vt,S,{data:7})}}function At(n){let e,l;return e=new kt({props:{data:n[0].form}}),{c(){k(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){C(e,t,s),l=!0},p(t,s){const r={};s&1&&(r.data=t[0].form),e.$set(r)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function Ct(n){let e,l;return e=new ut({props:{class:"p-6",$$slots:{default:[At]},$$scope:{ctx:n}}}),{c(){k(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){C(e,t,s),l=!0},p(t,s){const r={};s&3&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){_(e.$$.fragment,t),l=!1},d(t){E(e,t)}}}function Et(n){let e,l,t;return l=new it({props:{class:"w-[400px] max-w-full max-sm:border-none max-sm:bg-background max-sm:shadow-none",$$slots:{default:[Ct]},$$scope:{ctx:n}}}),{c(){e=L("main"),k(l.$$.fragment),this.h()},l(s){e=q(s,"MAIN",{class:!0});var r=j(e);A(l.$$.fragment,r),r.forEach(u),this.h()},h(){he(e,"class","flex min-h-[100dvh] flex-col items-center justify-center")},m(s,r){v(s,e,r),C(l,e,null),t=!0},p(s,[r]){const a={};r&3&&(a.$$scope={dirty:r,ctx:s}),l.$set(a)},i(s){t||(d(l.$$.fragment,s),t=!0)},o(s){_(l.$$.fragment,s),t=!1},d(s){s&&u(e),E(l)}}}function Ft(n,e,l){let{data:t}=e;return n.$$set=s=>{"data"in s&&l(0,t=s.data)},[t]}class Lt extends R{constructor(e){super(),T(this,e,Ft,Et,S,{data:0})}}export{Lt as component};