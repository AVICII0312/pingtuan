//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        Colonel: {},
        list: [],
        memberCoupon: {},
        teamCoupon: {},
        time: '00:00:00',
        powerStatus: false,
        scene:Number
    },
    onLoad:function(){
        this.setData({
            scene:getApp().data.scene
          })
        console.log(11111,this.data.scene)
    },
    onReady: function () {
        //获得popup组件
        this.popup = this.selectComponent("#popup");
        if(this.data.scene!==1007){this.popup.showPopup()}
        this.getCluster()
        this.getClusterCoupon()
    },

    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: '送你一张团团房产助手优惠券，点我助力即可得到',
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
                _this.countdown(_this.data.Colonel.end_time)
                console.log(_this.data.Colonel)
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
                console.log(_this.data.memberCoupon, _this.data.teamCoupon)
            }
        })
    },
    getPower: function () {
        let _this = this
        wx.request({
            url: `https://lwysheng.yctmt.com/index.php?s=api/group.coupon/joinTeam`,
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
                _this.popup.showPopup()
                _this.setData({
                    powerStatus:true
                })
            }
        })
    },

    countdown: function (newtime) {
        clearTimeout(mytime)
        let mytime = setTimeout(() => {
            newtime -= 1000
            this.setData({
                time: this.date_format(newtime)
            })

            this.countdown(newtime)
        }, 1000);
    },
    date_format: function (micro_second) {
        //console.log(11)
        //console.log(micro_second)
        // 秒数
        var second = Math.floor(micro_second / 1000);
        // 小时位
        var hr = this.fill_zero_prefix(Math.floor(second / 3600))
        // 分钟位
        var min = this.fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
        // 秒位
        var sec = this.fill_zero_prefix((second - hr * 3600 - min * 60));
        return hr + ":" + min + ":" + sec + " "
    },
    fill_zero_prefix: function (num) {
        return num < 10 ? "0" + num : num
    }

})