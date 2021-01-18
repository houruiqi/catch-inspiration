// pages/My/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    islogin:0,
    avatarUrl: './user-unlogin.png',
    logged: false,
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({ 
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
                islogin:1
              }) 
            }
          })
        }
      }
    })
    wx.cloud.init()
    console.log(app.globalData.userInfo)
    console.log(app.globalData._openid);
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo,
        islogin:1
      })
    }
    const db = wx.cloud.database();
    var flag = 0;
    wx.cloud.callFunction({
      name: 'database',
      data: {database: 'users'},
      success: res => {  
        // console.log(res.result.data);
        for (var i = 0; i < res.result.data.length; i++) {
          if (res.result.data[i]._openid == app.globalData._openid) {
            flag = 1;
          }
        } 
        if(flag == 0){
          db.collection('users').add({
            data: {
              books:[]
            },
            success: res => {
              // 在返回结果中会包含新创建的记录的 _id
              // this.setData({
              //   counterId: res._id,
              //   count: 1
              // })
              // wx.showToast({
              //   title: '新增记录成功',
              // })
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
        }
        
      },
      fail: err => {
        console.error('[云函数] [database] 调用失败', err)
      }
    })
  },
  jumptest:function(){
    wx.navigateTo({url: '/pages/Test/test'})
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