(this.webpackJsonpparadise=this.webpackJsonpparadise||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=a(7),i=a(8),s=a(9),u=a(20),m=a.n(u),d=Object(s.b)((function(e){return{cartLength:e.cart.cart_items.length}}))((function(e){e.cartLength;return r.a.createElement("header",{class:"blog-header py-2"},r.a.createElement("div",{class:"row flex-nowrap justify-content-between align-items-center mb-5"},r.a.createElement("nav",{class:"navbar navbar-expand-md navbar-dark fixed-top bg-dark justify-content-center"},r.a.createElement(o.b,{class:"navbar-brand active-p",href:"/"},r.a.createElement("img",{src:m.a,alt:"paradise logo",height:"70",width:"70"})," ","Paradise Competitions"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarCollapse",style:{flexGrow:0}},r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement(o.b,{class:"nav-link",to:"/"},"Home ",r.a.createElement("span",{class:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/competitions"},"Competitions")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(o.b,{class:"nav-link",to:"/#howtowin"},"How to play")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(o.b,{class:"nav-link",to:"/live-draw"},"Live Draws")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(o.b,{class:"nav-link",to:"'podium"},"Podium"))),r.a.createElement("div",{class:"mt-2 mt-md-0"},r.a.createElement(o.b,{to:"/login"},r.a.createElement("button",{class:"btn btn-success rounded-curve",type:"submit"},"Client Login")),r.a.createElement(o.b,{to:"/register"},r.a.createElement("button",{class:"btn btn-light rounded-curve",type:"submit"},"Register")))))))})),p=a(81),E=(a(78),a(79),a(80),function(){return r.a.createElement("footer",{class:"container"},r.a.createElement("p",null,"Copyright \xa9 2020 Paradise Competitions",r.a.createElement("span",null,"All right reserved"),r.a.createElement("span",null,r.a.createElement("a",{href:"mailto:info@paradisecompetitions.eu"},"info@paradisecompetitions.eu")),r.a.createElement("span",null,r.a.createElement("a",{href:"tel:0834999160"},"0834 999 160")),r.a.createElement("span",null,r.a.createElement("a",{href:"#"},"Terms and Conditions"))))}),b=a(22),f=a(56),h=a(57),v=a(5),g={loading:!1,error:null,success:!1,user:null},y={loading:!1,error:null,success:!1,all:[],competition:null,featuredCompetition:[]},O={cart_items:[],cart_total:0,coupon:null,error:null},w={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_LOADING":return e=Object(v.a)(Object(v.a)({},e),{},{loading:!0,error:null});case"AUTH_SUCCESS":return e=Object(v.a)(Object(v.a)({},e),{},{loading:!1,error:null,success:!0,user:t.payload});case"AUTH_ERROR":return e=Object(v.a)(Object(v.a)({},e),{},{loading:!1,error:t.payload,success:!1,user:null});case"AUTH_LOGOUT":return e={token:null,loading:!1,error:null,success:!0};default:return e}},competition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMPETITION_LOADING":return e=Object(v.a)(Object(v.a)({},e),{},{loading:!0,error:null});case"COMPETITIONS_LOAD_SUCCESS":return e=Object(v.a)(Object(v.a)({},e),{},{loading:!1,error:null,success:!0,all:t.payload});case"COMPETITION_LOAD_SUCCESS":return e=Object(v.a)(Object(v.a)({},e),{},{loading:!1,error:null,success:!0,competition:t.payload});case"FEATURED_LOAD_SUCCESS":return e=Object(v.a)(Object(v.a)({},e),{},{loading:!1,error:null,success:!0,featuredCompetition:t.payload});case"COMPETITION_LOAD_ERROR":return e=Object(v.a)(Object(v.a)({},e),{},{loading:!1,error:t.payload,success:!1,all:[],competition:null});case"FEATURED_LOAD_ERROR":return e=Object(v.a)(Object(v.a)({},e),{},{loading:!1,error:t.payload,success:!1,all:[],featuredCompetition:null});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":case"REMOVE_FROM_CART":return e=Object(v.a)(Object(v.a)({},e),t.payload);case"FETCH_CART":e=Object(v.a)(Object(v.a)({},e),t.payload);case"ERROR":return e=Object(v.a)(Object(v.a)({},e),{},{error:t.payload});default:return e}}},C=Object(b.combineReducers)(w),j=Object(b.createStore)(C,Object(h.composeWithDevTools)(Object(b.applyMiddleware)(f.a)));j.subscribe((function(){return console.log(j.getState())}));var k=j,_=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{store:k},r.a.createElement(d,null),r.a.createElement(p.a,null,t),r.a.createElement(E,null)))},x=a(11),T=a(24),S=a(59).create({baseURL:"https://paradisebackend.herokuapp.com",headers:{"Content-Type":"application/json"}});S.interceptors.request.use((function(e){var t=localStorage.getItem("auth-token");return e.headers.Authorization=t?"Token ".concat(t):"",e}));var I=S,L=function(e){return{type:"COMPETITION_LOAD_ERROR",payload:e}},A={getFeatured:function(){return function(e){return e({type:"COMPETITION_LOADING"}),I.get("/api/featured_competition_list/").then((function(e){return e.data})).catch((function(e){return e.response})).then((function(t){e({type:"FEATURED_LOAD_SUCCESS",payload:t})})).catch((function(t){return e(L(t))}))}}},D=Object(s.b)((function(e){return{featured:e.competition.featuredCompetition||[]}}),A)((function(e){var t=e.featured,a=e.getFeatured,c=Object(n.useState)(0),l=Object(x.a)(c,2),i=l[0],s=l[1];Object(n.useEffect)((function(){a()}),[]);return r.a.createElement(T.a,{activeIndex:i,onSelect:function(e,t){s(e)}},t.map((function(e,t){return r.a.createElement(T.a.Item,{key:t},r.a.createElement("img",{className:"d-block w-100",src:e.associated_product.image,alt:"First slide"}),r.a.createElement(T.a.Caption,null,r.a.createElement("h1",null,e.title),r.a.createElement("p",null,r.a.createElement(o.b,{to:"/competitions/".concat(e.id),className:"btn btn-success rounded-curve"},"Enter Now"))))})))})),R=function(e){var t=e.text;return r.a.createElement("h1",{class:"text-teal-300 text-4xl my-8"},t)},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"row",id:"howtowin"},r.a.createElement("div",{class:"col-md-12 blog-main"},r.a.createElement("div",{class:"page-post"},r.a.createElement("h2",{class:"page-post-title pb-4 mb-4 active-p"},"How It Works"),r.a.createElement("p",null,r.a.createElement("span",{class:"active-p"},"Step 1.")," Pick amazing prizes and enter competition."),r.a.createElement("p",null,r.a.createElement("span",{class:"active-p"},"Step 2.")," Select tickets,or let the Lucky Dip selector choose a letter and a number for you."),r.a.createElement("p",null,r.a.createElement("span",{class:"active-p"},"Step 3.")," Finalize payment. Recive your product and be lucky... Join our winners podium! Daily winners!"," "),r.a.createElement("p",null,"Paradise Competitions has already made"," ",r.a.createElement("span",{class:"active-p"},"126")," Winners and given away"," ",r.a.createElement("span",{class:"active-p"},"26, 566, 99")," of prizes")))),r.a.createElement("div",{class:"row justify-content-md-center"},r.a.createElement("div",{class:"col-md-auto col-lg-7"},r.a.createElement("div",{class:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},r.a.createElement("div",{class:"col-auto d-none d-lg-block"},r.a.createElement("img",{src:m.a,alt:"paradise logo",height:"250",width:"220"})),r.a.createElement("div",{class:"col p-4 d-flex flex-column position-static"},r.a.createElement("h4",{class:"mb-0"},"You've got to be in it to win it!"),r.a.createElement("p",{class:"mt-5 mb-5"},"**** *Trust Pilot."),r.a.createElement("div",{class:"mt-2 mt-md-0"},r.a.createElement("button",{class:"btn btn-info",type:"submit"},"Like 11K"),r.a.createElement("button",{class:"btn btn-info",type:"submit"},"Join Community")))))))},F={getCompetitions:function(){return function(e){return e({type:"COMPETITION_LOADING"}),I.get("/api/competition_list/").then((function(e){return e.data})).catch((function(e){return e.response})).then((function(t){e({type:"COMPETITIONS_LOAD_SUCCESS",payload:t})})).catch((function(t){return e(L(t))}))}}},N=Object(s.b)((function(e){return{competitions:e.competition.all||[]}}),F)((function(e){var t=e.competitions,a=e.getCompetitions;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-12 blog-main"},r.a.createElement("div",{class:"page-post"},r.a.createElement("h2",{class:"page-post-title pb-4 pt-4 mt-4 mb-4 active-p"},"Active Competitions"))),t.map((function(e,t){return r.a.createElement("div",{class:"col-md-3"},r.a.createElement("div",{class:"card text-white bg-secondary mb-4 shadow-sm"},r.a.createElement("img",{class:"card-img-top",src:e.associated_product.image,alt:"paradise logo",height:"160"}),r.a.createElement("div",{class:"card-body text-center"},r.a.createElement("h5",{class:"card-text"},r.a.createElement(o.b,{to:"/competitions/".concat(e.id),style:{color:"white"}},e.title)),r.a.createElement("div",{class:"justify-content-between align-items-center"},r.a.createElement("p",null,"$ ",e.price)))))}))))})),M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"page-post"},r.a.createElement("h2",{class:"page-post-title pb-2 pt-4 mb-4 mt-4 active-p"},"Top 5 all time winners")),r.a.createElement("div",{class:"row justify-content-md-center"},r.a.createElement("div",{class:"col-md-auto col-lg-12"},r.a.createElement("div",{class:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative",style:{height:"510px",backgroundColor:"aqua"}},r.a.createElement("div",{class:"col d-flex flex-column position-static"},r.a.createElement("div",{id:"myCarousel",class:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{class:"carousel-indicators"},r.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":"0",class:"active"}),r.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":"2"})),r.a.createElement("div",{class:"carousel-inner"},r.a.createElement("div",{class:"carousel-item main-carousel active"},r.a.createElement("img",{class:"bd-placeholder-img",width:"100%",height:"100%",src:"assets/img/1.png",focusable:"false"}),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"carousel-caption"},r.a.createElement("h1",null,"Hero Prizes!"),r.a.createElement("p",null,r.a.createElement("a",{class:"btn btn-lg btn-primary",href:"#",role:"button"},"Enter Now")))))),r.a.createElement("a",{class:"carousel-control-prev",href:"#myCarousel",role:"button","data-slide":"prev"},r.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{class:"sr-only"},"Previous")),r.a.createElement("a",{class:"carousel-control-next",href:"#myCarousel",role:"button","data-slide":"next"},r.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{class:"sr-only"},"Next")))),r.a.createElement("div",{class:"col-auto p-4 mt-4 d-flex d-lg-block text-dark text-center"},r.a.createElement("h4",{class:"mb-0"},"Thaibault Soulert!"),r.a.createElement("h4",{class:"mt-5 mb-5"},"Proud Winner of the"),r.a.createElement("h3",{class:"mt-5 mb-5"},"IPhone 11"),r.a.createElement("h4",{class:"mt-5 mb-5"},"For just under $3,"),r.a.createElement("h4",{class:"mt-5 mb-5"},"Live draw of ",r.a.createElement("br",null),r.a.createElement("span",null,"Thu, May 7, 2020, 12:30 PM")))),r.a.createElement("h4",{class:"text-center pt-4"},"Love it. Live it. Paradise.")))))},U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(R,{text:"Customer satisfation"}),r.a.createElement("div",null,"Trust pilot widget here")),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-12"},r.a.createElement("div",{class:"page-post text-center"},r.a.createElement("h5",null,"Find us on."),r.a.createElement("div",{class:"mt-2 mt-md-0"},r.a.createElement("button",{class:"btn btn-outline-light rounded-circle"},"Y"),r.a.createElement("button",{class:"btn btn-outline-light rounded-circle"},"T"),r.a.createElement("button",{class:"btn btn-outline-light rounded-circle"},"F"),r.a.createElement("button",{class:"btn btn-outline-light rounded-circle"},"I"),r.a.createElement("button",{class:"btn btn-outline-light rounded-circle"},"W")),r.a.createElement("img",{src:m.a,alt:"paradise logo",height:"120",width:"100"})))))},G=a(32),H=a.n(G),z=[H.a,H.a,H.a],W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-12 mb-4"},r.a.createElement("h5",{class:"text-center"},"Gift shop")),z.map((function(e,t){return r.a.createElement("div",{class:"col-md-4"},r.a.createElement("div",{class:"card text-white bg-dark mb-4 shadow-sm"},r.a.createElement("img",{class:"card-img-top",src:e,alt:"paradise logo",height:"160"}),r.a.createElement("div",{class:"card-body text-center"},r.a.createElement("h5",{class:"card-text"},"Food Supply."))))})),r.a.createElement("div",{class:"col-md-12"},r.a.createElement("div",{class:"page-post text-center"},r.a.createElement("button",{type:"button",class:"btn btn-light rounded-curve faq-btn mb-4 mt-4"},"FAQ"),r.a.createElement("h5",{class:"mb-4 mt-4"},"Payment Method."),r.a.createElement("div",{class:"mt-2 mt-md-0"},r.a.createElement("button",{class:"btn btn-outline-light rounded-circle"},"Y"),r.a.createElement("button",{class:"btn btn-outline-light rounded-circle"},"T"),r.a.createElement("button",{class:"btn btn-outline-light rounded-circle"},"F"),r.a.createElement("button",{class:"btn btn-outline-light rounded-circle"},"I"),r.a.createElement("button",{class:"btn btn-outline-light rounded-circle"},"W"))))))},B=function(e){localStorage.setItem("isLoggedIn",!0),localStorage.setItem("auth-token",e)},Y=function(){localStorage.removeItem("auth-token"),localStorage.removeItem("isLoggedIn")},q=function(){return Object(n.useEffect)((function(){Y()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(P,null),r.a.createElement(N,null),r.a.createElement(M,null),r.a.createElement(U,null),r.a.createElement(W,null))},J=a(25),$=a(124),Q=a(62),K=a(127),V=a(101),X=a(14),Z=a.n(X),ee=a(19),te=function(e){return e.data},ae=function(e){var t=e.response;if(t)throw t.data;throw e},ne={headers:{"content-type":"application/json"}},re=function(e){var t=e.first_name,a=e.last_name,n=e.username,r=e.email,c=e.password;return I.post("accounts/api/auth/register",{first_name:t,last_name:a,username:n,email:r,password:c},ne).then(te).catch(ae)},ce=function(e){return{type:"AUTH_SUCCESS",payload:e}},le=function(e){return{type:"AUTH_ERROR",payload:e}},oe={authLogin:function(e){return function(t){return t({type:"AUTH_LOADING"}),function(e){var t=e.username,a=e.password;return I.post("accounts/api/auth/login",{username:t,password:a},ne).then(te).catch(ae)}(e).then((function(e){var a=e.user,n=e.token;B(n),t(ce(a))})).catch((function(e){return t(le(e))}))}}},ie=Object(s.b)((function(e){return{auth:e.auth}}),oe)((function(e){var t=e.authLogin,a=(e.auth,Object(i.g)()),c=Object(n.useState)({username:"",password:""}),l=Object(x.a)(c,2),o=l[0],s=l[1],u=function(e){s(Object(v.a)(Object(v.a)({},o),{},Object(J.a)({},e.target.name,e.target.value))),console.log(o)};return r.a.createElement("div",null,r.a.createElement($.a,null,r.a.createElement(Q.a,{lg:4}),r.a.createElement(Q.a,{lg:4},r.a.createElement(K.a,null,r.a.createElement(K.a.Group,{controlId:"formBasicEmail"},r.a.createElement(K.a.Label,null,"Email address"),r.a.createElement(K.a.Control,{name:"username",type:"email",placeholder:"Enter email",onChange:u,value:o.username}),r.a.createElement(K.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(K.a.Group,{controlId:"formBasicPassword"},r.a.createElement(K.a.Label,null,"Password"),r.a.createElement(K.a.Control,{name:"password",type:"password",onChange:u,value:o.password,placeholder:"Password"})),r.a.createElement(K.a.Group,{controlId:"formBasicCheckbox"}),r.a.createElement(V.a,{variant:"primary",onClick:function(e){e.preventDefault(),t(o),a.push("/dashboard")},type:"submit"},"Submit"))),r.a.createElement(Q.a,{lg:4})))})),se={authRegister:function(e){return function(){var t=Object(ee.a)(Z.a.mark((function t(a){var n,r,c;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"AUTH_LOADING"}),t.prev=1,t.next=4,re(e);case 4:n=t.sent,r=n.user,c=n.token,B(c),a(ce(r)),t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",a(le(t.t0)));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}},ue=Object(s.b)((function(e){return{auth:e.auth}}),se)((function(e){var t=e.authRegister,a=(e.auth,Object(i.g)()),c=Object(n.useState)({first_name:"",last_name:"",username:"",email:"",password:""}),l=Object(x.a)(c,2),o=l[0],s=l[1],u=function(e){s(Object(v.a)(Object(v.a)({},o),{},Object(J.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement($.a,null,r.a.createElement(Q.a,{lg:4}),r.a.createElement(Q.a,{lg:4},r.a.createElement(K.a,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"First name"),r.a.createElement(K.a.Control,{placeholder:"first name",name:"first_name",type:"text",onChange:u,value:o.first_name})),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Last name"),r.a.createElement(K.a.Control,{placeholder:"last name",name:"last_name",type:"text",onChange:u,value:o.last_name})),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Username"),r.a.createElement(K.a.Control,{placeholder:"username",name:"username",type:"text",onChange:u,value:o.username})),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Email address"),r.a.createElement(K.a.Control,{placeholder:"email",name:"email",type:"text",onChange:u,value:o.email})),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Password"),r.a.createElement(K.a.Control,{name:"password",type:"password",onChange:u,value:o.password,placeholder:"Password"})),r.a.createElement(V.a,{variant:"primary",onClick:function(e){e.preventDefault(),t(o),a.push("/dashboard")},type:"submit"},"Submit"))),r.a.createElement(Q.a,{lg:4})))})),me=function(){return r.a.createElement("div",null,"You have login in this is your Dashboard")},de=a(31),pe=function(e){var t=e.response;if(t)throw t.data;throw e},Ee=function(){return I.get("api/order_summary/").then((function(e){return e.data})).catch(pe)},be=function(e){return{type:"ADD_TO_CART",payload:e}},fe=function(e){return{type:"ERROR",payload:e}},he=a(125),ve=function(e){var t=e.setTicket,a=e.ticketLetterStart,c=e.ticketLetterEnd,l=e.ticketsPerLetter,o=Object(n.useState)(null),i=Object(x.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(null),d=Object(x.a)(m,2),p=d[0],E=d[1],b=a.charCodeAt(),f=c.charCodeAt(),h=l-1,v=function(){for(var e=[],t=b;t<=f;t++)e.push(String.fromCharCode(t));return e},g=function(e,t){for(var a=String(e);a.length<t;)a="0"+a;return a},y=function(){for(var e=[],t=h<=99?"2":"3",a=0;a<=h;a++)e.push(g(a,t));return e},O=function(e){t(e),E(e)};return r.a.createElement("div",null,r.a.createElement("div",null,v().map((function(e,t){return r.a.createElement("button",{style:{background:s===e&&"red"},key:t,onClick:function(){return u(e)}},e)})),r.a.createElement("button",{onClick:function(){var e=v()[Math.floor(Math.random()*v().length)];u(e);var t=y()[Math.floor(Math.random()*h)],a=String(e+t);O(a)}},"luckyDip"),r.a.createElement("div",null,s&&y().map((function(e,t){var a=String(s+e);return r.a.createElement("button",{style:{background:a===p&&"red"},key:a,onClick:function(){return O(a)}},a)})))))},ge=function(e){delete e.id,delete e.title;for(var t=[],a=Object.keys(e).length/2,n=1;n<=a;n++){var r={};r.type=e["media_".concat(n,"_type")],r.media=e["media_".concat(n)],t.push(r)}return t},ye=function(e){var t=e.mediaDetails,a=Object(n.useState)(0),c=Object(x.a)(a,2),l=c[0],o=c[1],i="https://paradisebackend.herokuapp.com",s=ge(t),u=function(e){return r.a.createElement("video",{autoPlay:!0},r.a.createElement("source",{src:"".concat(i).concat(e),type:"video/mp4"}),"Your browser does not support the video tag.")},m=function(e){return r.a.createElement("img",{src:"".concat(i).concat(e),alt:"competition"})};return r.a.createElement("div",{style:{height:"500px"}},r.a.createElement(T.a,{activeIndex:l,onSelect:function(e,t){o(e)}},s.map((function(e,t){return r.a.createElement(T.a.Item,{key:t},function(e){switch(e.type){case"image":return m(e.media);case"video":return u(e.media)}}(e))}))))},Oe={getCompetition:function(e){return function(t){return t({type:"COMPETITION_LOADING"}),function(e){return I.get("/api/competition/".concat(e,"/")).then((function(e){return e.data})).catch((function(e){return e.response}))}(e).then((function(e){t({type:"COMPETITION_LOAD_SUCCESS",payload:e})})).catch((function(e){return t(L(e))}))}},addCompetition:function(e,t){return function(a){(function(e,t){return I.post("api/add-competition-to-cart/",{pk:e,selected_ticket:t},{}).then((function(e){return e.data})).catch(pe)})(e,t).then(Object(ee.a)(Z.a.mark((function e(){var t;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee();case 2:return t=e.sent,e.abrupt("return",a(be(t)));case 4:case"end":return e.stop()}}),e)})))).catch((function(e){alert(e.message),a(fe(e))}))}}},we=Object(s.b)((function(e){return{competition:e.competition.competition}}),Oe)((function(e){var t=e.match,a=e.competition,c=e.getCompetition,l=e.addCompetition,o=Object(n.useState)(null),i=Object(x.a)(o,2),s=i[0],u=i[1];Object(n.useEffect)((function(){(function(){var e=Object(ee.a)(Z.a.mark((function e(){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.params.id,e.next=3,c(a);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h3",null,"Prices"),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(ye,{mediaDetails:a.prize_to_win}),r.a.createElement("b",null,r.a.createElement(de.a,{date:a.expiration_date}))),r.a.createElement("div",null,"677 left"),r.a.createElement(he.a,{now:77,label:"77%",animated:!0}),r.a.createElement("h3",null,"Description"),r.a.createElement("div",null,"Title: ",a.title),r.a.createElement("div",null,r.a.createElement("h6",null,"Groups"),r.a.createElement("ul",null,a.groups.map((function(e,t){return r.a.createElement("li",null,e)})))),r.a.createElement("div",null,"Prize to win: ",a.prize_to_win.title),r.a.createElement("div",null,"description: ",a.description),r.a.createElement("br",null),r.a.createElement("div",null,"Select Your ticket"),r.a.createElement("div",null,"First click a letter, then cjoose a number. Repeat this in case you want more tickets.",r.a.createElement("br",null),"Our Lucky Dip makes a random choice."),r.a.createElement(ve,{setTicket:u,ticketLetterStart:a.ticket_letter_start,ticketLetterEnd:a.ticket_letter_end,ticketsPerLetter:a.tickets_per_letter}),r.a.createElement("button",{onClick:function(){return function(){if(localStorage.getItem("isLoggedIn")){if(!s)return alert("Please select a ticket");l.apply(void 0,arguments),alert("booked")}else alert("Please Login")}(a.id,s)}},"BookNow"))))})),Ce=a(66),je=function(e){var t=e.component,a=(e.auth,Object(Ce.a)(e,["component","auth"]));return r.a.createElement(i.b,Object.assign({},a,{render:function(e){return localStorage.getItem("isLoggedIn")?r.a.createElement(t,Object.assign({},a,e)):r.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ke=a(126),_e={fetchCart:function(){return function(e){Ee().then((function(t){return e({type:"FETCH_CART",payload:t})}))}},removeCompetition:function(e){return function(t){console.log("clicekd"),function(e){return I.post("api/remove-competition-from-cart/",{order_item_id:e}).then((function(e){return e.data})).catch(pe)}(e).then(Object(ee.a)(Z.a.mark((function e(){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee();case 2:return a=e.sent,e.abrupt("return",t(be(a)));case 4:case"end":return e.stop()}}),e)})))).catch((function(e){t(fe(e))}))}}},xe=Object(s.b)((function(e){return{cart:e.cart.cart_items}}),_e)((function(e){var t=e.cart,a=e.fetchCart,c=e.removeCompetition;return Object(n.useEffect)((function(){a(),console.log(t.length,"ffff")}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){for(var e=0;e<t.length;e++){var a=new Date(t[e].date_added).setMinutes(3),n=(new Date).getTime();console.log(a<=n),a<=n&&c(t[e].id)}}),1e3);return function(){return clearInterval(e)}}),[t]),r.a.createElement(ke.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Competition"),r.a.createElement("th",null,"Ticket"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{style:{backgroundColor:"white"}},r.a.createElement("td",null,e.id),r.a.createElement("td",null," ",e.competition," "),r.a.createElement("td",null," ",e.selected_ticket," "),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return c(e.id)}},"Remove")))}))))})),Te=a(120),Se=(Object(s.b)((function(e){return{competitions:e.competition.all||[]}}))((function(e){var t=e.competitions;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{text:"LiveDraws"}),r.a.createElement($.a,null,t.map((function(e,t){return r.a.createElement(Q.a,{md:"6",lg:"3",key:e.id},r.a.createElement(Te.a,{className:"competition"},r.a.createElement(Te.a.Body,null,r.a.createElement(Te.a.Text,null,"Live Draw In:"),r.a.createElement(Te.a.Text,null,r.a.createElement(de.a,{date:e.expiration_date})),r.a.createElement(Te.a.Text,null,"Days Hrs Min Sec")),r.a.createElement(Te.a.Img,{variant:"top",src:e.associated_product.image,height:"100",width:"180"}),r.a.createElement(o.b,{to:"/live-draw/".concat(e.id)},r.a.createElement(Te.a.Body,null,r.a.createElement(Te.a.Title,null,e.title),r.a.createElement(Te.a.Text,null,e.price)))))}))))})),function(e){var t=e.response;if(t)throw t.data;throw e}),Ie=function(){return I.get("api/live-draw/").then((function(e){return e.data})).catch(Se)},Le=a(63),Ae=a.n(Le),De=function(){var e=Object(n.useState)(null),t=Object(x.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(ee.a)(Z.a.mark((function e(){var t;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a?r.a.createElement(Ae.a,{url:a.url,config:{facebook:{appId:a.appID}}}):r.a.createElement("div",null,"loading")};var Re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:q}),r.a.createElement(i.b,{exact:!0,path:"/competitions",component:N}),r.a.createElement(i.b,{exact:!0,path:"/login",component:ie}),r.a.createElement(i.b,{exact:!0,path:"/register",component:ue}),r.a.createElement(i.b,{exact:!0,path:"/dashboard",component:me}),r.a.createElement(i.b,{path:"/competitions/:id",component:we}),r.a.createElement(je,{exact:!0,path:"/cart",component:xe}),r.a.createElement(i.b,{exact:!0,path:"/live-draw/:id",component:De}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(Re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,t,a){e.exports=a.p+"static/media/palmtree.aaabd1c2.png"},32:function(e,t,a){e.exports=a.p+"static/media/bottle.361f155a.jpg"},68:function(e,t,a){e.exports=a(119)},78:function(e,t,a){e.exports=a.p+"static/media/youtube-brands.ec04b8ee.svg"},79:function(e,t,a){e.exports=a.p+"static/media/telegram-brands.7a59ca51.svg"},80:function(e,t,a){e.exports=a.p+"static/media/facebook-brands.82940574.svg"}},[[68,1,2]]]);
//# sourceMappingURL=main.8d8aebe8.chunk.js.map