<template>
	<div class="faxian">
		<div class="zong">
			<header class="header">
				发现
			</header>
			<div class="main">
				<router-link tag="div" to="/find/sport" class="main_l">
					<span class="main_1">精彩活动</span>
				</router-link>
				<router-link tag="div" to="/find/delelope" class="main_r">
					<span class="main_2">成长事迹</span>
				</router-link>
			</div>
		</div>
		<router-view class="view"></router-view>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.faxian {
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
		overflow: auto;
		bottom: 1.07rem;
		.zong {
			width: 100%;
			height: 1.84rem;
			position: fixed;
			top: 0;
			left: 0;
			box-sizing: border-box;
			display: block;
			z-index: 999999;
			.header {
				width: 100%;
				height: 0.96rem;
				font-size: 0.35rem;
				line-height: 0.96rem;
				text-align: center;
				font-weight: bold;
				background: #fff;
			}
			.main {
				width: 100%;
				height: 0.88rem;
				border-top: 0.02rem solid #eeeeee;
				border-bottom: 0.01rem solid #eeeeee;
				justify-content: space-between;
				display: flex;
				background: #fff;
				div {
					span {
						border-bottom: 0.06rem solid #fff;
					}
				}
				.main_l {
					height: 0.88rem;
					width: 100%;
					line-height: 0.88rem;
					font-size: 0.26rem;
					text-align: center;
					border-right: 0.01rem solid #eeeeee;
					.main_1 {
						height: 0.82rem;
						width: 100%;
						display: block;
					}
				}
				.main_r {
					height: 0.88rem;
					width: 100%;
					line-height: 0.88rem;
					font-size: 0.26rem;
					text-align: center;
					.main_2 {
						height: 0.82rem;
						width: 100%;
						display: block;
					}
				}
				.main_active {
					span {
						border-bottom: 0.06rem solid #ff6600;
					}
				}
			}
		}
	}
</style>