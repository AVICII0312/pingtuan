Component({
  lifetimes: {
    attached: function () { // 在组件实例进入页面节点树时执行
      this.setData({
        scene:getApp().data.scene
      })
    console.log(this.data.scene)
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的初始数据
   */
  data: {
    flag: true,
    scene: Number
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hidePopup() {
      this.setData({
        flag: !this.data.flag
      })
    },
    //展示弹框
    showPopup() {
      this.setData({
        flag: !this.data.flag
      })
    },
    /*
     * 内部私有方法建议以下划线开头
     * triggerEvent 用于触发事件
     */
    _error() {
      //触发取消回调
      this.triggerEvent("error")
    },
  }
})