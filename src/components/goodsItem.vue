<template>
	<div class="goodsItem">
		<img class="goods_img" :src="img" alt="">
		<div class="goods_desc">{{desc}}</div>
		<div class="goods_price">
			<span class="discount_price">￥{{price}}</span>
			<strike class="original_price">￥{{discount}}</strike>
		</div> 
	</div>
</template>
<script>
export default {
	name: "goodsItem",
	props: {
		img:String,
		desc:{
			type:String,
			default:"请输入商品列表描述"
		},
		price:{
			type:null,
			default:"商品价格"
		},
		discount:{
			type:null,
			default:"hello"
		}

	},
	created() {

	},
	mounted() {

	},
	computed(){

	},
	methods:{

	}
}
</script>
<style scoped lang="less">
@import "../assets/styles/variables.less";
.goodsItem{
	background:white;
	width: 4.5rem;


	.goods_img{
		width:100%;
		height:6.2rem;
	}
	.goods_desc{
		padding:0.3rem;
		white-space:nowrap;
  		overflow:hidden;
  		text-overflow:ellipsis;

	}
	.goods_price{

		.discount_price{
			font-size:0.6rem;
			color:purple;

		}
		.original_price{
			font-size:0.4rem
		}
	}
}
	

</style>