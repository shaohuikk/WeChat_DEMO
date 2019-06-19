// pages/feedback/feedback.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  formSubmit: function (e) {
    const db = wx.cloud.database()
    db.collection('feedback').add({
      data: {
        contents: e.detail.value.content,
      },
      success: res => {
        wx.showToast({
          title: '反馈成功',
        })
        wx.switchTab({
          url: '/pages/schedule/schedule',
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '反馈失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  }
})