<template>
	<div class="myHeader">
		<h1 class="fl">我是头组件</h1>
		<span class="iconfont rt">&#xe699;</span>
		<div class="clear"></div>
	</div>
</template>
<script>
	export default {
		name : "myHeader",
		data () {
			return {
				msg:"坚持到底才是胜利"
			}
		}
	}
</script>
<style scoped>
.clear {
	clear:both
}
.fl {
	float:left
}
.rt {
	float:right
}
.myHeader {

}

</style>