(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{102:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return R}));var n,c=a(35),s=a(27),o=a(7),r=a(0),i=a(25),b=a(81),l=a.n(b),u=a(14),j=a(15).a.button(n||(n=Object(u.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 50px;\n  height: 50px;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  color: wheat;\n  background: transparent;\n"]))),d=a(82),m=a.n(d),p=a(3),O=a(1);function h(){var t=Object(p.g)(),e=Object(p.h)();return Object(O.jsx)(j,{onClick:function(){var a=t.pathname.split("/");a.length-=1,e(a.join("/"))},children:Object(O.jsx)(m.a,{fontSize:"large"})})}function x(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),a=e[0],n=e[1],s=Object(r.useState)(""),b=Object(o.a)(s,2),u=b[0],j=b[1],d=Object(c.e)().data,m=Object(c.b)(),p=Object(o.a)(m,2),x=p[0],f=p[1].error;Object(r.useEffect)((function(){f&&Object(i.a)("".concat(f.status," ").concat(f.data.msg))}),[f]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsxs)("form",{className:l.a.mainForm,onSubmit:function(t){t.preventDefault();var e={name:a,number:u};d&&0!==d.filter((function(t){return t.name.toLowerCase()===a.toLowerCase()})).length?Object(i.b)("Contacts ".concat(a," already exist")):x(e),n(""),j("")},children:[Object(O.jsxs)("label",{htmlFor:"name",className:l.a.label,children:["Name",Object(O.jsx)("input",{type:"text",name:"name",className:l.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:a,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){n(t.target.value)}})]}),Object(O.jsxs)("label",{htmlFor:"number",className:l.a.label,children:["Phone",Object(O.jsx)("input",{type:"tel",name:"number",className:l.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:u,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){j(t.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:l.a.button,children:"Add contact"})]})]})}var f,g=a(83),_=a.n(g),v=function(t){return t.filter},C=a(11),N=a(93),z=a.n(N),y=a(90),k=a.n(y),A=a(91),F=a.n(A),S=a(92),w=a.n(S),Z=a(84),P=a.n(Z),q=a(51),J=a(85),B=a.n(J),E=Object(q.css)(f||(f=Object(u.a)(["\n  display: block;\n  margin: 0px 6px;\n"])));var L=function(t){var e=t.size,a=void 0===e?50:e;return Object(O.jsx)(B.a,{color:"rgb(6, 255, 247)",loading:true,css:E,size:a})};function T(t){var e=t.id,a=t.nameContact,n=t.numberContact,s=Object(r.useState)(!1),b=Object(o.a)(s,2),l=b[0],u=b[1],j=Object(r.useState)(a),d=Object(o.a)(j,2),m=d[0],p=d[1],h=Object(r.useState)(n),x=Object(o.a)(h,2),f=x[0],g=x[1],_=Object(c.c)(),v=Object(o.a)(_,2),C=v[0],N=v[1],y=N.isLoading,A=N.error,S=Object(c.d)(),Z=Object(o.a)(S,2),q=Z[0],J=Z[1].error;Object(r.useEffect)((function(){A&&Object(i.a)("".concat(A.status," ").concat(A.data.msg))}),[A]),Object(r.useEffect)((function(){J&&(Object(i.a)("".concat(J.status," ").concat(J.data.msg)),p(a),g(n))}),[J]);var B=function(t){t?q({contact:{name:m,number:f},id:e}):(p(a),g(n)),u(!1)};return Object(O.jsxs)(O.Fragment,{children:[l?Object(O.jsx)("input",{type:"text",name:"name",className:P.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:m,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){p(t.target.value)}}):Object(O.jsx)("span",{className:P.a.itemText,children:m}),l?Object(O.jsx)("input",{type:"tel",name:"number",className:P.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:f,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){g(t.target.value)}}):Object(O.jsx)("span",{className:P.a.itemText,children:f}),!l&&Object(O.jsx)("button",{type:"button",className:P.a.button,"data-id":e,onClick:function(){u(!0)},disabled:y,children:Object(O.jsx)(k.a,{fontSize:"small"})}),l&&Object(O.jsx)("button",{type:"button",className:P.a.button,"data-id":e,onClick:function(){B(!0)},disabled:y,children:Object(O.jsx)(F.a,{fontSize:"small"})}),l&&Object(O.jsx)("button",{type:"button",className:P.a.button,"data-id":e,onClick:function(){B(!1)},disabled:y,children:Object(O.jsx)(w.a,{fontSize:"small"})}),Object(O.jsxs)("button",{type:"button",className:P.a.button,"data-id":e,onClick:function(){C(e)},disabled:y,children:[y&&Object(O.jsx)(L,{size:15}),Object(O.jsx)(z.a,{fontSize:"small"})]})]})}var I=a(41);function M(){var t=Object(C.e)(I.a),e=Object(c.e)({token:t}),a=e.data,n=e.error,s=e.isFetching,o=Object(p.h)();Object(r.useEffect)((function(){n&&Object(i.a)("".concat(n.status," ").concat(n.data))}),[n]),Object(r.useEffect)((function(){t||o("/")}),[t,o]);var b=Object(C.e)(v);return Object(O.jsxs)("ul",{className:_.a.list,children:[s&&Object(O.jsx)(L,{}),a&&a.filter((function(t){return null===t||void 0===t?void 0:t.name.toUpperCase().includes(b.toUpperCase())})).map((function(t){return Object(O.jsx)("li",{className:_.a.item,children:Object(O.jsx)(T,{id:t.id,nameContact:t.name,numberContact:t.number})},t.id)}))]})}var U=a(94),$=a.n(U),D=a(45);function H(){var t=Object(C.e)(v),e=Object(C.d)();return Object(O.jsxs)("label",{htmlFor:"name",className:$.a.label,children:["Find contact by name",Object(O.jsx)("input",{type:"text",name:"name",className:$.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:t,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onInput:function(t){var a;a=t.target.value,e(Object(D.a)(a))}})]})}function R(){var t=Object(c.e)().data;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p.e,{children:Object(O.jsx)(p.c,{path:"add",element:Object(O.jsx)(s.a,{title:"Phonebook",children:Object(O.jsx)(x,{})})})}),Object(O.jsxs)(s.a,{title:"Contacts",children:[t&&t.length>=2&&Object(O.jsx)(H,{}),Object(O.jsx)(M,{})]})]})}},81:function(t,e,a){t.exports={mainForm:"Phonebook_mainForm__1vSBA",label:"Phonebook_label__2gNkL",input:"Phonebook_input__2dZzU",button:"Phonebook_button__1g3Um"}},83:function(t,e,a){t.exports={list:"Contacts_list__8lH_7",item:"Contacts_item__LcJzr"}},84:function(t,e,a){t.exports={itemText:"ContactItem_itemText__1g5Wr",button:"ContactItem_button__3niij",input:"ContactItem_input__3TcMB"}},94:function(t,e,a){t.exports={label:"Filter_label___RAql",input:"Filter_input__30aPy"}}}]);
//# sourceMappingURL=4.48931982.chunk.js.map