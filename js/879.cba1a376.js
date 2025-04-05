"use strict";(self["webpackChunkvue_shopping"]=self["webpackChunkvue_shopping"]||[]).push([[879],{4180:function(s,t,e){e.d(t,{Fs:function(){return r},Nj:function(){return o},Z7:function(){return i}});var a=e(5720);const r=(s,t)=>a.A.get("/checkout/order",{params:{mode:s,delivery:10,couponId:0,isUsePoints:0,...t}}),i=(s,t)=>a.A.post("/checkout/submit",{mode:s,delivery:10,couponId:0,isUsePoints:0,payType:10,...t}),o=(s,t)=>a.A.get("/order/list",{params:{dataType:s,page:t}})},6879:function(s,t,e){e.r(t),e.d(t,{default:function(){return v}});var a=function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay"},[t("van-nav-bar",{attrs:{fixed:"",title:"订单结算台","left-arrow":""},on:{"click-left":function(t){return s.$router.go(-1)}}}),t("div",{staticClass:"address"},[t("div",{staticClass:"left-icon"},[t("van-icon",{attrs:{name:"logistics"}})],1),s.selectedAddress.address_id?t("div",{staticClass:"info"},[t("div",{staticClass:"info-content"},[t("span",{staticClass:"name"},[s._v(s._s(s.selectedAddress.name))]),t("span",{staticClass:"mobile"},[s._v(s._s(s.selectedAddress.phone))])]),t("div",{staticClass:"info-address"},[s._v(" "+s._s(s.longAddress)+" ")])]):t("div",{staticClass:"info"},[s._v(" 请选择配送地址 ")]),t("div",{staticClass:"right-icon"},[t("van-icon",{attrs:{name:"arrow"}})],1)]),s.order.goodsList?t("div",{staticClass:"pay-list"},[t("div",{staticClass:"list"},s._l(s.order.goodsList,(function(e){return t("div",{key:e.goods_id,staticClass:"goods-item"},[t("div",{staticClass:"left"},[t("img",{attrs:{src:e.goods_image,alt:""}})]),t("div",{staticClass:"right"},[t("p",{staticClass:"tit text-ellipsis-2"},[s._v(" "+s._s(e.goods_name)+" ")]),t("p",{staticClass:"info"},[t("span",{staticClass:"count"},[s._v("x"+s._s(e.total_num))]),t("span",{staticClass:"price"},[s._v("¥"+s._s(e.total_pay_price))])])])])})),0),t("div",{staticClass:"flow-num-box"},[t("span",[s._v("共 "+s._s(s.order.orderTotalNum)+" 件商品，合计：")]),t("span",{staticClass:"money"},[s._v("￥"+s._s(s.order.orderTotalPrice))])]),t("div",{staticClass:"pay-detail"},[t("div",{staticClass:"pay-cell"},[t("span",[s._v("订单总金额：")]),t("span",{staticClass:"red"},[s._v("￥"+s._s(s.order.orderTotalPrice))])]),s._m(0),t("div",{staticClass:"pay-cell"},[t("span",[s._v("配送费用：")]),s.selectedAddress?t("span",{staticClass:"red"},[s._v("+￥0.00")]):t("span",[s._v("请先选择配送地址")])])]),t("div",{staticClass:"pay-way"},[t("span",{staticClass:"tit"},[s._v("支付方式")]),t("div",{staticClass:"pay-cell"},[t("span",[t("van-icon",{attrs:{name:"balance-o"}}),s._v("余额支付（可用 ¥ "+s._s(s.personal.balance)+" 元）")],1),t("span",{staticClass:"red"},[t("van-icon",{attrs:{name:"passed"}})],1)])]),t("div",{staticClass:"buytips"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:s.remark,expression:"remark"}],attrs:{placeholder:"选填：买家留言（50字内）",name:"",id:"",cols:"30",rows:"10"},domProps:{value:s.remark},on:{input:function(t){t.target.composing||(s.remark=t.target.value)}}})])]):s._e(),t("div",{staticClass:"footer-fixed"},[t("div",{staticClass:"left"},[s._v("实付款："),t("span",[s._v("￥"+s._s(s.order.orderTotalPrice))])]),t("div",{staticClass:"tipsbtn",on:{click:s.submitOrder}},[s._v("提交订单")])])],1)},r=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay-cell"},[t("span",[s._v("优惠券：")]),t("span",[s._v("无优惠券可用")])])}],i=e(5720);const o=()=>i.A.get("/address/list");var d=e(4180),n=e(7167),c={name:"PayIndex",mixins:[n.A],data(){return{addressList:[],order:{},personal:{},remark:""}},computed:{selectedAddress(){return this.addressList[0]||{}},longAddress(){const s=this.selectedAddress.region;return s.province+s.city+s.region+this.selectedAddress.detail},mode(){return this.$route.query.mode},cartIds(){return this.$route.query.cartIds},goodsId(){return this.$route.query.goodsId},goodsSkuId(){return this.$route.query.goodsSkuId},goodsNum(){return this.$route.query.goodsNum}},created(){this.getAddressList(),this.getOrderList()},methods:{async submitOrder(){"cart"===this.mode&&await(0,d.Z7)(this.mode,{cartIds:this.cartIds,remark:this.remark}),"buyNow"===this.mode&&await(0,d.Z7)(this.mode,{goodsId:this.goodsId,goodsSkuId:this.goodsSkuId,goodsNum:this.goodsNum,remark:this.remark}),this.$toast.success("支付成功"),this.$router.replace("/myorder")},async getAddressList(){const{data:{list:s}}=await o();this.addressList=s},async getOrderList(){if("cart"===this.mode){const{data:{order:s,personal:t}}=await(0,d.Fs)(this.mode,{cartIds:this.cartIds});this.order=s,this.personal=t}if("buyNow"===this.mode){const{data:{order:s,personal:t}}=await(0,d.Fs)(this.mode,{goodsId:this.goodsId,goodsSkuId:this.goodsSkuId,goodsNum:this.goodsNum});this.order=s,this.personal=t}}}},l=c,u=e(1656),p=(0,u.A)(l,a,r,!1,null,"f95e6aa8",null),v=p.exports},7167:function(s,t){t.A={methods:{loginConfirm(){return!this.$store.getters.token&&(this.$dialog.confirm({title:"温馨提示",message:"您还未登录，是否立即登录？",confirmButtonText:"去登录",cancelButtonText:"再逛逛"}).then((()=>{this.$router.replace({path:"/login",query:{backUrl:this.$router.fullPath}})})).catch((()=>{})),!0)}}}}}]);
//# sourceMappingURL=879.cba1a376.js.map