Page({
  data: {
    name: "新希望仓库",
    phone: "18688880130",
    address: "深圳市龙华区龙华街道工业路壹城环智中心C座2607室",
    text: "20220509140712345678",
    show: false
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

  // 弹出层
  showDialog: function () {
    this.setData({
      show: true
    })
  },

  // 隐藏弹出层
  hideModal: function () {
    this.setData({
      show: false
    });
  },

  // 点击取消按钮事件，关闭弹出层
  onCancel: function () {
    
    this.hideModal();
  },

  // 点击领取按钮，关闭弹出层
  onConfirm: function () {
    this.hideModal();
  }
})