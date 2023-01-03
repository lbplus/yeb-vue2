(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df7e035a"],{1937:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("工资查询")])},n=[],i={name:"SalSearch"},r=i,s=a("2877"),o=Object(s["a"])(r,l,n,!1,null,null,null);e["default"]=o.exports},"21c7":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("工资表")])},n=[],i={name:"SalTable"},r=i,s=a("2877"),o=Object(s["a"])(r,l,n,!1,null,null,null);e["default"]=o.exports},"2bc5":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.showAddSalary}},[t._v("添加工资账套")]),a("el-button",{attrs:{type:"success",icon:"el-icon-refresh"},on:{click:t.initSalaries}})],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-table",{attrs:{data:t.salaries,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"40"}}),a("el-table-column",{attrs:{prop:"name",label:"账套名称",width:"120"}}),a("el-table-column",{attrs:{prop:"basicSalary",label:"基本工资",width:"70"}}),a("el-table-column",{attrs:{prop:"trafficSalary",label:"交通补助",width:"70"}}),a("el-table-column",{attrs:{prop:"lunchSalary",label:"午餐补助",width:"70"}}),a("el-table-column",{attrs:{prop:"bonus",label:"奖金",width:"70"}}),a("el-table-column",{attrs:{prop:"createDate",label:"启用时间",width:"100"}}),a("el-table-column",{attrs:{label:"养老金",align:"center"}},[a("el-table-column",{attrs:{prop:"pensionPer",label:"比率",width:"70"}}),a("el-table-column",{attrs:{prop:"pensionBase",label:"基数",width:"70"}})],1),a("el-table-column",{attrs:{label:"医疗保险",align:"center"}},[a("el-table-column",{attrs:{prop:"medicalPer",label:"比率",width:"70"}}),a("el-table-column",{attrs:{prop:"medicalBase",label:"基数",width:"70"}})],1),a("el-table-column",{attrs:{label:"公积金",align:"center"}},[a("el-table-column",{attrs:{prop:"accumulationFundPer",label:"比率",width:"70"}}),a("el-table-column",{attrs:{prop:"accumulationFundBase",label:"基数",width:"70"}})],1),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.showEditSalary(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.deleteSalary(e.row)}}},[t._v("删除")])]}}])})],1)],1),a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticStyle:{display:"flex","justify-content":"space-around","align-item":"center"}},[a("el-steps",{attrs:{direction:"vertical",active:t.activeItemIndex}},t._l(t.salaryItemName,(function(t,e){return a("el-step",{key:e,attrs:{title:t}})})),1),t._l(t.salary,(function(e,l,n){return a("el-input",{directives:[{name:"show",rawName:"v-show",value:t.activeItemIndex==n,expression:"activeItemIndex == index"}],key:n,staticStyle:{width:"200px"},attrs:{placeholder:"请输入"+t.salaryItemName[n]},model:{value:t.salary[l],callback:function(e){t.$set(t.salary,l,e)},expression:"salary[title]"}})}))],2),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.preStep}},[t._v(t._s(10==t.activeItemIndex?"取消":"上一步"))]),a("el-button",{attrs:{type:"primary"},on:{click:t.nextStep}},[t._v(t._s(10==t.activeItemIndex?"确认":"下一步"))])],1)])],1)},n=[],i=(a("b0c0"),{name:"SalSob",data:function(){return{dialogTitle:"",dialogVisible:!1,salaries:[],activeItemIndex:0,salaryItemName:["账套名称","基本工资","交通补助","午餐补助","奖金","养老金比率","养老金基数","医疗保险比率","医疗保险基数","公积金比率","公积金基数"],salary:{name:"",basicSalary:0,trafficSalary:0,lunchSalary:0,bonus:0,pensionPer:0,pensionBase:0,medicalPer:0,medicalBase:0,accumulationFundPer:0,accumulationFundBase:0}}},mounted:function(){this.initSalaries()},methods:{deleteSalary:function(t){var e=this;this.$confirm("此操作将永久删除该"+t.name+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.deleteRequest("/salary/sob/delete/"+t.id).then((function(t){t&&e.initSalaries()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},showEditSalary:function(t){this.dialogTitle="编辑工资账套",this.activeItemIndex=0,this.dialogVisible=!0,this.salary.id=t.id,this.salary.name=t.name,this.salary.basicSalary=t.basicSalary,this.salary.trafficSalary=t.trafficSalary,this.salary.lunchSalary=t.lunchSalary,this.salary.bonus=t.bonus,this.salary.pensionPer=t.pensionPer,this.salary.pensionBase=t.pensionBase,this.salary.medicalPer=t.medicalPer,this.salary.medicalBase=t.medicalBase,this.salary.accumulationFundPer=t.accumulationFundPer,this.salary.accumulationFundBase=t.accumulationFundBase},preStep:function(){if(0!=this.activeItemIndex)return 10==this.activeItemIndex?(this.dialogVisible,void fasle):void this.activeItemIndex--},nextStep:function(){var t=this;10!=this.activeItemIndex?this.activeItemIndex++:this.salary.id?this.putRequest("/salary/sob/update",this.salary).then((function(e){e&&(t.initSalaries(),t.dialogVisible=!1)})):this.postRequest("/salary/sob/add",this.salary).then((function(e){e&&(t.initSalaries(),t.dialogVisible=!1)}))},initSalaries:function(){var t=this;this.getRequest("/salary/sob/get-All").then((function(e){e&&(t.salaries=e)}))},showAddSalary:function(){this.dialogTitle="添加工资账套",this.activeItemIndex=0,this.dialogVisible=!0,this.salary={name:"",basicSalary:0,trafficSalary:0,lunchSalary:0,bonus:0,pensionPer:0,pensionBase:0,medicalPer:0,medicalBase:0,accumulationFundPer:0,accumulationFundBase:0}}}}),r=i,s=a("2877"),o=Object(s["a"])(r,l,n,!1,null,null,null);e["default"]=o.exports},"6ac98":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{attrs:{data:t.emps,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",align:"left",width:"55"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",align:"left",width:"120",fixed:""}}),a("el-table-column",{attrs:{prop:"workID",label:"工号",align:"left",width:"120"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱地址",align:"left",width:"200"}}),a("el-table-column",{attrs:{prop:"phone",label:"电话号码",align:"left",width:"120"}}),a("el-table-column",{attrs:{label:"工资账套",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"right"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("table",[a("tr",[a("td",[t._v("基本工资")]),a("td",[t._v(t._s(e.row.s.basicSalary))])]),a("tr",[a("td",[t._v("交通补助")]),a("td",[t._v(t._s(e.row.s.trafficSalary))])]),a("tr",[a("td",[t._v("午餐补助")]),a("td",[t._v(t._s(e.row.s.lunchSalary))])]),a("tr",[a("td",[t._v("奖金")]),a("td",[t._v(t._s(e.row.s.bonus))])]),a("tr",[a("td",[t._v("养老金比率")]),a("td",[t._v(t._s(e.row.s.pensionPer))])]),a("tr",[a("td",[t._v("养老金基数")]),a("td",[t._v(t._s(e.row.s.pensionBase))])]),a("tr",[a("td",[t._v("医疗保险比率")]),a("td",[t._v(t._s(e.row.s.medicalPer))])]),a("tr",[a("td",[t._v("医疗保险金基数")]),a("td",[t._v(t._s(e.row.s.medicalBase))])]),a("tr",[a("td",[t._v("公积金比率")]),a("td",[t._v(t._s(e.row.s.accumulationFundPer))])]),a("tr",[a("td",[t._v("公积金基数")]),a("td",[t._v(t._s(e.row.s.accumulationFundBase))])])])]),e.row.s.name?a("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.s.name))]):a("el-tag",{attrs:{type:"primary"}},[t._v("暂未设置")])],1)]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"left",title:"编辑工资账套",width:"200",trigger:"click"},on:{show:function(a){return t.showPop(e.row.s)},hide:function(a){return t.hide(e.row)}}},[a("div",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.currentSalary,callback:function(e){t.currentSalary=e},expression:"currentSalary"}},t._l(t.salaries,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),a("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[t._v(" 修改工资账套")])],1)]}}])})],1),a("div",{staticStyle:{display:"flex","justify-content":"flex-end","margin-top":"10px"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next, jumper, ->, total, slot",total:t.total},on:{"current-change":t.currentChange,"size-change":t.sizeChange}})],1)],1)},n=[],i={name:"SalSobCfg",data:function(){return{currentSalary:null,salaries:[],emps:[],currentPage:1,size:10,total:0}},mounted:function(){this.initEmps(),this.initSalaries()},methods:{hide:function(t){var e=this;this.currentSalary&&this.currentSalary!=t.s.id&&this.putRequest("/salary-adjust/update?eid="+t.id+"&eSid="+this.currentSalary).then((function(t){t&&e.intEmps()}))},showPop:function(t){this.currentSalary=t?t.id:null},initSalaries:function(){var t=this;this.getRequest("/salary-adjust/get-All").then((function(e){e&&(t.salaries=e)}))},currentChange:function(t){this.currentPage=t,this.initEmps()},sizeChange:function(t){this.size=t,this.initEmps()},initEmps:function(){var t=this;this.getRequest("/salary-adjust/list?currentPage="+this.currentPage+"&size="+this.size).then((function(e){e&&(t.emps=e.date,t.total=e.total,console.log(e))}))}}},r=i,s=a("2877"),o=Object(s["a"])(r,l,n,!1,null,null,null);e["default"]=o.exports},d7e6:function(t,e,a){var l={"./SalMonth.vue":"fbac","./SalSearch.vue":"1937","./SalSob.vue":"2bc5","./SalSobCfg.vue":"6ac98","./SalTable.vue":"21c7"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(l,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return l[t]}n.keys=function(){return Object.keys(l)},n.resolve=i,t.exports=n,n.id="d7e6"},fbac:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("月末处理")])},n=[],i={name:"SalMonth"},r=i,s=a("2877"),o=Object(s["a"])(r,l,n,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-df7e035a.75c5b111.js.map