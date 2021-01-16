// pages/Notes/Bookdetails/bookdetails.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booktop:app.globalData.booktop,
  },
  booktop:function(){
    this.setData({
      booktop: 0
    });
    app.globalData.booktop=0
  },
  booktop1:function(){
    this.setData({
      booktop: 1
    });
    app.globalData.booktop=1
  },
  booktop2:function(){
    this.setData({
      booktop: 2
    });
    app.globalData.booktop=2
  },
  thought:function(){
    wx.navigateTo({
      url: '/pages/Notes/Bookdetails/Thought/thought',
      success: function () {}
    })
  },
  toughtcontext:function(){
    wx.navigateTo({
      url: '/pages/Notes/Bookdetails/ThoughtContext/thoughtContext',
      success: function () {}
    })
  },
  storycontext:function(){
    wx.navigateTo({
      url: '/pages/Notes/Bookdetails/StoryContext/storyContext',
      success: function () {}
    })
  },
  story:function(){
    wx.navigateTo({
      url: '/pages/Notes/Bookdetails/Story/story',
      success: function () {}
    })
  },
  peopleadd:function(){
    wx.navigateTo({
      url: '/pages/Notes/Bookdetails/People/people',
      success: function () {}
    })
  },
  people:function(){
    wx.navigateTo({
      url: '/pages/Notes/Bookdetails/PeopleContext/Peoplecontext',
      success: function () {}
    })
  },
  back:function(){
    wx.switchTab({
      url: '/pages/Notes/notes',
      success: function () {
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.booktop)
    this.setData({
      booktop: app.globalData.booktop
    });
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