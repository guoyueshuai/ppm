<template>
  <div id="app">
  	<router-view></router-view>
  	<footer-bottom></footer-bottom>
  </div>
</template>

<script>
	import footerBottom from "./components/common/footer";
	export default {
		data(){
			return{}
		},
		components:{
			footerBottom
		}
	}
</script>

<style>
</style>
