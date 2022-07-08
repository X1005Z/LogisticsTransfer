Page({
  data: {
    show: false,
    list: [{
        'method': '普通货物'
      },
      {
        'method': '电子产品'
      },
      {
        'method': '液体粉末'
      },
      {
        'method': '内地EMS'
      },
      {
        'method': '广东EMS'
      }
    ],
    idx: 0,

    // 默认是美国
    country: "美国"
  },

  // 修改地址
  address: function () {
    wx.navigateTo({
      url: '/pages/chooseCountrys/chooseCountrys',
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

  // 点击下一步按钮，跳转到其他页面，关闭弹出层
  onConfirm: function () {
    // console.log(111);
    wx.navigateTo({
      url: '/pages/fillAddress/fillAddress'
    })
    this.hideModal();
  },

  // 设置立即转运切换 
  goIndex(e) {
    let index = e.currentTarget.dataset.index;
    // console.log('每个index', index);
    this.setData({
      idx: index
    })
  },

  onShow() {
    // 从选择地址那边带过来的参数
    if(this.options?.country) {
      this.setData({
        country: this.options.country
      })
    }
  }
})