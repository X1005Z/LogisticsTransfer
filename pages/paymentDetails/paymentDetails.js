Page({
  data: {
    hideFlag: true,
    checked: false,
    animationData: {},
    timer: '', // 定时器名字
    disabled: true,
    disabledBtn: true,
    timeNum: 5,
    codeText: '同意本条款',
  },

  // 去优惠券界面
  tocoupon() {
    wx.navigateTo({
      url: '/pages/myCoupon/myCoupon',
    })
  },

  // 去支付完成页面
  topayCompleted() {
    wx.navigateTo({
      url: '/pages/payCompleted/payCompleted',
    })
  },

  // 显示遮罩层
  showDialog: function () {
    let that = this;
    let timeNum = that.data.timeNum;
    console.log(timeNum);
    that.setData({
      hideFlag: false,
      codeText: '请阅读至少' + timeNum + 's',
      // 定时5秒后解开
      timer: setInterval(function () {
        timeNum--;
        that.setData({
          timeNum: timeNum
        })
        if (timeNum == 0) {
          clearInterval(that.data.timer);
          that.setData({
            disabled: false,
            codeText: '同意本条款',
          });
        }
        return;
      }, 1000),
    })
    

    // 创建动画实例
    var animation = wx.createAnimation({
      duration: 400, // 动画的持续时间
      timingFunction: 'ease', // 动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
    })
    this.animation = animation; // 将animation变量赋值给当前动画
    var time1 = setTimeout(function () {
      that.slideIn(); // 调用动画--滑入
      clearTimeout(time1);
      time1 = null;
    }, 100)
  },

  // 隐藏遮罩层
  hideModal: function () {
    var that = this;
    that.setData({
      checked: true
    })
    
    var animation = wx.createAnimation({
      duration: 400, // 动画的持续时间 默认400ms
      timingFunction: 'ease', // 动画的效果 默认值是linear
    })
    this.animation = animation
    that.slideDown(); // 调用动画--滑出
    var time1 = setTimeout(function () {
      that.setData({
        hideFlag: true
      })
      clearTimeout(time1);
      time1 = null;
    }, 220) // 先执行下滑动画，再隐藏模块
  },

  // 动画 -- 滑入
  slideIn: function () {
    this.animation.translateY(0).step() // 在y轴偏移，然后用step()完成一个动画
    this.setData({
      //动画实例的export方法导出动画数据传递给组件的animation属性
      animationData: this.animation.export()
    })
  },

  // 动画 -- 滑出
  slideDown: function () {
    this.animation.translateY(300).step()
    this.setData({
      animationData: this.animation.export(),
    })
  },


})