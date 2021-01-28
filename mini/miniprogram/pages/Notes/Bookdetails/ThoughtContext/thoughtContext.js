// pages/Notes/Bookdetails/ThoughtContext/thoughtContext.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thinkValue:"",
    thinkContext:"",
    think:{}  ,
    inspiration:[]//改变的那个inspiration
  },
  back:function(){
    wx.redirectTo({
      url: '/pages/Notes/Bookdetails/bookdetails',
      success: function () {
      }
    })
  },
  determine:function(){
    var that=this;
    wx.redirectTo({
      url: '/pages/Notes/Bookdetails/bookdetails',
      success: function () {
        var think={};
        var inspiration=[];
        console.log(that.data.thinkContext)
        think.thinking=that.data.thinkValue==""?"空":that.data.thinkValue;
        think.thinkingIntroduction=that.data.thinkContext==""?"空":that.data.thinkContext;
        inspiration=that.data.inspiration;
        inspiration[app.globalData.index]=think;
        that.setData({
          inspiration:inspiration,
        })
        that.updatethinking()
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
  //修改灵感标题
  updatethinking: function(){
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
    var think1={};
    var inspiration1=[];
    console.log(app.globalData.index)
    wx.cloud.callFunction({
      name: 'database',
      data: {database: 'books'},
      success: res => {  
        for(var i=0;i<res.result.data.length;i++){
          if(app.globalData.id==res.result.data[i]._id){
            think1=res.result.data[i].inspiration[app.globalData.index];
            inspiration1=res.result.data[i].inspiration
          }
        }
        this.setData({
          think:think1,
          thinkValue:think1.thinking,
          thinkContext:think1.thinkingIntroduction,
          inspiration:inspiration1,
        })
        console.log(this.data.think); 
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