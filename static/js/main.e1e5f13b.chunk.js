(this.webpackJsonpurbansmart=this.webpackJsonpurbansmart||[]).push([[0],{10:function(e,t,n){e.exports={login__wrapper:"Login_login__wrapper__3AGu2",login__form:"Login_login__form__2b0hs",login__form_title:"Login_login__form_title__1lIBy",login__form_input:"Login_login__form_input__2HjI8",login__form_button:"Login_login__form_button__-zL6v"}},17:function(e,t,n){e.exports={main__wrapper:"Main_main__wrapper__2Se7I",main__title:"Main_main__title__2foaS"}},28:function(e,t,n){},29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),i=(n(28),n(29),n(3)),l=n(17),_=n.n(l),s=n(8),j=n(1),u=function(){var e=Object(s.c)((function(e){return e.userLogin}));return Object(j.jsx)("div",{className:_.a.main__wrapper,children:Object(j.jsx)("h1",{className:_.a.main__title,children:e})})},b=n(9),p=n(23),g=["component"],d=function(e){var t=e.component,n=Object(p.a)(e,g);return Object(j.jsx)(i.b,{children:n.loggedIn?Object(j.jsx)(t,Object(b.a)({},n)):Object(j.jsx)(i.a,{to:"/"})})},O=n(19),m=n(10),f=n.n(m),h=function(e){var t=e.handleData,n=Object(a.useState)(""),c=Object(O.a)(n,2),o=c[0],r=c[1],i=Object(a.useState)(""),l=Object(O.a)(i,2),_=l[0],s=l[1];return Object(j.jsx)("div",{className:f.a.login__wrapper,onSubmit:function(e){e.preventDefault(),""!==o&&""!==_?t(o,_):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 email \u0438 password")},children:Object(j.jsxs)("form",{className:f.a.login__form,children:[Object(j.jsx)("h4",{className:f.a.login__form_title,children:"\u0412\u0445\u043e\u0434"}),Object(j.jsx)("input",{type:"text",className:f.a.login__form_input,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",value:o||"",onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("input",{type:"password",className:f.a.login__form_input,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 password",value:_||"",onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("button",{type:"submit",className:f.a.login__form_button,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},x=n(22),v={loggedIn:!1,userLogin:""},S=Object(x.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGED_IN":return Object(b.a)(Object(b.a)({},e),{},{loggedIn:t.payload});case"SET_USER_LOGIN":return Object(b.a)(Object(b.a)({},e),{},{userLogin:t.payload});default:return e}}));var L=function(){var e=Object(s.c)((function(e){return e.loggedIn})),t=Object(i.g)(),n=Object(s.b)();return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{exact:!0,path:"/",children:Object(j.jsx)(h,{handleData:function(e,a){"developer21"===e.toString()&&"123456"===a.toString()?(n({type:"SET_LOGGED_IN",payload:!0}),n(function(e){return{type:"SET_USER_LOGIN",payload:e}}(e)),t.push("/profile")):alert("\u0412\u0432\u0435\u0434\u0435\u043d \u043d\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")}})}),Object(j.jsx)(d,{loggedIn:e,component:u}),Object(j.jsx)(i.b,{exact:!0,path:"/profile",children:Object(j.jsx)(u,{})}),Object(j.jsx)(i.a,{to:{pathname:"/"}})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))},N=n(12);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N.a,{basename:"/UStestTask",children:Object(j.jsx)(s.a,{store:S,children:Object(j.jsx)(N.a,{children:Object(j.jsx)(a.Suspense,{fallback:Object(j.jsx)("div",{children:"Loading..."}),children:Object(j.jsx)(L,{})})})})})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.e1e5f13b.chunk.js.map