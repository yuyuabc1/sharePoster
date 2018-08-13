var plugin = requirePlugin("myPlugin")
Page({
  data: {
    template: {
      url: 'www.baidu.com'
    }
  },
  onLoad: function() {
    plugin.getData()
  }
})