//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        Colonel: {},
        list: [],
        memberCoupon: {},
        teamCoupon: {},
    },
    onReady: function () {
        //获得popup组件
        this.popup = this.selectComponent("#popup");
        this.popup.showPopup()
        this.getCluster()
        this.getClusterCoupon()

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
    getCluster: function () {
        let _this = this
        wx.request({
            url: 'https://lwysheng.yctmt.com/index.php?s=/api/group.coupon/teamInfo&wxapp_id=10001&token=0fb6914dc380a1bb2bc624d4e975b4f3&team_id=17',
            success(res) {
                _this.setData({
                    Colonel: res.data.data,
                    list: res.data.data.member
                })
            }
        })
    },
    getClusterCoupon: function () {
        let _this = this
        wx.request({
            url: 'https://lwysheng.yctmt.com/index.php?s=/api/group.coupon/userTeamInfo&wxapp_id=10001&token=0fb6914dc380a1bb2bc624d4e975b4f3&team_id=17',
            success(res) {
                _this.setData({
                    memberCoupon: res.data.data.memberCoupon,
                    teamCoupon: res.data.data.teamCoupon
                })
                console.log(_this.data.memberCoupon,_this.data.teamCoupon)
            }
        })
    }

})