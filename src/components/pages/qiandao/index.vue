<template>
	<div class="qiandao">
		<head-top message="每日签到">
			<span slot="fanhui" class="gohome" @click="goback">
				<img src="static/img/shouye/gys/go-1.png"/>
			</span>
			<router-link tag="span" to="/home/qiandao/guize" slot="xiangqing" class="xiangqing">签到规则</router-link>
		</head-top>
		<div class="nav">
			<div class="left">
				<span>09.06</span><span>积分+1</span>
			</div>
			<div class="center">
				<span>09.07</span><span>积分+2</span>
			</div>
			<div class="right">
				<span>09.08</span><span>积分+3</span>
			</div>
			<span id="zongjifen">104积分</span>
		</div>

		<div id="calendar">
			<!-- 年份 月份 -->
			<div class="month">
				<ul>
					<li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
					<li class="year-month" @click="pickYear(currentYear,currentMonth)">
						<span class="choose-year">{{ currentYear }}</span>
						<span class="choose-month">{{ currentMonth }}月</span>
					</li>
					<li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
				</ul>
			</div>
			<!-- 星期 -->
			<ul class="weekdays">
				<li>一</li>
				<li>二</li>
				<li>三</li>
				<li>四</li>
				<li>五</li>
				<li style="color:red">六</li>
				<li style="color:red">日</li>
			</ul>
			<!-- 日期 -->
			<ul class="days">
				<li @click="pick(day)" v-for="day in days">
					<!--本月-->
					<span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{ day.getDate() }}</span>
					<span v-else>
  <!--今天-->
  <span v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getDate() }}</span>
					<span v-else>{{ day.getDate() }}</span>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import headTop from '@/components/common/header'
	export default {
		name: "qiandao",
		data() {
			return {
				currentDay: 1,
				currentMonth: 1,
				currentYear: 1970,
				currentWeek: 1,
				days: [],
			}
		},
		components: {
			headTop
		},
		created: function() {
			this.initData(null);
		},
		methods: {
			goback() {
				this.$router.go(-1)
			},
			// 执行日历
			initData: function(cur) {
				var date;
				if(cur) {
					date = new Date(cur);
				} else {
					date = new Date();
				}
				this.currentDay = date.getDate();
				this.currentYear = date.getFullYear();
				this.currentMonth = date.getMonth() + 1;
				this.currentWeek = date.getDay(); // 1...6,0
				if(this.currentWeek == 0) {
					this.currentWeek = 7;
				}
				var str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay);
				console.log("today:" + str + "," + this.currentWeek);
				this.days.length = 0;
				// 今天是周日，放在第一行第7个位置，前面6个
				for(var i = this.currentWeek - 1; i >= 0; i--) {
					var d = new Date(str);
					d.setDate(d.getDate() - i);
					console.log("y:" + d.getDate());
					this.days.push(d);
				}
				for(var i = 1; i <= 35 - this.currentWeek; i++) {
					var d = new Date(str);
					d.setDate(d.getDate() + i);
					this.days.push(d);
				}
			},
			// 当前日期
			pick: function(date) {
				alert(this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate()));
			},
			// 上一月
			pickPre: function(year, month) {
				//  setDate(0); 上月最后一天
				//  setDate(-1); 上月倒数第二天
				//  setDate(dx) 参数dx为 上月最后一天的前后dx天
				var d = new Date(this.formatDate(year, month, 1));
				d.setDate(0);
				this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
			},
			// 下一月
			pickNext: function(year, month) {
				var d = new Date(this.formatDate(year, month, 1));
				d.setDate(35);
				this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
			},
			// 当前年月
			pickYear: function(year, month) {
				alert(year + "," + month);
			},

			// 返回 类似 2016-01-02 格式的字符串
			formatDate: function(year, month, day) {
				var y = year;
				var m = month;
				if(m < 10) m = "0" + m;
				var d = day;
				if(d < 10) d = "0" + d;
				return y + "-" + m + "-" + d
			},
		}
	}
</script>

<style lang="less" scoped="scoped">
	.qiandao {
		width: 100%;
		height: auto;
		background: #f5f5f5;
		position: absolute;
		top: 0.96rem;
		bottom: 0;
		z-index: 2;
		overflow: auto;
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
		.xiangqing {
			position: absolute;
			right: 0.25rem;
			top: 50%;
			transform: translateY(-50%);
			font-size: 0.22rem;
		}
		.nav {
			width: 100%;
			height: 4.5rem;
			background: url(/static/img/shouye/gys/bg.png) no-repeat center;
			background-size: 100% 100%;
			display: flex;
			justify-content: space-around;
			position: relative;
			#zongjifen {
				position: absolute;
				left: 50%;
				bottom: 0.2rem;
				transform: translateX(-50%);
				display: block;
				width: 100%;
				height: 0.36rem;
				text-align: center;
				font-size: 0.24rem;
				color: #ff7c03;
				font-weight: bold;
			}
			div {
				width: 0.8rem;
				height: 1rem;
				margin-top: 2.60rem;
				span {
					display: block;
					width: 0.8rem;
					height: 0.4rem;
					font-size: 0.24rem;
					line-height: 0.4rem;
				}
			}
			.left,
			.right {
				color: #fbc2c2;
			}
			.left {
				text-align: right;
			}
			.center {
				text-align: center;
				color: #fff;
			}
			.right {
				text-align: left;
			}
		}
		#calendar {
			width: 6.7rem;
			margin: 0 auto;
			.month {
				width: 100%;
				background: #fff;
				ul {
					display: flex;
					justify-content: space-between;
					.year-month {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-around;
						.choose-year {
							padding-left: 0.5rem;
							padding-right: 0.5rem;
						}
						.choose-month {
							text-align: center;
							font-size: 0.4rem;
						}
					}
					.arrow {
						padding: 0.2rem;
					}
					li {
						color: #000;
						font-size: 0.3rem;
						text-transform: uppercase;
						letter-spacing: 0.03rem;
					}
				}
			}
			.weekdays {
				padding: 0.1rem 0;
				background-color: #fff;
				display: flex;
				flex-wrap: wrap;
				color: #000;
				justify-content: space-around;
				li {
					display: inline-block;
					width: 13.6%;
					text-align: center;
				}
			}
			.days {
				background: #FFFFFF;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				li {
					display: inline-block;
					width: 14.2%;
					text-align: center;
					padding-bottom: 0.2rem;
					padding-top: 0.2rem;
					font-size: 0.24rem;
					color: #000;
				}
			}
			.days li .other-month {
				padding: 0.05rem;
				color: gainsboro;
			}
		}
	}
</style>