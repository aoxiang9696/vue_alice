<template>
	<div class="testCity">
		<router-link to="/test">返回test页面</router-link>
		<hr>
		<div class="content">
			<select  v-model="selected">
				<option disabled="" value="">请选择</option>
				<option >杭州</option>
				<option >广州</option>
				<option >长沙</option>

			</select>
			<br><br>
			<span class="btn" @click="click(selected)">提交</span>
		</div>	
	</div>
</template>
<script>
import {mapActions,mapMutations} from "vuex";
export default {
	name: "testCity",
	components:{},
	data(){
		return {
			selected:""
		}
	},
	created(){},
	mounted(){},
	watch:{},
	computed:{},
	methods:{
		click(city) {
			//1.this.$store.dispatch("changeCity",city);
			//2.通过mapActions辅助函数，我们this.changeCity()映射为this.$store.dispatch("changeCity")
			//3.this.changeCity(city);
			//this.$store.commit("changeCity",city);5.跳过action直接mutations
			//6.通过mapMutations辅助函数,将this.changeCity(city)映射为this.$store.commit("changeCity",city)
			this.changeCity(city);
		},
		//4.  ...mapActions(["changeCity"])  接收actions
		//7.接收mutations
		...mapMutations(["changeCity"])
	}
}
</script>
<style scoped lang="less">
@import "../assets/styles/variables.less";
.testCity{
	padding:0.2rem;
	font-size:.5rem;
	.btn{
		border:1px solid lightskyblue;
	}
}

	
</style>