//index.js
//获取应用实例
const app = getApp()

Page({
    data:{
        list:[]
    },
    onShow:function(){
        this.getStamps()
    },
    onLoad:function(){
        
    },
    getStamps:function(){ //首页请求
        let _this = this 
        wx.request({
            url:'https://lwysheng.yctmt.com/index.php?s=/api/group.coupon/lists&wxapp_id=10001&token=b5f2c3d8e226d0bb7e4144df92a80472',
            data:{

            },
            header:{
                'content-type': 'application/json' 
            },
            success(res){
                _this.setData({
                    list:res.data.data.data,
                })
            }
        })
    },
    
    /* showTime:function(){ //倒计时
        let lefttime =  
        let h = 
        let m = 
        let s =
        
    }, */
    leftPad:function(){ //补零

    }
})
