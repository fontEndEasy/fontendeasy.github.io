(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21509114"],{1132:function(e){e.exports=JSON.parse('{"plates":["云8MD0UP","津HEOXIS","辽6TWRIS","京13T1C7","豫GUS8MH","豫W1K3CT","黑G82BZ6","京87K60C","湘BTLX12","津ZS85OR","沪Z70WU2","京PRVTQE","黑BVS4PH","湘BIT1AD","豫LCA86Y","渝TOASG7","浙I4F7KI","皖HVH52F","浙VPOGNM","湘PFVLNQ","渝F5B93E","京9RRPPU","苏213WDT","豫VT291E","苏66LMI8","津AE68VI","苏3IZ3Q1","新CP11EY","苏YNR3KK","豫89V2G0","冀Y54ST5","湘GE521E","辽0ZMN5R","京1R8WZO","鲁8AQICX","沪P6V2LS","津ZUR9C0","新LFMLQE","京IZP1MA","辽A5WGW5","辽744FUW","浙AG51GC","冀EC07VG","沪N0ANT7","津372XHW","辽YEG1Z3","冀NV9LBF","辽TYFMIR","鲁CS3YV9","冀F2A0ZS","湘5RCDBC","湘NAA3F9","苏9DR6EI","黑1I8G1S","辽LKNFIY","辽F9YH68","浙3ZDLMW","沪ZOH3GS","豫CBMHN8","沪GAZ97A","渝7VZA8U"]}')},"4b85":function(e,t,a){},"630c":function(e,t,a){"use strict";var s=a("4b85"),l=a.n(s);l.a},f1a0:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"platePick"},[a("div",{staticClass:"platePick-title"},[e._v(e._s(e.$route.meta.platePickData.platePickInfo))]),a("div",{staticClass:"plateCheck-body"},[a("el-row",[a("el-col",{staticClass:"plate-flex-row",attrs:{span:24}},[a("div",{staticClass:"plateStatus plateStart"},[a("el-button",{ref:"doPlate",attrs:{type:"primary"},on:{click:e.doPlate}},[e._v("开始选号")])],1)])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"plateStatus plateDone"},[a("div",{staticClass:"plateMake-button"},[a("el-button",{ref:"makePlate",attrs:{type:"success"},on:{"~click":function(t){return e.plateMake(t)}}},[e._v("确认号牌")])],1),a("div",{staticClass:"plateCurrent"},[e._v("当前选择的号牌: "+e._s(e.plateChecked))])])])],1)],1),a("div",{staticClass:"plateLayout"},[a("el-checkbox-group",{attrs:{size:"medium"},on:{change:e.platePickChange}},e._l(e.plateDatas,(function(t){return a("div",{key:t,staticClass:"plateCheckbox"},[a("el-checkbox-button",{key:t,ref:"checkbox",refInFor:!0,attrs:{disabled:"",label:t}},[e._v(e._s(t))])],1)})),0)],1)])},l=[],c=a("1132"),i=a("c24f"),o={name:"PlatePick",data:function(){return{plateChecked:"",plateDatas:[]}},mounted:function(){Object(i["i"])().then((function(e){console.log(e)})),this.plateDatas=c.plates,sessionStorage.setItem("plateData",JSON.stringify(this.$route.params))},methods:{plateMake:function(){var e=this;this.$refs["doPlate"].$off("click"),setTimeout((function(){e.$router.push({name:"plateMake",params:{plate:e.plateChecked}}),sessionStorage.setItem("plate",e.plateChecked)}),3e3)},doPlate:function(){var e,t=this,a=0,s=Math.floor(30*Math.random())+15,l=this.$refs["checkbox"].length,c=setInterval((function(){if(a++,a>s){clearInterval(c);var i=t.$refs["checkbox"][a+e-1].$el.innerText;t.plateChecked=[],t.plateChecked=i;for(var o=0;o<l;o++)t.$refs["checkbox"][o].$el.classList.remove("is-disabled"),t.$refs["checkbox"][o].$el.classList.remove("is-checked"),t.$refs["checkbox"][o].$el.classList.add("is-disabled");t.$refs["checkbox"][a+e-1].$el.classList.remove("is-disabled"),t.$refs["checkbox"][a+e-1].$el.classList.add("is-checked")}else{e=Math.floor(15*Math.random());for(var r=0;r<l;r++)t.$refs["checkbox"][r].$el.classList.add("is-disabled");t.$refs["checkbox"][a+e].$el.classList.remove("is-disabled"),t.$refs["checkbox"][a+e].$el.classList.add("is-checked")}}),180)},platePickChange:function(e){console.log(e)}}},r=o,n=(a("630c"),a("2877")),d=Object(n["a"])(r,s,l,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-21509114.70917cfe.js.map