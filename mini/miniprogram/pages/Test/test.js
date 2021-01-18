// pages/Test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookId:'023ce9555ffead46045160313a30fbd1',
    inspiration:'哈哈哈哈哈哈'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  addbook: function(){
    const db = wx.cloud.database();
    db.collection('books').add({
      data: {
        name:"",
        introduction:"",
        outline:[],
        inspiration:[],
        leadrole:[],
        supportrole:[]
      },
      success: res => {
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },
  deletebook:function(){
    if (this.data.bookId) {
      const db = wx.cloud.database()
      db.collection('books').doc(this.data.bookId).remove({
        success: res => {
          wx.showToast({
            title: '删除成功',
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
  updatebook:function(){
    const db = wx.cloud.database()
    db.collection('books').doc(this.data.bookId).update({
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