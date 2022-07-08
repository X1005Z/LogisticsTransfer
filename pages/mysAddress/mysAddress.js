Page({
  data: {
    obj: [{
        mes: '我',
        name: 'KK',
        phone: '18688880130',
        address: 'Elizabeth Street, Melbourne, Australia',
        city: 'Melbourne',
        postcode: '203244'
      },
      {
        mes: '肖',
        name: 'Mr.Xiao',
        phone: '13419911005',
        address: 'Banan District, Chongqing, China ',
        city: 'chongqing',
        postcode: '911005'
      }
    ]
  },

  onclick(e) {
    wx.navigateTo({
      url: `/pages/fillAddress/fillAddress?address=${JSON.stringify(e.currentTarget.dataset.item)}`,
    })
    console.log(e.currentTarget.dataset.item);
  },

  clickCity(e) {
    console.log(e);
  },

  // 过滤
  initList(e) {
    let obj = this.data.obj;
    let list = {};
    obj.forEach(item => {
      if (!list[item.city[0]]) {
        list[item.city[0]] = [item]
      } else {
        list[item.city[0]].push[item]
      }
    });
    this.setData({
      obj: list
    })
    console.log(list);
  },

  onShow() {
    this.initList()
  },
  
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})