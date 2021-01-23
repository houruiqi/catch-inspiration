// pages/Assistance/Persona/persona.js
var content = require("../../data/json")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:["现代","古代","玄幻","科幻"],
    index:0,
    name:'',
    gender:'',
    age:'',
    height:'',
    weight:'',
    birth:'',
    family:'',
    occupation:'',
    character:'',
    hobby:'',
    position:'',
    body:'',

  },
  bindPickerChangeData: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
      index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
   })
  },
  generate:function(){
    var age1 = Math.floor(Math.random()*100);
    var weight1,height1,birth1,occupation1,surname,name1;
    // console.log(this.data.index);
    if(this.data.index == 0){
      occupation1 = content.occupation[Math.floor(Math.random()*content.occupation.length)];
      birth1 = content.birth[Math.floor(Math.random()*content.birth.length)];
    }
    else if(this.data.index == 1){
      occupation1 = content.ancientoccupation[Math.floor(Math.random()*content.ancientoccupation.length)];
      birth1 = content.ancientbirth[Math.floor(Math.random()*content.ancientbirth.length)];
    }
    else if(this.data.index == 2){
      occupation1 = content.fantasyoccupation[Math.floor(Math.random()*content.fantasyoccupation.length)];
      birth1 = content.ancientbirth[Math.floor(Math.random()*content.ancientbirth.length)];
    }
    else if(this.data.index == 3){
      occupation1 = content.futureoccupation[Math.floor(Math.random()*content.futureoccupation.length)];
      birth1 = content.birth[Math.floor(Math.random()*content.birth.length)];
    }
    if(age1 <= 5){
      weight1 = Math.floor(Math.random()*18+6);
      height1 = Math.floor(Math.random()*75+42);
    }
    else if(5 < age1 && age1<= 10){
      weight1 = Math.floor(Math.random()*36+17);
      height1 = Math.floor(Math.random()*50+100);
    }
    else if(10 < age1 && age1 <= 15){
      weight1 = Math.floor(Math.random()*60+30);
      height1 = Math.floor(Math.random()*35+150);
    }
    else if(age1 > 15){
      weight1 = Math.floor(Math.random()*50+40);
      height1 = Math.floor(Math.random()*40+150);
    }
    surname = content.singularsurname.concat(content.complexsurname);
    var word = content.name.concat(content.boyname);
    word = word.concat(content.girlname);
    name1 = word[Math.floor(Math.random()*word.length)]+word[Math.floor(Math.random()*word.length)];
    this.setData({
      name:surname[Math.floor(Math.random()*surname.length)]+name1,
      gender: content.gender[Math.floor(Math.random()*content.gender.length)],
      age:age1,
      height:height1+'cm',
      weight:weight1+'公斤',
      birth:birth1,
      family:content.familystatus[Math.floor(Math.random()*content.familystatus.length)],
      occupation:occupation1,
      character:content.character[Math.floor(Math.random()*content.character.length)],
      body:content.healthstatus[Math.floor(Math.random()*content.healthstatus.length)],
      hobby:content.hobby[Math.floor(Math.random()*content.hobby.length)],
      position:content.position[Math.floor(Math.random()*content.position.length)],
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