Page({
  data: {
    buttons: [{
        text: '取消'
      },
      {
        text: '下一步'
      }
    ],
    show: false,
  },

  // 修改地址
  address: function() {
    console.log(111);
    
  },

  // 立即转运弹出层
  pop: function () {
    console.log('1111');
    this.setData ({
      show: true,
    })
  },

  

})