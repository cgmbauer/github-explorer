(this["webpackJsonpprimeiro-projeto-react"]=this["webpackJsonpprimeiro-projeto-react"]||[]).push([[0],{18:function(n,e,t){n.exports=t.p+"static/media/logo.04f6798f.svg"},35:function(n,e,t){n.exports=t.p+"static/media/github-background.fe82ec00.svg"},43:function(n,e,t){n.exports=t(70)},70:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(34),i=t.n(o),l=t(9),c=t(6),u=t(7),p=t(35),s=t.n(p);function m(){var n=Object(c.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: #F0F0F5 url(",") no-repeat 70% top;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody, input, button {\n  font: 16px 'Roboto', sans-serif;\n}\n\n#root {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 40px 20px;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n"]);return m=function(){return n},n}var d=Object(u.a)(m(),s.a),x=t(2),f=t(20),g=t.n(f),b=t(42),h=t(39),E=t(11),v=t(16),w=t(40),j=t.n(w).a.create({baseURL:"https://api.github.com/"}),O=t(18),y=t.n(O),k=t(41);function z(){var n=Object(c.a)(["\n  display: block;\n  color: #c53030;\n  margin-top: 8px;\n"]);return z=function(){return n},n}function _(){var n=Object(c.a)(["\n  margin-top: 80px;\n\n  max-width: 700px;\n\n  a {\n    background: #fff;\n\n    border-radius: 5px;\n\n    width: 100%;\n    padding: 24px;\n\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n\n    transition: transform 0.3s;\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    &:hover {\n      transform: translateX(10px);\n    }\n  }\n\n  img {\n    width: 68px;\n    height: 68px;\n    border-radius: 50%;\n  }\n\n  div {\n    margin: 0 16px;\n    flex: 1;\n\n    strong {\n      font-size: 20px;\n      color: #3d3d4d;\n    }\n\n    p {\n      font-size: 18px;\n      color: #a8a8b3;\n      margin-top: 4px;\n    }\n  }\n\n  svg {\n    margin-left: auto;\n    color: #cbcbd6;\n  }\n\n  @media (max-width: 425px) {\n    min-width: 380px;\n\n    div {\n      margin: 0 15px;\n    }\n  }\n"]);return _=function(){return n},n}function S(){var n=Object(c.a)(["\n        border-color: #c53030;\n        border-right: 0;\n      "]);return S=function(){return n},n}function F(){var n=Object(c.a)(["\n  margin-top: 40px;\n\n  max-width: 700px;\n\n  display: flex;\n\n  @media (max-width: 425px) {\n      min-width: 100%;\n    }\n\n  input {\n    flex: 1;\n\n    height: 70px;\n\n    padding: 0 24px;\n\n    border: 2px solid #fff;\n    border-radius: 5px 0 0 5px;\n\n    color: #3a3a3a;\n\n    ","\n\n    &::placeholder {\n      color: #a8a8b3;\n    }\n  }\n\n  button {\n    width: 210px;\n    height: 70px;\n\n    background: #04d361;\n\n    border-radius: 0px 5px 5px 0px;\n    border: 0;\n\n    color: #fff;\n    font-weight: bold;\n\n    transition: background-color 0.3s;\n\n    &:hover {\n      background: ",";\n    }\n  }\n\n  }\n\n  @media (max-width: 659px) {\n    button {\n      max-width: 110px;\n      min-width: 85px;\n    }\n  }\n"]);return F=function(){return n},n}function G(){var n=Object(c.a)(["\n  font-size: 48px;\n  color: #3a3a3a;\n  line-height: 56px;\n\n  max-width: 450px;\n\n  margin-top: 80px;\n\n  @media (max-width: 470px) {\n    max-width: 300px;\n  }\n"]);return G=function(){return n},n}var H=u.c.h1(G()),I=u.c.form(F(),(function(n){return n.hasError&&Object(u.b)(S())}),Object(k.a)(.2,"#04d361")),J=u.c.div(_()),D=u.c.span(z()),N=function(){var n=Object(r.useState)(""),e=Object(E.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(""),c=Object(E.a)(i,2),u=c[0],p=c[1],s=Object(r.useState)((function(){var n=localStorage.getItem("@GitHubExplorer:repositories");return n?JSON.parse(n):[]})),m=Object(E.a)(s,2),d=m[0],x=m[1];function f(){return(f=Object(h.a)(g.a.mark((function n(e){var r,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=4;break}return p("Digite autor/nome_do_reposit\xf3rio. ex: vuejs/vue"),n.abrupt("return");case 4:return n.prev=4,n.next=7,j.get("/repos/".concat(t));case 7:r=n.sent,a=r.data,x([].concat(Object(b.a)(d),[a])),o(""),p(""),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),p("Erro na busca por esse reposit\xf3rio.");case 17:case"end":return n.stop()}}),n,null,[[4,14]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){localStorage.setItem("@GitHubExplorer:repositories",JSON.stringify(d))})),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:y.a,alt:"GitHub Explorer"}),a.a.createElement(H,null,"Explore reposit\xf3rios no GitHub."),a.a.createElement(I,{hasError:!!u,onSubmit:function(n){return f.apply(this,arguments)}},a.a.createElement("input",{value:t,onChange:function(n){return o(n.target.value)},placeholder:"Digite usu\xe1rio/reposit\xf3rio."}),a.a.createElement("button",{type:"submit"}," Pesquisar ")),u&&a.a.createElement(D,null,u),a.a.createElement(J,null,d.map((function(n){return a.a.createElement(l.b,{key:n.full_name,to:"/repositories/".concat(n.full_name)},a.a.createElement("img",{src:n.owner.avatar_url,alt:n.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,n.full_name),a.a.createElement("p",null,n.description)),a.a.createElement(v.b,{size:20}))}))))};function R(){var n=Object(c.a)(["\n  margin-top: 80px;\n\n  @media (max-width: 450px) {\n    margin-top: 50px;\n  }\n\n  a {\n    background: #fff;\n\n    border-radius: 5px;\n\n    width: 100%;\n    padding: 24px;\n\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n\n    transition: transform 0.3s;\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    &:hover {\n      transform: translateX(10px);\n    }\n  }\n\n  div {\n    margin: 0 16px;\n    flex: 1;\n\n    strong {\n      font-size: 20px;\n      color: #3d3d4d;\n    }\n\n    p {\n      font-size: 18px;\n      color: #a8a8b3;\n      margin-top: 4px;\n    }\n  }\n\n  svg {\n    margin-left: auto;\n    color: #cbcbd6;\n  }\n"]);return R=function(){return n},n}function X(){var n=Object(c.a)(["\n  margin-top: 80px;\n\n  header {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 120px;\n      height: 120px;\n\n      border-radius: 50%;\n    }\n\n    div {\n      margin-left: 24px;\n\n      strong {\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #737380;\n        margin-top: 4px;\n      }\n    }\n\n    @media (max-width: 450px) {\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n\n      div {\n        margin-top: 25px;\n        margin-left: 0;\n        text-align: center;\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 40px;\n\n    li {\n      & + li {\n        margin-left: 80px;\n      }\n\n      strong {\n        display: block;\n\n        font-size: 36px;\n        color: #3d3d4d;\n        text-align: center;\n      }\n\n      span {\n        display: block;\n        margin-top: 4px;\n        color: #6c6c80;\n        text-align: center;\n      }\n\n      @media (max-width: 450px) {\n        & + li {\n          margin-left: 50px;\n        }\n\n        strong {\n          font-size: 25px;\n        }\n      }\n    }\n  }\n"]);return X=function(){return n},n}function q(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n\n  a {\n    display: flex;\n    align-items: center;\n\n    text-decoration: none;\n\n    color: #a8a8b3;\n    transition: color 0.3s;\n\n    &:hover {\n      color: #666;\n    }\n  }\n\n  svg {\n    margin-right: 4px;\n  }\n"]);return q=function(){return n},n}var A=u.c.header(q()),B=u.c.section(X()),C=u.c.div(R()),L=function(){var n=Object(r.useState)(null),e=Object(E.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)([]),c=Object(E.a)(i,2),u=c[0],p=c[1],s=Object(x.f)().params;return Object(r.useEffect)((function(){j.get("repos/".concat(s.repository)).then((function(n){o(n.data)})),j.get("repos/".concat(s.repository,"/issues")).then((function(n){p(n.data)}))}),[s.repository]),a.a.createElement(a.a.Fragment,null,a.a.createElement(A,null,a.a.createElement("img",{src:y.a,alt:"GitHub Explorer"}),a.a.createElement(l.b,{to:"/"},a.a.createElement(v.a,{size:16}),"Voltar")),t&&a.a.createElement(B,null,a.a.createElement("header",null,a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,t.full_name),a.a.createElement("p",null,t.description))),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,t.stargazers_count),a.a.createElement("span",null," Stars ")),a.a.createElement("li",null,a.a.createElement("strong",null," ",t.forks_count," "),a.a.createElement("span",null," Forks ")),a.a.createElement("li",null,a.a.createElement("strong",null," ",t.open_issues_count," "),a.a.createElement("span",null," Issues Abertas ")))),a.a.createElement(C,null,u.map((function(n){return a.a.createElement("a",{key:n.id,href:n.html_url},a.a.createElement("div",null,a.a.createElement("strong",null,n.title),a.a.createElement("p",null,n.user.login)),a.a.createElement(v.b,{size:20}))}))))},M=function(){return a.a.createElement(x.c,null,a.a.createElement(x.a,{path:"/",exact:!0,component:N}),a.a.createElement(x.a,{path:"/repositories/:repository+",component:L}))},P=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,null,a.a.createElement(M,null)),a.a.createElement(d,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(P,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2216baf4.chunk.js.map