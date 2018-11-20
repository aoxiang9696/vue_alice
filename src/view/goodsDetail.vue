<template>
	<div class="goodsDetial">
		<!-- 商品图片轮播 -->
		<carousel :swiperData="swiperData"></carousel>

		<!-- 价格信息 -->
		<div class="product_meta">
			<div class="price_meta">
				<div class="price">
					<div class="price_now"></div>
					<div class="discount"></div>
				</div>
				<div class="sell_num">

				</div>
			</div>
			<div class="desc"></div>
		</div>

		<!-- 尺码 -->
		<div class="product_size">
			
		</div>

		<!-- 商务文案 -->
		<div class="service_text">
			
		</div>

		<!--详情图片	  -->
		<div class="details">
			
		</div>

		<!-- 底部购物栏 -->
	</div>
</template>
<script>
import { ImagePreview } from "vant";
import axios from 'axios';
import Carousel from '@/components/carousel.vue'
	export default{
		name:"goodsDetial",
		components :{
			Carousel
		},
		data(){
			//轮播图
			return{
				swiperData: []
			}
		},
		created() {

		},
		mounted() {
			axios.get('/api/goodsdetail.json')
			.then(res=> {
				this.swiperData=res.data.swiper
			})
		},
		watch:{

		},
		computed:{

		},
		methods:{
			swiperImgClick(){
				ImagePreview(this.swiperData);
			}
		}
	}
</script>
<style lang="less" scoped>
@import "../assets/styles/variables.less";
	.goodsDetial {

	}
</style>