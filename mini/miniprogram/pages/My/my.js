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
  getUserProfile: function(e) {
    var urlpng= "";
    wx.getUserProfile({
      desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        //用户按了允许授权按钮
        
        // 获取到用户的信息了，打印到控制台上看下
        console.log("用户的信息如下：");
        console.log(res.userInfo);
        urlpng = res.userInfo.avatarUrl;
        //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
        this.setData({
          logged: true, //不知道是啥
          avatarUrl: res.userInfo.avatarUrl,
          userInfo: res.userInfo,
          islogin:1
        }); 
        var flag = 0;
        const db = wx.cloud.database()
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
                  avatarUrl:urlpng,
                  books:[]
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
            }
          },
          fail: err => {
            console.error('[云函数] [database] 调用失败', err)
          }
        })
           
      },
      fail:err=>{
        //用户按了拒绝按钮
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权，若使用灵感手札功能，请授权登录',
          showCancel: false,
          confirmText: '返回授权',
          success: function(res) {
              // 用户没有授权成功，不需要改变 isHide 的值
              if (res.confirm) {
                  console.log('用户点击了“返回授权”');
              }
          }
        });
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
    
    const db = wx.cloud.database()
    wx.cloud.callFunction({
      name: 'database',
      data: {database: 'users'}, 
      success: res => {
        for (var i = 0; i < res.result.data.length; i++) {
          if (res.result.data[i]._openid == app.globalData._openid) {
            // console.log(res.result.data[i]);
            this.setData({
              islogin:1,
              avatarUrl: res.result.data[i].avatarUrl,
            })
          }
        } 
      }
    })
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