Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#1976d2",
    list: [{
		"pagePath": "/pages/home/index",
		"iconPath": "../static/home.png",
		"selectedIconPath": "../static/home_1.png",
		"text": "首页",
		"number":''
    },
	{
		"pagePath": "/pages/server/index",
		"iconPath": "../static/server.png",
		"selectedIconPath": "../static/server_1.png",
		"text": "服务",
		"number":''
    },
	{
        "pagePath": "/pages/circle/index",
        "iconPath": "../static/dynamic.png",
        "selectedIconPath": "../static/dynamic_1.png",
        "text": "村友圈",
		"number":''
      },
	  {
	    "pagePath": "/pages/chat/index",
	    "iconPath": "../static/msg.png",
	    "selectedIconPath": "../static/msg_1.png",
	    "text": "消息",
		"number":''
	  },
      
      {
        "pagePath": "/pages/userCentral/index",
        "iconPath": "../static/my.png",
        "selectedIconPath": "../static/my_1.png",
        "text": "我的",
		"number":''
      }],
	  background:'../static/tabbar-bg.png',
	  centerImg:'../static/dynamic.png'
  },
  attached() {
		if(this.data.selected == 2){
			this.setData({
				centerImg : '../static/dynamic_1.png'
			})
		}else{
			this.setData({
				centerImg : '../static/dynamic.png'
			})
		}
		let numi = 'list[3].number' 
		this.setData({
			[numi] : 12
		})
  },
  
  methods: {　// 切换 tab 事件
      switchTab(e) {
        let that = this
        const path = e.currentTarget.dataset.path
        // 跳转页面
        wx.switchTab({
           url: path
        })
      }
    }
})
