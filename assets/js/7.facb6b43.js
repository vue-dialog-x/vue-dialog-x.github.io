(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{250:function(t,a,s){"use strict";s.r(a);s(62);var n=s(29),e={data:function(){return{dialogX:null,list:[{okText:"你妈妈喊你回家吃饭"},{okText:"skr~skr~"},{okText:"我觉得还行"},{okText:"我觉得ok"}]}},methods:{createDialog:function(){this.dialogX=new window.VueDialogX(window.Vue)},selectActionColor:function(){this.dialogX||this.createDialog();this.dialogX.actions({actions:[{okText:"你妈妈喊你回家吃饭",okTextColor:"red"},{okText:"skr~skr~",okTextColor:"green"},{okText:"我觉得还行",okTextColor:"blur"},{okText:"我觉得ok",okTextColor:"blue"}]})},select:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.dialogX||t.createDialog(),a.next=3,t.dialogX.actions({actions:t.list});case 3:s=a.sent,dialogX.alert({message:"选择了".concat(t.list[s].okText,"选项")});case 5:case"end":return a.stop()}}),a)})))()},waitSelect:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.dialogX||t.createDialog(),a.next=3,t.dialogX.actions({actions:t.list,wait:function(t){setTimeout((function(){t()}),500)}});case 3:s=a.sent,t.dialogX.alert({message:"选择了".concat(t.list[s].okText,"选项")});case 5:case"end":return a.stop()}}),a)})))()}},mounted:function(){}},r=s(27),o=Object(r.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" Actions")]),t._v(" "),s("p",[t._v("返回Promise< number> 用于多选项的情况")]),t._v(" "),s("h2",{attrs:{id:"配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("param")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("desc")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("'提示'")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("''")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("okText")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("'确定'")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("cancelText")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("'取消'")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("actions")]),t._v(" "),s("td",[t._v("Array< actionOpt>")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("wait")]),t._v(" "),s("td",[t._v("function / null")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("支持异步式调用 传入next参数 并在函数体中调用next()即可实现异步式调用 效果与alert wait 类似 但是一旦进入加载状态 将隐藏取消按钮 第二个参数将返回点击下标")])])])]),t._v(" "),s("h3",{attrs:{id:"actionopt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actionopt"}},[t._v("#")]),t._v(" actionOpt")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("param")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("okText")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("''")])]),t._v(" "),s("tr",[s("td",[t._v("okTextColor")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("''")])])])]),t._v(" "),s("p",[t._v("按钮颜色默认继承全局配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exampleActions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    okText"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你妈妈喊你回家吃饭'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    okText"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'skr~skr~'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    okText"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我觉得还行'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    okText"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我觉得ok'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"基础用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),s("tempalte",[s("button",{staticClass:"button",on:{click:t.select}},[t._v("多选项")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" dialogX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("actions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回数组下标")]),t._v("\n    actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" exampleActions\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  dialogX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("选择了")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("exampleActions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("okText"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("选项")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"异步关闭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步关闭"}},[t._v("#")]),t._v(" 异步关闭")]),t._v(" "),s("tempalte",[s("button",{staticClass:"button",on:{click:t.waitSelect}},[t._v("异步关闭")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" dialogX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("actions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回数组下标")]),t._v("\n    actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" exampleActions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("wait")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// result为用户点击的数组下标")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          opt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" result\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  dialogX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("选择了")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("exampleActions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("okText"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("选项")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"按钮颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按钮颜色"}},[t._v("#")]),t._v(" 按钮颜色")]),t._v(" "),s("tempalte",[s("button",{staticClass:"button",on:{click:t.selectActionColor}},[t._v("多选项带颜色")])])],1)}),[],!1,null,null,null);a.default=o.exports}}]);