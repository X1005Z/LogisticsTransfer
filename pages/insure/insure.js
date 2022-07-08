Page({
  data: {
    show: false,
    checked1: false,
    checked2: false,
    input: null,
    money: 0.00,
    moneys: 0.00
  },

  // 弹出层
  showDialog: function () {
    this.setData({
      show: true,
    })
  },

  // 隐藏弹出层
  hideModal: function () {
    this.setData({
      show: false,
    });
  },

  // 点击取消按钮事件，关闭弹出层
  onCancel: function () {
    this.hideModal();
    wx.navigateTo({
      url: '/pages/paymentDetails/paymentDetails',
    })
  },

  // 点击确认按钮，关闭弹出层
  onConfirm: function () {
    this.hideModal();
    wx.navigateTo({
      url: '/pages/paymentDetails/paymentDetails',
    })
  },

  // 获取input框的值
  onBlur: function (e) {
    this.setData({
      input: e.detail.value
    })

    // 判断输入的值是否为数字
    let numReg = /^[0-9]*$/;
    if (!numReg.test(e.detail.value)) {
      wx.showToast({
        title: '请输入数字',
        icon: 'error'
      })
      return;
    }

    // 判断如果input中的值为空时，要把前面输入的值计算出来的结果给清空
    if (this.data.input == "") {
      this.setData({
        switch1Checked: false,
        switch2Checked: false,
        money: 0,
        moneys: 0
      })
    }
  },

  // 丢失险
  switch1: function (e) {
    // 获取到用户输入的值
    // console.log("input: " + this.data.input);
    let userInput = this.data.input;
    // console.log(userInput);

    // 计算丢失险
    let userInputMoney = userInput * 0.03;

    // console.log(this.data.checked1);
    this.setData({
      money: userInputMoney,
    })
  },


  // 关税险
  switch2: function () {
    // 获取到用户输入的值
    // console.log("input: " + this.data.input);
    let userInput = this.data.input;

    // 计算关税险
    let userInputMoney = userInput * 0.02;

    this.setData({
      moneys: userInputMoney,
    });
  }
})