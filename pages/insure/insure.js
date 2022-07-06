Page({
  data: {
    show: false,
  },


  // 确认打包弹出层
  showDialog: function () {
    this.setData({
      show: true,
    })
  },

  // 确认打包隐藏弹出层
  hideModal: function () {
    this.setData({
      show: false,
    });
  },

  // 确认打包，点击取消按钮事件，关闭弹出层
  onCancel: function () {
    this.hideModal();
  },

  // 确认打包，点击确认按钮，关闭弹出层
  onConfirm: function () {
    this.hideModal();
    wx.navigateTo({
      url: '/pages/paymentDetails/paymentDetails',
    })
  }
})