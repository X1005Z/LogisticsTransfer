Page({
  data: {
    buttons: [{
        text: '取消'
      },
      {
        text: '领取'
      }
    ],
    show: false,
  },

  _cancelEvent(e) {
    console.log('你点击了取消');
    this.setData({
      show: false
    })
  },

  _confirmEvent(e) {
    console.log('你点击了领取');
    this.setData({
      show: true
    })
  },

  // 弹出层
  showDialog: function () {
    console.log('1111');
    this.setData ({
      show: true,
    })
  },
})