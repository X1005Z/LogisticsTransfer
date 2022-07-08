Page({
  data: {
    name: "明德仓库",
    address: "深圳市龙华区龙华街道工业路壹城环智中心C座2607室",
    phone: "18688880130",
    obj: [{
        name: "Name：",
        placeholder: "Please fill in the recipient‘s name",
        value: "",
        text: "name"
      },
      {
        name: "Phone：",
        placeholder: "Please fill in the recipient‘s phone",
        value: "",
        text: "phone"
      },
      {
        name: "Address：",
        placeholder: "Please fill in the address",
        value: "",
        text: "address"
      },
      {
        name: "City：",
        placeholder: "Please fill in the city",
        value: "",
        text: "city"
      },
      {
        name: "PostCode：",
        placeholder: "Please fill in the postcode",
        value: "",
        text: "postcode"
      },
    ]
  },

  // 复制
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

  onShow() {
    if (this.options?.address) {
      let address = JSON.parse(this.options.address);
      console.log(address);

      let obj = this.data.obj;
      obj.forEach((item) => {
        item.value = address[item.text];
        console.log(address[item.text]);
      })
      console.log(obj, '111');
      this.setData({
        obj
      })
    }
  },

  btn() {
    wx.navigateTo({
      url: '/pages/traInstructions/traInstructions',
    })
  }
})