(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),s=c(3),a=c(5),r=c(6),l=c(9),i=c(8),d=c(1),u=c.n(d),j=(c(14),c(7)),g=c.n(j),b=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={goods:["Jam"]},e.toggleSelectedItem=function(t){var c=e.state.goods;c.includes(t)?e.setState({goods:Object(s.a)(c.filter((function(e){return e!==t})))}):e.setState({goods:[].concat(Object(s.a)(c),[t])})},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.goods;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:t.length?"Selected good: - ".concat(t.join(", ")):"No goods selected"}),Object(b.jsx)("button",{type:"button",onClick:function(){e.setState({goods:[]})},children:"Clear"}),Object(b.jsx)("ul",{className:"list",children:h.map((function(c){var n=t.includes(c);return Object(b.jsxs)("li",{className:g()("list__item",{"list__item--selected":n}),children:[c,Object(b.jsx)("button",{type:"button",onClick:function(){return e.toggleSelectedItem(c)},children:n?"Remove":"Select"})]},c)}))})]})}}]),c}(u.a.Component),p=m;o.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fef49412.chunk.js.map