// pages/Notes/notes.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bullet:0,
    books:[],
    bookvalue:"",
    introduction:"",
    _id:0,
    start:0,
    end:0
  },
  bookbullet:function(e){
    this.setData({
      bullet: 1
    });
  },
  determine:function(){
    this.setData({
      bullet: 0
    });
    this.addbook(this.data.bookvalue,this.data.introduction)
    this.updata();
  },
  bookdetails:function(e){
    if (this.data.end - this.data.start < 350){
      console.log(this.data.books)
      app.globalData.id=this.data.books[e.target.id]._id
      wx.navigateTo({
        url: '/pages/Notes/Bookdetails/bookdetails',
        success: function () {
        }
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
    console.log(e.target.id)
    this.setData({
      bullet:2,
      _id:e.target.id
    })
  },
  delete:function(e){
    console.log(this.data._id)
    if (this.data.books[this.data._id]._id) {
      const db = wx.cloud.database()
      db.collection('books').doc(this.data.books[this.data._id]._id).remove({
        success: res => {
          this.updata()
           this.setData({
             bullet:0
           })
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '删除失败',
          })
          console.error('[数据库] [删除记录] 失败：', err)
        }
      })
    } else {
      wx.showToast({
        title: '无记录可删，请见创建一个记录',
      })
    }
  },
  cancel:function(){
    this.setData({
      bullet:0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list=[];
    wx.cloud.callFunction({
      name: 'database',
      data: {database: 'books'},
      success: res => {  
        for(var i=0;i<res.result.data.length;i++){
          if(app.globalData._openid==res.result.data[i]._openid){
            list.push(res.result.data[i]);
          }
        }
        this.setData({
          books:list
        })
        console.log(this.data.books); 
      },
      fail: err => {
        console.error('[云函数] [database] 调用失败', err)
      }
    })
  },
  addbook: function(name,introduction){
    const db = wx.cloud.database();
    db.collection('books').add({
      data: {
        name:name,
        introduction:introduction,
        outline:[],
        inspiration:[],
        leadrole:[],
        supportrole:[]
      },
      success: res => {
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res) 
        this.setData({
          bookvalue:"",
          introduction:""
        })
      },
      fail: err => {
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },
  updata:function(){
    var list=[];
    wx.cloud.callFunction({
      name: 'database',
      data: {database: 'books'},
      success: res => {  
        for(var i=0;i<res.result.data.length;i++){
          if(app.globalData._openid==res.result.data[i]._openid){
            list.push(res.result.data[i]);
          }
        }
        this.setData({
          books:list 
        })
        console.log(this.data.books); 
      },
      fail: err => {
        console.error('[云函数] [database] 调用失败', err)
      }
    })
  },
  getInputValue:function(e){
    console.log(e.detail)
    this.setData({
      bookvalue:e.detail.value
    })
  },
  getInputIntroduction:function(e){
    console.log(e.detail)
    this.setData({
      introduction:e.detail.value
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