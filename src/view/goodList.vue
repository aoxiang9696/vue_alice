<template>		
	<div class="goodlist">
		<!-- 标题 -->
		<div class="header">
			<span @click="goBack()"><</span>
			<div class="title">{{$route.query.title}}</div>
			<span class="iconfont" @click="goHome()">&#xe699;</span>
		</div>
		<!-- 筛选工具 -->
		<div class="filter">
			<div class="filter_item filter_normal">
				<span>综合排序</span>
			</div>
			<div class="filter_item filter_num">
				<i class="iconfont">&#xe6af;</i>
				<span>销量排序</span>
			</div>
			<div class="filter_item filter_price">
				<i class="iconfont">&#xe6af;</i>
				<span>价格</span>
			</div>
			<div class="filter_item filter_multi">
				<i class="iconfont">&#xe6af;</i>
				<span>筛选</span>
			</div>
		</div>
		<!-- 商品列表 -->
		<div class="goodlistItem">
			<div class="goods_items" v-for="(item,index) in list" :key="index">
				<goods-item :img="item.goodsImg" :desc="item.desc" :price="item.price" :discount="item.discount"></goods-item>
			</div>
		</div>	
		
	</div>
</template>
<script>
import axios from "axios";
import goodsItem from '@/components/goodsItem.vue';
	export default {
		name : "GoodList",
		components: {
			goodsItem
		},
		data() {
			return {
				list:[]
			}
		},
		created() {

		},
		mounted() {
			this.getGoodsList();

		},
		watch : {},
		computed:{},
		methods:{
			goBack() {
				this.$router.go(-1);
			},
			goHome() {
				this.$router.push({
					path:'/'
				})
			},
			getGoodsList() {
				axios.get("/api/goodsList.json").then(res=> {
					if (res.data.code==200) {
						console.log(res.data);
						this.list=res.data.goodslist;
						console.log(this.list);
					}
				})
			}
		}

	}
</script>
<style lang="less" scoped>
	@import "../assets/styles/variables.less";
	.goodlist {
		background:@bgColor;

		.header {
			 display:flex;
			 flex-direction:row;
			 justify-content:space-between;
			 height:45px;
			 line-height:45px;
			 margin:0 10px;
			 font-size:0.5rem;
			 font-weight:bold;

			 span {
				 	 display:block;
				 	 color:#666;
				 	 font-size:0.7rem;
				 }

			 .title{

			 }

		}
		.filter {
			 border:0.02rem solid #ccc;
			 padding:0.25rem;
			 font-size:0.35rem;
			 background:white;
			 display:flex;
			 flex-direction:row;
			 justify-content:space-between;
 
		}
		.goodlistItem{
			display: flex;
			justify-content:space-between;
			flex-wrap:wrap;
			background:white;
		}
	}
</style>