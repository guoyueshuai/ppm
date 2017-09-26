<template>
	<div class="qiandao">
		<head-top message="安全保障">
			<span slot="fanhui" class="gohome" @click="goback">
				<img src="static/img/shouye/gys/go-1.png"/>
			</span>
		</head-top>
		<div class="main">
			<span v-for="item in list" v-if="item.id == $route.params.id" >
				<img v-for="item1 in item.imgs" :src="item1"/>
			</span>
		</div>
	</div>
</template>

<script>
	import headTop from '@/components/common/header'
	export default {
		name: "qiandao",
		data(){
			return{
				"list":[]
			}
		},
		components: {
			headTop
		},
		methods: {
			goback() {
				this.$router.go(-1)
			}
		},
		mounted(){
			this.$http.get("/static/jsImg.json").then((res)=>{
				this.list = res.body
			},(error)=>{
				console.log("读取失败");
			})
		}
	}
</script>

<style lang="less" scoped="scoped">
	.qiandao {
		width: 100%;
		height: 100%;
		background: #fff;
		position: absolute;
		top: 0;
		bottom: 0;
		z-index: 2;
		.gohome {
			display: block;
			width: 0.2rem;
			position: absolute;
			left: 0.25rem;
			top: 50%;
			transform: translateY(-50%);
			height: 0.34rem;
			img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		.main{
			width: 100%;
			height: auto;
			position: absolute;
			top: 0.96rem;
			bottom: 0;
			box-sizing: border-box;
			border-top: 0.01rem solid #dcdccd;
			overflow: auto;
			img{
				width: 100%;
				height: auto;
				display: block;
			}
		}
	}
</style>