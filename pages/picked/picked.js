Page({
  data: {
    name: "新希望仓库",
    phone: "18688880130",
    address: "深圳市龙华区龙华街道工业路壹城环智中心C座2607室",
    text: "20220509140712345678",
  },

  // 复制地址
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
  },

  // 复制订单号
  copyNumber: function (e) {
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
  },

  topay() {
    wx.navigateTo({
      url: '/pages/toPay/toPay',
    })
  }
})