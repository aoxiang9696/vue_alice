<template>
	<div class="recommend">
		<div class="title">今日推荐</div>
		<div class="content">
			<div class="item" v-for="(item,index) in recommendData" :key="index">
				<!-- <img :src="item.imgurl"  alt=""> -->
				<img v-lazy="item.imgurl" alt="">
				<div class="item_text">
					<span>{{item.title}}</span>
					<span>{{item.endtime}}</span>
				</div>
			</div>

		</div>

	</div>
</template>
<script>
export default {
	name:'recommend',
	props:["recommendData"]
}
</script>
<style lang="less" scoped>
.recommend {
	.title {
		margin:5px;
		font-size:0.4rem;
		font-weight:bold;
	}
	.content {
		img{
			width: 100%;
			display:block;
		}
		img[lazy="loading"]{
			display:block;
			width: 50px;
			height: 50px;
			margin:0 auto;
		}
	.item_text {
		box-sizing:border-box;
		display:flex;
		flex-direction: row;
		justify-content:space-between;
		padding:0.1rem;
		font-size:0.32rem;
	}	
	}
	
}
</style>