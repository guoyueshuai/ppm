<template>
	<div class="footer">
		<router-link tag="dl" to="/home" class="btn">
			<dt class="btn1"><i class="iconfont icon-home"></i></dt>
			<dd class="btn2">首页</dd>
		</router-link>
		<router-link tag="dl" to="/manage" class="btn">
			<dt class="btn1"><i class="iconfont icon-licai"></i></dt>
			<dd class="btn2">理财产品</dd>
		</router-link>
		<router-link tag="dl" to="/account" class="btn">
			<dt class="btn1"><i class="iconfont icon-zhanghu"></i></dt>
			<dd class="btn2">账户</dd>
		</router-link>
		<router-link tag="dl" to="/find" class="btn">
			<dt class="btn1"><i class="iconfont icon-faxian"></i></dt>
			<dd class="btn2">发现</dd>
		</router-link>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.footer{
		width: 100%;
		height: 1.07rem;
		border-top: 0.01rem solid #d8d8d8;
		position: fixed;padding: 0.14rem 0;
		left: 0; bottom: 0;background: #fff;
		display: flex;justify-content: space-around;
		.btn{
			width: 25%;
			height: 100%;
			text-align: center;
			box-sizing: border-box;
			color:#6b6b6b;
			.btn1{
				height: 0.4rem;
				line-height: 0.4rem;
				font-size: 0.4rem;
				margin-bottom: 0.16rem;
				font-weight: bold;
			}
			.btn2{
				height: 0.24rem;
				line-height: 0.24rem;
				font-size: 0.24rem;
			}
		}
		.btn-active{
			.btn1{
				color: #ff7a01;
			}
			.btn2{
				color: #ff0000;
			}
		}
	}
</style>