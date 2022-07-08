Page({
  data: {
    name: "新希望仓库",
    phone: "18688880130",
    address: "深圳市龙华区龙华街道工业路壹城环智中心C座2607室",
    text: "20220509140712345678",
    show: false, // 取消订单弹窗
    shows: false, // 添加订单弹窗的
    showorder: false, // 订单失去焦点弹窗
    disableds: false, // 快递个数
    disabledsText: false, // 快递备注文本框
    fastmailList: [], // 内容标题（可以添加或者删除)
    showBtn: false, // 补充按钮隐藏
    disabledOrder: false, // 订单按钮确认后禁用
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

  // 补充快递单号弹出层
  showDialogs: function () {
    this.setData({
      shows: true
    })
  },

  // 补充快递单号，点击取消按钮事件，关闭弹出层
  onCancels: function () {
    this.hideModal();
  },

  // 补充快递单号，点击确认按钮，关闭弹出层
  onConfirms: function () {
    this.hideModal();
    // 点击添加按钮，就往数组里添加一条空数据
    var lists = this.data.fastmailList;
    lists.push("");
    this.setData({
      fastmailList: lists
    });
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
      show: false,
      shows: false,
      showorder: false
    });
  },

  // 点击取消按钮事件，关闭弹出层
  onCancel: function () {
    this.hideModal();
  },

  // 点击确定按钮，关闭弹出层
  onConfirm: function () {
    this.hideModal();
  },

  // 快递输入个数
  onBlur: function (e) {
    // 判断是否为数字的正则
    let numReg = /^[0-9]*$/;
    let num = e.detail.value;

    // 判断输入的值是不是数字,不是直接退出，不执行下面的程序
    if (!numReg.test(num) && num !== "") {
      wx.showToast({
        title: '请输入数字',
        icon: 'error'
      })
      return;
    };

    if (numReg.test(num) && num !== "") {
      var lists = this.data.fastmailList;
      for (let i = 0; i < num; i++) {
        lists.push('');
      }
      this.setData({
        showBtn: true,
        disableds: true,
        fastmailList: lists,
      });
    }
  },


  // 当文本框输入值后，失去焦点之后禁止输入
  onBlurs(e) {
    // 获取文本框的值
    let textValue = e.detail.value;
    console.log(textValue);
    // 当文本框输入值后，失去焦点之后禁止输入
    if (textValue) {
      this.setData({
        disabledsText: true
      })
    }
  },

  // 删除订单号
  del(e) {
    var idx = e.currentTarget.dataset.index;
    var lists = this.data.fastmailList;
    console.log(idx);
    // for (let i = 0; i < lists.length; i++) {
    //   if (idx == i) {
    //     lists.splice(idx, 1)
    //   }
    // }
    lists.splice(idx, 1);
    this.setData({
      fastmailList: lists,
    })
  },

  // 失去焦点时弹窗
  onBlurOrder: function () {
    this.setData({
      showorder: true
    })
  },

  // 点击取消按钮事件，关闭弹出层
  onCancelOrder: function () {
    this.hideModal();
  },

  // 点击确认，关闭弹出层
  onConfirmOrder: function (e) {
    var idx = e.currentTarget.dataset.index;
    var lists = this.data.fastmailList;
    console.log(idx);
    for (let i = 0; i < lists.length; i++) {
      if (idx == i) {
        this.setData({
          fastmailList: lists,
          disabledOrder: true,
        })
      }
      this.setData({
        disabledOrder: true
      })
    }
    this.hideModal();
  },

  
})