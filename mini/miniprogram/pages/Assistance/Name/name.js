// pages/Assistance/Name/name.js
var content = require("../../data/json")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: [1,2],
    gender:["男","女"],
    sum:[10,20,30,40,50],
    index:0,
    index1:0,
    index2:0,
    index3:0,
    inputsurname:'',
    name:""
  },
  bindPickerChangeName: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  bindPickerChangeName1:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index1: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  bindPickerChangeGender: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index2: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  bindPickerChangeSum:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
    index3: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  getinputvalue:function(e){
    // console.log(e.detail);
    this.setData({
      inputsurname:e.detail.value
    })
  },
  generate:function(){
    var sumname1 =[];
    var surname1,name1;
    // console.log(this.data.sum[this.data.index3]);
    for(var i = 0;i<this.data.sum[this.data.index3];i++){
      if(this.data.inputsurname == ""){
         if(this.data.index == 0){
          surname1 = content.singularsurname[Math.floor(Math.random()*content.singularsurname.length)];
        }
        else{
          surname1 = content.complexsurname[Math.floor(Math.random()*content.complexsurname.length)];
        }
      }
      else{
        surname1 = this.data.inputsurname;
      }
      if(this.data.index2 == 0){
        var namecontent = content.name.concat(content.boyname);
        if(this.data.index1 == 0){
          name1 = namecontent[Math.floor(Math.random()*namecontent.length)];
        }
        else{
          name1 = namecontent[Math.floor(Math.random()*namecontent.length)]+namecontent[Math.floor(Math.random()*namecontent.length)];
        }
      }
      else{
        var namecontent = content.name.concat(content.girlname);
        if(this.data.index1 == 0){
          name1 = namecontent[Math.floor(Math.random()*namecontent.length)];
        }
        else{
          name1 = namecontent[Math.floor(Math.random()*namecontent.length)]+namecontent[Math.floor(Math.random()*namecontent.length)];
        }
      }
      sumname1[i] = surname1 + name1;
    }
    console.log(sumname1)
    this.setData({
      name:sumname1
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