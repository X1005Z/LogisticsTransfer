Page({
  data: {
    name: "收件人：明德仓库",
    address1: "收货地址：深圳市龙华区龙华街道工业",
    address2: "路壹城环智中心C座2607室",
    phone: "联系电话：18688880130",
    zipcode: "邮政编码：518000"
  },

  // 复制地址
  copyAddress: function (e) {
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
