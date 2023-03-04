<template>
	<view class="mask" @click="$emit('update:popflag', false)">
		
	</view>
	<view class="main">
		<view class="header">
			<text>功能B</text>
		</view>
		<view class="content">
			<view class="item" v-for="(item,index) in menu" :key="item.id">
				<icon class="funs-icon" :type="item.icon"></icon>
				<text class="funs-title">{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	defineProps(['popflag'])
	defineEmits(['update:popflag'])
	// const flag = defineProps({
	// 	popflag:Boolean
	// })
	let menu = [{
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
	}, {
		title: '功能6',
		icon: 'success',
		id: 6
	}, {
		title: '功能7',
		icon: 'success',
		id: 7
	}, {
		title: '功能8',
		icon: 'success',
		id: 8
	}, {
		title: '功能9',
		icon: 'success',
		id: 9
	}, {
		title: '功能10',
		icon: 'success',
		id: 10
	}]
</script>

<style lang="less" scoped>
	.mask{
		width: 100%;
		height:100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: #6f6f6f;
	}
	.main{
		position: absolute;
		z-index: 9999;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #78bd00;
		display: flex;
		flex-direction: column;
		width: 90vw;
		.header{
			text-align: center;
			background-color: #272a3b;
			color: #78bd00;
		}
		.content{
			// width: 150rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			.item{
				// float: left;
				width: 33%;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		}
	}
</style>
