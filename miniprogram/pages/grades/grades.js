const app = getApp()
const db = wx.cloud.database({});
const gra = db.collection('grades')
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grade_list:[]
  },

  input: function (e) {
    // event.detail 为当前输入的值
    this.setData({
      user: e.detail.value
    })
  },
  btnClick: function () {
    var _this = this;
    db.collection('grades').where({
      username: this.data.user,
    })
      .get({
        success: res => {
          // res.data 是包含以上定义的两条记录的数组
          this.setData({
            grade_list: res.data
          })
        }
      })
  }
})