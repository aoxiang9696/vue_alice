<template>
	<div class="classification">
		<div class="class_top">
			<div class="item" v-for="(item,index) in classifiData.up" :key="index">
				<img :src="item.img" @click="gotoClassify(item.id)">
				<p>{{item.title}}</p>
			</div>
		
		</div>
		<div class="class_bottom">
			<div class="item" v-for="(item,index) in classifiData.bottom" :key="index">
				<img :src="item.img" @click="gotoClassify(item.id)">
				<p>{{item.title}}</p>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		name:'classification',
		props:["classifiData"],
		methods:{
			gotoClassify(id) {
    			this.$router.push({
	       			 path: "/classify",
			        query: {
			            id: id
			        }
    			});
			}
		}
	}
</script>
<style scoped lang="less">
.classification {
	background-color:#fff;
	margin:5px;
	.class_top, .class_bottom {
		margin-top:10px;
		display:flex;
		flex-direction: row;
		justify-content: space-around;
		.item {
			margin-top:10px;
			img {
				display:block;
				width: 1.8rem;
				height: 1.8rem;
				border-radius:50%;
				
			}
			p{
				padding-top:0.1rem;
				font-size:0.3rem;
				font-weight:bold;

			}
		}
	}
}
</style>