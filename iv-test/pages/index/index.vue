<template>
	<view class="content">
		<!-- 头部 -->
		<view class="header">
			<text class="header-text">早上好！张三先生</text>
			<text class="iconfont icon-bell-l"></text>
		</view>
		<view class="main">
			<!-- 轮播图 -->
			<view class="swiper">
				<swiper class="swiper" circular :indicator-dots="true" :autoplay="true">
					<swiper-item class="swiper-item" v-for="(i,index) in swiper" :key="index">
						<img class="item-img" :src="i">
					</swiper-item>
				</swiper>
			</view>
			<!-- 中部导航栏 -->
			<view class="banner">
				<view class="banner-item" v-for="(item,index) in menu_middle" :key="item.id">
					<icon class="banner-icon" :type="item.icon"></icon>
					<text class="banner-title">{{item.title}}</text>
				</view>
			</view>
			<!-- 底部功能选择模块 -->
			<view class="funs">
				<view class="funs-item" v-for="(item,index) in menu_bottom" @click="popItem()" :key="item.id">
					<icon class="funs-icon" :type="item.icon"></icon>
					<text class="funs-title">{{item.title}}</text>
				</view>
			</view>
		</view>
		<Bars @tab='tab'></Bars>
	</view>
	<Pop v-if="flag" v-model:popflag="flag"></Pop>
</template>

<script setup>
	import Bars from '../../component/tabbar.vue';
	import Pop from '../../component/pop.vue';
	import {
		ref
	} from 'vue'
	import {
		onShow,
		onReady
	} from '@dcloudio/uni-app'

	onShow(() => {
		// uni.hideTabBar()
	})
	let flag = ref(false)

	function popItem() {
		// console.log(flag)
		flag.value = !flag.value
		// console.log(flag)
	}
	// swiper 数据源
	let swiper = ["/static/1.png", "/static/2.png", "/static/3.png"]
	// 中部导航栏 数据源
	let menu_middle = [{
		title: '功能1',
		icon: 'success',
		id: 1
	}, {
		title: '功能2',
		icon: 'success',
		id: 2
	}, {
		title: '功能3',
		icon: 'success',
		id: 3
	}, {
		title: '功能4',
		icon: 'success',
		id: 4
	}, {
		title: '功能5',
		icon: 'success',
		id: 5
	}]
	// 功能选择 数据源
	let menu_bottom = [{
		title: '功能A',
		icon: 'success',
		id: 1
	}, {
		title: '功能B',
		icon: 'success',
		id: 2
	}, {
		title: '功能C',
		icon: 'success',
		id: 3
	}, {
		title: '功能D',
		icon: 'success',
		id: 4
	}, {
		title: '功能E',
		icon: 'success',
		id: 5
	}, {
		title: '功能F',
		icon: 'success',
		id: 6
	}, {
		title: '功能G',
		icon: 'success',
		id: 7
	}, {
		title: '功能H',
		icon: 'success',
		id: 8
	}, {
		title: '功能I',
		icon: 'success',
		id: 9
	}, {
		title: '功能J',
		icon: 'success',
		id: 10
	}, {
		title: '功能J',
		icon: 'success',
		id: 11
	}, {
		title: '功能J',
		icon: 'success',
		id: 12
	}]
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		flex-direction: column;

		// background-color: #000;
		.main {
			flex: 1;
			background-color: #000000;
		}

		.all-title {
			font-size: 24rpx;
			margin-top: 14rpx;
		}

		.header {
			background-color: #272a3b;
			color: #70ad07;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100rpx;

			.header-text {
				flex: 1;
				text-align: center;
				font-size: 38rpx;
			}

			.iconfont {
				vertical-align: middle;
				margin-right: 20rpx;
				font-size: 40rpx;
			}
		}

		.swiper-item {
			.item-img {
				width: 100%;
				height: 100%;
			}
		}

		.banner {
			background-color: #272a3b;
			color: white;
			height: 140rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.banner-item {
				// border: 1px red solid;
				display: flex;
				flex-direction: column;
				align-items: center;

				.banner-icon {}

				.banner-title {
					.all-title()
				}
			}
		}

		.funs {
			flex: 1;
			display: flex;
			margin-top: 10rpx;
			flex-wrap: wrap;

			.funs-item {
				background-color: #ffffff;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-right: 3rpx;
				margin-bottom: 5rpx;
				width: calc(25vw - 3rpx);
			}

			.funs-icon {
				margin-top: 15rpx;
			}

			.funs-title {
				margin-top: 15rpx;
				.all-title()
			}
		}
	}
</style>
