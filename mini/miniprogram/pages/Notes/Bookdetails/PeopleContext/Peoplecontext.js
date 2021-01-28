// pages/Notes/Bookdetails/PeopleContext/Peoplecontext.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    people:{},
    leadrole:[],
    name:"",
    sex:"",
    height:"",
    weight:"",
    identity:"",
    body:"",
    psychology:"",
    character:"",
    appearance:""
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
        var people={};
        var leadrole=[];
        console.log(that.data.storyContext)
        people.name=that.data.name==""?"空":that.data.name;
        people.sex=that.data.sex==""?"空":that.data.sex;
        people.height=that.data.height==""?"空":that.data.height;
        people.weight=that.data.weight==""?"空":that.data.weight;
        people.identity=that.data.identity==""?"空":that.data.identity;
        people.body=that.data.body==""?"空":that.data.body;
        people.psychology=that.data.psychology==""?"空":that.data.psychology;
        people.character=that.data.character==""?"空":that.data.character;
        people.appearance=that.data.appearance==""?"空":that.data.appearance;
        leadrole=that.data.leadrole;
        leadrole[app.globalData.index]=people;
        that.setData({
          leadrole:leadrole,
        })
        that.updatepeople()
      }
    })

  },
   //输入名字
   getName:function(e){
    console.log(e.detail)
    this.setData({
      name:e.detail.value
    })
  },
   //输入性别
   getSex:function(e){
    console.log(e.detail)
    this.setData({
      sex:e.detail.value
    })
  },
   //输入身高
   getHeight:function(e){
    console.log(e.detail)
    this.setData({
      height:e.detail.value
    })
  },
   //输入体重
   getWeight:function(e){
    console.log(e.detail)
    this.setData({
      weight:e.detail.value
    })
  },
   //输入身份
   getIdentity:function(e){
    console.log(e.detail)
    this.setData({
      identity:e.detail.value
    })
  },
   //输入身体状况
   getBody:function(e){
    console.log(e.detail)
    this.setData({
      body:e.detail.value
    })
  },
   //输入心理状况
   getPsychology:function(e){
    console.log(e.detail)
    this.setData({
      psychology:e.detail.value
    })
  },
   //性格
   getCharacter:function(e){
    console.log(e.detail)
    this.setData({
      character:e.detail.value
    })
  },
   //外貌
   getAppearance:function(e){
    console.log(e.detail)
    this.setData({
      appearance:e.detail.value
    })
  },
  
//修改人物
updatepeople: function(){
  const db = wx.cloud.database()
  db.collection('books').doc(app.globalData.id).update({
    data: {
      leadrole: this.data.leadrole
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
    var leadrole=[];
    var people={};
    console.log(app.globalData.index)
    wx.cloud.callFunction({
      name: 'database',
      data: {database: 'books'},
      success: res => {  
        for(var i=0;i<res.result.data.length;i++){
          if(app.globalData.id==res.result.data[i]._id){
            people=res.result.data[i].leadrole[app.globalData.index];
            leadrole=res.result.data[i].leadrole;
          }
        }
        this.setData({
          people:people,
          leadrole:leadrole,
          name:people.name,
          sex:people.sex,
          height:people.height,
          weight:people.weight,
          identity:people.identity,
          body:people.body,
          psychology:people.psychology,
          character:people.character,
          appearance:people.appearance
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