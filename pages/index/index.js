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
    onLoad: function () {},
    onReady: function () {

    },
    getStamps: function () { //首页请求
        let _this = this
        wx.request({
            url: 'https://lwysheng.yctmt.com/index.php?s=/api/group.coupon/lists&wxapp_id=10001&token=b5f2c3d8e226d0bb7e4144df92a80472',
            data: {

            },
            header: {
                'content-type': 'application/json'
            },
            success(res) {
                console.log(res)
                _this.setData({
                    list: res.data.data.data,
                }, function () {
                    _this.setData({
                        time: _this.data.list.teamInfo.end_time
                    })
                    console.log(this.data.time)
                }, function () {
                    console.log(_this.data.time)
                })
            }
        })
    },

    countdown: function () {

        let _this = this
        console.log(newtime)
        _this.setData({
            time: _this.date_format(newtime)
        })
        setTimeout(() => {
            newtime - 10
            _this.countdown()
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
        var sec = this.fill_zero_prefix((second - hr * 3600 - min * 60)); // equal to => var sec = second % 60;     
        return hr + ":" + min + ":" + sec + " "
    },
    fill_zero_prefix: function (num) {
        return num < 10 ? "0" + num : num
    }

})