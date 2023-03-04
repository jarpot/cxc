"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    currentPage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentItem: 0,
      tabbarList: [
        {
          id: 0,
          path: "/pages/index/index",
          icon: "/static/images/tabbar/release.png",
          selectIcon: "/static/images/tabbar/release.png",
          text: "首页",
          centerItem: false
        },
        {
          id: 1,
          path: "/pages/assist/assist",
          icon: "/static/images/tabbar/release.png",
          selectIcon: "/static/images/tabbar/release.png",
          text: "中间",
          // 通过类名class控制样式大小
          centerItem: false
        },
        {
          id: 2,
          path: "/pages/common/common",
          icon: "/static/images/tabbar/dynamic.png",
          selectIcon: "/static/images/tabbar/dynamic-select.png",
          text: "我的",
          centerItem: true
        },
        {
          id: 3,
          path: "/pages/me/me",
          icon: "/static/images/tabbar/release.png",
          selectIcon: "/static/images/tabbar/release.png",
          text: "我的",
          centerItem: false
        },
        {
          id: 4,
          path: "/pages/analysis/analysis",
          icon: "/static/images/tabbar/release.png",
          selectIcon: "/static/images/tabbar/release-select.png",
          text: "我的",
          centerItem: false
        }
      ]
    };
  },
  mounted() {
    this.currentItem = this.currentPage;
  },
  methods: {
    changeItem(item) {
      common_vendor.index.switchTab({
        url: item.path
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabbarList, (item, index, i0) => {
      return {
        a: $data.currentItem == item.id ? item.selectIcon : item.icon,
        b: common_vendor.t(item.text),
        c: common_vendor.n($data.currentItem == item.id ? "item-active" : ""),
        d: common_vendor.n(item.centerItem ? " center-item" : ""),
        e: common_vendor.o(($event) => $options.changeItem(item), index),
        f: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Other/HBuilderProjects/iv-test/component/tabbar.vue"]]);
wx.createComponent(Component);
