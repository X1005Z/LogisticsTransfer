Page({
  data: {
    text: ''
  },

  // 复制地址
  copyAddress: function (e) {
    let item = e.currentTarget.dataset.item;
    console.log('复制', e, item);
    wx.setClipboardData({
      data: 'data',
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  }
})