<template>
	<div class="test">
		<router-link to="./testCity"	>前进</router-link>
		<!-- 获取vuex中的值 -->
		
		<!-- <h1 style="color:purple">{{this.$store.state.city}}</h1> -->
		<!--<div>使用mapState获取vuex中的值
		 <br>
			<h1 style="color:purple">{{this.city}}</h1></div> -->
<div>获取vuex中的值{{this.$store.getters.currentCity}}</div>
	</div>
</template>
<script>
import {Button} from 'vant'
import {mapState,mapGetters} from "vuex";
	export default{
		name:"test",
		components :{
			[Button.name]:Button
		},
		data(){
			return {
				
			}
		},
		created() {

		},
		mounted() {

		},
		watch:{

		},
		computed:{
			//是用mapState辅助函数生成计算属性
			//将this.city映射为this.$store.state.city
			//...mapState(["city"])
			...mapGetters(["currentCity"])
		},
		methods:{

		}
	}
</script>
<style lang="less" scoped>
@import "../assets/styles/variables.less";
	.test {
		padding:0.2rem;
	font-size:.5rem;
	}
</style>