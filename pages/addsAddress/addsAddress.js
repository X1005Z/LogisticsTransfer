Page({
  data: {
    // region: [],
    switch1Checked: true
	},

  // // 省市区联动
	// getUserProvince: function (e) {
	// 	this.setData({
	// 		region: e.detail.value, // 用户选择的省市区赋值给region
	// 	})
  // },

  
  // 判断输入的值是否是英文
  userNameInput: function(e) {
    let nameReg = /^[A-Za-z]{2,20}$/;
    let value = e.detail.value;

    if(!nameReg.test(value) && value !== "") {
      wx.showToast({
        title: '请输入英文',
        icon: "error"
      })
      return;
    }
  },

  // 判断手机号正则
  userPhoneInput: function(e) {
    let phoneReg = /^1[3-9]\d{9}$/;
    let value = e.detail.value;

    if(!phoneReg.test(value) && value !== "") {
      wx.showToast({
        title: '请输入数字',
        icon: "error"
      })
      return;
    }
  },

  // 判断address正则
  userAddressInput: function(e) {
    let addressReg = /^[A-Za-z]$/;
    let value = e.detail.value;

    if(!addressReg.test(value) && value !== "") {
      wx.showToast({
        title: '请输入英文',
        icon: "error"
      })
      return;
    }
  },

  // 判断city正则
  userCityInput: function(e) {
    let cityReg = /^[A-Za-z]$/;
    let value = e.detail.value;

    if(!cityReg.test(value) && value !== "") {
      wx.showToast({
        title: '请输入英文',
        icon: "error"
      })
      return;
    }
  },

  // 判断postcode正则
  userPostcodeInput: function(e) {
    let postcodeReg = /^[1-9][0-9]{5}$/gi;
    let value = e.detail.value;

    if(!postcodeReg.test(value) && value !== "") {
      wx.showToast({
        title: '请输入数字',
        icon: "error"
      })
      return;
    }
  },

  // 判断country正则
  userCountryInput: function(e) {
    let countryReg = /^[A-Za-z]$/;
    let value = e.detail.value;

    if(!countryReg.test(value) && value !== "") {
      wx.showToast({
        title: '请输入英文',
        icon: "error"
      })
      return;
    }
  },
})