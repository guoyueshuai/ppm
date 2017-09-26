<template>
	<div class="header">
		<slot name="fanhui"></slot>
		<span>{{message}}</span>
		<slot name="xiangqing"></slot>
	</div>
</template>

<script>
	export default{
		props:['message']
	}
</script>

<style lang="less" scoped="scoped">
	.header{
		width: 100%;
		height: 0.96rem;
		line-height: 0.96rem;
		box-sizing: border-box;
		background: #fff;
		font-size: 0.36rem;
		color: #000;
		position: fixed;
		top: 0; left: 0;
		z-index: 99;
		text-align: center;
	}
</style>