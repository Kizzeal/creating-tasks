(function(e){function t(t){for(var r,c,s=t[0],i=t[1],d=t[2],l=0,b=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1652:function(e,t,n){},2054:function(e,t,n){"use strict";n("a9c7")},"2b63":function(e,t,n){"use strict";n("1652")},"2e62":function(e,t,n){"use strict";n("45b7")},3051:function(e,t,n){},"45b7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["e"])("div",{id:"nav"},null,-1);function a(e,t){var n=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["d"])(r["a"],null,[o,Object(r["g"])(n)],64)}n("2054");var c=n("6b0d"),s=n.n(c);const i={},d=s()(i,[["render",a]]);var u=d,l=n("6c02"),b={class:"home"},f={class:"container"};function m(e,t,n,o,a,c){var s=Object(r["y"])("Header"),i=Object(r["y"])("AddTask"),d=Object(r["y"])("Tasks");return Object(r["r"])(),Object(r["d"])("div",b,[Object(r["e"])("div",f,[Object(r["g"])(s,{onToggleAddTask:c.toggleAddTask,title:"Task Tracker",showAddTask:a.showAddTask},null,8,["onToggleAddTask","showAddTask"]),Object(r["G"])(Object(r["e"])("div",null,[Object(r["g"])(i,{onAddTask:c.addTask},null,8,["onAddTask"])],512),[[r["E"],a.showAddTask]]),Object(r["g"])(d,{onToggleReminder:c.toggleReminder,onDeleteTask:c.deleteTask,tasks:a.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])])])}var p=n("5530"),k=n("2909");n("99af"),n("4de4"),n("d3b7"),n("d81d");function O(e,t,n,o,a,c){var s=Object(r["y"])("Button");return Object(r["r"])(),Object(r["d"])("header",null,[Object(r["e"])("h1",null,Object(r["A"])(n.title),1),Object(r["g"])(s,{class:"effect",onBtnClick:t[0]||(t[0]=function(t){return e.$emit("toggle-add-task")}),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"#df211a9f":"#42b9839f"},null,8,["text","color"])])}function j(e,t,n,o,a,c){return Object(r["r"])(),Object(r["d"])("button",{onClick:t[0]||(t[0]=function(e){return c.onClick()}),style:Object(r["n"])({background:n.color,transition:1}),class:"btn"},Object(r["A"])(n.text),5)}var h={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}};n("2b63");const v=s()(h,[["render",j],["__scopeId","data-v-6a4da170"]]);var g=v,T={name:"FirstPage",props:{title:{type:String},showAddTask:{type:Boolean}},components:{Button:g}};n("8b69");const y=s()(T,[["render",O],["__scopeId","data-v-e6f3d1e2"]]);var A=y;function x(e,t,n,o,a,c){var s=Object(r["y"])("Task");return Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(n.tasks,(function(t){return Object(r["r"])(),Object(r["d"])("div",{key:t.id},[Object(r["g"])(s,{onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)},onDeleteTask:function(n){return e.$emit("delete-task",t.id)},task:t},null,8,["onToggleReminder","onDeleteTask","task"])])})),128)}function w(e,t,n,o,a,c){return Object(r["r"])(),Object(r["d"])("div",{onDblclick:t[1]||(t[1]=function(t){return e.$emit("toggle-reminder",n.task.id)}),class:Object(r["m"])([n.task.reminder?"reminder":"","task"])},[Object(r["e"])("h3",null,[Object(r["f"])(Object(r["A"])(n.task.text)+" ",1),Object(r["e"])("i",{onClick:t[0]||(t[0]=function(t){return e.$emit("delete-task",n.task.id)}),class:"fas fa-times"})]),Object(r["e"])("p",null,Object(r["A"])(n.task.day),1)],34)}var S={name:"Task",props:{task:Object}};n("a678");const _=s()(S,[["render",w],["__scopeId","data-v-5b66f5dc"]]);var D=_,M={name:"Tasks",props:{tasks:Array},components:{Task:D},emits:["delete-task","toggle-reminder"]};const P=s()(M,[["render",x]]);var C=P,R=function(e){return Object(r["u"])("data-v-5c8672e4"),e=e(),Object(r["s"])(),e},$={class:"form-control"},B=R((function(){return Object(r["e"])("label",{for:""},"Task",-1)})),G={class:"form-control"},H=R((function(){return Object(r["e"])("label",{for:""},"Day & Time",-1)})),I={class:"form-control form-control-check"},U=R((function(){return Object(r["e"])("label",{for:""},"Set Reminder",-1)})),V=R((function(){return Object(r["e"])("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)}));function F(e,t,n,o,a,c){return Object(r["r"])(),Object(r["d"])("form",{onSubmit:t[3]||(t[3]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(r["e"])("div",$,[B,Object(r["G"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.text=e}),name:"text",placeholder:"Add Text"},null,512),[[r["D"],a.text]])]),Object(r["e"])("div",G,[H,Object(r["G"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.day=e}),name:"day",placeholder:"Add Day & Time"},null,512),[[r["D"],a.day]])]),Object(r["e"])("div",I,[U,Object(r["G"])(Object(r["e"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.reminder=e}),name:"reminder"},null,512),[[r["C"],a.reminder]])]),V],32)}var J={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={id:Math.floor(1e3*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}};n("692f");const E=s()(J,[["render",F],["__scopeId","data-v-5c8672e4"]]);var q=E,z={name:"Home",components:{Header:A,Tasks:C,AddTask:q},data:function(){return{tasks:[],showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask},addTask:function(e){this.tasks=[].concat(Object(k["a"])(this.tasks),[e])},deleteTask:function(e){confirm("Are you sure?")&&(this.tasks=this.tasks.filter((function(t){return t.id!==e})))},toggleReminder:function(e){this.tasks=this.tasks.map((function(t){return t.id===e?Object(p["a"])(Object(p["a"])({},t),{},{reminder:!t.reminder}):t}))}},created:function(){this.tasks=[{id:1,text:"Doctor's Appointment",day:"March 1st at 11:30am",reminder:!0},{id:2,text:"Meeting at School",day:"March 1st at 1:30pm",reminder:!0},{id:3,text:"Food Shopping",day:"March 1st at 4:00pm",reminder:!1}]}};n("2e62");const K=s()(z,[["render",m]]);var L=K,N=[{path:"/",name:"Home",component:L}],Q=Object(l["a"])({history:Object(l["b"])(),routes:N}),W=Q;Object(r["c"])(u).use(W).mount("#app")},"692f":function(e,t,n){"use strict";n("d7ae")},"8b69":function(e,t,n){"use strict";n("abcf")},a678:function(e,t,n){"use strict";n("3051")},a9c7:function(e,t,n){},abcf:function(e,t,n){},d7ae:function(e,t,n){}});
//# sourceMappingURL=app.441aa9d4.js.map