Page({
  data: {
    name: "明德仓库",
    address: "深圳市龙华区龙华街道工业路壹城环智中心C座2607室",
    phone: "18688880130",
  },

  // 复制
  copy: function (e) {
    let item = e.currentTarget.dataset.item;
    console.log('复制', e, item);
    wx.setClipboardData({
      data: item,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: "success"
        })
      }
    })
  }
})