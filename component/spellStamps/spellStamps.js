Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  lifetimes: {
    detached:function(){
      clearTimeout(this.data.mytime)
    }
  },
  pageLifetimes:{
    hide:function(){
      clearTimeout(this.data.mytime)
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    listA: Object,
    time: {
      type: String,
      value: '00:00:00'
    },
    status: String,
    lefttime:Number,
    timeOver:{
      type:Boolean,
      value:false
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    mytime:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clearCount:function(){
      clearTimeout(this.data.mytime)
      console.log(this.data.mytime)
    },
    countdown: function (newtime) {
      if(this.data.lefttime<=0){
        this.setData({
          timeOver:true
        })
        return
      }
      let mytime = setTimeout(() => {
        let lefttime = newtime*1000 - new Date().getTime()
        lefttime -= 1000
        this.setData({
          time: this.date_format(lefttime),
          lefttime:lefttime
        })
        this.countdown(newtime)
      console.log(this.data.lefttime)
      }, 1000)
      this.data.mytime = mytime
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
  },
  observers: {
    'listA': function () {
      this.countdown(this.data.listA.teamInfo.end_time || this.data.listA.expire_time)
    },

  },

})