(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af0c8892"],{"1fe7":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("系统管理")])},l=[],a={name:"SysCfg"},s=a,o=n("2877"),c=Object(o["a"])(s,i,l,!1,null,null,null);t["default"]=c.exports},"4de4":function(e,t,n){"use strict";var i=n("23e7"),l=n("b727").filter,a=n("1dde"),s=a("filter");i({target:"Array",proto:!0,forced:!s},{filter:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})},"6e78":function(e,t,n){},8608:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("初始化数据库")])},l=[],a={name:"SysInit"},s=a,o=n("2877"),c=Object(o["a"])(s,i,l,!1,null,null,null);t["default"]=c.exports},"864e":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("操作日志管理")])},l=[],a={name:"SysLog"},s=a,o=n("2877"),c=Object(o["a"])(s,i,l,!1,null,null,null);t["default"]=c.exports},8695:function(e,t,n){},"8d67":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"部门管理",name:"DepMana"}},[n("DepMana")],1),n("el-tab-pane",{attrs:{label:"职位管理",name:"PosMana"}},[n("PosMana")],1),n("el-tab-pane",{attrs:{label:"职称管理",name:"JoblebelMana"}},[n("JoblebelMana")],1),n("el-tab-pane",{attrs:{label:"奖惩规则",name:"EcMana"}},[n("EcMana")],1),n("el-tab-pane",{attrs:{label:"权限管理",name:"PermissMana"}},[n("PermissMana")],1)],1)],1)},l=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{width:"500px"}},[n("el-input",{attrs:{placeholder:"输入需要搜索的内容","prefix-icon":"el-icon-search"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),n("el-tree",{ref:"tree",staticStyle:{"margin-top":"20px"},attrs:{data:e.deps,props:e.defaultProps,"filter-node-method":e.filterNode,"expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,l=t.data;return n("span",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%"}},[n("span",[e._v(e._s(i.label))]),n("span",[n("el-button",{staticStyle:{padding:"2px"},attrs:{type:"primary",size:"mini"},on:{click:function(){return e.showAddDep(l)}}},[e._v(" 添加部门 ")]),n("el-button",{staticStyle:{padding:"2px"},attrs:{type:"danger",size:"mini"},on:{click:function(){return e.deleteDep(l)}}},[e._v(" 删除部门 ")])],1)])}}])}),n("el-dialog",{attrs:{title:"添加部门",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",[n("table",[n("tr",[n("td",[n("el-tag",[e._v("上级部门")])],1),n("td",[e._v(e._s(e.pname))])]),n("tr",[n("td",[n("el-tag",[e._v("部门名称")])],1),n("td",[n("el-input",{attrs:{placeholder:"请输入部门名称"},model:{value:e.dep.name,callback:function(t){e.$set(e.dep,"name",t)},expression:"dep.name"}})],1)])])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.doAddDep}},[e._v("确 定")])],1)])],1)])},s=[],o=(n("4de4"),n("a434"),n("b0c0"),{name:"DepMana",data:function(){return{filterText:"",deps:[],defaultProps:{children:"children",label:"name"},dialogVisible:!1,dep:{name:"",parentId:""},pname:""}},mounted:function(){this.initDeps()},watch:{filterText:function(e){this.$refs.tree.filter(e)}},methods:{removeDepFromDeps:function(e,t,n){for(var i=0;i<t.length;i++){var l=t[i];if(l.id==n)return t.splice(i,1),void(0==t.length&&(e.isParent=!1));this.removeDepFromDeps(l,l.children,n)}},deleteDep:function(e){var t=this;e.isParent?this.$message.error("父部门删除失败!"):this.$confirm("此操作将删除["+e.name+"]部门, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteRequest("/system/basic/department/delete?id="+e.id).then((function(n){n&&t.removeDepFromDeps(null,t.deps,e.id)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},doAddDep:function(){var e=this;this.postRequest("/system/basic/department/add",this.dep).then((function(t){t&&(e.initDeps(),e.dialogVisible=!1)}))},showAddDep:function(e){console.log(),this.dialogVisible=!0,this.pname=e.name,this.dep.parentId=e.id},initDeps:function(){var e=this;this.getRequest("/system/basic/department/list").then((function(t){t&&(e.deps=t)}))},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)}}}),c=o,r=n("2877"),d=Object(r["a"])(c,a,s,!1,null,null,null),u=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("奖惩规则")])},f=[],m={name:"EcMana"},h=m,v=Object(r["a"])(h,p,f,!1,null,null,null),b=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("el-input",{staticStyle:{width:"300px"},attrs:{size:"small",placeholder:"添加职位","prefix-icon":"el-icon-plus"},model:{value:e.jl.name,callback:function(t){e.$set(e.jl,"name",t)},expression:"jl.name"}}),n("el-select",{staticStyle:{"margin-left":"10px","margin-right":"10px"},attrs:{size:"small",placeholder:"职称等级"},model:{value:e.jl.titleLevel,callback:function(t){e.$set(e.jl,"titleLevel",t)},expression:"jl.titleLevel"}},e._l(e.titleLevels,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1),n("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:e.addJobLevel}},[e._v("添加")]),n("el-button",{attrs:{size:"small",type:"danger",disabled:0==e.multipleSelection.length},on:{click:e.deleteMany}},[e._v("批量删除")])],1),n("div",[n("el-table",{staticStyle:{width:"70%","margin-top":"10px"},attrs:{data:e.jls,size:"small",stripe:"",border:""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"id",label:"编号",width:"180"}}),n("el-table-column",{attrs:{prop:"name",label:"职称名",width:"180"}}),n("el-table-column",{attrs:{prop:"titleLevel",label:"职称等级",width:"150"}}),n("el-table-column",{attrs:{prop:"createDate",label:"创建日期",width:"150"}}),n("el-table-column",{attrs:{prop:"enabled",label:"是否启用",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.enabled?n("el-tag",{attrs:{type:"success"}},[e._v("已启用")]):n("el-tag",{attrs:{type:"danger"}},[e._v("未启用")])]}}])}),n("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){return e.showEditView(t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){return e.deleteJobLevel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),n("el-dialog",{attrs:{title:"编辑职称",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("table",[n("tr",[n("td",[n("el-tag",[e._v("职位名称")])],1),n("td",[n("el-input",{staticStyle:{width:"180px"},attrs:{size:"small"},model:{value:e.updateJl.name,callback:function(t){e.$set(e.updateJl,"name",t)},expression:"updateJl.name"}})],1)]),n("tr",[n("td",[n("el-tag",[e._v("职位等级")])],1),n("td",[n("el-select",{staticStyle:{"margin-left":"10px","margin-right":"10px"},attrs:{size:"small",placeholder:"职称等级"},model:{value:e.updateJl.titleLevel,callback:function(t){e.$set(e.updateJl,"titleLevel",t)},expression:"updateJl.titleLevel"}},e._l(e.titleLevels,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)]),n("tr",[n("td",[n("el-tag",[e._v("是否启用")])],1),n("td",[n("el-switch",{staticStyle:{display:"block"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"已启用","inactive-text":"未启用"},model:{value:e.updateJl.enabled,callback:function(t){e.$set(e.updateJl,"enabled",t)},expression:"updateJl.enabled"}})],1)])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.doupdate}},[e._v("确 定")])],1)])],1)},g=[],x=(n("159b"),{name:"JoblebelMana",data:function(){return{jl:{name:"",titleLevel:""},titleLevels:["正高级","副高级","中级","初级","员级"],jls:[],dialogVisible:!1,updateJl:{name:"",titleLevel:"",enabled:!1},multipleSelection:[]}},mounted:function(){this.initJls()},methods:{deleteMany:function(){var e=this;this.$confirm("删除["+this.multipleSelection.length+"]个职位, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t="?";e.multipleSelection.forEach((function(e){t+="ids="+e.id+"&"})),e.deleteRequest("/system/basic/joblevel/delete/ids"+t).then((function(t){t&&e.initJls()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handleSelectionChange:function(e){this.multipleSelection=e},doupdate:function(){var e=this;this.putRequest("/system/basic/joblevel/update",this.updateJl).then((function(t){t&&(e.initJls(),e.dialogVisible=!1)}))},showEditView:function(e){Object.assign(this.updateJl,e),this.dialogVisible=!0,this.updateJl.createDate=""},deleteJobLevel:function(e,t){var n=this;this.$confirm("删除["+t.name+"]职位, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.deleteRequest("/system/basic/joblevel/delete",{id:t.id}).then((function(e){e&&n.initJls()}))})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},addJobLevel:function(){var e=this;this.jl.name&&this.jl.titleLevel&&this.postRequest("/system/basic/joblevel/add",this.jl).then((function(t){t?e.initJls():e.$message.error("添加字段不能为空!")}))},initJls:function(){var e=this;this.getRequest("/system/basic/joblevel/list").then((function(t){t&&(e.jls=t,e.jl.name="",e.jl.titleLevel="")}))}}}),_=x,k=Object(r["a"])(_,y,g,!1,null,null,null),w=k.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"permissMana"},[n("el-input",{attrs:{size:"small",placeholder:"请输入角色英文名"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}},[n("template",{attrs:{size:"small"},slot:"prepend"},[e._v("Role_")])],2),n("el-input",{attrs:{size:"small",placeholder:"请输入角色中文名"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doAddRole.apply(null,arguments)}},model:{value:e.role.nameZh,callback:function(t){e.$set(e.role,"nameZh",t)},expression:"role.nameZh"}}),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.doAddRole}},[e._v("添加角色")])],1),n("div",{staticClass:"permissManaMain"},[n("el-collapse",{attrs:{accordion:""},on:{change:e.change},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.roles,(function(t,i){return n("el-collapse-item",{key:i,attrs:{title:t.nameZh,name:t.id}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("可访问资源")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0",color:"#ff0000"},attrs:{icon:"el-icon-delete",type:"text"},on:{click:function(n){return e.doDeleteRole(t)}}})],1),n("div",[n("el-tree",{key:i,ref:"tree",refInFor:!0,attrs:{"show-checkbox":"",data:e.allMenus,props:e.defaultProps,"default-checked-keys":e.selectedMenus,"node-key":"id"}}),n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("el-button",{attrs:{size:"mini"},on:{click:e.cancelUpdate}},[e._v("取消修改")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.doUpdate(t.id,i)}}},[e._v("确认修改")])],1)],1)])],1)})),1)],1)])},S=[],$={name:"PermissMana",data:function(){return{role:{name:"",nameZh:""},roles:[],allMenus:[],defaultProps:{children:"children",label:"name"},selectedMenus:[],activeName:-1}},mounted:function(){this.initRoles()},methods:{doDeleteRole:function(e){var t=this;this.$confirm("删除["+e.nameZh+"]角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteRequest("/system/basic/permission/delete",{id:e.id}).then((function(e){e&&t.initRoles()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},doAddRole:function(){var e=this;this.role.name&&this.role.nameZh?this.postRequest("/system/basic/permission/add",this.role).then((function(t){t&&(e.initRoles(),e.role.name="",e.role.nameZh="")})):this.$message.error("所有字段不能为空!")},cancelUpdate:function(){this.activeName=-1},doUpdate:function(e,t){var n=this,i=this.$refs.tree[t],l=i.getCheckedKeys(!0),a="/system/basic/permission/updatemenus/?rid="+e;l.forEach((function(e){a+="&mids="+e})),this.putRequest(a).then((function(e){e&&(n.initRoles(),n.activeName=-1)}))},change:function(e){e&&(this.selectedMenus=[],this.initAllMenus(),this.initSelectedMenus(e))},initSelectedMenus:function(e){var t=this,n="/system/basic/permission/mid/?rid="+e;this.getRequest(n).then((function(e){console.log(e),t.selectedMenus=e}))},initAllMenus:function(){var e=this;this.getRequest("/system/basic/permission/menus").then((function(t){t&&(e.allMenus=t)}))},initRoles:function(){var e=this;this.getRequest("/system/basic/permission/list").then((function(t){t&&(e.roles=t)}))}}},M=$,j=(n("c06a"),Object(r["a"])(M,R,S,!1,null,null,null)),P=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("el-input",{staticClass:"addPosInput",attrs:{size:"small",placeholder:"添加职位","prefix-icon":"el-icon-plus"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addPosition.apply(null,arguments)}},model:{value:e.pos.name,callback:function(t){e.$set(e.pos,"name",t)},expression:"pos.name"}}),n("el-button",{attrs:{size:"small",icon:"el-icon-plus",type:"primary"},on:{click:e.addPosition}},[e._v("添加")])],1),n("div",[n("el-table",{staticClass:"posManaMain",staticStyle:{width:"100%"},attrs:{size:"small",stripe:"",border:"",data:e.positions},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"id",label:"编号",width:"180"}}),n("el-table-column",{attrs:{prop:"name",label:"职位",width:"120"}}),n("el-table-column",{attrs:{prop:"createDate",label:"创建时间",width:"200"}}),n("el-table-column",{attrs:{prop:"enabled",label:"是否启用",width:"120"}}),n("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),n("el-button",{staticStyle:{},attrs:{type:"danger",disabled:0==this.multipleSelection.length},on:{click:e.deleteMany}},[e._v("批量删除")]),n("el-dialog",{attrs:{title:"编辑职位",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",[n("el-tag",[e._v("职位名称")]),n("el-input",{staticClass:"updataPosInput",attrs:{size:"small"},model:{value:e.updatePos.name,callback:function(t){e.$set(e.updatePos,"name",t)},expression:"updatePos.name"}})],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.doupdate}},[e._v("确 定")])],1)])],1)},E=[],J={name:"PosMana",data:function(){return{pos:{name:""},positions:[],dialogVisible:!1,updatePos:{name:""},multipleSelection:[]}},mounted:function(){this.initPositions()},methods:{deleteMany:function(){var e=this;this.$confirm("删除["+this.multipleSelection.length+"]个职位, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t="?";e.multipleSelection.forEach((function(e){t+="ids="+e.id+"&"})),e.deleteRequest("/system/basic/position/deletes"+t).then((function(t){t&&e.initPositions()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handleSelectionChange:function(e){this.multipleSelection=e},doupdate:function(){var e=this;this.putRequest("/system/basic/position/update",this.updatePos).then((function(t){t&&(e.initPositions(),e.dialogVisible=!1)}))},addPosition:function(){var e=this;this.pos.name?this.postRequest("/system/basic/position/add",this.pos).then((function(t){t&&(e.initPositions(),e.pos.name="")})):this.$message.error("职位名称不能为空!")},handleEdit:function(e,t){Object.assign(this.updatePos,t),this.dialogVisible=!0},handleDelete:function(e,t){var n=this;this.$confirm("删除["+t.name+"]职位, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log(t),n.deleteRequest("/system/basic/position/delete/",{id:t.id}).then((function(e){e&&n.initPositions()}))})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},initPositions:function(){var e=this;this.getRequest("/system/basic/position/list").then((function(t){t&&(e.positions=t)}))}}},D=J,z=(n("d1a9"),Object(r["a"])(D,C,E,!1,null,null,null)),q=z.exports,A={name:"SysBasic",data:function(){return{activeName:"DepMana"}},components:{DepMana:u,EcMana:b,JoblebelMana:w,PermissMana:P,PosMana:q}},O=A,T=Object(r["a"])(O,i,l,!1,null,null,null);t["default"]=T.exports},a434:function(e,t,n){"use strict";var i=n("23e7"),l=n("da84"),a=n("23cb"),s=n("5926"),o=n("07fa"),c=n("7b0b"),r=n("65f0"),d=n("8418"),u=n("1dde"),p=u("splice"),f=l.TypeError,m=Math.max,h=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p},{splice:function(e,t){var n,i,l,u,p,y,g=c(this),x=o(g),_=a(e,x),k=arguments.length;if(0===k?n=i=0:1===k?(n=0,i=x-_):(n=k-2,i=h(m(s(t),0),x-_)),x+n-i>v)throw f(b);for(l=r(g,i),u=0;u<i;u++)p=_+u,p in g&&d(l,u,g[p]);if(l.length=i,n<i){for(u=_;u<x-i;u++)p=u+i,y=u+n,p in g?g[y]=g[p]:delete g[y];for(u=x;u>x-i+n;u--)delete g[u-1]}else if(n>i)for(u=x-i;u>_;u--)p=u+i-1,y=u+n-1,p in g?g[y]=g[p]:delete g[y];for(u=0;u<n;u++)g[u+_]=arguments[u+2];return g.length=x-i+n,l}})},a998:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("系统管理")])},l=[],a={name:"SysConfig"},s=a,o=n("2877"),c=Object(o["a"])(s,i,l,!1,null,null,null);t["default"]=c.exports},c06a:function(e,t,n){"use strict";n("6e78")},c57d:function(e,t,n){"use strict";n("8695")},c737:function(e,t,n){},d1a9:function(e,t,n){"use strict";n("c737")},d1e3:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("备份恢复数据库")])},l=[],a={name:"SysData"},s=a,o=n("2877"),c=Object(o["a"])(s,i,l,!1,null,null,null);t["default"]=c.exports},f86b:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{display:"flex","justify-content":"center","margin-top":"20px"}},[n("el-input",{staticStyle:{width:"400px","margin-right":"20px"},attrs:{placeholder:"通过用户名搜索用户","prefix-icon":"el-icon-search"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSearch.apply(null,arguments)}},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.doSearch}},[e._v("搜索")])],1),n("div",{staticClass:"admin-container"},e._l(e.admins,(function(t,i){return n("el-card",{key:i,staticClass:"admin-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(t.name))]),n("el-button",{staticStyle:{float:"right",padding:"3px 0",color:"red"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.deleteAdmin(t)}}})],1),n("div",[n("div",{staticClass:"img-content"},[n("img",{staticClass:"userFace-img",attrs:{src:t.userFace,alt:t.name,title:t.name}})])]),n("div",{staticClass:"userInfo"},[n("div",[e._v("姓名:"+e._s(t.name))]),n("div",[e._v("手机号码:"+e._s(t.phone))]),n("div",[e._v("电话号码:"+e._s(t.telephone))]),n("div",[e._v("地址:"+e._s(t.address))]),n("div",[e._v(" 用户状态: "),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"启用","inactive-text":"禁用"},on:{change:function(n){return e.enabledChange(t)}},model:{value:t.enabled,callback:function(n){e.$set(t,"enabled",n)},expression:"admin.enabled"}})],1),n("div",[e._v(" 用户角色: "),e._l(t.roles,(function(t,i){return n("el-tag",{key:i,staticStyle:{"margin-right":"10px"},attrs:{type:"success"}},[e._v(e._s(t.nameZh))])})),n("el-popover",{attrs:{placement:"right",title:"角色列表",width:"200",trigger:"click"},on:{show:function(n){return e.showPop(t)},hide:function(n){return e.hidePop(t)}}},[n("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.selectRoles,callback:function(t){e.selectRoles=t},expression:"selectRoles"}},e._l(e.allRoles,(function(e,t){return n("el-option",{key:t,attrs:{label:e.nameZh,value:e.id}})})),1),n("el-button",{attrs:{slot:"reference",type:"text",icon:"el-icon-more"},slot:"reference"})],1)],2),n("div",[e._v("备注: "+e._s(t.remark))])])])})),1)])},l=[],a=(n("a434"),n("159b"),n("b0c0"),{name:"SysAdmin",data:function(){return{admins:[],keywords:"",allRoles:[],selectRoles:[]}},mounted:function(){this.initAdmins()},methods:{hidePop:function(e){var t=this,n=[];Object.assign(n,e.roles);var i=!1;if(n.length!=this.selectRoles.length)i=!0;else{for(var l=0;l<n.length;l++)for(var a=n[l],s=0;s<this.selectRoles.length;s++){var o=this.selectRoles[s];if(a.id==o){n.splice(l,1),l--;break}}0!=n.length&&(i=!0)}if(i){var c="/admin/updaterole?adminId="+e.id;this.selectRoles.forEach((function(e){c+="&rids="+e})),this.putRequest(c).then((function(e){e&&t.initAdmins()}))}},showPop:function(e){var t=this;this.initAllRoles();var n=e.roles;this.selectRoles=[],n.forEach((function(e){t.selectRoles.push(e.id)}))},initAllRoles:function(){var e=this;this.getRequest("/admin/roles").then((function(t){t&&(e.allRoles=t)}))},enabledChange:function(e){var t=this;this.putRequest("/admin/update",e).then((function(e){e&&t.initAdmins()}))},deleteAdmin:function(e){var t=this;this.$confirm("此操作将永久删除"+e.name+"用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteRequest("/admin/delete"+e.id).then((function(e){e&&t.initAdmins()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},doSearch:function(){this.initAdmins()},initAdmins:function(){var e=this;this.getRequest("/admin/list/?keywords="+this.keywords).then((function(t){t&&(e.admins=t)}))}}}),s=a,o=(n("c57d"),n("2877")),c=Object(o["a"])(s,i,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-af0c8892.60f00e51.js.map