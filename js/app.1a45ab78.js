(function(e){function A(A){for(var i,a,n=A[0],o=A[1],I=A[2],c=0,l=[];c<n.length;c++)a=n[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(A);while(l.length)l.shift()();return s.push.apply(s,I||[]),t()}function t(){for(var e,A=0;A<s.length;A++){for(var t=s[A],i=!0,n=1;n<t.length;n++){var o=t[n];0!==r[o]&&(i=!1)}i&&(s.splice(A--,1),e=a(a.s=t[0]))}return e}var i={},r={app:0},s=[];function a(A){if(i[A])return i[A].exports;var t=i[A]={i:A,l:!1,exports:{}};return e[A].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=i,a.d=function(e,A,t){a.o(e,A)||Object.defineProperty(e,A,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,A){if(1&A&&(e=a(e)),8&A)return e;if(4&A&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&A&&"string"!=typeof e)for(var i in e)a.d(t,i,function(A){return e[A]}.bind(null,i));return t},a.n=function(e){var A=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(A,"a",A),A},a.o=function(e,A){return Object.prototype.hasOwnProperty.call(e,A)},a.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=A,n=n.slice();for(var I=0;I<n.length;I++)A(n[I]);var u=o;s.push([0,"chunk-vendors"]),t()})({0:function(e,A,t){e.exports=t("56d7")},1206:function(e,A,t){},1857:function(e,A,t){},"29a0":function(e,A,t){},"546b":function(e,A,t){"use strict";var i=t("8ce5"),r=t.n(i);r.a},"56d7":function(e,A,t){"use strict";t.r(A);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),r=function(){var e=this,A=e.$createElement,t=e._self._c||A;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("div",{staticClass:"link",on:{click:function(A){return e.goToProjects()}}},[e._v("Projects")]),t("div",{directives:[{name:"show",rawName:"v-show",value:1==this.loggedIn,expression:"this.loggedIn == true"}],staticClass:"link",on:{click:function(A){return e.goToProfileSettings()}}},[e._v("profileSettings")]),t("div",{directives:[{name:"show",rawName:"v-show",value:"projects"==e.$route.name||this.loggedIn,expression:"$route.name == 'projects' || this.loggedIn"}],staticClass:"link",on:{click:function(A){return e.goTologInOrOut()}}},[e._v(e._s(this.loggedIn?"Log Out":"Log In"))])]),t("router-view")],1)},s=[],a=(t("b0c0"),t("96cf"),t("1da1")),n=t("59ca"),o=t.n(n),I=(t("ea7b"),{created:function(){var e=this;n["auth"]().onAuthStateChanged((function(A){e.loggedIn=!!A}))},data:function(){return{loggedIn:!1}},components:{},methods:{goToProjects:function(){this.$router.push({name:"projects"})},goToProfileSettings:function(){this.$router.push({name:"profileSettings"})},goTologInOrOut:function(){this.loggedIn?this.signOut():this.$router.push({name:"projectsLogin",query:{redirect:this.$route.name}})},signOut:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{n["auth"]().signOut(),this.$router.push({name:this.$route.name})}catch(A){}case 1:case"end":return e.stop()}}),e,this)})));function A(){return e.apply(this,arguments)}return A}()},watch:{$route:{handler:function(e){},deep:!0,immediate:!0}}}),u=I,c=(t("5c0b"),t("2877")),l=Object(c["a"])(u,r,s,!1,null,null,null),g=l.exports,d=t("8c4f"),h=function(){var e=this,A=e.$createElement,i=e._self._c||A;return i("div",{attrs:{id:"links-projects"}},[i("div",{staticClass:"link-projects",on:{click:function(A){return e.goToSnakeGameBoard()}}},[i("img",{attrs:{alt:"Vue logo",src:t("f19e"),width:"200px"}}),e._m(0)])])},C=[function(){var e=this,A=e.$createElement,t=e._self._c||A;return t("p",{attrs:{id:"projects-desc"}},[e._v(" This project is a snake game that I build using vue framework. I encoparated firebase authentication to access the game. Firebase was also used to implement a backend to record the users score and to create a leaderboard"),t("br"),t("strong",[e._v("To use this project please log in")])])}],M={created:function(){var e=this;n["auth"]().onAuthStateChanged((function(A){e.loggedIn=!!A}))},data:function(){return{loggedIn:!1}},methods:{goToSnakeGameBoard:function(){this.loggedIn?this.$router.push({name:"snakeGameBoard"}):this.auth()},auth:function(){this.$router.push({name:"projectsLogin",query:{redirect:"/snakeGameBoard"}})}}},m=M,p=(t("5ec9"),Object(c["a"])(m,h,C,!1,null,"12248c56",null)),f=p.exports,B=function(){var e=this,A=e.$createElement,t=e._self._c||A;return t("div",[t("form",{on:{submit:function(A){return A.preventDefault(),e.pressed(A)}}},[t("div",{staticClass:"login"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"login"},domProps:{value:e.email},on:{input:function(A){A.target.composing||(e.email=A.target.value)}}})]),t("div",{staticClass:"password"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(A){A.target.composing||(e.password=A.target.value)}}})]),t("button",{attrs:{type:"submit"}},[e._v("login")])]),e.error?t("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e(),t("span",[e._v(" Need an account? Click here to "),t("a",{attrs:{href:""},on:{click:function(A){return e.goToRegister()}}},[e._v("register")])]),t("br"),t("span",[e._v(" Forgot password? Click here to "),t("router-link",{attrs:{to:"/resetPassword"}},[e._v("reset password")])],1)])},D=[],Q=(t("ac1f"),t("5319"),{created:function(){this.loggedIn=n["auth"]().currentUser,null!=this.loggedIn&&("/snakeGameBoard"==this.$route.query.redirect?this.$router.push(this.$route.query.redirect||"/"):this.$router.replace({name:"home"}))},methods:{redirect:function(){this.$route.query.redirect,this.$router.push(this.$route.query.redirect||"/")},goToRegister:function(){"/snakeGameBoard"==this.$route.query.redirect?this.$router.push({name:"projectsRegister",query:{redirect:"/login"}}):this.$router.replace({name:"projectsRegister"})},pressed:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n["auth"]().signInWithEmailAndPassword(this.email,this.password);case 3:this.redirect(),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0;case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function A(){return e.apply(this,arguments)}return A}()},data:function(){return{loggedIn:null,email:"",password:"",error:""}}}),v=Q,x=(t("7e9a"),Object(c["a"])(v,B,D,!1,null,"7feb3f82",null)),k=x.exports,w=function(){var e=this,A=e.$createElement,t=e._self._c||A;return t("div",[t("form",{on:{submit:function(A){return A.preventDefault(),e.pressed(A)}}},[t("div",{staticClass:"email"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(A){A.target.composing||(e.email=A.target.value)}}})]),t("div",{staticClass:"password"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(A){A.target.composing||(e.password=A.target.value)}}})]),t("div",{staticClass:"username"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"username",placeholder:"username"},domProps:{value:e.username},on:{input:function(A){A.target.composing||(e.username=A.target.value)}}})]),t("button",{attrs:{type:"submit"}},[e._v("register")])]),e.error?t("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()])},b=[],y={methods:{redirect:function(){"/login"==this.$route.query.redirect?this.$router.push({name:"snakeGameBoard"}):this.$router.replace({name:"home"})},pressed:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var A=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{""==this.username||this.usernameExists()?""==this.username?this.error="missing username":this.error="username already exists":(n["auth"]().createUserWithEmailAndPassword(this.email,this.password).catch((function(e){A.error=e.message})),this.saveData(),this.redirect())}catch(t){this.error=t}case 1:case"end":return e.stop()}}),e,this)})));function A(){return e.apply(this,arguments)}return A}(),saveData:function(){ne.collection("users").doc(this.email).set({username:this.username})},usernameExists:function(){ne.collection("users").where("username","==",this.username).get().then((function(e){return null!=e}))}},data:function(){return{email:"",password:"",error:"",username:""}}},_=y,j=(t("573a"),Object(c["a"])(_,w,b,!1,null,"4f90a98e",null)),O=j.exports,P=function(){var e=this,A=e.$createElement,t=e._self._c||A;return t("div",{staticClass:"snake-game"},[t("div",{attrs:{id:"game"}},[t("h1",[e._v("Note: game gets faster when restart/pla again is pressed")]),t("div",{attrs:{id:"links-snake"}},[t("div",{staticClass:"link-snake",on:{click:this.pause}},[e._v("Play/Pause")]),t("div",{staticClass:"link-snake",attrs:{id:"restartGame"},on:{click:this.restart}},[e._v(e._s(e.gameOver?"Play again":"Restart"))])]),t("canvas",{staticStyle:{border:"1px solid #d3d3d3"},attrs:{id:"snake",width:"608",height:"608"}}),t("p",{attrs:{id:"p1"}},[e._v("Khalid score is :")])]),t("table",{attrs:{id:"leaderboard"}},[e._m(0),e._m(1),e._l(e.tableContent,(function(A){return t("tr",{key:A.id},[t("td",[e._v(e._s(A.username))]),t("td",[e._v(e._s(A.score))])])}))],2)])},E=[function(){var e=this,A=e.$createElement,t=e._self._c||A;return t("tr",[t("th",{attrs:{id:"leaderboard-title",colspan:"2"}},[e._v("Leaderboard")])])},function(){var e=this,A=e.$createElement,t=e._self._c||A;return t("tr",[t("th",[e._v("Username")]),t("th",[e._v("Score")])])}],S=(t("4160"),t("159b"),{data:function(){return{loggedIn:null,square:16,snake:[],game:null,food:{x:16*Math.floor(37*Math.random()),y:16*Math.floor(37*Math.random())},gameOver:!1,d:"",isPaused:!1,score:0,oldScore:0,cvs:null,ctx:null,user:"",username:"",email:"",message:"",tableContent:[]}},computed:{},methods:{init:function(){this.goToSnakeGameBoard(),this.updateUserScore(),document.getElementById("p1").innerHTML=this.username+"'s score is: "+this.score,document.addEventListener("keydown",this.direction),document.addEventListener("keydown",this.pauseGameKeyboard),this.cvs=document.getElementById("snake"),this.ctx=this.cvs.getContext("2d"),this.snake[0]={x:10*this.square,y:12*this.square},this.user=n["auth"]().currentUser,this.email=this.user.email,this.fillLeaderBoard(),this.runGame()},goToSnakeGameBoard:function(){null==this.loggedIn?this.auth():this.$router.push({name:"snakeGameBoard"})},auth:function(){this.$router.push({name:"projectsLogin",query:{redirect:"/snakeGameBoard"}})},direction:function(){var e=event.keyCode;37==e&&"RIGHT"!=this.d?this.d="LEFT":38==e&&"DOWN"!=this.d?this.d="UP":39==e&&"LEFT"!=this.d?this.d="RIGHT":40==e&&"UP"!=this.d&&(this.d="DOWN")},collision:function(e,A){for(var t=0;t<A.length;t++)if(e.x==A[t].x&&e.y==A[t].y)return!0;return!1},pauseGameKeyboard:function(){var e=event.keyCode;32==e&&this.pause()},pause:function(){this.isPaused=!this.isPaused},restart:function(){this.clearBoard(),this.init()},clearBoard:function(){this.game=null,this.snake=[],this.food={x:Math.floor(37*Math.random())*this.square,y:Math.floor(37*Math.random())*this.square},this.gameOver=!1,this.d="",this.isPaused=!1,this.score=0,this.oldScore=0,this.cvs=null,this.ctx=null,document.getElementById("restartGame").innerHTML="Restart",document.getElementById("leaderboard").innerHTML='<tr><th id="leaderboard-title" colspan="2">Leaderboard</th></tr><tr><th>Username</th><th>Score</th></tr>'},playGame:function(){this.ctx.fillStyle="green",this.ctx.fillRect(0,0,608,608);for(var e=0;e<this.snake.length;e++)this.ctx.fillStyle=0==e?"black":"white",this.ctx.fillRect(this.snake[e].x,this.snake[e].y,this.square,this.square);if(this.ctx.fillStyle="blue",this.ctx.fillRect(this.food.x,this.food.y,this.square,this.square),!this.isPaused){var A=this.snake[0].x,t=this.snake[0].y;"LEFT"==this.d&&(A-=this.square),"UP"==this.d&&(t-=this.square),"RIGHT"==this.d&&(A+=this.square),"DOWN"==this.d&&(t+=this.square),A<0&&(A=37*this.square),A>37*this.square&&(A=0),t<0&&(t=37*this.square),t>37*this.square&&(t=0),A==this.food.x&&t==this.food.y?(this.score++,this.updateUserScore(),this.food={x:Math.floor(37*Math.random())*this.square,y:Math.floor(37*Math.random())*this.square}):this.snake.pop(),this.score>this.oldScore&&(this.oldScore=this.score);var i={x:A,y:t};(A<0||A>37*this.square||t<0||t>37*this.square||this.collision(i,this.snake))&&(this.ctx.font="30px Arial",this.ctx.strokeText("Game Over, Score: "+this.score,10,50),this.gameOver=!0,clearInterval(this.game)),this.snake.unshift(i),""==this.message&&""!=this.username&&(this.message=this.username+"'s score is: "),document.getElementById("p1").innerHTML=this.message+this.score}},runGame:function(){clearInterval(this.game),null==this.game&&(this.game=setInterval(this.playGame,100))},updateUserScore:function(){var e=this;ne.collection("users").get().then((function(A){A.forEach((function(A){if(A.id==e.email){var t=A.data();null!=t.username&&(e.username=A.get("username"),null==A.get("score")?e.saveData():A.get("score")<e.score&&e.updateData())}}))}))},saveData:function(){var e=n["auth"]().currentUser,A=ne.collection("users").doc(e.email);A.set({username:this.username,score:this.score})},updateData:function(){var e=n["auth"]().currentUser,A=ne.collection("users").doc(e.email);A.update({score:this.score})},fillLeaderBoard:function(){var e=this,A=ne.collection("users"),t=A.orderBy("score","desc").limit(5);t.get().then((function(A){A.forEach((function(A){var t=A.data();e.tableContent.push(t)}))}))}},mounted:function(){this.loggedIn=n["auth"]().currentUser,this.init()}}),R=S,T=(t("ad17"),Object(c["a"])(R,P,E,!1,null,"0ba390f5",null)),$=T.exports,q=function(){var e=this,A=e.$createElement,t=e._self._c||A;return t("div",[t("form",{on:{submit:function(A){return A.preventDefault(),e.pressed(A)}}},[t("div",{staticClass:"password"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(A){A.target.composing||(e.email=A.target.value)}}})]),t("button",{attrs:{type:"submit"}},[e._v("Reset Password")])]),e.error?t("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()])},U=[],L={methods:{pressed:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var A;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{A=n["auth"](),A.sendPasswordResetEmail(this.email).then((function(){}))}catch(t){this.error=t}case 1:case"end":return e.stop()}}),e,this)})));function A(){return e.apply(this,arguments)}return A}()},data:function(){return{email:"",error:""}}},G=L,N=(t("546b"),Object(c["a"])(G,q,U,!1,null,"0efda5b6",null)),H=N.exports,F=function(){var e=this,A=e.$createElement,t=e._self._c||A;return t("div",[t("form",{on:{submit:function(A){return A.preventDefault(),e.pressed(A)}}},[t("div",{staticClass:"username"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"username",placeholder:"change username"},domProps:{value:e.username},on:{input:function(A){A.target.composing||(e.username=A.target.value)}}})]),t("button",{attrs:{type:"submit"}},[e._v("Save Changes")])]),e.error?t("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()])},J=[],V={methods:{updateUsername:function(){var e=n["auth"]().currentUser,A=ne.collection("users").doc(e.email);A.update({username:this.username})},pressed:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:null!=this.username&&(this.updateUsername(),this.username=""),window.location.reload(),this.error="no changes";case 3:case"end":return e.stop()}}),e,this)})));function A(){return e.apply(this,arguments)}return A}()},data:function(){return{newPassword:null,confirmPassword:null,username:null,email:null,error:""}}},K=V,X=(t("6b19"),Object(c["a"])(K,F,J,!1,null,"122e21ca",null)),z=X.exports;i["a"].use(d["a"]);var W=[{path:"/",name:"projects",component:f},{path:"/projectsLogin",name:"projectsLogin",component:k},{path:"/projectsRegister",name:"projectsRegister",component:O},{path:"/snakeGameBoard",name:"snakeGameBoard",component:$},{path:"/resetPassword",name:"resetPassword",component:H},{path:"/profileSettings",name:"profileSettings",component:z}],Y=new d["a"]({mode:"history",base:"/",routes:W}),Z=Y,ee=t("2f62");i["a"].use(ee["a"]);var Ae=new ee["a"].Store({state:{},mutations:{},actions:{},modules:{}}),te=t("bc3a"),ie=t.n(te);t("e71f");t("ea7b"),i["a"].prototype.$axios=ie.a,i["a"].config.productionTip=!1;var re={apiKey:"AIzaSyAPr2_eWnMbo_uydh7Pa3m3rXE5S4-MJcg",authDomain:"officialsnkaegame.firebaseapp.com",databaseURL:"https://officialsnkaegame.firebaseio.com",projectId:"officialsnkaegame",storageBucket:"officialsnkaegame.appspot.com",messagingSenderId:"150123891628",appId:"1:150123891628:web:eb56914dbbbc337a820809",measurementId:"G-PE2N0XC843"};o.a.initializeApp(re);var se,ae=o.a.firestore(),ne=A["default"]=ae;i["a"].config.productionTip=!1,o.a.auth().onAuthStateChanged((function(e){console.log(e),se||(se=new i["a"]({router:Z,store:Ae,render:function(e){return e(g)}}).$mount("#app"))}))},"573a":function(e,A,t){"use strict";var i=t("1857"),r=t.n(i);r.a},"5c0b":function(e,A,t){"use strict";var i=t("9c0c"),r=t.n(i);r.a},"5ec9":function(e,A,t){"use strict";var i=t("1206"),r=t.n(i);r.a},"6b19":function(e,A,t){"use strict";var i=t("e40c"),r=t.n(i);r.a},"717c":function(e,A,t){},"7e9a":function(e,A,t){"use strict";var i=t("29a0"),r=t.n(i);r.a},"8ce5":function(e,A,t){},"9c0c":function(e,A,t){},ad17:function(e,A,t){"use strict";var i=t("717c"),r=t.n(i);r.a},e40c:function(e,A,t){},f19e:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmIAAAJkCAYAAACyD037AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAvRSURBVHhe7dYxjhVBEETBOQsWx+SOexbsj4SBVU6L0b5SK1IKN+33fMzMzMws2fP19fUBAOD7/Q2x59cPAAC+kRADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMXZ4nv8zfQLAckKMHaa4OjF9AsByQowdprg6MX0CwHJCjB2muDoxfQLAckKMHaa4OjF9AsByQowdprg6MX0CwHJCjB2muDoxfQLAckKMHaa4OjF9AsByQowdprg6MX0CwHJCjB2muDoxfQLAckKMHaa4OjF9AsByQowdprg6MX0CwHJCjB2muDoxfQLAckKMHaa4OjF9AsByQowdprg6MX0CwHJCjB2muDoxfQLAckIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkIMACAixAAAIkKMV/x8fv+X6RMAbifEeMUUVyemTwC4nRDjFVNcnZg+AeB2QoxXTHF1YvoEgNsJMV4xxdWJ6RMAbifEeMUUVyemTwC4nRDjFVNcnZg+AeB2QoxXTHF1YvoEgNsJMV4xxdWJ6RMAbifEeMUUVyemTwC4nRDjFVNcnZg+AeB2QoxXTHF1YvoEgNsJMV4xxdWJ6RMAbifEeMUUVyemTwC4nRDjFVNcnZg+AeB2QoxXTHF1YvoEgNsJMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIgIMQCAiBADAIj8CzEAAL7f8zEzMzOzYJ/PHzW0iK2qdHmpAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=app.1a45ab78.js.map