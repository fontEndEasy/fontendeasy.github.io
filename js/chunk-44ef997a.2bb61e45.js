(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44ef997a"],{"0672":function(e,t,a){e.exports=a.p+"media/readCardId.e60ee2a4.mp3"},"13f1":function(e,t,a){e.exports=a.p+"img/idCardFailed0.715a6fca.png"},1978:function(e,t,a){"use strict";var s=a("a458"),n=a.n(s);n.a},"2f93":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-info-body"},[s("dth-header"),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isDoInterval,expression:"isDoInterval"}],staticClass:"doInterval-action"},[s("span",{staticClass:"num"},[e._v(e._s(e.backNum))]),e._v("秒后自动跳转到首页... ")]),s("dth-back-top"),s("dth-back-home"),s("dth-flow-node",[s("li",[s("div",{staticClass:"flow-node0 idCard item"}),s("span",{staticClass:"flow-text"},[e._v("身份证识别")])]),s("li",{staticClass:"diliver current"}),s("li",[s("div",{staticClass:"flow-node1 unCompareAuth item"}),s("span",{staticClass:"flow-text"},[e._v("人证对比")])]),s("li",{staticClass:"diliver next"}),s("li",[s("div",{staticClass:"flow-node2 unInvoice item"}),s("span",{staticClass:"flow-text"},[e._v("开票二维码识别")])]),s("li",{staticClass:"diliver next"}),s("li",[s("div",{staticClass:"flow-node3 unPrint item"}),s("span",{staticClass:"flow-text"},[e._v("发票打印")])])]),s("div",{staticClass:"card-status"},[s("h5",[e._v("请将身份证放置在扫描区（目前只支持二代身份证）")]),s("div",{staticClass:"card-body"},[s("img",{staticClass:"statusImg",attrs:{src:e.statusImg}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isReadStatus,expression:"isReadStatus"}],staticClass:"card-status-content"},[e._v(e._s(e.cardReadStatus))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.repeatReadCard,expression:"repeatReadCard"}],staticClass:"repeatReadCard",on:{click:e.reloadCurrentPage}},[e._v(" 重新开始身份证识别 ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.iscardInfo,expression:"iscardInfo"}],staticClass:"cardInfo"},[s("el-form",{staticClass:"cardForm",attrs:{"label-width":"102px"}},[s("el-form-item",{staticClass:"cardInput",attrs:{label:"姓名 :"}},[s("el-input",{ref:"cardname",attrs:{placeholder:"姓名",name:"cardname",tabindex:"1",autocomplete:"on"},model:{value:e.cardname,callback:function(t){e.cardname=t},expression:"cardname"}})],1),s("el-form-item",{staticClass:"cardInput",attrs:{label:"身份证号 :"}},[s("el-input",{ref:"number",attrs:{placeholder:"身份证号",name:"number",tabindex:"2",autocomplete:"on"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})],1)],1)],1),s("el-row",{staticClass:"next-step",staticStyle:{display:"none"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.gocardInfo}},[e._v("下一步")])],1),s("audio",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],attrs:{controls:"controls",autoplay:""}},[s("source",{attrs:{src:a("0672"),type:"audio/mpeg"}})]),s("audio",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],attrs:{controls:"controls",id:"leaveCard"}},[s("source",{attrs:{src:a("36ec"),type:"audio/mpeg"}})]),s("dth-footer")],1)},n=[],r=(a("99af"),a("b0c0"),a("1157")),o=a.n(r),i=a("5f87"),c=a("269e"),l=a("e8bc"),d=a("753e"),u=a("aff3"),m=a("ccd1"),p={name:"CardInfo",components:{DthHeader:c["a"],DthFooter:l["a"],DthBackHome:d["a"],DthBackTop:u["a"],DthFlowNode:m["a"]},data:function(){return{visible:!1,title:"CardInfo",isNextShow:!1,cardStatus:"进行中...",cardname:"",number:"",cardReadStatus:"身份证信息读取中，请勿移开身份证！",statusImg:a("ecc5"),cardImg:a("cf05"),timer:null,loopTimer:null,iscardInfo:!1,repeatReadCard:!1,isReadStatus:!0,backNum:180,isDoInterval:!1,doIntervalTimer:null}},mounted:function(){var e=this;this.$nextTick((function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()})),document.addEventListener("keypress",this.resetTimer,!1),document.addEventListener("keyup",this.resetTimer,!1),document.addEventListener("keydown",this.resetTimer,!1),document.addEventListener("click",this.resetTimer,!1),clearInterval(this.loopTimer),this.loopTimer=setInterval((function(){e.doInterval("doInvoice")}),1e3),this.OpenDevice(),this.GetCardinfoInit()},destroyed:function(){clearInterval(this.timer),clearInterval(this.loopTimer)},methods:{resetTimer:function(){var e=this;this.backNum=180,clearInterval(this.loopTimer),this.loopTimer=setInterval((function(){e.doInterval("doInvoice")}),1e3)},doInterval:i["a"],reloadCurrentPage:function(){location.reload()},GetCardinfoInit:function(){var e=this;this.timer=setInterval((function(){e.GetCardinfo()}),500)},GetCardinfo:function(){var e=this;o.a.ajax({dataType:"JSONP",type:"get",url:"http://localhost:8080/api/ReadMsg",success:function(t){0==t.retcode?(clearInterval(e.timer),e.isReadStatus=!1,e.isReadStatus=!0,e.statusImg=a("4870"),e.cardname=t.name,e.number=t.cardno,e.cardImg="data:image/jpg;base64, ".concat(t.photobase64),Object(i["e"])("cardInfo",{userName:t.name,idNumb:t.cardno}),document.getElementById("leaveCard").play(),setTimeout((function(){e.$router.push({path:"/faceInfo"})}),3e3)):console.info("读二代证失败，错误码为：".concat(t.retcode,", ").concat(t.errmsg))},error:function(t){setTimeout((function(){e.cardname="",e.number="",e.cardImg="",e.cardReadStatus="身份证识别失败，请重新识别！",e.repeatReadCard=!0,e.isReadStatus=!1,e.iscardInfo=!1,e.statusImg=a("13f1"),clearInterval(e.timer)}),2e3),console.info("执行失败：".concat(t.status,", ").concat(t.statusText))}})},OpenDevice:function(){o.a.ajax({dataType:"JSONP",type:"get",url:"http://localhost:8080/api/OpenDevice",data:{Port:"100",Baud:"0"},success:function(e){0==e.retcode?console.log(e):console.info("打开设备失败，错误码为：".concat(e.retcode,", ").concat(e.errmsg))},error:function(e){console.info("执行失败：".concat(e.status,", ").concat(e.statusText))}})},gocardInfo:function(){sessionStorage.setItem("cardInfo",JSON.stringify({userName:"朱小龙",idNumb:"362426198807233514"})),this.$router.push({name:"faceInfo"})}}},v=p,f=(a("1978"),a("2877")),h=Object(f["a"])(v,s,n,!1,null,null,null);t["default"]=h.exports},"36ec":function(e,t,a){e.exports=a.p+"media/leaveCardId.be922e3f.mp3"},4870:function(e,t,a){e.exports=a.p+"img/idCardFlow1.a10ac3a7.png"},a458:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.ccb1a15c.png"},ecc5:function(e,t,a){e.exports=a.p+"img/idCardFlow0.57ed9710.png"}}]);
//# sourceMappingURL=chunk-44ef997a.2bb61e45.js.map