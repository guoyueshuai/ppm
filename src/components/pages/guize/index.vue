<template>
	<div class="qiandao">
		<head-top message="签到规则">
			<span slot="fanhui" class="gohome" @click="goback">
				<img src="static/img/shouye/gys/go-1.png"/>
			</span>
		</head-top>
		<div class="main">
			<table>
				<tr>
					<td>签到天数</td>
					<td>获得积分</td>
				</tr>
				<tr>
					<td>第1天</td>
					<td>+1</td>
				</tr>
				<tr>
					<td>连续2天</td>
					<td>+2</td>
				</tr>
				<tr>
					<td>连续3天</td>
					<td>+3</td>
				</tr>
				<tr>
					<td>连续4天</td>
					<td>+4</td>
				</tr>
				<tr>
					<td>连续5天</td>
					<td>+5</td>
				</tr>
				<tr>
					<td>练习6天</td>
					<td>+6</td>
				</tr>
				<tr>
					<td>连续7天</td>
					<td>+7</td>
				</tr>
				<tr>
					<td>连续8天</td>
					<td>+8</td>
				</tr>
				<tr>
					<td>连续8天以上</td>
					<td>+8</td>
				</tr>
			</table>
			<p>备注：如中断，则重新从第一天开始计算</p>
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
			padding: 0.80rem 0.72rem 0;
			border-top: 0.01rem solid #dcdccd;
			table{
				width: 100%;
				height: auto;
				tr{
					width: 100%;
					height: 0.8rem;
					color: #909090;
					td{
						width: 50%;
						height: 0.8rem;
						text-align: center;
						font-size: 0.24rem;
						
					}
					td:first-child{
						border-right: 0.01rem solid #e7e7e7;
					}
					td:last-child{
						border-left: 0.01rem solid #e7e7e7;
					}
				}
				tr:nth-child(even){
					background: #f6f5fa;
				}
				tr:first-child{
					background: #ffa366;
					color: #fff;
				}
			}
			p{
				width: 100%;
				height: 0.8rem;
				line-height: 0.8rem;
				font-size: 0.24rem;
				color: #838383;
				letter-spacing: 0.02rem;
			}
		}
	}
</style>