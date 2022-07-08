Page({
  data: {
    data: {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },

    obj: [
      {
        name: '安哥拉',
        country: 'Angola'
      },
      {
        name: '文莱',
        country: 'Brunei'
      },
      {
        name: '丹麦',
        country: 'Denmark'
      },
      {
        name: '埃及',
        country: 'Egypt'
      },
      {
        name: '芬兰',
        country: 'Finland'
      },
      {
        name: '加纳',
        country: 'Ghana'
      },
      {
        name: '荷兰',
        country: 'Holland'
      },
      {
        name: '巴基斯坦',
        country: 'Pakistan'
      },
      {
        name: '美国',
        country: 'United States'
      },
    ],
    addressList: [],
  },

  clickCountry: function(e) {
    // console.log('带入参数');
    let obj = e.currentTarget.dataset.item.name;
    wx.reLaunch({
      url: `/pages/index/index?country=${obj}&a=8`,
    })
    console.log(e.currentTarget.dataset.item.name);
  },

  // 过滤
  initList: function(e) {
    let obj = this.data.obj;
    let list = {};
    obj.forEach(item =>{
      if(!list[item.country[0]]) {
        list[item.country[0]] = [item];
      } else {
        list[item.country[0]].push[item];
      }
    });

    this.setData({
      obj: list
    })
    console.log(list);
  },

  onShow() {
    this.initList();
  }
})