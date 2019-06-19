const db = wx.cloud.database()
const book = db.collection('mybook')
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {
    book_list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;

    db.collection('mybook').get({
      success: res => {
        this.setData({
          book_list: res.data
        })
      }
    })
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
  viewItem: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/book/bookDetail/bookDetail?id=' + id
    });
  },
  delete: function (event) {
    var id = event.currentTarget.dataset.id;
    db.collection('mybook').doc(id).remove({
      success: function (res) {
        wx.switchTab({
          url: '/pages/more/more',
        })
      }
    })
  }
})