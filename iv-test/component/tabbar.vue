<template>
  <view class="tabbar-container">
    <block>
      <view class="tabbar-item" v-for="(item, index) in tabbarList" :class="[item.centerItem ? ' center-item' : '']" @click="changeItem(item)" :key="index">
        <view class="item-top">
          <image :src="currentItem == item.id ? item.selectIcon : item.icon"></image>
        </view>
        <view class="item-bottom" :class="[currentItem == item.id ? 'item-active' : '']">
          <text>{{ item.text }}</text>
        </view>
      </view>
    </block>
  </view>
</template>

<script>
// 组件的书写符合easycom规范 无需引入直接使用
export default {
  props: {
    currentPage: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentItem: 0,
      tabbarList: [
        {
          id: 0,
          path: '/pages/index/index',
          icon: '/static/images/tabbar/release.png',
          selectIcon: '/static/images/tabbar/release.png',
          text: '首页',
          centerItem: false
        },
        {
          id: 1,
          path: '/pages/assist/assist',
          icon: '/static/images/tabbar/release.png',
          selectIcon: '/static/images/tabbar/release.png',
          text: '中间',
          // 通过类名class控制样式大小
          centerItem: false
        },
        {
          id: 2,
          path: '/pages/common/common',
          icon: '/static/images/tabbar/dynamic.png',
          selectIcon: '/static/images/tabbar/dynamic-select.png',
          text: '我的',
          centerItem: true
        },{
          id: 3,
          path: '/pages/me/me',
          icon: '/static/images/tabbar/release.png',
          selectIcon: '/static/images/tabbar/release.png',
          text: '我的',
          centerItem: false
        },{
          id: 4,
          path: '/pages/analysis/analysis',
          icon: '/static/images/tabbar/release.png',
          selectIcon: '/static/images/tabbar/release-select.png',
          text: '我的',
          centerItem: false
        },
      ]
    }
  },
  mounted () {
    this.currentItem = this.currentPage
    // 隐藏原来的tabBar导航栏
    // uni.hideTabBar()
  },
  methods: {
    changeItem (item) {
      let _this = this
      //_this.currentItem = item.id;
      uni.switchTab({
        url: item.path
      })
    }
  }
};
</script>
<style>
view {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.tabbar-container {
  position: fixed;
  bottom: 0rpx;
  left: 0rpx;
  width: 100%;
  height: 110rpx;
  box-shadow: 0 0 5px #999;
  display: flex;
  align-items: center;
  padding: 5rpx 0;
  color: #999999;
}
/* 针对tabbar的统一处理 */
.tabbar-container .tabbar-item {
  width: 33.33%;
  height: 100rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.tabbar-container .item-active {
  color: #f00;
}
.tabbar-container .center-item {
  display: block;
  position: relative;
}
.tabbar-container .tabbar-item .item-top {
  width: 70rpx;
  height: 70rpx;
  padding: 10rpx;
}
/* 针对tabbar的特殊处理 */
.tabbar-container .center-item .item-top {
  flex-shrink: 0;
  width: 100rpx;
  height: 100rpx;
  position: absolute;
  top: -50rpx;
  left: calc(50% - 50rpx);
  border-radius: 50%;
  box-shadow: 0 0 5px #999;
  background-color: #ffffff;
}
.tabbar-container .tabbar-item .item-top image {
  width: 100%;
  height: 100%;
}
.tabbar-container .tabbar-item .item-bottom {
  font-size: 28rpx;
  width: 100%;
}
.tabbar-container .center-item .item-bottom {
  position: absolute;
  bottom: 5rpx;
}
</style>