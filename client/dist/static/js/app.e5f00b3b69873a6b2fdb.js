webpackJsonp([1],{"7zck":function(e,t){},"9JsA":function(e,t,a){e.exports=a.p+"static/img/giphy3.b86480d.png"},BVhe:function(e,t){},"CdT/":function(e,t){},Je2W:function(e,t,a){e.exports=a.p+"static/img/songTracker.f0274c7.png"},MbtY:function(e,t){},NAxt:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),n=a("Xxa5"),s=a.n(n),o=a("exGp"),i=a.n(o),l={methods:{logout:function(){var e=this;return i()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.dispatch("setToken",null),e.$store.dispatch("setUser",null),e.$router.push({name:"home"});case 3:case"end":return t.stop()}},t,e)}))()}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-toolbar",{staticClass:"light-green darken-2",attrs:{fixed:""}},[a("v-toolbar-title",{staticClass:"mr-4"},[a("router-link",{staticClass:"home",attrs:{tag:"span",to:{name:"home"}}},[e._v("\n      Eddie Franco\n    ")])],1),e._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",dark:"",to:{name:"portfolio"}}},[e._v("\n      Portfolio\n    ")]),e._v(" "),a("v-btn",{attrs:{flat:"",dark:"",to:{name:"contact"}}},[e._v("\n      Contact\n    ")])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-toolbar-items",[e.$store.state.isUserLoggedIn?e._e():a("v-btn",{attrs:{flat:"",dark:"",to:{name:"register"}}},[e._v("\n      Sign Up\n    ")]),e._v(" "),e.$store.state.isUserLoggedIn?e._e():a("v-btn",{attrs:{flat:"",dark:"",to:{name:"login"}}},[e._v("\n      Login\n    ")]),e._v(" "),e.$store.state.isUserLoggedIn?a("v-btn",{attrs:{flat:"",dark:""},on:{click:e.logout}},[e._v("\n      Logout\n    ")]):e._e()],1)],1)},staticRenderFns:[]};var u={name:"App",components:{PageHeader:a("VU/8")(l,c,!1,function(e){a("sHVs")},"data-v-5816ca8a",null).exports}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",[t("page-header"),this._v(" "),t("main",[t("v-container",[t("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(u,d,!1,function(e){a("MbtY")},null,null).exports,p=a("/ocq"),f=a("a9a6"),v=a.n(f),h={data:function(){return{profileImage:v.a}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-flex",{attrs:{xs8:""}},[a("h1",[e._v("My Story")]),e._v(" "),a("img",{staticClass:"profileImage",attrs:{src:e.profileImage}}),e._v(" "),a("p",{attrs:{id:"p1"}},[e._v("I had an opportunity to move to Denver, CO to ensure I could be closer to the job market upon completing school. My credits from Kansas Wesleyan did not transfer properly and would have required an additional 4 years of school to complete my Bachelor of Computer Science at any other University, even though I had 59 current credits. During this time I worked for a Moving Company. Starting as a labor employee and working my way up to supervisor I was exposed to the Payroll Process as well as the Scheduling. I was able to build spreadsheets and forms to complete essential functions that were being doing by hand for my boss.")]),e._v(" "),a("p",{attrs:{id:"p2"}},[e._v("These 'beginner' spreadsheets as I would call them in comparison to the current system I've written for Black Belt Movers were things such as an Hours Log and a Clock In/Out System for the movers. My boss' boss saw the new spreadsheets and how things were being done and requested I work in the office as a Reservationist and work into an IT role as I proved a need for one.")]),e._v(" "),a("p",{attrs:{id:"p3"}},[e._v("That was 2 years ago when I started in the 'corporate office' as it is referred to at Black Belt. Since then I have updated the entire system to be completely paperless and operating solely through Google Apps Suite. This includes the 'Booking Ticket' form that is filled out anytime a phone call is taken, a Time Clock System for the Office, monitoring the build and maintaining a WordPress website, as well as automated Reconcile Spreadsheets that pull data from 10+ separate spreadsheets.")]),e._v(" "),a("p",{attrs:{id:"p4"}},[e._v('I am looking forward to being able to market myself as well as increase my skillset 100 times over. "If I know one thing it is that I know nothing", has been a piece of advise I try to take to heart when it comes to programming. I look forward to having a career where programming is my entire focus, rather than multi-tasking multiple roles in a smaller corporate office setting.')])])],1)},staticRenderFns:[]};var b=a("VU/8")(h,g,!1,function(e){a("CdT/")},"data-v-60904cdc",null).exports,_=a("mtWM"),k=a.n(_),x=function(){return k.a.create({baseURL:"http://localhost:8081/"})},w=function(e){return x().post("register",e)},y=function(e){return x().post("login",e)},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"white elevation-2"},[a("v-toolbar",{staticClass:"light-green darken-2",attrs:{flat:"",dense:"",dark:""}},[a("v-toolbar-title",[e._v(e._s(e.title))]),e._v(" "),e._t("action")],2),e._v(" "),a("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[e._t("default",[e._v("\n      No slot content defined.\n    ")])],2)],1)},staticRenderFns:[]};var E=a("VU/8")({props:["title"]},C,!1,function(e){a("BVhe")},"data-v-5df3b671",null).exports,I={data:function(){return{email:"",password:"",error:null}},methods:{register:function(){var e=this;return i()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w({email:e.email,password:e.password});case 3:a=t.sent,e.$store.dispatch("setToken",a.data.token),e.$store.dispatch("setUser",a.data.user),e.$router.push({name:"home"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()}},components:{Panel:E}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-flex",{attrs:{xs6:"","offset-xs3":""}},[a("panel",{attrs:{title:"Register"}},[a("form",{attrs:{name:"vue-tracker-form",autocomplete:"off"}},[a("v-text-field",{attrs:{type:"email",label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("br"),e._v(" "),a("v-text-field",{attrs:{type:"password",label:"Password",autocomplete:"new-password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"danger-alert",domProps:{innerHTML:e._s(e.error)}}),e._v(" "),a("v-btn",{staticClass:"light-green darken-2",attrs:{dark:""},on:{click:e.register}},[e._v("Register")])],1)],1)],1)},staticRenderFns:[]};var $=a("VU/8")(I,T,!1,function(e){a("ir8O")},"data-v-38a4ad51",null).exports,R={data:function(){return{email:"",password:"",error:null}},methods:{login:function(){var e=this;return i()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y({email:e.email,password:e.password});case 3:a=t.sent,e.$store.dispatch("setToken",a.data.token),e.$store.dispatch("setUser",a.data.user),e.$router.push({name:"home"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()}},components:{Panel:E}},U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-flex",{attrs:{xs6:"","offset-xs3":""}},[a("panel",{attrs:{title:"Login"}},[a("v-text-field",{attrs:{type:"email",label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("br"),e._v(" "),a("v-text-field",{attrs:{type:"password",label:"Password",autocomplete:"new-password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"danger-alert",domProps:{innerHTML:e._s(e.error)}}),e._v(" "),a("v-btn",{staticClass:"light-green darken-2",attrs:{dark:""},on:{click:e.login}},[e._v("Login")])],1)],1)],1)},staticRenderFns:[]};var P=a("VU/8")(R,U,!1,function(e){a("NAxt")},"data-v-782db1a0",null).exports,S=a("PD+E"),V=a.n(S),L=a("9JsA"),M=a.n(L),F=a("Je2W"),j=a.n(F),H=a("jxWm"),O=a.n(H),q={data:function(){return{cards:[{image:V.a,title:"Open Roaders",info:"Plan your road trip or plan your errands with us.",github:"https://github.com/SenorEdbot/project1"},{image:M.a,title:"Giphy",info:"Search gifs easily with giphy",github:"https://github.com/SenorEdbot/GifTastic"},{image:j.a,title:"Song Tracker",info:"Save your favorite songs and search between them.",github:"https://github.com/SenorEdbot/SongTracker"},{image:O.a,title:"Trivia Game",info:"Check to see how in tune you are with your Eminem facts.",github:"https://github.com/SenorEdbot/TriviaGame"}]}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{staticClass:"cardFlex",attrs:{xs12:"",sm12:"","d-flex":""}},e._l(e.cards,function(t){return a("v-card",{key:t.title,staticClass:"my-2 mx-2 cards"},[a("v-img",{staticClass:"cardImage",attrs:{src:t.image,"aspect-ratio":"2.75"}}),e._v(" "),a("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v(e._s(t.title))]),e._v(" "),a("div",[e._v(e._s(t.info))])])]),e._v(" "),a("v-card-actions",{staticClass:"justify-left"},[a("v-btn",{attrs:{flat:"",color:"light-green darken-4",href:t.github,target:"_blank"}},[e._v("GitHub")]),e._v(" "),e.$store.state.isUserLoggedIn?a("v-btn",{attrs:{flat:"",color:"light-green darken-4"}},[e._v("Favorite")]):e._e()],1)],1)}),1)},staticRenderFns:[]};var A={components:{PortfolioCard:a("VU/8")(q,N,!1,function(e){a("oPVM")},"data-v-00a336d3",null).exports,Panel:E}},B={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-layout",[t("v-flex",{attrs:{xs8:"","offset-xs2":""}},[t("panel",{attrs:{title:"Portfolio"}},[t("portfolio-card")],1)],1)],1)],1)},staticRenderFns:[]};var G=a("VU/8")(A,B,!1,function(e){a("RCki")},"data-v-cc9b6b08",null).exports,W=function(e){return x().post("contact",e)},J={data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=25||"Name must be less than 25 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],reason:"",error:null}},methods:{submit:function(){var e=this;return i()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=13;break}return t.prev=1,t.next=4,W({name:e.name,email:e.email,reason:e.reason});case 4:a=t.sent,e.$store.dispatch("setContactEmail",a.data.contactEmail),alert("Form Submitted successfully."),e.$router.push({name:"home"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.error=t.t0.response.data.error;case 13:case"end":return t.stop()}},t,e,[[1,10]])}))()},clear:function(){this.$refs.form.reset()}},components:{Panel:E}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-flex",{attrs:{xs8:"","offset-xs2":""}},[a("panel",{attrs:{title:"Contact"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.nameRules,counter:25,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("v-text-field",{attrs:{rules:[function(e){return!!e||"Reason is required"}],label:"Reason for contacting",required:""},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}}),e._v(" "),a("div",{staticClass:"danger-alert",domProps:{innerHTML:e._s(e.error)}}),e._v(" "),a("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("\r\n          submit\r\n        ")]),e._v(" "),a("v-btn",{on:{click:e.clear}},[e._v("clear")])],1)],1)],1)],1)},staticRenderFns:[]};var z=a("VU/8")(J,D,!1,function(e){a("T/37")},"data-v-ea886238",null).exports;r.default.use(p.a);var Y=new p.a({mode:"history",routes:[{path:"/",name:"home",component:b},{path:"/register",name:"register",component:$},{path:"/login",name:"login",component:P},{path:"/portfolio",name:"portfolio",component:G},{path:"/contact",name:"contact",component:z}]}),K=a("3EgV"),X=a.n(K),Q=a("9JMe"),Z=a("NYxO"),ee=a("424j");r.default.use(Z.a);var te=new Z.a.Store({strict:!0,plugins:[Object(ee.a)()],state:{token:null,user:null,isUserLoggedIn:!1,contactEmail:null},mutations:{setToken:function(e,t){e.token=t,e.isUserLoggedIn=!!t},setUser:function(e,t){e.user=t},setContactEmail:function(e,t){e.contactEmail=t}},actions:{setToken:function(e,t){(0,e.commit)("setToken",t)},setUser:function(e,t){(0,e.commit)("setUser",t)},setContactEmail:function(e,t){(0,e.commit)("setContactEmail",t)}}});a("7zck");r.default.config.productionTip=!1,r.default.use(X.a),Object(Q.sync)(te,Y),new r.default({el:"#app",router:Y,store:te,components:{App:m},template:"<App/>"})},"PD+E":function(e,t,a){e.exports=a.p+"static/img/openRoaders1.2ec37c0.png"},RCki:function(e,t){},"T/37":function(e,t){},a9a6:function(e,t,a){e.exports=a.p+"static/img/me.3d2957e.jpg"},ir8O:function(e,t){},jxWm:function(e,t,a){e.exports=a.p+"static/img/triviaGame2.d6a8b01.png"},oPVM:function(e,t){},sHVs:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e5f00b3b69873a6b2fdb.js.map