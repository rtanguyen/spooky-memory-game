(this["webpackJsonpspooky-memory-game"]=this["webpackJsonpspooky-memory-game"]||[]).push([[0],{72:function(A,e,t){},74:function(A,e,t){},82:function(A,e,t){"use strict";t.r(e);for(var c=t(0),n=t(23),a=t.n(n),g=(t(72),t(5)),o=t(34),C=(t(74),t(110)),m=t(111),s=t(54),i=t.n(s),d=t(55),b=t.n(d),u=t(3),l=function(A){A.key;var e=A.card,t=A.index,n=A.name,a=A.pickedCard,o=A.solved,C=A.wrongGuess,m=A.matchCounter,s=Object(c.useState)(!1),d=Object(g.a)(s,2),l=d[0],p=d[1],r=Object(c.useState)(!0),I=Object(g.a)(r,2),j=I[0],B=I[1],w=Object(c.useState)(!1),O=Object(g.a)(w,2),f=O[0],h=O[1];Object(c.useEffect)((function(){C.includes(n)&&setTimeout((function(){return p(!1)}),800)}),[C]),Object(c.useEffect)((function(){o.includes(t)&&B(!1)}),[o]),Object(c.useEffect)((function(){console.log("u won"),8===m&&h(!0)}),[m]);var v=function(A){A.preventDefault(),null!==a(n,t)&&p(!0)};return Object(u.jsx)(b.a,{spy:f,children:Object(u.jsxs)(i.a,{flipDirection:"horizontal",isFlipped:l,className:"card",children:[Object(u.jsx)("div",{className:"mt-3 card back",onClick:j?v:null,children:Object(u.jsx)("img",{src:"data:image/png;base64,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"})}),Object(u.jsx)("div",{className:"mt-3 card front",onClick:j?v:null,children:Object(u.jsx)("img",{src:e})})]})})},p=t(107),r=t(108),I=t(112),j=function(A){var e=A.matchCounter,t=A.attempts,n=Object(c.useState)(!1),a=Object(g.a)(n,2),o=a[0],C=a[1],s=Object(c.useState)(),i=Object(g.a)(s,2),d=i[0],b=i[1];Object(c.useEffect)((function(){8===e&&(b("You won!"),setTimeout((function(){return C(!0)}),800))}),[e]),Object(c.useEffect)((function(){0===t&&(b("Yikes, better luck next time!"),setTimeout((function(){return C(!0)}),800))}),[t]);var l=function(){window.location.reload()};return Object(u.jsx)(p.a,{open:o,onClose:l,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(u.jsxs)(m.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[Object(u.jsx)(I.a,{id:"modal-modal-title",variant:"h6",component:"h2",className:"pb-3",children:d}),Object(u.jsx)(r.a,{variant:"outlined",size:"small",onClick:l,children:"Play Again"})]})})},B=t.p+"static/media/moon.04b93e31.png",w=t.p+"static/media/cauldron.702b1468.png",O=t.p+"static/media/frankenstein.e67eb3c7.png",f=t.p+"static/media/ghost2.c5d01518.png",h=t.p+"static/media/hat.b04fb091.png",v=t.p+"static/media/pumpkin.54b294bb.png",L=(t.p,t.p,{moon:{name:"moon",path:B},candy:{name:"candy",path:"data:image/png;base64,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"},cauldron:{name:"cauldron",path:w},frankenstein:{name:"frankenstein",path:O},ghost:{name:"ghost",path:f},hat:{name:"hat",path:h},pumpkin:{name:"pumpkin",path:v},web:{name:"web",path:t.p+"static/media/web.539717ca.png"}}),F=[],D=0;D<2;D++)for(var N in L)F.push(L[N]);var P=Object(o.shuffle)(F),E=function(A){var e=A.matchCounter,t=A.setMatchedCounter,n=A.attempts,a=A.setAttempts,o=Object(c.useState)({}),s=Object(g.a)(o,2),i=s[0],d=s[1],b=Object(c.useState)({}),p=Object(g.a)(b,2),r=p[0],I=p[1],B=Object(c.useState)([]),w=Object(g.a)(B,2),O=w[0],f=w[1],h=Object(c.useState)([]),v=Object(g.a)(h,2),L=v[0],F=v[1];Object(c.useEffect)((function(){N()}),[r]);var D=function(A,e){i.index!==e&&(i.name?r.name||i.index===e||(I({name:A,index:e}),console.log(r)):(d({name:A,index:e}),console.log(i)))};console.log(O);var N=function(){(console.log("check"),i.name&&r.name)&&(i.name===r.name?E():Y())},E=function(){f([i.index,r.index]),t(e+1),U()},Y=function(){F([i.name,r.name]),a(n-1),U()},U=function(){d({}),I({})};return Object(u.jsxs)("div",{className:"container board",children:[Object(u.jsxs)(m.a,{sx:{flexGrow:1},children:[Object(u.jsxs)("h3",{className:"lives pb-3",children:["REMAINING ATTEMPTS: ",n," "]}),Object(u.jsx)(C.a,{container:!0,spacing:1,children:P.map((function(A,t){return Object(u.jsx)(C.a,{item:!0,xs:3,children:Object(u.jsx)(l,{card:A.path,index:t,name:A.name,pickedCard:D,solved:O,wrongGuess:L,matchCounter:e},t)})}))})]}),Object(u.jsx)(j,{matchCounter:e,attempts:n})]})};var Y=function(){var A=Object(c.useState)(0),e=Object(g.a)(A,2),t=e[0],n=e[1],a=Object(c.useState)(8),o=Object(g.a)(a,2),C=o[0],m=o[1];return Object(u.jsxs)("div",{className:"App container",children:[Object(u.jsx)("h1",{className:"header",children:"SUPER SPOOKY MEMORY GAME"}),Object(u.jsx)(E,{matchCounter:t,setMatchedCounter:n,attempts:C,setAttempts:m})]})},U=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,113)).then((function(e){var t=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,g=e.getTTFB;t(A),c(A),n(A),a(A),g(A)}))},Z=t(59);t.p;a.a.render(Object(u.jsx)(Z.a,{children:Object(u.jsx)(Y,{})}),document.getElementById("root")),U()}},[[82,1,2]]]);
//# sourceMappingURL=main.3367a123.chunk.js.map