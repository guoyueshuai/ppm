<template>
	<div class="app">
		<swiper :options="swiperOption" class="slice">
			<swiper-slide><img src="../../../../static/slice/slice1.jpg"/></swiper-slide>
			<swiper-slide><img src="../../../../static/slice/slice2.jpg"/></swiper-slide>
			<swiper-slide><img src="../../../../static/slice/slice3.jpg"/></swiper-slide>
			<swiper-slide><img src="../../../../static/slice/slice4.jpg"/></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
        	<div class="swiper-button-next" slot="button-next"></div>
		</swiper>

		<div class="section">
			<div class="yin">
				<span></span>
				<div class="hang">银行存管系统上线小贴士。</div>
				<a href="#"></a>
			</div>
			<div class="mei">
				<router-link tag="dl" to="/home/qiandao">
					<dt><img src="../../../../static/img/shouye/1_11.png" alt="" /></dt>
					<dd>每日签到</dd>
				</router-link>
				<router-link tag="dl" to="/home/anquan">
					<dt><img src="../../../../static/img/shouye/1_13.png" alt="" /></dt>
					<dd>安全保障</dd>
				</router-link>
				<router-link tag="dl" to="/home/yaoqing">
					<dt><img src="../../../../static/img/shouye/1_15.png" alt="" /></dt>
					<dd>推荐有礼</dd>
				</router-link>
			</div>
			<div class="mai">
				<div class="xin">
					<span>新人标第12547期</span>
					<a href="#" class="a1">恒丰银行</a>
					<a href="#" class="a2"></a>
				</div>
				<div class="shu">
					15.00<span>%</span>
					<a href="#"></a>
				</div>
				<div class="qi">
					<ul>
						<li>期限8天</li>
						<li>本息保障</li>
						<li class="ci">次日起息</li>
					</ul>
				</div>
				<div class="li">
					<a href="#">立即购买</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	export default {
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					nextButton: '.swiper-button-next',
			        prevButton: '.swiper-button-prev',
			        spaceBetween: 30,
			        autoplay:2000
				}
			}
		},
		components: {
			swiper,
			swiperSlide
		}
	}
</script>
<style lang="less">
	.app {
		width: 100%;
		height: auto;
		overflow-y: scroll;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 1.07rem;
		.slice{
			width: 100%;
			height: 4rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.section {
			width: 100%;
			height: auto;
			.yin {
				width: 100%;
				height: 0.8rem;
				background: white;
				margin-top: 0.2rem;
				display: flex;
				border-bottom: 0.02rem solid #f0f0f0;
				span {
					width: 0.36rem;
					height: 0.3rem;
					background: url(../../../../static/img/shouye/1_03.png)no-repeat center center;
					display: block;
					background-size: 100%;
					margin-left: 0.41rem;
					margin-top: 0.25rem;
				}
				.hang {
					width: 5.86rem;
					height: 0.8rem;
					line-height: 0.8rem;
					margin-left: 0.3rem;
					font-size: 0.27rem;
					color: #020202;
				}
				a {
					width: 0.1rem;
					height: 0.19rem;
					background: url(../../../../static/img/shouye/1_06.png)no-repeat center center;
					background-size: 100%;
					margin-top: 0.3rem;
				}
			}
			.mei {
				width: 100%;
				height: 2.04rem;
				background: white;
				display: flex;
				dl {
					width: 33.3%;
					height: 2.04rem;
					text-align: center;
					flex-grow: 1;
					dt {
						margin-top: 0.32rem;
					}
					dt img {
						width: 0.96rem;
						height: 0.96rem;
					}
					dd {
						margin-top: 0.1rem;
						font-size: 0.24rem;
						color: #333333;
					}
				}
			}
			.mai {
				width: 100%;
				height: 4.74rem;
				background: white;
				margin-top: 0.2rem;
				.xin {
					width: 100%;
					height: 0.4rem;
					background: white;
					padding-top: 0.34rem;
					display: flex;
					span {
						width: 2.28rem;
						height: 0.4rem;
						line-height: 0.4rem;
						margin-left: 0.38rem;
						color: #2b2b2b;
						font-size: 0.24rem;
					}
					.a1 {
						width: 1.04rem;
						height: 0.4rem;
						color: #797979;
						background: url(../../../../static/img/shouye/1_23.png)no-repeat left center;
						background-size: 25%;
						padding-left: 0.47rem;
						font-size: 0.24rem;
					}
					.a2 {
						width: 1.08rem;
						height: 0.4rem;
						background: url(../../../../static/img/shouye/1_21.png)no-repeat center center;
						background-size: 100%;
						margin-left: 2.4rem;
					}
				}
				.shu {
					width: 100%;
					height: 1rem;
					line-height: 1rem;
					background: white;
					margin-top: 0.85rem;
					color: #ff6600;
					font-size: 1rem;
					text-align: center;
					position: relative;
					span {
						font-size: 0.42rem;
					}
					a {
						width: 1rem;
						height: 1rem;
						background: url(../../../../static/img/shouye/1_28.png)no-repeat center center;
						background-size: 100%;
						display: block;
						position: absolute;
						top: 0;
						right: 0.17rem;
					}
				}
				.qi {
					width: 100%;
					height: 0.28rem;
					line-height: 0.28rem;
					background: white;
					margin-top: 0.57rem;
					ul {
						width: 100%;
						height: 0.28rem;
						display: flex;
						li {
							width: 33.3%;
							height: 0.28rem;
							flex-grow: 1;
							text-align: center;
							color: #797979;
							border-right: 0.01rem solid #797979;
							font-size: 0.26rem;
						}
						.ci {
							border: none;
						}
					}
				}
				.li {
					width: 100%;
					height: 0.88rem;
					background: white;
					margin-top: 0.37rem;
					padding-bottom: 0.5rem;
					a {
						width: 5.54rem;
						height: 0.88rem;
						line-height: 0.88rem;
						background: #ff6600;
						display: block;
						margin-left: 0.93rem;
						border-radius: 0.44rem;
						text-align: center;
						color: white;
						font-size: 0.32rem;
					}
				}
			}
		}
	}
</style>