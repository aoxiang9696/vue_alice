<template>
	<div class="home">
		<my-header></my-header>
		<carousel :swiperData='swiperData'></carousel>
		<classification :classifiData='classifiData'></classification>
		<recommend :recommendData='recommendData'></recommend>


	</div>
</template>
<script>
	import MyHeader from "@/components/myHeader"
	import Carousel from "@/components/carousel"
	import classification from "@/components/classification"
	import recommend from "@/components/recommend"
	import axios from "axios"

	export default {
		name: "home",
		components: {
			MyHeader,
			Carousel,
			classification,
			recommend
		},
		data () {
			return {
				//轮播图
				swiperData: [],
				//分类
				classifiData: {},
				//推荐
				recommendData:[]
			};
		},
		mounted() {
			this.getIndexData();
		},
		methods:{
			getIndexData () {
				axios
					.get("/api/index.json")
					.then(res => {
						console.log(res);
						this.swiperData=res.data.swiper;
						this.classifiData=res.data.classifiData;
						this.recommendData=res.data.recommendData;
					})
					.catch(err => console.log(res))
			}
		}
	}
</script>
<style lang=less scoped>

@import "~styles/variables.less";

.home{
	margin-top:0px;
	 background:@bgColor;
	 padding:10px 0px
}
</style>