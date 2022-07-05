Page({
  data: {
    show: false,
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