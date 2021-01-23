// pages/Notes/Bookdetails/Thought/thought.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inspiration:[],
    thinkContext:"",
    thinkValue:""
  },
  determine:function(){
    var that=this;
    wx.redirectTo({
      url: '/pages/Notes/Bookdetails/bookdetails',
      success: function () {
        var inspiration=that.data.inspiration;
        inspiration.push({"thinking":that.data.thinkValue==""?"空":that.data.thinkValue,"thinkingIntroduction":that.data.thinkContext==""?"空":that.data.thinkContext})
        that.setData({
          inspiration:inspiration
        })
        that.addthinking()
      }
    })
  },
  //输入标题
  getInputValue:function(e){
    console.log(e.detail)
    this.setData({
      thinkValue:e.detail.value
    })
  },
  //输入内容
  getInputContext:function(e){
    console.log(e.detail)
    this.setData({
      thinkContext:e.detail.value
    })
  },
  //添加灵感标题
  addthinking: function(){
    const db = wx.cloud.database()
    db.collection('books').doc(app.globalData.id).update({
      data: {
        inspiration: this.data.inspiration
      },
      success: res => {
      },
      fail: err => {
        icon: 'none',
        console.error('[数据库] [更新记录] 失败：', err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var inspiration1=[];
    wx.cloud.callFunction({
      name: 'database',
      data: {database: 'books'},
      success: res => {  
        for(var i=0;i<res.result.data.length;i++){
          if(app.globalData.id==res.result.data[i]._id){
            inspiration1=res.result.data[i].inspiration;
          }
        }
        this.setData({
          inspiration:inspiration1,
        })
        console.log(this.data.inspiration); 
      },
      fail: err => {
        console.error('[云函数] [database] 调用失败', err)
      }
    })
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