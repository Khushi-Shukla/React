(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{147:function(e,t,s){},148:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(2),r=s.n(c),a=s(12),i=s.n(a),o=(s(92),s(93),s(94),s(95),s(17)),l=s(18),j=s(20),d=s(19),h=s(3),m=function(){return Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(n.jsx)("p",{children:"Loading . . ."})]})},b="http://localhost:3001/",u=s(21);function O(e){var t=e.item,s=e.isLoading,c=e.errMess;return s?Object(n.jsx)(m,{}):c?Object(n.jsx)("h4",{children:c}):Object(n.jsx)(u.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(n.jsxs)(h.d,{children:[Object(n.jsx)(h.g,{src:b+t.image,alt:t.name}),Object(n.jsxs)(h.e,{children:[Object(n.jsx)(h.k,{children:t.name}),t.designation?Object(n.jsx)(h.i,{children:t.designation}):null,Object(n.jsx)(h.j,{children:t.description})]})]})})}var x=function(e){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row align-items-start",children:[Object(n.jsx)("div",{className:"col-12 col-md m-1",children:Object(n.jsx)(O,{item:e.dishes,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(n.jsx)("div",{className:"col-12 col-md m-1",children:Object(n.jsx)(O,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})}),Object(n.jsx)("div",{className:"col-12 col-md m-1",children:Object(n.jsx)(O,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess})})]})})},f=s(7);function p(e){var t=e.dish;e.onClick;return Object(n.jsx)(h.d,{children:Object(n.jsxs)(f.b,{to:"/menu/".concat(t.id),children:[Object(n.jsx)(h.g,{width:"100%",src:b+t.image,alt:t.name}),Object(n.jsx)(h.h,{children:Object(n.jsx)(h.k,{children:t.name})})]})})}var g=function(e){var t=e.dishes.dishes.map((function(e){return Object(n.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(n.jsx)(p,{dish:e})},e.id)}));return e.dishes.isLoading?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(m,{})})}):e.dishes.errMess?void e.dishes.errMess:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(h.a,{children:[Object(n.jsx)(h.b,{children:Object(n.jsx)(f.b,{to:"/home",children:"Home"})}),Object(n.jsx)(h.b,{active:!0,children:"Menu"})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:"Menu"}),Object(n.jsx)("hr",{})]})]}),Object(n.jsx)("div",{className:"row",children:t})]})},v=s(16),N=s(6);function y(e){var t=e.dish;return null!=t?Object(n.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(n.jsx)(u.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(n.jsxs)(h.d,{children:[Object(n.jsx)(h.g,{top:!0,src:b+t.image,alt:t.name}),Object(n.jsxs)(h.e,{children:[Object(n.jsx)(h.k,{children:t.name}),Object(n.jsx)(h.j,{children:t.description})]})]})})}):Object(n.jsx)("div",{})}function M(e){var t=e.comments,s=e.postComment,c=e.dishId;if(null==t)return Object(n.jsx)("div",{});var r=Object(n.jsx)(u.Stagger,{in:!0,children:t.map((function(e){return Object(n.jsx)(u.Fade,{in:!0,children:Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:e.comment}),Object(n.jsxs)("p",{children:["-- ",e.author," , ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})]},e.id)})}))});return Object(n.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(n.jsx)("h4",{children:" Comments "}),Object(n.jsx)("ul",{className:"list-unstyled",children:r}),Object(n.jsx)(L,{dishId:c,postComment:s})]})}var w=function(e){return function(t){return!t||t.length<=e}};var L=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(l.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen}),console.log("i")}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment),console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e))}},{key:"render",value:function(){var e,t=this;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(h.c,{onClick:this.toggleModal,outline:!0,children:Object(n.jsx)("span",{className:"fa fa-sm fa-pencil",children:" Submit Comment"})})}),Object(n.jsxs)(h.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(n.jsx)(h.v,{toggle:this.toggleModal,children:" Submit Comment"}),Object(n.jsx)(h.u,{children:Object(n.jsxs)(N.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(n.jsxs)(h.B,{className:"form-group",children:[Object(n.jsx)(h.r,{htmlFor:"rating",md:10,children:"Rating"}),Object(n.jsx)(h.l,{md:12,children:Object(n.jsxs)(N.Control.select,{model:".rating",name:"rating",className:"form-control",children:[Object(n.jsx)("option",{children:"1"}),Object(n.jsx)("option",{children:"2"}),Object(n.jsx)("option",{children:"3"}),Object(n.jsx)("option",{children:"4"}),Object(n.jsx)("option",{children:"5"})]})})]}),Object(n.jsxs)(h.B,{className:"form-group",children:[Object(n.jsx)(h.r,{htmlFor:"author",md:10,children:"Your Name"}),Object(n.jsxs)(h.l,{md:12,children:[Object(n.jsx)(N.Control.text,{model:".author",placeholder:"Your Name",name:"author",className:"form-control",validators:{minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:w(15)}}),Object(n.jsx)(N.Errors,{className:"text-danger",model:".author",show:"touched",messages:{minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(n.jsxs)(h.B,{className:"form-group",children:[Object(n.jsx)(h.r,{htmlFor:"comment",md:10,children:"Comment"}),Object(n.jsx)(h.l,{md:12,children:Object(n.jsx)(N.Control.textarea,{model:".comment",rows:"6",name:"comment",className:"form-control"})})]}),Object(n.jsx)(h.B,{className:"form-group",children:Object(n.jsx)(h.l,{md:{size:10},children:Object(n.jsx)(h.c,{type:"submit",color:"primary",children:"Submit"})})})]})})]})]})}}]),s}(c.Component),k=function(e){var t=e.dish,s=e.comments,c=e.postComment,r=e.isLoading,a=e.errMess;return r?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(m,{})})}):a?void 0:null!=t?Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(h.a,{children:[Object(n.jsx)(h.b,{children:Object(n.jsx)(f.b,{to:"/menu",children:"Menu"})}),Object(n.jsx)(h.b,{active:!0,children:t.name})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("hr",{})]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(y,{dish:t}),Object(n.jsx)(M,{comments:s,postComment:c,dishId:t.id})]})]}):Object(n.jsx)("div",{})};function C(e){return e.isLoading?Object(n.jsx)(m,{}):e.errMess?Object(n.jsx)("h4",{children:e.errMess}):e.Leader.map((function(e){return Object(n.jsx)(u.Stagger,{in:!0,children:Object(n.jsxs)(h.s,{children:[Object(n.jsx)(h.s,{left:!0,top:!0,href:"#",children:Object(n.jsx)("div",{className:"col mr-5",children:Object(n.jsx)(u.Fade,{in:!0,children:Object(n.jsx)(h.s,{object:!0,src:b+e.image,alt:e.name})})})}),Object(n.jsx)(h.s,{body:!0,children:Object(n.jsx)("div",{className:"col mb-5",children:Object(n.jsxs)(u.Fade,{in:!0,children:[Object(n.jsx)(h.s,{heading:!0,children:e.name}),Object(n.jsx)(h.s,{subHeading:!0,children:e.designation}),Object(n.jsx)(h.s,{children:e.description})]})})})]})})}))}var S=function(e){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(h.a,{children:[Object(n.jsx)(h.b,{children:Object(n.jsx)(f.b,{to:"/home",children:"Home"})}),Object(n.jsx)(h.b,{active:!0,children:"About Us"})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:"About Us"}),Object(n.jsx)("hr",{})]})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsxs)("div",{className:"col-12 col-md-6",children:[Object(n.jsx)("h2",{children:"Our History"}),Object(n.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(n.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(n.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(n.jsx)("div",{className:"col-12 col-md-5",children:Object(n.jsxs)(h.d,{children:[Object(n.jsx)(h.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(n.jsx)(h.e,{children:Object(n.jsxs)("dl",{className:"row p-1",children:[Object(n.jsx)("dt",{className:"col-6",children:"Started"}),Object(n.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(n.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(n.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(n.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(n.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(n.jsx)("dt",{className:"col-6",children:"Employees"}),Object(n.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(h.d,{children:Object(n.jsx)(h.e,{className:"bg-faded",children:Object(n.jsxs)("blockquote",{className:"blockquote",children:[Object(n.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(n.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(n.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h2",{children:"Corporate Leadership"})}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)(h.s,{list:!0}),Object(n.jsx)(C,{Leader:e.leader,isLoading:e.isLoading,errMess:e.errMess})]})]})]})},E=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(v.a)(n)),n.toggleModal=n.toggleModal.bind(Object(v.a)(n)),n.handleLogin=n.handleLogin.bind(Object(v.a)(n)),n}return Object(l.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.value),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.y,{dark:!0,expand:"md",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(h.A,{onClick:this.toggleNav}),Object(n.jsx)(h.z,{className:"mr-auto",href:"/",children:Object(n.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(n.jsxs)(h.m,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(n.jsxs)(h.w,{navbar:!0,children:[Object(n.jsx)(h.x,{children:Object(n.jsx)(f.c,{className:"nav-link",to:"/home",children:Object(n.jsx)("span",{className:"fa fa-home fa-lg",children:"Home"})})}),Object(n.jsx)(h.x,{children:Object(n.jsx)(f.c,{className:"nav-link",to:"/aboutus",children:Object(n.jsx)("span",{className:"fa fa-info fa-lg",children:"About Us"})})}),Object(n.jsx)(h.x,{children:Object(n.jsx)(f.c,{className:"nav-link",to:"/menu",children:Object(n.jsx)("span",{className:"fa fa-list fa-lg",children:"Menu"})})}),Object(n.jsx)(h.x,{children:Object(n.jsx)(f.c,{className:"nav-link",to:"/contactus",children:Object(n.jsx)("span",{className:"fa fa-address-card fa-lg",children:"Contact Us"})})})]}),Object(n.jsx)(h.w,{className:"ml-auto",navbar:!0,children:Object(n.jsx)(h.x,{children:Object(n.jsx)(h.c,{outline:!0,onClick:this.toggleModal,children:Object(n.jsx)("span",{className:"fa fa-sign-in fa-lg",children:"Login"})})})})]})]})}),Object(n.jsx)(h.q,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row row-header",children:Object(n.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(n.jsx)("h1",{children:"Ristorante Con Fusion"}),Object(n.jsx)("p",{children:"We take inspiration from the World's best cuisines and create a unique fusion experience. Our lipsmacking creations will tickle you culinary senses!"})]})})})}),Object(n.jsxs)(h.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(n.jsx)(h.v,{toggle:this.toggleModal,children:"Login"}),Object(n.jsx)(h.u,{children:Object(n.jsxs)(h.n,{onSubmit:this.handleLogin,children:[Object(n.jsxs)(h.o,{children:[Object(n.jsx)(h.r,{htmlFor:"username",children:"Username"}),Object(n.jsx)(h.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(n.jsxs)(h.o,{children:[Object(n.jsx)(h.r,{htmlFor:"password",children:"Password"}),Object(n.jsx)(h.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(n.jsx)(h.o,{check:!0,children:Object(n.jsxs)(h.r,{check:!0,children:[Object(n.jsx)(h.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember Me"]})}),Object(n.jsx)(h.c,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),s}(c.Component);var F=function(e){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row justify-content-center",children:[Object(n.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(n.jsx)("h5",{children:"Links"}),Object(n.jsxs)("ul",{className:"list-unstyled",children:[Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/aboutus",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/menu",children:"Menu"})}),Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/contactus",children:"Contact"})})]})]}),Object(n.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(n.jsx)("h5",{children:"Our Address"}),Object(n.jsxs)("address",{children:["121, Clear Water Bay Road",Object(n.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(n.jsx)("br",{}),"HONG KONG",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(n.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(n.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(n.jsx)("i",{className:"fa fa-google-plus"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(n.jsx)("i",{className:"fa fa-facebook"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(n.jsx)("i",{className:"fa fa-linkedin"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(n.jsx)("i",{className:"fa fa-twitter"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(n.jsx)("i",{className:"fa fa-youtube"})}),Object(n.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(n.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{className:"col-auto",children:Object(n.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})},D=function(e){return e&&e.length},T=function(e){return function(t){return!t||t.length<=e}},I=function(e){return function(t){return t&&t.length>=e}},A=function(e){return!isNaN(Number(e))},R=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},B=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(l.a)(s,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(h.a,{children:[Object(n.jsx)(h.b,{children:Object(n.jsx)(f.b,{to:"/home",children:"Home"})}),Object(n.jsx)(h.b,{active:!0,children:"Contact Us"})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:"Contact Us"}),Object(n.jsx)("hr",{})]})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h3",{children:"Location Information"})}),Object(n.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(n.jsx)("h5",{children:"Our Address"}),Object(n.jsxs)("address",{children:["121, Clear Water Bay Road",Object(n.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(n.jsx)("br",{}),"HONG KONG",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-envelope"}),": ",Object(n.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(n.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(n.jsx)("h5",{children:"Map of our Location"})}),Object(n.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(n.jsxs)("div",{className:"btn-group",role:"group",children:[Object(n.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(n.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(n.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(n.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(n.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(n.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h3",{children:"Send us your Feedback"})}),Object(n.jsx)("div",{class:"col-12 col-md-9",children:Object(n.jsxs)(N.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(n.jsxs)(h.B,{className:"form-group",children:[Object(n.jsx)(h.r,{htmlFor:"firstname",md:2,children:"First Name"}),Object(n.jsxs)(h.l,{md:10,children:[Object(n.jsx)(N.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:D,minLength:I(3),maxLength:T(15)}}),Object(n.jsx)(N.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(n.jsxs)(h.B,{className:"form-group",children:[Object(n.jsx)(h.r,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(n.jsxs)(h.l,{md:10,children:[Object(n.jsx)(N.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:D,minLength:I(3),maxLength:T(15)}}),Object(n.jsx)(N.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(n.jsxs)(h.B,{className:"form-group",children:[Object(n.jsx)(h.r,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(n.jsxs)(h.l,{md:10,children:[Object(n.jsx)(N.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. number",className:"form-control",validators:{required:D,isNumber:A,minLength:I(3),maxLength:T(15)}}),Object(n.jsx)(N.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less",isNumber:"Must be a number"}})]})]}),Object(n.jsxs)(h.B,{className:"form-group",children:[Object(n.jsx)(h.r,{htmlFor:"email",md:2,children:"Email"}),Object(n.jsxs)(h.l,{md:10,children:[Object(n.jsx)(N.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:D,validEmail:R}}),Object(n.jsx)(N.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email address"}})]})]}),Object(n.jsxs)(h.B,{className:"form-group",children:[Object(n.jsx)(h.l,{md:{size:6,offset:2},children:Object(n.jsx)("div",{className:"form-check",children:Object(n.jsxs)(h.r,{check:!0,children:[Object(n.jsx)(N.Control.checkbox,{model:".agree",className:"form-check-input",name:"agree"}),Object(n.jsx)("strong",{children:"May we contact you?"})]})})}),Object(n.jsx)(h.l,{md:{size:3,offset:1},children:Object(n.jsxs)(N.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(n.jsx)("option",{children:"Tel."}),Object(n.jsx)("option",{children:"Email"})]})})]}),Object(n.jsxs)(h.B,{className:"form-group",children:[Object(n.jsx)(h.r,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(n.jsx)(h.l,{md:10,children:Object(n.jsx)(N.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(n.jsx)(h.B,{className:"form-group",children:Object(n.jsx)(h.l,{md:{size:10,offset:2},children:Object(n.jsx)(h.c,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),s}(c.Component),q=s(8),P=s(24),H="ADD_COMMENT",_="ADD_DISHES",Y="DISHES_LOADING",G="DISHES_FAILED",U="ADD_COMMENTS",W="COMMENTS_FAILED",z="PROMOS_LOADING",J="ADD_PROMOS",K="PROMOS_FAILED",Z="LEADERS_LOADING",$="LEADERS_FAILED",Q="ADD_LEADERS",V=function(e,t,s,n){return function(c){var r={dishId:e,rating:t,author:s,comment:n};return r.date=(new Date).toISOString(),fetch(b+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return c(function(e){return{type:H,payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}},X=function(){return function(e){return e({type:Y}),fetch(b+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:_,payload:e}}(t))})).catch((function(t){return e((s=t.message,{type:G,payload:s}));var s}))}},ee=function(){return{type:z}},te=function(e){return{type:K,payload:e}},se=function(e){return{type:J,payload:e}},ne=function(){return function(e){return e({type:Z}),fetch(b+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:Q,payload:e}}(t))})).catch((function(t){return e((s=t.message,{type:$,payload:s}));var s}))}},ce=function(){return function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:U,payload:e}}(t))})).catch((function(t){return e((s=t.message,{type:W,payload:s}));var s}))}},re=s(51),ae=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{}),Object(n.jsx)(re.TransitionGroup,{children:Object(n.jsx)(re.CSSTransition,{classNames:"page",timeout:300,children:Object(n.jsxs)(q.d,{location:this.props.location,children:[Object(n.jsx)(q.b,{path:"/home",component:function(){return Object(n.jsx)(x,{dishes:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),Object(n.jsx)(q.b,{exact:!0,path:"/menu",component:function(){return Object(n.jsx)(g,{dishes:e.props.dishes})}}),Object(n.jsx)(q.b,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(n.jsx)(k,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(n.jsx)(q.b,{path:"/aboutus",component:function(){return Object(n.jsx)(S,{leader:e.props.leaders.leaders,isLoading:e.props.leaders.isLoading,errMess:e.props.leaders.errMess})}}),Object(n.jsx)(q.b,{exact:!0,path:"/contactus",component:function(){return Object(n.jsx)(B,{resetFeedbackForm:e.props.resetFeedbackForm})}}),Object(n.jsx)(q.a,{to:"/home"})]})},this.props.location.key)}),Object(n.jsx)(F,{})]})}}]),s}(c.Component),ie=Object(q.g)(Object(P.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,s,n,c){return e(V(t,s,n,c))},resetFeedbackForm:function(){e(N.actions.reset("feedback"))},fetchComments:function(){return e(ce())},fetchPromos:function(){return e((function(e){return e(ee()),fetch(b+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(se(t))})).catch((function(t){return e(te(t.message))}))}))},fetchDishes:function(){e(X())},fetchLeaders:function(){return e(ne())}}}))(ae)),oe=(s(147),s(5)),le=s(28),je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(oe.a)(Object(oe.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case Y:return Object(oe.a)(Object(oe.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case G:return Object(oe.a)(Object(oe.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(oe.a)(Object(oe.a)({},e),{},{errMess:null,comments:t.payload});case W:return Object(oe.a)(Object(oe.a)({},e),{},{errMess:t.payload});case H:var s=t.payload;return Object(oe.a)(Object(oe.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(oe.a)(Object(oe.a)({},e),{},{isLoading:!1,errMess:null,leaders:t.payload});case Z:return Object(oe.a)(Object(oe.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case $:return Object(oe.a)(Object(oe.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(oe.a)(Object(oe.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case z:return Object(oe.a)(Object(oe.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case K:return Object(oe.a)(Object(oe.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},be=s(85),ue=s(86),Oe=s.n(ue),xe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},fe=Object(le.createStore)(Object(le.combineReducers)(Object(oe.a)({dishes:je,comments:de,promotions:me,leaders:he},Object(N.createForms)({feedback:xe}))),Object(le.applyMiddleware)(be.a,Oe.a)),pe=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)(P.Provider,{store:fe,children:Object(n.jsx)(f.a,{children:Object(n.jsx)("div",{children:Object(n.jsx)(ie,{})})})})}}]),s}(c.Component),ge=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,149)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(pe,{})}),document.getElementById("root")),ge()},95:function(e,t,s){}},[[148,1,2]]]);
//# sourceMappingURL=main.ff8d47ea.chunk.js.map