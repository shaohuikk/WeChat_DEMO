// pages/schedule/schedule.js
const app = getApp()
const db = wx.cloud.database({});
const course = db.collection('course')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses:[],
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  input: function (e) {
    this.setData({
      expressNu: e.detail.value
    })
  },
  btnClick: function () {
    var _this = this;
    db.collection('course').where({
      username: this.data.expressNu,
    })
      .get({
        success: res => {
          // res.data 是包含以上定义的两条记录的数组
          this.setData({
            courses:res.data
          })
        }
      })
  }
})