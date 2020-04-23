Component({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  methods:{
    bindChange: function (e) {
      var that = this;
      that.setData({
        currentTab: e.detail.current
      });
    },
   
    /** 
     * 点击tab切换 
     */
    swichNav: function (e) {
      var that = this;
      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
    }
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
 
 
})

