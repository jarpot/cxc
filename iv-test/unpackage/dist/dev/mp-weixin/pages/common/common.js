"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _component_midell_box = common_vendor.resolveComponent("midell-box");
  _component_midell_box();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      ["current-page"]: 1
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Other/HBuilderProjects/iv-test/pages/common/common.vue"]]);
wx.createPage(MiniProgramPage);
