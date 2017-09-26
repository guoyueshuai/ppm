<template>
	<div class="qiandao">
		<head-top message="安全保障">
			<span slot="fanhui" class="gohome" @click="goback">
				<img src="static/img/shouye/gys/go-1.png"/>
			</span>
		</head-top>
		<div class="main">
			<div class="imgs">
				<img src="../../../../static/img/shouye/gys/a-1_02.png"/>
				<img src="../../../../static/img/shouye/gys/a-2_02.png"/>
			</div>
			<div class="imgs">
				<img src="../../../../static/img/shouye/gys/an-2_02.png"/>
				<router-link tag="div" to="/home/anquan/goods/1" class="box">查看详情&gt;&gt;</router-link>
			</div>
			<div class="imgs">
				<img src="../../../../static/img/shouye/gys/an-3_02.png"/>
				<router-link tag="div" to="/home/anquan/goods/2" class="box">查看详情&gt;&gt;</router-link>
			</div>
			<div class="imgs">
				<img src="../../../../static/img/shouye/gys/an-4_02.png"/>
				<router-link tag="div" to="/home/anquan/goods/3" class="box">查看详情&gt;&gt;</router-link>
			</div>
			<div class="imgs">
				<img src="../../../../static/img/shouye/gys/an-5_02.png"/>
				<router-link tag="div" to="/home/anquan/goods/4" class="box">查看详情&gt;&gt;</router-link>
			</div>
			<div class="imgs">
				<img src="../../../../static/img/shouye/gys/an-6_02.png"/>
				<router-link tag="div" to="/home/anquan/goods/5" class="box">查看详情&gt;&gt;</router-link>
			</div>
			<div class="imgs">
				<img src="../../../../static/img/shouye/gys/an-7_02.png"/>
				<img src="../../../../static/img/shouye/gys/an-8_02.png"/>
				<img src="../../../../static/img/shouye/gys/an-9_02.png"/>
				<img src="../../../../static/img/shouye/gys/an-10_02_02.png"/>
			</div>
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
			position: absolute;
			top: 0.96rem;
			bottom: 0;
			box-sizing: border-box;
			border-top: 0.01rem solid #dcdccd;
			background: #fff;
			overflow: auto;
			div{
				width: 100%;
				height: auto;
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
				.box{
					width: 100%;
					height: 1.2rem;
					line-height: 1.2rem;
					text-align: center;
					color: #fe8c73;
				}
			}
			.imgs:nth-child(even){
				background: #f8f8f8;
			}
		}
	}
</style>