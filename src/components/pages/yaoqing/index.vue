<template>
	<div class="qiandao">
		<head-top message="好友邀请">
			<span slot="fanhui" class="gohome" @click="goback">
				<img src="static/img/shouye/gys/go-1.png"/>
			</span>
		</head-top>
		<div class="main">
			<img src="../../../../static/img/shouye/gys/yao-1_02.png"/>
			<img src="../../../../static/img/shouye/gys/yao-2_02.png"/>
			<img src="../../../../static/img/shouye/gys/yao-3_02.png"/>
			<img src="../../../../static/img/shouye/gys/yao-4_02.png"/>
		</div>
		<div class="footer">
			<div class="btn">分享邀友</div>
			<div class="btn">当面邀友</div>
		</div>
	</div>
</template>

<script>
	import headTop from '@/components/common/header'
	export default {
		name: "qiandao",
		components: {
			headTop
		},
		methods: {
			goback() {
				this.$router.go(-1)
			}
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
			background: #04d168;
			position: absolute;
			top: 0.96rem;
			bottom: 0;overflow: auto;
			padding-bottom: 1.17rem;
			img{
				display: block;
				width: 100%;
				height: auto;
			}
		}
		.footer{
			width: 100%;
			height: 1.17rem;
			background: rgba(0,0,0,0.5);
			position: fixed;left: 0;bottom: 0;
			display: flex;
			justify-content: space-around;
			align-items: center;
			div{
				width: 3.3rem;line-height: 0.8rem;
				height: 0.8rem;text-align: center;
				background: #ffe821;font-size: 0.32rem;
				border: 0.04rem solid #80542f;font-weight: bold;
				border-radius: 0.15rem;color: #f67b02;
			}
		}
	}
</style>