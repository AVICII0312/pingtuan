//index.js
//获取应用实例
const app = getApp()

Page({

  toStamps:function(e){
    console.log(e)
    wx.navigateTo({
      url:'../stamps/stamps'
    })
  },
  toHelp:function(){
    wx.navigateTo({
      url:'../help/help'
    })
  },
  toStamps:function(){
    wx.navigateTo({
      url:'../stamps/stamps'
    })
  }

})
