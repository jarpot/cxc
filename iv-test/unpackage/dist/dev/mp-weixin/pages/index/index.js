"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (Bars + Pop)();
}
const Bars = () => "../../component/tabbar.js";
const Pop = () => "../../component/pop.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onShow(() => {
    });
    let flag = common_vendor.ref(false);
    function popItem() {
      flag.value = !flag.value;
    }
    let swiper = ["/static/1.png", "/static/2.png", "/static/3.png"];
    let menu_middle = [{
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
    }];
    let menu_bottom = [{
      title: "功能A",
      icon: "success",
      id: 1
    }, {
      title: "功能B",
      icon: "success",
      id: 2
    }, {
      title: "功能C",
      icon: "success",
      id: 3
    }, {
      title: "功能D",
      icon: "success",
      id: 4
    }, {
      title: "功能E",
      icon: "success",
      id: 5
    }, {
      title: "功能F",
      icon: "success",
      id: 6
    }, {
      title: "功能G",
      icon: "success",
      id: 7
    }, {
      title: "功能H",
      icon: "success",
      id: 8
    }, {
      title: "功能I",
      icon: "success",
      id: 9
    }, {
      title: "功能J",
      icon: "success",
      id: 10
    }, {
      title: "功能J",
      icon: "success",
      id: 11
    }, {
      title: "功能J",
      icon: "success",
      id: 12
    }];
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(swiper), (i, index, i0) => {
          return {
            a: i,
            b: index
          };
        }),
        b: common_vendor.f(common_vendor.unref(menu_middle), (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: item.id
          };
        }),
        c: common_vendor.f(common_vendor.unref(menu_bottom), (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => popItem(), item.id),
            d: item.id
          };
        }),
        d: common_vendor.o(_ctx.tab),
        e: common_vendor.unref(flag)
      }, common_vendor.unref(flag) ? {
        f: common_vendor.o(($event) => common_vendor.isRef(flag) ? flag.value = $event : flag = $event),
        g: common_vendor.p({
          popflag: common_vendor.unref(flag)
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "F:/Other/HBuilderProjects/iv-test/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
