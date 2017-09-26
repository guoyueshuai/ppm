<template>
	<div class="wrap">
		<div class="header">
			<dl class="login">
				<dt class="lo_hand"><img src="../../../../static/img/zhanghu/header.png"/></dt>
				<dd class="lo_xiang">
					<div class="tel">
						176****9389
					</div>
					<div class="text">
						风险评估
					</div>
				</dd>
			</dl>
			<div class="xiaoxi">
				<img src="../../../../static/img/zhanghu/mq.png" />
			</div>
			<div class="xiangqing">
				<div class="zichuan">
					<p>总资产（元）</p>
					<div class="num">0.00</div>
				</div>
				<div class="shouyi">
					累计收益（元）<i>0.00</i>
				</div>
			</div>
		</div>
		<div class="yu">
			<div class="shengyu">账户余额：<i>0.00元</i></div>
			<div class="tixian">提现</div>
			<div class="chongzhi">充值</div>
		</div>
		<div class="btns">
			<dl class="btn">
				<dt><img src="static/img/zhanghu/btn_1.png"/></dt>
				<dd>我的投资</dd>
			</dl>
			<dl class="btn">
				<dt><img src="static/img/zhanghu/btn_2.png"/></dt>
				<dd>我的券包</dd>
			</dl>
			<dl class="btn">
				<dt><img src="static/img/zhanghu/btn_3.png"/></dt>
				<dd>账户中心</dd>
			</dl>
			<dl class="btn">
				<dt><img src="static/img/zhanghu/btn_4.png"/></dt>
				<dd>会员中心</dd>
			</dl>
			<dl class="btn">
				<dt><img src="static/img/zhanghu/btn_5.png"/></dt>
				<dd>客服中心</dd>
			</dl>
			<dl class="btn">
				<dt><img src="static/img/zhanghu/btn_6.png"/></dt>
				<dd>更多</dd>
			</dl>
		</div>
		<div class="kefudianhua">
			<div class="dianhua">400-922-8855</div>
			<div class="shijian">服务时间9:00-21:00</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.wrap {
		position: absolute;
		top: 0;
		bottom: 1.07rem;
		width: 100%;
		height: auto;
		overflow: auto;
		background: #efeff4;
		.header {
			width: 100%;
			height: 5rem;
			background: url(../../../../static/img/zhanghu/zhanghu.png) no-repeat center;
			background-size: 100% 100%;
			position: relative;
			.login {
				width: 2.63rem;
				height: 0.88rem;
				display: flex;
				justify-content: flex-start;
				position: absolute;
				top: 0.44rem;
				left: 0.6rem;
				.lo_hand {
					width: 0.76rem;
					height: 0.76rem;
					img {
						width: 100%;
						height: auto;
					}
				}
				.lo_xiang {
					width: 1.86rem;
					height: 100%;
					color: #fff;
					box-sizing: border-box;
					padding-left: 0.18rem;
					.tel {
						width: 100%;
						height: 0.4rem;
						line-height: 0.4rem;
						font-size: 0.24rem;
						letter-spacing: 0.02rem;
					}
					.text {
						width: 1.64rem;
						height: 0.4rem;
						line-height: 0.34rem;
						border: 0.02rem solid #fff;
						font-size: 0.22rem;
						border-radius: 0.2rem;
						box-sizing: border-box;
						padding-left: 0.15rem;
						background: url(../../../../static/img/zhanghu/rg.png) no-repeat 1.35rem center;
						background-size: 0.12rem 0.2rem;
						background-color: #ffae4e;
					}
				}
			}
			.xiaoxi {
				width: 0.4rem;
				height: 0.4rem;
				position: absolute;
				top: 0.6rem;
				right: 0.6rem;
				img {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			.xiangqing {
				width: 33%;
				height: 2.5rem;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				bottom: 1.2rem;
				.zichuan {
					width: 100%;
					height: 1.59rem;
					p {
						width: 100%;
						height: 1rem;
						text-align: center;
						font-size: 0.3rem;
						color: #ffd2b8;
						line-height: 1rem;
					}
					.num {
						width: 100%;
						height: 0.59rem;
						color: #ffffff;
						line-height: 0.59rem;
						font-size: 0.5rem;
						text-align: center;
					}
				}
				.shouyi {
					width: 100%;
					height: 0.5rem;
					margin-top: 0.40rem;
					color: #ffd2b8;
					line-height: 0.5rem;
					font-size: 0.26rem;
					i {
						color: #fff;
					}
				}
			}
		}
		.yu {
			width: 100%;
			height: 0.85rem;
			box-sizing: border-box;
			padding: 0 0.6rem;
			background: -webkit-linear-gradient(top, #fff5ef, #fff);
			display: flex;
			justify-content: space-between;
			align-items: center;
			.shengyu {
				width: 3.5rem;
				color: #a0a0a0;
				height: 0.85rem;
				line-height: 0.85rem;
				font-size: 0.26rem;
				i {
					color: #000;
				}
			}
			.tixian {
				width: 0.96rem;
				height: 0.46rem;
				border-radius: 0.23rem;
				border: 0.02rem solid #ff6700;
				box-sizing: border-box;
				line-height: 0.44rem;
				text-align: center;
				color: #ff6700;
			}
			.chongzhi {
				width: 0.96rem;
				height: 0.46rem;
				border-radius: 0.23rem;
				font-size: 0.24rem;
				background: #ff6700;
				color: #fff;
				line-height: 0.46rem;
				text-align: center;
			}
		}
		.btns {
			width: 100%;
			height: 4.64rem;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			background: #efeff4;
			.btn {
				width: 33.1%;
				height: 2.3rem;
				margin-top: 0.02rem;
				margin-right: 0.3%;
				background: #fff;
				box-sizing: border-box;
				padding: 0.4rem;
				dt {
					width: 0.96rem;
					height: 0.96rem;
					margin: 0 auto;
					img {
						display: block;
						width: 100%;
						height: 100%;
					}
				}
				dd {
					width: 100%;
					height: 0.26rem;
					text-align: center;
					line-height: 0.26rem;
					margin-top: 0.3rem;
					font-size: 0.26rem;
					color: #000;
				}
			}
			.btn:nth-child(3n) {
				margin-right: 0;
			}
		}
		.kefudianhua {
			width: 5.17rem;
			height: 0.57rem;
			background: #efeff4;
			margin: 0 auto;
			box-sizing: border-box;
			border: 0.01rem solid #cbcbcb;
			border-radius: 0.1rem;
			margin-top: 0.4rem;
			margin-bottom: 0.4rem;
			padding: 0 0.5rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.dianhua {
				font-size: 0.24rem;
				color: #666666;
			}
			.shijian {
				font-size: 0.18rem;
				color: #b5b5b5;
			}
		}
	}
</style>