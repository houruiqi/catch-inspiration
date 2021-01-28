// pages/Notes/Bookdetails/StoryContext/storyContext.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storyValue:"",
    storyContext:"",
    story:{}  ,
    outline:[]//改变的那个inspiration
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
        var story={};
        var outline=[];
        console.log(that.data.storyContext)
        story.story=that.data.storyValue==""?"空":that.data.storyValue;
        story.storyContext=that.data.storyContext==""?"空":that.data.storyContext;
        outline=that.data.outline;
        outline[app.globalData.index]=story;
        that.setData({
          outline:outline,
        })
        that.updatestory()
      }
    })

  },
  //输入标题
  getInputValue:function(e){
    console.log(e.detail)
    this.setData({
      storyValue:e.detail.value
    })
  },
  //输入内容
  getInputContext:function(e){
    console.log(e.detail)
    this.setData({
      storyContext:e.detail.value
    })
  },
  
//修改故事标题
updatestory: function(){
  const db = wx.cloud.database()
  db.collection('books').doc(app.globalData.id).update({
    data: {
      outline: this.data.outline
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
  var story1={};
  var outline1=[];
  console.log(app.globalData.index)
  wx.cloud.callFunction({
    name: 'database',
    data: {database: 'books'},
    success: res => {  
      for(var i=0;i<res.result.data.length;i++){
        if(app.globalData.id==res.result.data[i]._id){
          story1=res.result.data[i].outline[app.globalData.index];
          outline1=res.result.data[i].outline
        }
      }
      this.setData({
        story:story1,
        storyValue:story1.story,
        storyContext:story1.storyContext,
        outline:outline1,
      })
      console.log(this.data.story); 
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