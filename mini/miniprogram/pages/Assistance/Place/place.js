// pages/Assistance/Place/place.js
var content = require("../../data/json")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:["现代","古代","玄幻","科幻"],
    number:[10,20,30,40],
    number1:[1,2,3],
    index:0,
    index1:0,
    index2:0,
    place:[]
  },
  bindPickerChangeData: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  bindPickerChangeNumber: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index1: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  bindPickerChangeNumber1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index2: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  generate:function(){
    var placename=[];
    for(var i = 0;i<this.data.number[this.data.index1];i++){
      var nextword="",preword = "";
      var word = content.name.concat(content.boyname);
      word = word.concat(content.girlname);
      for(var j = 0;j<this.data.number1[this.data.index2];j++){
        preword = preword + word[Math.floor(Math.random()*word.length)];
      }
      if(this.data.index == 0){
        nextword = content.place[Math.floor(Math.random()*content.place.length)];
      }
      else if(this.data.index == 1){
        nextword = content.ancientplace[Math.floor(Math.random()*content.ancientplace.length)];
      }
      else if(this.data.index == 2){
        nextword = content.fantasyplace[Math.floor(Math.random()*content.fantasyplace.length)];
      }
      else{
        nextword = content.futureplace[Math.floor(Math.random()*content.futureplace.length)];
      }
      placename[i] = preword + nextword;
    }
    console.log(placename)
    this.setData({
      place:placename
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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