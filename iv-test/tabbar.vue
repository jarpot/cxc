<template>
        <u-tabbar
            :value="value"
            :placeholder="true"
            @change="change"
            :fixed="true"
            :safeAreaInsetBottom="true"//是否开启安全距离
        >
            <template>
                <u-tabbar-item text="首页" icon="home" dot ></u-tabbar-item>
                <u-tabbar-item text="分类" icon="home" dot ></u-tabbar-item>
                <view class="tabars">
                    <view class="item">
                        <image class="img" src="../static/logo.png" mode="widthFix"></image>
                    </view>
                </view>
                <u-tabbar-item text="购物车" icon="photo" badge="3"></u-tabbar-item>
                <u-tabbar-item text="我的" icon="photo" badge="3"></u-tabbar-item>
            </template>
        </u-tabbar>
</template>

<script>
    export default {
        data() {
            return {
                value:  getApp().globalData.index,
            }
        },
        onLoad() {
            // this.value = getApp().globalData.index
        },
        methods: {
            change(e){
                getApp().globalData.index = e
                this.$emit('tab',e)
            }
        }
    }
</script>

<style lang="less">
 .tabars{
     width: 90rpx;
     height: 70rpx;
     display: flex;
     flex-direction: column;
     align-content: center;
     position: relative;
     bottom: 50rpx;
     border-radius: 50%;
     background-color: #fff;
     border-top: 2px solid #dadbde;
     padding: 30rpx;
     .item{
         width: 100%;
         height: 100%;
         display: flex;
         justify-content: center;
         .img{
             width: 80%;
         }
     }
 }
</style>