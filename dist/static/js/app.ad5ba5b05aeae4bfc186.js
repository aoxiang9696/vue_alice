webpackJsonp([1],{"+d3+":function(t,e){},"4cH0":function(t,e){},"4ml/":function(t,e){},"76PQ":function(t,e){},"9n10":function(t,e){},CGQl:function(t,e){},Dk52:function(t,e){},Do1q:function(t,e){},JsOw:function(t,e){},LEyu:function(t,e){},M6Sr:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("3Lne");var i=s("SSsa"),n=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=s("VU/8")({name:"App"},a,!1,function(t){s("R9Q0")},null,null).exports,o=s("/ocq"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},r,!1,function(t){s("RqNW")},"data-v-3b884edb",null).exports;var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"myHeader"},[e("h1",{staticClass:"fl"},[this._v("我是头组件")]),this._v(" "),e("span",{staticClass:"iconfont rt"},[this._v("")]),this._v(" "),e("div",{staticClass:"clear"})])}]};var u=s("VU/8")({name:"myHeader",data:function(){return{msg:"坚持到底才是胜利"}}},l,!1,function(t){s("4cH0")},"data-v-70de0e38",null).exports,_=(s("v2ns"),s("7QTg")),d={name:"carousel",components:{swiper:_.swiper,swiperSlide:_.swiperSlide},props:{swiperData:{type:Array,default:[]}},methods:{swiperImgClick:function(){}},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",dynamicBullets:!0},autoplay:{delay:2500,disableOnInteraction:!1}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){console.log("this is current swiper instance object",this.swiper),this.swiper.slideTo(3,1e3,!1)}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carousel"},[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption},on:{someSwiperEvent:t.callback}},[t._l(t.swiperData,function(e,i){return s("swiper-slide",{key:i},[s("img",{attrs:{src:e,alt:""},on:{click:function(e){t.swiperImgClick()}}})])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var m=s("VU/8")(d,v,!1,function(t){s("LEyu")},"data-v-70d16a1e",null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"classification"},[s("div",{staticClass:"class_top"},t._l(t.classifiData.up,function(e,i){return s("div",{key:i,staticClass:"item"},[s("img",{attrs:{src:e.img},on:{click:function(s){t.gotoClassify(e.id)}}}),t._v(" "),s("p",[t._v(t._s(e.title))])])})),t._v(" "),s("div",{staticClass:"class_bottom"},t._l(t.classifiData.bottom,function(e,i){return s("div",{key:i,staticClass:"item"},[s("img",{attrs:{src:e.img},on:{click:function(s){t.gotoClassify(e.id)}}}),t._v(" "),s("p",[t._v(t._s(e.title))])])}))])},staticRenderFns:[]};var p=s("VU/8")({name:"classification",props:["classifiData"],methods:{gotoClassify:function(t){this.$router.push({path:"/classify",query:{id:t}})}}},f,!1,function(t){s("Dk52")},"data-v-64f76aec",null).exports,h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend"},[s("div",{staticClass:"title"},[t._v("今日推荐")]),t._v(" "),s("div",{staticClass:"content"},t._l(t.recommendData,function(e,i){return s("div",{key:i,staticClass:"item"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"item_text"},[s("span",[t._v(t._s(e.title))]),t._v(" "),s("span",[t._v(t._s(e.endtime))])])])}))])},staticRenderFns:[]};var g=s("VU/8")({name:"recommend",props:["recommendData"]},h,!1,function(t){s("YrzW")},"data-v-1b7b768d",null).exports,C=s("mtWM"),w=s.n(C),y={name:"home",components:{MyHeader:u,Carousel:m,classification:p,recommend:g},data:function(){return{swiperData:[],classifiData:{},recommendData:[]}},mounted:function(){this.getIndexData()},methods:{getIndexData:function(){var t=this;w.a.get("/api/index.json").then(function(e){console.log(e),t.swiperData=e.data.swiper,t.classifiData=e.data.classifiData,t.recommendData=e.data.recommendData}).catch(function(t){return console.log(res)})}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("my-header"),this._v(" "),e("carousel",{attrs:{swiperData:this.swiperData}}),this._v(" "),e("classification",{attrs:{classifiData:this.classifiData}}),this._v(" "),e("recommend",{attrs:{recommendData:this.recommendData}})],1)},staticRenderFns:[]};var D=s("VU/8")(y,k,!1,function(t){s("zozg")},"data-v-97dfc850",null).exports,b=s("Sl0G"),E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"classify"},[s("div",{staticClass:"topNav"},[s("span",{on:{click:function(e){t.goBack()}}},[t._v("<")]),t._v(" "),s("div",{staticClass:"title"},[t._v("分类")]),t._v(" "),s("span",{staticClass:"iconfont",on:{click:function(e){t.goHome()}}},[t._v("")])]),t._v(" "),s("div",{staticClass:"main",style:{height:t.mainHeight}},[s("div",{ref:"wrapper",staticClass:"main_left wrapper"},[s("ul",{staticClass:"content"},t._l(t.menuTitle,function(e,i){return s("li",{key:e.id,staticClass:"item",class:t.currentIndex==i?"item_on":"",on:{click:function(e){t.menuClick(i)}}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])}))]),t._v(" "),s("div",{ref:"wrapper",staticClass:"main_right wrapper"},[s("div",{staticClass:"content"},[s("div",{staticClass:"rt_pic"},[s("img",{attrs:{src:t.menuDetail.topImg,alt:""}})]),t._v(" "),t._l(t.menuDetail.details,function(e,i){return s("div",{key:i,staticClass:"rt_content"},[s("h1",[t._v("各种琴")]),t._v(" "),s("div",{staticClass:"content_list"},t._l(e.icon,function(e,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){t.itemClick(e.name)}}},[s("img",{attrs:{src:e.iconImg,alt:""}}),t._v(" "),s("span",[t._v(t._s(e.name))])])}))])})],2)])])])},staticRenderFns:[]};var x=function(t){s("Zm92")},j=s("VU/8")(b.a,E,!1,x,"data-v-71dab762",null).exports,$={name:"goodsItem",props:{img:String,desc:{type:String,default:"请输入商品列表描述"},price:{type:null,default:"商品价格"},discount:{type:null,default:"hello"}},created:function(){},mounted:function(){},computed:function(){},methods:{}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goodsItem"},[s("img",{staticClass:"goods_img",attrs:{src:t.img,alt:""}}),t._v(" "),s("div",{staticClass:"goods_desc"},[t._v(t._s(t.desc))]),t._v(" "),s("div",{staticClass:"goods_price"},[s("span",{staticClass:"discount_price"},[t._v("￥"+t._s(t.price))]),t._v(" "),s("strike",{staticClass:"original_price"},[t._v("￥"+t._s(t.discount))])],1)])},staticRenderFns:[]};var I={name:"GoodList",components:{goodsItem:s("VU/8")($,O,!1,function(t){s("wkWt")},"data-v-807d7716",null).exports},data:function(){return{list:[]}},created:function(){},mounted:function(){this.getGoodsList()},watch:{},computed:{},methods:{goBack:function(){this.$router.go(-1)},goHome:function(){this.$router.push({path:"/"})},getGoodsList:function(){var t=this;w.a.get("/api/goodsList.json").then(function(e){200==e.data.code&&(console.log(e.data),t.list=e.data.goodslist,console.log(t.list))})}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goodlist"},[s("div",{staticClass:"header"},[s("span",{on:{click:function(e){t.goBack()}}},[t._v("<")]),t._v(" "),s("div",{staticClass:"title"},[t._v(t._s(t.$route.query.title))]),t._v(" "),s("span",{staticClass:"iconfont",on:{click:function(e){t.goHome()}}},[t._v("")])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"goodlistItem"},t._l(t.list,function(t,e){return s("div",{key:e,staticClass:"goods_items"},[s("goods-item",{attrs:{img:t.goodsImg,desc:t.desc,price:t.price,discount:t.discount}})],1)}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter"},[s("div",{staticClass:"filter_item filter_normal"},[s("span",[t._v("综合排序")])]),t._v(" "),s("div",{staticClass:"filter_item filter_num"},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",[t._v("销量排序")])]),t._v(" "),s("div",{staticClass:"filter_item filter_price"},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",[t._v("价格")])]),t._v(" "),s("div",{staticClass:"filter_item filter_multi"},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),s("span",[t._v("筛选")])])])}]};var T=s("VU/8")(I,R,!1,function(t){s("hyyJ")},"data-v-e73fe792",null).exports,U=(s("WJbf"),s("OhwO")),W={name:"goodsDetial",components:{Carousel:m},data:function(){return{swiperData:[]}},created:function(){},mounted:function(){var t=this;w.a.get("/api/goodsdetail.json").then(function(e){t.swiperData=e.data.swiper})},watch:{},computed:{},methods:{swiperImgClick:function(){Object(U.a)(this.swiperData)}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"goodsDetial"},[e("carousel",{attrs:{swiperData:this.swiperData}}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"product_size"}),this._v(" "),e("div",{staticClass:"service_text"}),this._v(" "),e("div",{staticClass:"details"})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product_meta"},[e("div",{staticClass:"price_meta"},[e("div",{staticClass:"price"},[e("div",{staticClass:"price_now"}),this._v(" "),e("div",{staticClass:"discount"})]),this._v(" "),e("div",{staticClass:"sell_num"})]),this._v(" "),e("div",{staticClass:"desc"})])}]};var L=s("VU/8")(W,M,!1,function(t){s("76PQ")},"data-v-6f4c07e0",null).exports,H=s("Dd8w"),P=s.n(H),V=s("bOdI"),F=s.n(V),S=s("NYxO"),q={name:"test",components:F()({},i.a.name,i.a),data:function(){return{}},created:function(){},mounted:function(){},watch:{},computed:P()({},Object(S.b)(["currentCity"])),methods:{}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test"},[e("router-link",{attrs:{to:"./testCity"}},[this._v("前进")]),this._v(" "),e("div",[this._v("获取vuex中的值"+this._s(this.$store.getters.currentCity))])],1)},staticRenderFns:[]};var A=s("VU/8")(q,z,!1,function(t){s("+d3+")},"data-v-602f0a95",null).exports,B={name:"testCity",components:{},data:function(){return{selected:""}},created:function(){},mounted:function(){},watch:{},computed:{},methods:P()({click:function(t){this.changeCity(t)}},Object(S.c)(["changeCity"]))},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"testCity"},[s("router-link",{attrs:{to:"/test"}},[t._v("返回test页面")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"content"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"",value:""}},[t._v("请选择")]),t._v(" "),s("option",[t._v("杭州")]),t._v(" "),s("option",[t._v("广州")]),t._v(" "),s("option",[t._v("长沙")])]),t._v(" "),s("br"),s("br"),t._v(" "),s("span",{staticClass:"btn",on:{click:function(e){t.click(t.selected)}}},[t._v("提交")])])],1)},staticRenderFns:[]};var K=s("VU/8")(B,G,!1,function(t){s("Do1q")},"data-v-0502fccf",null).exports;n.a.use(o.a);var N=new o.a({mode:"history",routes:[{path:"/",name:"/",components:{default:D}},{path:"/classify",name:"Classify",component:j},{path:"/goodList",name:"GoodList",component:T},{path:"/goodsDetail",name:"GoodsDetail",component:L},{path:"/test",name:"Test",component:A},{path:"/testCity",name:"TestCity",component:K}]}),Q=s("cTzj"),J=s.n(Q),Y=(s("9n10"),s("M6Sr"),s("TzC8"),s("sVYa"),s("4ml/"),{currentCity:function(t){return t.city}});n.a.use(S.a);var Z=new S.a.Store({state:{city:"杭州"},actions:{changeCity:function(t,e){t.commit("changeCity",e)}},mutations:{changeCity:function(t,e){t.city=e}},getters:Y});n.a.use(J.a,{loading:"/static/images/timg.gif"}),n.a.use(i.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:N,store:Z,components:{App:c},template:"<App/>"})},R9Q0:function(t,e){},RqNW:function(t,e){},Sl0G:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_axios__=__webpack_require__("mtWM"),__WEBPACK_IMPORTED_MODULE_0_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__),__WEBPACK_IMPORTED_MODULE_1_better_scroll__=__webpack_require__("GQaK");__webpack_exports__.a={name:"classify",components:{},data:function(){return{mainHeight:"",menuTitle:[],menuDetail:{},currentIndex:0}},created:function(){this.mainHeight=window.innerHeight-45+"px"},mounted:function(){var t=this;this.getClassify(),this.$nextTick(function(){t.scroll=new __WEBPACK_IMPORTED_MODULE_1_better_scroll__.a(t.$refs.wrapper,{bounce:!1,click:!0})})},watch:{},computed:{},methods:{getClassify:function getClassify(){var _this2=this;__WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("/api/classify.json").then(function(res){var jsonObj=eval("("+res.data+")");console.log(jsonObj),_this2.menuTitle=jsonObj.navTitle,_this2.menuDetail=jsonObj.content}).catch(function(t){return console.log(t)})},menuClick:function(t){this.currentIndex=t},goBack:function(){this.$router.go(-1)},goHome:function(){this.$router.push({path:"/"})},itemClick:function(t){this.$router.push({path:"/goodList",query:{title:t}})}}}},TzC8:function(t,e){},W0KU:function(t,e){},YrzW:function(t,e){},Zm92:function(t,e){},hW8u:function(t,e){},hyyJ:function(t,e){},nsZj:function(t,e){},v2ns:function(t,e){},wkWt:function(t,e){},zozg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ad5ba5b05aeae4bfc186.js.map