"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "pop",
  props: ["popflag"],
  emits: ["update:popflag"],
  setup(__props) {
    let menu = [{
      title: "功能1",
      icon: "success",
      id: 1
    }, {
      title: "功能2",
      icon: "success",
      id: 2
    }, {
      title: "功能3",
      icon: "success",
      id: 3
    }, {
      title: "功能4",
      icon: "success",
      id: 4
    }, {
      title: "功能5",
      icon: "success",
      id: 5
    }, {
      title: "功能6",
      icon: "success",
      id: 6
    }, {
      title: "功能7",
      icon: "success",
      id: 7
    }, {
      title: "功能8",
      icon: "success",
      id: 8
    }, {
      title: "功能9",
      icon: "success",
      id: 9
    }, {
      title: "功能10",
      icon: "success",
      id: 10
    }];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => _ctx.$emit("update:popflag", false)),
        b: common_vendor.f(common_vendor.unref(menu), (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1d760ccd"], ["__file", "F:/Other/HBuilderProjects/iv-test/component/pop.vue"]]);
wx.createComponent(Component);
