//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
        list: [],
        time: [1, 2],
        name: ''
    },
    onShow: function () {
        this.getStamps()
    },
    getStamps: function () { //首页请求
        let _this = this
        wx.request({
            url: 'https://lwysheng.yctmt.com/index.php?s=/api/group.coupon/lists&wxapp_id=10001&token=0fb6914dc380a1bb2bc624d4e975b4f3',
            data: {

            },
            header: {
                'content-type': 'application/json'
            },
            success(res) {
                console.log(1111)
                console.log(res)
                _this.setData({
                    list: res.data.data.data,
                })
            }
        })
    },
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: '自定义转发标题',
        }
    },
    onOpenCluster: function () {
        wx.request({
            url: `https://lwysheng.yctmt.com/index.php?s=api/group.coupon/createTeam`,
            data: {
                wxapp_id: '10001',
                token: '0fb6914dc380a1bb2bc624d4e975b4f3',
                coupon_team_id: '10016'
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: 'POST',
            success(openres) {
                console.log(213)
                console.log(openres)
            }
        })
    }

})