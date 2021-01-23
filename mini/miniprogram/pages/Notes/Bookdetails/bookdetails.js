// pages/Notes/Bookdetails/bookdetails.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booktop:app.globalData.booktop,
    inspiration:[],
    outline:[],
    leadrole:[],
    supportrole:[],
    introduction:"",
    _id:0,
    start:0,
    end:0,
    bullet:0
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
    wx.redirectTo({
      url: '/pages/Notes/Bookdetails/Thought/thought',
      success: function () {}
    })
  },
  toughtcontext:function(e){
    if (this.data.end - this.data.start < 350){
      app.globalData.index=e.currentTarget.id
      console.log(e)
      wx.redirectTo({
        url: '/pages/Notes/Bookdetails/ThoughtContext/thoughtContext',
        success: function () {}
      })
    }
  },
  mytouchstart: function (e) {  //记录触屏开始时间
    this.setData({start:e.timeStamp })
  },
  mytouchend: function (e) {  //记录触屏结束时间
    this.setData({end: e.timeStamp })
  }, 
  tag:function(e){
    console.log(e.currentTarget.id)
    this.setData({
      bullet:2,
      _id:e.currentTarget.id
    })
  },
  tag1:function(e){
    console.log(e.currentTarget.id)
    this.setData({
      bullet:1,
      _id:e.currentTarget.id
    })
  },
  tag2:function(e){
    console.log(e.currentTarget.id)
    this.setData({
      bullet:3,
      _id:e.currentTarget.id
    })
  },
  tag3:function(e){
    console.log(e.currentTarget.id)
    this.setData({
      bullet:4,
      _id:e.currentTarget.id
    })
  },
  delete:function(e){
    console.log(this.data._id)
    var inspiration=this.data.inspiration;
    inspiration.splice(this.data._id,1);
    this.setData({
      inspiration:inspiration,
      bullet:0
    })
    console.log(this.data.inspiration)
    this.update()
  },
  delete1:function(e){
    console.log(this.data._id)
    var outline=this.data.outline;
    outline.splice(this.data._id,1);
    this.setData({
      outline:outline,
      bullet:0
    })
    console.log(this.data.outline)
    this.update()
  },
  delete2:function(e){
    console.log(this.data._id)
    var leadrole=this.data.leadrole;
    leadrole.splice(this.data._id,1);
    this.setData({
      leadrole:leadrole,
      bullet:0
    })
    console.log(this.data.leadrole)
    this.update()
  },
  delete3:function(e){
    console.log(this.data._id)
    var supportrole=this.data.supportrole;
    supportrole.splice(this.data._id,1);
    this.setData({
      supportrole:supportrole,
      bullet:0
    })
    console.log(this.data.supportrole)
    this.update()
  },
  cancel:function(){
    this.setData({
      bullet:0
    })
  },
  update:function(){
    const db = wx.cloud.database()
    db.collection('books').doc(app.globalData.id).update({
      data: {
        inspiration: this.data.inspiration,
        outline:this.data.outline,
        leadrole:this.data.leadrole,
        supportrole:this.data.supportrole
      },
      success: res => {
      },
      fail: err => {
        icon: 'none',
        console.error('[数据库] [更新记录] 失败：', err)
      }
    })
  },
  storycontext:function(e){
    if (this.data.end - this.data.start < 350){
      app.globalData.index=e.currentTarget.id
      console.log(e)
      wx.redirectTo({
        url: '/pages/Notes/Bookdetails/StoryContext/storyContext',
        success: function () {}
      })
    }
  },
  story:function(){
    wx.redirectTo({
      url: '/pages/Notes/Bookdetails/Story/story',
      success: function () {}
    })
  },
  peopleadd:function(){
    wx.redirectTo({
      url: '/pages/Notes/Bookdetails/People/people',
      success: function () {}
    })
  },
  people1add:function(){
    wx.redirectTo({
      url: '/pages/Notes/Bookdetails/People1/people1',
      success: function () {}
    })
  },
  people:function(e){
    if (this.data.end - this.data.start < 350){
      app.globalData.index=e.currentTarget.id
      console.log(e)
      wx.redirectTo({
        url: '/pages/Notes/Bookdetails/PeopleContext/Peoplecontext',
        success: function () {
          console.log(1111)
        }
      })
    }
  },
  people1:function(e){
    if (this.data.end - this.data.start < 350){
      app.globalData.index=e.currentTarget.id
      console.log(e)
      wx.redirectTo({
        url: '/pages/Notes/Bookdetails/PeopleContext1/Peoplecontext1',
        success: function () {}
      })
    }
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
    console.log(app.globalData.id)
    this.setData({
      booktop: app.globalData.booktop
    });
    var inspiration1=[];
    var outline1=[];
    var leadrole1=[];
    var supportrole1=[];
    var introduction="";
    wx.cloud.callFunction({
      name: 'database',
      data: {database: 'books'},
      success: res => {  
        for(var i=0;i<res.result.data.length;i++){
          if(app.globalData.id==res.result.data[i]._id){
            inspiration1=res.result.data[i].inspiration;
            outline1=res.result.data[i].outline;
            leadrole1=res.result.data[i].leadrole;
            supportrole1=res.result.data[i].supportrole;
            introduction=res.result.data[i].introduction;
          }
        }
        this.setData({
          inspiration:inspiration1,
          outline:outline1,
          leadrole:leadrole1,
          supportrole:supportrole1,
          introduction:introduction
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