Page({
  data: {
    name: "新希望仓库",
    phone: "18688880130",
    address: "深圳市龙华区龙华街道工业路壹城环智中心C座2607室",
    text: "20220509140712345678",
    show: false,
    shows: false,
    imgArr: [
      '../../assets/images/称重图.png',
      '../../assets/images/称重图.png',
      '../../assets/images/称重图.png'
    ]
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

  // 确认打包弹出层
  showDialog: function () {
    this.setData({
      show: true,
    })
  },

  // 确认打包隐藏弹出层
  hideModal: function () {
    this.setData({
      show: false
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
      url: '/pages/insure/insure',
    })
  },

  // 图片放大
  previewImg: function(e) {
    let that = this;
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: that.data.imgArr,
    })
  }
})