(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[4],{102:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return U}));var n,c=a(35),s=a(27),o=a(7),r=a(0),i=a(19),l=a(81),b=a.n(l),j=a(10),u=a(11).a.button(n||(n=Object(j.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 50px;\n  height: 50px;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  color: wheat;\n  background: transparent;\n"]))),d=a(82),m=a.n(d),O=a(3),p=a(1);function h(){var t=Object(O.g)(),e=Object(O.h)();return Object(p.jsx)(u,{onClick:function(){var a=t.pathname.split("/");a.length-=1,e(a.join("/"))},children:Object(p.jsx)(m.a,{fontSize:"large"})})}function x(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),a=e[0],n=e[1],s=Object(r.useState)(""),l=Object(o.a)(s,2),j=l[0],u=l[1],d=Object(c.e)().data,m=Object(c.b)(),O=Object(o.a)(m,2),x=O[0],f=O[1].error;Object(r.useEffect)((function(){f&&Object(i.a)("".concat(f.status," ").concat(f.data.msg))}),[f]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h,{}),Object(p.jsxs)("form",{className:b.a.mainForm,onSubmit:function(t){t.preventDefault();var e={name:a,number:j};d&&0!==d.filter((function(t){return t.name.toLowerCase()===a.toLowerCase()})).length?Object(i.b)("Contacts ".concat(a," already exist")):x(e),n(""),u("")},children:[Object(p.jsxs)("label",{htmlFor:"name",className:b.a.label,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",className:b.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:a,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){n(t.target.value)}})]}),Object(p.jsxs)("label",{htmlFor:"number",className:b.a.label,children:["Phone",Object(p.jsx)("input",{type:"tel",name:"number",className:b.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:j,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){u(t.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:b.a.button,children:"Add contact"})]})]})}var f,_=a(9),C=a(83),g=a.n(C),v=function(t){return t.filter},N=a(93),w=a.n(N),y=a(90),z=a.n(y),A=a(91),F=a.n(A),k=a(92),S=a.n(k),Z=a(84),P=a.n(Z),I=a(51),J=a(85),L=a.n(J),q=Object(I.css)(f||(f=Object(j.a)(["\n  display: block;\n  margin: 0px 6px;\n"])));var E=function(t){var e=t.size,a=void 0===e?50:e;return Object(p.jsx)(L.a,{color:"rgb(6, 255, 247)",loading:true,css:q,size:a})};function T(t){var e=t.id,a=t.nameContact,n=t.numberContact,s=Object(r.useState)(!1),l=Object(o.a)(s,2),b=l[0],j=l[1],u=Object(r.useState)(a),d=Object(o.a)(u,2),m=d[0],O=d[1],h=Object(r.useState)(n),x=Object(o.a)(h,2),f=x[0],_=x[1],C=Object(c.c)(),g=Object(o.a)(C,2),v=g[0],N=g[1],y=N.isLoading,A=N.error,k=Object(c.d)(),Z=Object(o.a)(k,2),I=Z[0],J=Z[1].error;Object(r.useEffect)((function(){A&&Object(i.a)("".concat(A.status," ").concat(A.data.msg))}),[A]),Object(r.useEffect)((function(){J&&(Object(i.a)("".concat(J.status," ").concat(J.data.msg)),O(a),_(n))}),[J]);var L=function(t){t?I({contact:{name:m,number:f},id:e}):(O(a),_(n)),j(!1)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("td",{className:P.a.cell,children:b?Object(p.jsx)("input",{type:"text",name:"name",className:P.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:m,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){O(t.target.value)}}):Object(p.jsx)("span",{className:P.a.itemText,children:m})}),Object(p.jsx)("td",{className:P.a.cell,children:b?Object(p.jsx)("input",{type:"tel",name:"number",className:P.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:f,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){_(t.target.value)}}):Object(p.jsx)("span",{className:P.a.itemText,children:f})}),Object(p.jsxs)("td",{className:P.a.cell,children:[!b&&Object(p.jsx)("button",{type:"button",className:P.a.button,"data-id":e,onClick:function(){j(!0)},disabled:y,children:Object(p.jsx)(z.a,{fontSize:"small"})}),b&&Object(p.jsx)("button",{type:"button",className:P.a.button,"data-id":e,onClick:function(){L(!0)},disabled:y,children:Object(p.jsx)(F.a,{fontSize:"small"})}),b&&Object(p.jsx)("button",{type:"button",className:P.a.button,"data-id":e,onClick:function(){L(!1)},disabled:y,children:Object(p.jsx)(S.a,{fontSize:"small"})}),Object(p.jsxs)("button",{type:"button",className:P.a.button,"data-id":e,onClick:function(){v(e)},disabled:y,children:[y&&Object(p.jsx)(E,{size:15}),Object(p.jsx)(w.a,{fontSize:"small"})]})]})]})}function D(){var t=Object(c.e)(),e=t.data,a=t.error,n=t.isFetching;Object(r.useEffect)((function(){a&&Object(i.a)("".concat(a.status," ").concat(a.data))}),[a]);var s=Object(_.e)(v);return Object(p.jsxs)(p.Fragment,{children:[n&&Object(p.jsx)(E,{}),Object(p.jsxs)("table",{width:"100%",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{className:[g.a.rowHead],children:[Object(p.jsx)("th",{className:g.a.cell,children:"Name"}),Object(p.jsx)("th",{className:g.a.cell,children:"Phone"}),Object(p.jsx)("th",{className:g.a.cell})]})}),Object(p.jsx)("tbody",{children:e&&e.filter((function(t){return null===t||void 0===t?void 0:t.name.toUpperCase().includes(s.toUpperCase())})).sort((function(t,e){return t.name.toLowerCase().localeCompare(e.name.toLowerCase())})).map((function(t){return Object(p.jsx)("tr",{className:g.a.row,children:Object(p.jsx)(T,{id:t.id,nameContact:t.name,numberContact:t.number})},t.id)}))})]})]})}var H=a(94),M=a.n(H),B=a(45);function Q(){var t=Object(_.e)(v),e=Object(_.d)();return Object(p.jsxs)("label",{htmlFor:"name",className:M.a.label,children:["Find contact by name",Object(p.jsx)("input",{type:"text",name:"name",className:M.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:t,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onInput:function(t){var a;a=t.target.value,e(Object(B.a)(a))}})]})}function U(){var t=Object(c.e)().data;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.e,{children:Object(p.jsx)(O.c,{path:"add",element:Object(p.jsx)(s.a,{title:"Phonebook",children:Object(p.jsx)(x,{})})})}),Object(p.jsxs)(s.a,{title:"Contacts",children:[t&&t.length>=2&&Object(p.jsx)(Q,{}),Object(p.jsx)(D,{})]})]})}},81:function(t,e,a){t.exports={mainForm:"Phonebook_mainForm__2AuVw",label:"Phonebook_label__2Lglb",input:"Phonebook_input__3ga8Q",button:"Phonebook_button__2sw_K"}},83:function(t,e,a){t.exports={list:"Contacts_list__tcvns",item:"Contacts_item__n5e7y",row:"Contacts_row__1mDJU",rowHead:"Contacts_rowHead__58cjC",cell:"Contacts_cell__2EGK3"}},84:function(t,e,a){t.exports={itemText:"ContactItem_itemText__3GbgC",button:"ContactItem_button__1siMh",input:"ContactItem_input__Y-e2C",row:"ContactItem_row__3HQvQ",cell:"ContactItem_cell__sdWdb"}},94:function(t,e,a){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}}}]);
//# sourceMappingURL=4.af4f5f7f.chunk.js.map