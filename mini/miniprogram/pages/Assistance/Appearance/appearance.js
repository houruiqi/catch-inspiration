// pages/Assistance/Appearance/appearance.js
var content = require("../../data/json")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:["现代","古代","玄幻","科幻"],
    gender:["男","女"],
    number1:["儿童","青少年","中年","老年"],
    index:0,
    index1:0,
    index2:0,
    hairstyle:'',
    eyebrow:'',
    eye:'',
    mouth:'',
    nose:'',
    ornament:'',
    cloth:'',
    shoes:'',
    figure:'',
    temperament:''
  },
  bindPickerChangeData: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  bindPickerChangeGender: function (e) {
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
    var hairstyle1,eyebrow1,eye1,mouth1,cloth1,shoes1,nose1,ornament1,figure1,temperament1;
    if(this.data.index1 == 0){
      eyebrow1 = content.beyebrow[Math.floor(Math.random()*content.beyebrow.length)];
      eye1 = content.beye[Math.floor(Math.random()*content.beye.length)];
      nose1 = content.bnose[Math.floor(Math.random()*content.bnose.length)];
      mouth1 = content.bmouth[Math.floor(Math.random()*content.bmouth.length)];
      temperament1 = content.btemperament[Math.floor(Math.random()*content.btemperament.length)];
      figure1 = content.bfigure[Math.floor(Math.random()*content.bfigure.length)];
    }
    if(this.data.index1 == 1){
      eyebrow1 = content.geyebrow[Math.floor(Math.random()*content.geyebrow.length)];
      eye1 = content.geye[Math.floor(Math.random()*content.geye.length)];
      nose1 = content.gnose[Math.floor(Math.random()*content.gnose.length)];
      mouth1 = content.gmouth[Math.floor(Math.random()*content.gmouth.length)];
      temperament1 = content.gtemperament[Math.floor(Math.random()*content.gtemperament.length)];
      figure1 = content.gfigure[Math.floor(Math.random()*content.gfigure.length)];
    }
    if(this.data.index == 0 || this.data.index == 3){
      if(this.data.index1 == 0){
        hairstyle1 = content.bhairstyle[Math.floor(Math.random()*content.bhairstyle.length)];
        ornament1= content.ornaments[Math.floor(Math.random()*content.ornaments.length)];
        cloth1 = content.bcloth[Math.floor(Math.random()*content.bcloth.length)];
        shoes1 = content.shoes[Math.floor(Math.random()*content.shoes.length)];
      }
      else{
        hairstyle1 = content.ghairstyle[Math.floor(Math.random()*content.ghairstyle.length)];
        ornament1= content.ornaments[Math.floor(Math.random()*content.ornaments.length)];
        cloth1 = content.gcloth[Math.floor(Math.random()*content.gcloth.length)];
        shoes1 = content.shoes[Math.floor(Math.random()*content.shoes.length)];
      }
    }
    if(this.data.index == 1 || this.data.index == 2){
      if(this.data.index1 == 0){
        hairstyle1 = content.ancientbhair[Math.floor(Math.random()*content.ancientbhair.length)];
        ornament1= content.bancientornaments[Math.floor(Math.random()*content.bancientornaments.length)];
        cloth1 = content.bancientcloth[Math.floor(Math.random()*content.bancientcloth.length)];
        shoes1 = content.bancientshoes[Math.floor(Math.random()*content.bancientshoes.length)];
      }
      else{
        hairstyle1 = content.ancientghair[Math.floor(Math.random()*content.ancientghair.length)];
        ornament1= content.gancientornaments[Math.floor(Math.random()*content.gancientornaments.length)];
        cloth1 = content.gancientcloth[Math.floor(Math.random()*content.gancientcloth.length)];
        shoes1 = content.gancientshoes[Math.floor(Math.random()*content.gancientshoes.length)];
      }
    }
    this.setData({
      shoes:shoes1,
      cloth:cloth1,
      hairstyle:hairstyle1,
      eyebrow:eyebrow1,
      eye:eye1,
      mouth:mouth1,
      nose:nose1,
      ornament:ornament1,
      figure:figure1,
      temperament:temperament1
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