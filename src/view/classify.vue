<template>
	<div class="classify">

		<div class="topNav">
			<span @click="goBack()"><</span>
			<div class="title">分类</div>
			<span class="iconfont" @click="goHome()">&#xe699;</span>
		</div>
		<div class="main" :style="{height:mainHeight}">
			<div class="main_left wrapper" ref="wrapper" >
				<ul class="content">
					<li class="item" :class="currentIndex == index ? 'item_on':''" v-for="(item,index) in menuTitle" :key="item.id"   @click="menuClick(index)">
						{{item.name}}
					</li>
				</ul>
			</div>
			<div class="main_right wrapper" ref="wrapper">
				<div class="content">
					<div class="rt_pic">
						<img :src="menuDetail.topImg" alt="">
					</div>
					<div class="rt_content" v-for="(item,index) in menuDetail.details" :key="index">
						<h1>各种琴</h1>
						<div class="content_list">
							<div class="item" v-for="(item,index) in item.icon" :key="index" @click="itemClick(item.name)">
								<img :src="item.iconImg" alt="">
								<span>{{item.name}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	import BScroll from "better-scroll";

	export default {
		name:"classify",
		components: {},
		data() {
			return {
				//主内容高度
				mainHeight:"",
				//左侧菜单栏
				menuTitle: [],
				//右侧菜单详情
				menuDetail:{},
				currentIndex:0

			}
		},
		created () {
			this.mainHeight = window.innerHeight -45 +"px";
		},
		mounted () {
			this.getClassify();
			this.$nextTick(()=>{
				this.scroll=new BScroll(this.$refs.wrapper,{
					bounce:false,
					click:true
				})
			});
		},
		watch: {

		},
		computed:{

		},
		methods:{
			getClassify() {
				axios.get("/api/classify.json")
				.then(res => {
					var jsonObj=eval('('+res.data+')');
					//var jsonObj=JSON.stringify(res.data);
					//var jsonObj=res.data;
					console.log(jsonObj);
					this.menuTitle=jsonObj.navTitle;
					this.menuDetail=jsonObj.content;
				}
				)
				.catch(err => console.log(err))
			},
			menuClick(idx){
				this.currentIndex = idx;
			},
			goBack() {
				this.$router.go(-1);
			},
			goHome() {
				this.$router.push({
					path:'/'
				})
			},
			itemClick(title) {
				this.$router.push({
					path: "/goodList",
					query: {
						title
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";

.classify {
	 background: @themeColor;

	.topNav {

		
		 display:flex;
		 flex-direction:row;
		 justify-content:space-between;
		 height:45px;
		 line-height:45px;
		 margin:0 10px;
		font-size:0.5rem;
		font-weight:bold;

		
		span{
		 	display:block;
		 	color:#666;
		 	font-size:0.7rem;


		 }
		 .title{

		 }
	}
	.main {
		
		display: flex;
		flex-direction:row;
		border-top:.05rem solid #ccc;

		.main_left{
			width:25%;

			ul {
				background: @themeColor;
				.item{
					position:relative;
					box-sizing:border-box;
					height:1.28rem;
					line-height:1.28rem;
					font-size:0.4rem;
					font-weight:bold;	
				}
				.item_on::before {
					content:"";
					position: absolute;
					left:0;
					top:0;
					width:0.1rem;
					height:1.28rem;
					font-size:0;
					background-color:#ccc;

				}
				.item_on{
					background:#fff;
				}
			}
		}
		.main_right {
			width:75%;;
			background-color:#fff;
			padding:0.3rem;	

			.rt_pic{
/*右边图片部分*/
				img{
					width:100%;
					height:3rem;
				}
			}
/*右边内容*/
			.rt_content{
				h1{
					
					margin:.3rem 0;
					text-align:left;
					font-size:.4rem;
					font-weight:bold;
				}
				.content_list{
				display:flex;
				flex-direction:row;
				flex-wrap:wrap;
				justify-content:space-around;

				.item {
					box-sizing:border-box;

					span{
						display:block;
						padding:0.2rem;
						font-size:.3rem;

					}

					img{
						width:2.2rem;
					}
				}
			}
			}
			

		}
	}
}
</style>