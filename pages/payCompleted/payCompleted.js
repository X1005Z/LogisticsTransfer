Page({
  data: {
    timer: '', // 定时器名字
    countTime: '3'
  },

  // 倒计时自动跳转
  onLoad() {
    let that = this;
    let countTime = that.data.countTime;
    that.setData({
      timer: setInterval(function () {
        countTime--;
        that.setData({
          countTime: countTime
        });
        if (countTime == 0) {
          // 清除定时器
          clearInterval(that.data.timer);
          // 使用延时器让页面跳转不会太生硬
          setTimeout(() => {
            wx.reLaunch({
              url: '/pages/OrderInformation/OrderInformation'
            })
          }, 800)
        }
      }, 1000)
    })
  },
})