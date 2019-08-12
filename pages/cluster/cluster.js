//index.js
//获取应用实例
const app = getApp()

Page({
    data:{
        Colonel:{},
        member:[]
    },
    onReady: function () {
        //获得popup组件
        this.popup = this.selectComponent("#popup");
        this.popup.showPopup()
        this.getCluster()

      },
      onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: '自定义转发标题',
            path: '/page/index/index'
        }
    },
    getCluster:function(){
        let _this=this
        wx.request({
            url:'https://lwysheng.yctmt.com/index.php?s=/api/group.coupon/teamInfo&wxapp_id=10001&token=b5f2c3d8e226d0bb7e4144df92a80472&team_id=17',
            success(res){
                console.log(11)
                console.log(res.data.data)
                _this.setData({
                    Colonel:res.data.data,
                    member:res.data.data.member
                })
                console.log(_this.data.member)
            }
        })
    }

})