Page({
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
      console.log(this.getTabBar().data.selected)
    }
  }
})