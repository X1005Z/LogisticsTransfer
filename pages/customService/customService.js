Page({
  data: {

  },
  call: function() {
    wx.makePhoneCall({
      phoneNumber: '13433873149' //客服的的电话号码
    })
  },

  btn: function() {
    wx.showToast({
      title: '成功联系',
    })
  }
})