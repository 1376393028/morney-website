(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d99409e"],{"2a7d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"button"},[t._t("default")],2)},s=[],c=a("9ab4"),r=a("2b0e"),i=a("1b40");let u=class extends r["default"]{};u=Object(c["a"])([i["a"]],u);var o=u,l=o,d=(a("8ef5"),a("2877")),f=Object(d["a"])(l,n,s,!1,null,"9284749a",null);e["a"]=f.exports},"32dc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",[a("div",{staticClass:"tags"},t._l(t.tags,(function(e){return a("router-link",{key:e.id,staticClass:"link",attrs:{to:"/labels/edit/"+e.id}},[a("span",[t._v(t._s(e.name))]),a("Icon",{attrs:{name:"right"}})],1)})),1),a("div",{staticClass:"createTag-wrapper"},[a("Button",{nativeOn:{click:function(e){return t.createTag.apply(null,arguments)}}},[t._v("新建标签")])],1)])],1)},s=[],c=a("9ab4"),r=a("ebad"),i=a("2b0e"),u=a("1b40"),o=a("2a7d");let l=class extends i["default"]{get tags(){return this.$store.state.tagList}createTag(){const t=prompt("请输入标签名");t&&this.$store.commit("createTag",t)}created(){this.$store.commit("fetchTags")}};l=Object(c["a"])([Object(u["a"])({components:{Layout:r["a"],Button:o["a"]}})],l);var d=l,f=d,b=(a("e66a"),a("2877")),p=Object(b["a"])(f,n,s,!1,null,"13cf465b",null);e["default"]=p.exports},"6a1a":function(t,e,a){},"8ef5":function(t,e,a){"use strict";a("6a1a")},e131:function(t,e,a){},e66a:function(t,e,a){"use strict";a("e131")}}]);
//# sourceMappingURL=chunk-4d99409e.2008e521.js.map