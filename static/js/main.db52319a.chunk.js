(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0),h=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.NONE="none",t.ALPHABET="alphabet",t.LENGTH="length"}(s||(s={}));var d=function(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(s.NONE),u=Object(r.a)(o,2),d=u[0],O=u[1],g=function(t){O(t)},p=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(i.a)(t);return o.sort((function(t,e){switch(n){case s.LENGTH:return t.length-e.length;case s.ALPHABET:return t.localeCompare(e);default:return 0}})),c&&o.reverse(),o}(j,{sortType:d,isReversed:n}),N=n||d!==s.NONE;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":d!==s.ALPHABET}),onClick:function(){return g(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":d!==s.LENGTH}),onClick:function(){return g(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!n}),onClick:function(){c(!n)},children:"Reverse"}),N&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){O(s.NONE),c(!1)},children:"Reset"})]}),Object(b.jsx)(h,{goods:p})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.db52319a.chunk.js.map