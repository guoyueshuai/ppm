<template>
	<div id="app">
		<button type="button" @click="add()">登录</button>
	</div>		
</template>

<script>
	export default{
		data(){
			return{}
		},
		mounted(){
			this.axios.get("/v2/book/1220562").then((res)=>{
				console.log(res);
			})
		},
		methods:{
			add(){
				this.$router.push("/home/qiandao")
			}
		}
	}
</script>

<style scoped="scoped">
</style>