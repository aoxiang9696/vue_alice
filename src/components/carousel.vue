<template>
	<div class="carousel">
		  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
		    <swiper-slide v-for="(item,index) in swiperData" :key="index">
				<img :src="item"  alt="" @click="swiperImgClick()">
		    </swiper-slide>
		   

		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>

  		</swiper>
	</div>
</template>
<script>

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default{
	name: 'carousel',
	components: {
		swiper,
		swiperSlide
	},
	props: {
		swiperData: {
			type: Array,
			default: []
		}
	},
	methods:{
		swiperImgClick(){

		}
	},
	data() {
		return {
			swiperOption :{
				 pagination: {
   					 el: '.swiper-pagination',
   					 dynamicBullets:true
  				 },
  				 autoplay: {
  					delay :2500,
  					disableOnInteraction:false
  				 }
			}
		}
	},
	computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }

}
</script>
<style lang='less' scoped>
.carousel {
	/deep/ .swiper-pagination-bullet-active{
		background:skyblue;
	}
background:white;
width: 100%;
}
img {
	display:inline-block;
	width:100%;
	height:5rem

}
</style>