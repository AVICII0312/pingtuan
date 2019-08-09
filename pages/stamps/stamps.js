//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
    list: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  onShow: function () {
    this.getStamps()
  },
  getStamps: function () { //首页请求
    let _this = this
    wx.request({
      url: 'https://lwysheng.yctmt.com/index.php?s=/api/group.coupon/myTeamLists&wxapp_id=10001&token=b5f2c3d8e226d0bb7e4144df92a80472',
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(111)
        console.log(res)
        _this.setData({
          list: res.data.data.data,
        })
      }
    })
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      console.log(this.data.list)
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})