//index.js
//获取应用实例
const app = getApp()
Page({
data: {},

formSubmit: function(e) {
  const db = wx.cloud.database()
  db.collection('user').add({
    data: {
      username: e.detail.value.zhanghao,
      password: e.detail.value.mima
    },
    success: res => {
      // 在返回结果中会包含新创建的记录的 _id
      this.setData({
        username: e.detail.value.zhanghao
      })
      wx.showToast({
        title: '绑定成功',
      })
      wx.switchTab({
        url: '/pages/schedule/schedule',
      })
    },
    fail: err => {
      wx.showToast({
        icon: 'none',
        title: '绑定失败'
      })
      console.error('[数据库] [新增记录] 失败：', err)
    }
  })
}
})