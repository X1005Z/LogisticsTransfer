// pages/selectAddress/selectAddress.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
	  obj:[
		{
		  checked: true,
		  name: '张张',
		   tell: '138****438',
		   address:'如意峰',
		   city:'桂林',
		   postCode:'542402'
		},
		{
		  name: '小狗', tell: '191****7568',address:'龙华区', city:'深圳',
		  postCode:'778899'
		},
	  ]
	},
	
	click(e){
	  wx.navigateTo({
		url: `/pages/test1/test1?address=${JSON.stringify(e.currentTarget.dataset.item) }`,
	  })
	  console.log(e.currentTarget.dataset.item);
	},
  
  
	clickCity(e){
	  console.log(e);
	},
  
	// 过滤
   initList(e){
	let obj =  this.data.obj;
	let list = {}
	obj.forEach(item => {
	   if(!list[item.city[0]]){
		 list[item.city[0]] = [item]
	   } else{
		 list[item.city[0]].push[item]
	   }
	}); 
	this.setData({
	  obj:list
	})
	console.log(list);
	}
	,
	onShow(){
	  this.initList()
	}, 
	// 单选复选
	onChange(event) {
	  this.setData({
		checked: event.detail,
	  });
	},
	clickAddress(){
	  wx.navigateTo({
		url: '/pages/test1/test1',
	  })
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
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