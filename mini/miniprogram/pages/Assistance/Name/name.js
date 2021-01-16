// pages/Assistance/Name/name.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: [1,2],
    gender:["男","女"],
    sum:[10,20,30,40,50],
    index:0,
    index1:0,
    index2:0,
    index3:0,
  },
  bindPickerChangeName: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  bindPickerChangeName1:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index1: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  bindPickerChangeGender: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index2: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  bindPickerChangeSum:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index3: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})