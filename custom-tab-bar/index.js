// 自定义tababar
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        index: 0,
        pagePath: "/pages/tabPages/home/home",
        iconPath: "/assets/images/homeIcon.png",
        selectedIconPath: "/assets/images/selectedHomeIcon.png",
        text: "主页"
      },
      {
        index: 1,
        pagePath: "/pages/tabPages/question/question",
        iconPath: "/assets/images/questionIcon.png",
        selectedIconPath: "/assets/images/selectedQuestionIcon.png",
        text: "问答"
      },
      {
        index: 2,
        pagePath: "/pages/tabPages/chat/chat",
        iconPath: "/assets/images/chatIcon.png",
        selectedIconPath: "/assets/images/selectedChatIcon.png",
        text: "闲聊"
      },
      {
        index: 3,
        pagePath: "/pages/tabPages/person/person",
        iconPath: "/assets/images/personIcon.png",
        selectedIconPath: "/assets/images/selectedPersonIcon.png",
        text: "个人"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const index = data.index
      // 防止重复点击
      //console.log(index)
      if (index === this.data.selected) return
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: index
      })
      //console.log(this)
    }
  }
})
