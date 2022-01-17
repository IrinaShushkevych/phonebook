(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o}));var r=function(e){return e.users.name},a=function(e){return e.users.error},c=function(e){return e.users.isLoading},o=function(e){var t,n;return null!==(t=null===e||void 0===e||null===(n=e.users)||void 0===n?void 0:n.token)&&void 0!==t?t:""}},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(27),a={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},c=function(e){r.b.error(e,a)},o=function(e){r.b.warn(e,a)}},24:function(e,t,n){"use strict";var r=n(33),a=n.n(r),c=n(2);t.a=function(e){var t=e.title,n=void 0===t?"":t,r=e.children;return Object(c.jsxs)("div",{className:a.a.container,children:[n&&Object(c.jsx)("h2",{className:a.a.title,children:n}),r]})}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return d}));var r=n(7),a=n(37),c=n(14),o=Object(a.a)({reducerPath:"contacts",baseQuery:Object(c.d)({baseUrl:"https://connections-api.herokuapp.com/contacts"}),tagTypes:["contacts"],endpoints:function(e){return{getContacts:e.query({query:function(e){var t=e.token;return{url:"/",headers:{Authorization:"Bearer ".concat(t)}}},providesTags:function(e){return e?[].concat(Object(r.a)(e.map((function(e){return{type:"contacts",id:e.id}}))),["contacts"]):["contacts"]}}),addContact:e.mutation({query:function(e){var t=e.contact,n=e.token;return{url:"/",method:"POST",headers:{Authorization:"Bearer ".concat(n)},body:t}},invalidatesTags:["contacts"]}),deleteContact:e.mutation({query:function(e){var t=e.id,n=e.token;return{url:"/".concat(t),method:"DELETE",headers:{Authorization:"Bearer ".concat(n)}}},invalidatesTags:function(e){return e?[{type:"contacts",id:e.id}]:["contacts"]}}),editContact:e.mutation({query:function(e){var t=e.contact,n=e.id,r=e.token;return{url:"/".concat(n),method:"PATCH",headers:{Authorization:"Bearer ".concat(r)},body:t}},invalidatesTags:function(e){return e?Object(r.a)(e.map((function(e){return{type:"contacts",id:e.id}}))):["contacts"]}})}}}),i=o.useGetContactsQuery,s=o.useAddContactMutation,u=o.useDeleteContactMutation,d=o.useEditContactMutation},33:function(e,t,n){e.exports={container:"Container_container__YdtW5",title:"Container_title__UrP9o"}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),a=Object(r.createAction)("filter")},47:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),o=n.n(c),i=n(6),s=n(19),u=(n(46),n(47),n(3)),d=(n(48),n(17)),j=n(24),l=n(12),b=n(5),O=n.n(b),h=n(1),f="https://connections-api.herokuapp.com/users",m=function(e){return fetch("".concat(f,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){switch(e.status){case 201:return e.json();case 400:throw Error("Wrong name, login or password");case 404:throw Error("Not found");case 500:throw Error("Servers error");default:throw Error(e.statusText)}}))},p=function(e){return fetch("".concat(f,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){switch(e.status){case 200:return e.json();case 400:throw Error("Wrong login or password");case 404:throw Error("Not found");default:throw Error(e.statusText)}}))},g=function(e){return fetch("".concat(f,"/logout"),{method:"POST",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){switch(e.status){case 200:return e.json();case 401:throw Error("No authorization");default:throw Error("Unknown error")}}))},v=Object(h.createAsyncThunk)("register",function(){var e=Object(l.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(h.createAsyncThunk)("login",function(){var e=Object(l.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(h.createAsyncThunk)("logout",function(){var e=Object(l.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=n(22),k=n(2);function S(){var e=Object(i.e)(d.d),t=Object(i.e)(d.a),n=Object(i.e)(d.c),a=Object(i.d)();return Object(r.useEffect)((function(){t&&Object(y.a)(t)}),[t]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(j.a,{children:[Object(k.jsx)("h1",{children:e}),Object(k.jsxs)("ul",{children:[!e&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("li",{children:Object(k.jsx)(s.b,{to:"register",children:"Register"})}),Object(k.jsx)("li",{children:Object(k.jsx)(s.b,{to:"login",children:"LogIn"})})]}),e&&Object(k.jsx)("li",{children:Object(k.jsx)(s.b,{to:"/",onClick:function(){a(w(n))},children:"LogOut"})})]})]}),Object(k.jsx)(u.b,{})]})}var C=n(11),T=n(9),E=n(30);function L(){var e,t,n,a=Object(r.useState)(null!==(e=sessionStorage.getItem("email"))&&void 0!==e?e:""),c=Object(T.a)(a,2),o=c[0],s=c[1],l=Object(r.useState)(""),b=Object(T.a)(l,2),O=b[0],h=b[1],f=Object(E.a)(),m=f.register,p=f.handleSubmit,g=f.formState.errors,v=Object(u.h)(),w=Object(i.d)(),S=Object(i.e)(d.b),L=Object(i.e)(d.a),q=Object(i.e)(d.d),I=function(e){var t=e.target.value;switch(e.target.name){case"email":s(t),sessionStorage.setItem("email",t);break;case"password":h(t);break;default:return}};return Object(r.useEffect)((function(){L&&Object(y.a)(L)}),[L]),Object(r.useEffect)((function(){q&&v("/contacts")}),[q,v]),Object(k.jsxs)(j.a,{children:[Object(k.jsx)("h2",{children:"Form Login"}),S&&Object(k.jsx)("h3",{children:"Loading...."}),Object(k.jsxs)("form",{onSubmit:p((function(e){w(x({email:"testtast4@gmail.com",password:"qwert-11"})),s(""),h(""),sessionStorage.removeItem("email")})),children:[Object(k.jsxs)("label",{children:["email",Object(k.jsx)("input",Object(C.a)(Object(C.a)({type:"email"},m("email",{required:!0})),{},{onChange:I,value:o})),"required"===(null===(t=g.email)||void 0===t?void 0:t.type)&&"Email is required"]}),Object(k.jsxs)("label",{children:["password",Object(k.jsx)("input",Object(C.a)(Object(C.a)({type:"password"},m("password",{required:!0})),{},{onChange:I,value:O})),"required"===(null===(n=g.password)||void 0===n?void 0:n.type)&&"Password is required"]}),Object(k.jsx)("button",{type:"button",onClick:function(){sessionStorage.removeItem("email"),v("/")},children:"Cancel"}),Object(k.jsx)("button",{type:"submit",children:"Log in"})]})]})}function q(){var e,t,n,a,c=Object(r.useState)(null!==(e=sessionStorage.getItem("name"))&&void 0!==e?e:""),o=Object(T.a)(c,2),s=o[0],l=o[1],b=Object(r.useState)(null!==(t=sessionStorage.getItem("email"))&&void 0!==t?t:""),O=Object(T.a)(b,2),h=O[0],f=O[1],m=Object(r.useState)(""),p=Object(T.a)(m,2),g=p[0],x=p[1],w=Object(E.a)(),S=w.register,L=w.handleSubmit,q=w.formState.errors,I=Object(u.h)(),A=Object(i.d)(),P=Object(i.e)(d.b),N=Object(i.e)(d.a),z=function(e){var t=e.target.value;switch(e.target.name){case"name":l(t),sessionStorage.setItem("name",t);break;case"email":f(t),sessionStorage.setItem("email",t);break;case"password":x(t);break;default:return}};return Object(r.useEffect)((function(){N&&Object(y.a)(N)}),[N]),Object(k.jsxs)(j.a,{children:[Object(k.jsx)("h2",{children:"Form Register"}),P&&Object(k.jsx)("h3",{children:"Loading...."}),Object(k.jsxs)("form",{onSubmit:L((function(e){A(v({name:"TestTest3",email:"testtast4@gmail.com",password:"qwert-11"})),l(""),f(""),x(""),sessionStorage.removeItem("name"),sessionStorage.removeItem("email")})),children:[Object(k.jsxs)("label",{children:["name",Object(k.jsx)("input",Object(C.a)(Object(C.a)({},S("name")),{},{value:s,onChange:z}))]}),Object(k.jsxs)("label",{children:["email",Object(k.jsx)("input",Object(C.a)(Object(C.a)({type:"email"},S("email",{required:!0})),{},{onChange:z,value:h})),"required"===(null===(n=q.email)||void 0===n?void 0:n.type)&&"Email is required"]}),Object(k.jsxs)("label",{children:["password",Object(k.jsx)("input",Object(C.a)(Object(C.a)({type:"password"},S("password",{required:!0})),{},{onChange:z,value:g})),"required"===(null===(a=q.password)||void 0===a?void 0:a.type)&&"Password is required"]}),Object(k.jsx)("button",{type:"button",onClick:function(){sessionStorage.removeItem("name"),sessionStorage.removeItem("email"),I("/")},children:"Cancel"}),Object(k.jsx)("button",{type:"submit",children:"Register"})]})]})}var I=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,95))}));function A(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(r.Suspense,{fallback:Object(k.jsx)("p",{children:"Loading...."}),children:Object(k.jsxs)(u.e,{children:[Object(k.jsxs)(u.c,{path:"/",element:Object(k.jsx)(S,{}),children:[Object(k.jsx)(u.c,{path:"login",element:Object(k.jsx)(L,{})}),Object(k.jsx)(u.c,{path:"register",element:Object(k.jsx)(q,{})}),Object(k.jsx)(u.c,{path:"contacts",element:Object(k.jsx)(I,{})})]}),Object(k.jsx)(u.c,{path:"*",element:Object(k.jsx)(u.a,{to:"/"})})]})})})}var P,N=n(8),z=n(7),B=n(38),_=(n(51),n(29)),R=n(35),F=Object(h.createReducer)("",Object(N.a)({},R.a,(function(e,t){return t.payload})));console.log([v.pending]);var J,M=Object(h.createReducer)({name:"",email:"",token:"",error:"",isLoading:!1},(P={},Object(N.a)(P,v.pending,(function(e,t){e.isLoading=!0,e.error=""})),Object(N.a)(P,v.fulfilled,(function(e,t){var n=t.payload;e.token=n.token,e.name=n.user.name,e.email=n.user.email,e.error="",e.isLoading=!1})),Object(N.a)(P,v.rejected,(function(e,t){var n=t.error;e.error=n.message,e.isLoading=!1})),Object(N.a)(P,x.pending,(function(e,t){e.isLoading=!0,e.error=""})),Object(N.a)(P,x.fulfilled,(function(e,t){var n=t.payload;e.token=n.token,e.name=n.user.name,e.email=n.user.email,e.error="",e.isLoading=!1})),Object(N.a)(P,x.rejected,(function(e,t){var n=t.error;e.error=n.message,e.isLoading=!1})),Object(N.a)(P,w.pending,(function(e,t){e.isLoading=!0,e.error=""})),Object(N.a)(P,w.fulfilled,(function(e,t){t.payload;e.token="",e.name="",e.email="",e.error="",e.isLoading=!1})),Object(N.a)(P,w.rejected,(function(e,t){var n=t.error;e.error=n.message,e.isLoading=!1})),P)),U=Object(h.configureStore)({reducer:(J={users:M},Object(N.a)(J,_.a.reducerPath,_.a.reducer),Object(N.a)(J,"filter",F),J),middleware:function(e){return[].concat(Object(z.a)(e()),[_.a.middleware,!1])},devTools:!1});Object(B.setupListeners)(U.dispatch);var W=n(27);n(54);o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsxs)(i.a,{store:U,children:[Object(k.jsx)(s.a,{children:Object(k.jsx)(A,{})}),Object(k.jsx)(W.a,{})]})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.4b32f811.chunk.js.map