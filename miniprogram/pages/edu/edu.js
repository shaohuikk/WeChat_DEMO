//最初加载页面时的url
var url = 'http://v.juhe.cn/toutiao/index?type=&key=947e35af807f89ca7180e0764bf9f53f';

var colors = {
  top: '#BDC6B8',
  shehui: '#BDC6B8',
  guonei: '#BDC6B8',
  guoji: '#BDC6B8',
  yule: '#BDC6B8',
  tiyu: '#BDC6B8',
  junshi: '#BDC6B8',
  keji: '#BDC6B8',
  caijing: '#BDC6B8',
  shishang: '#BDC6B8'
}

//点击某类新闻时导航栏上对应的字变为红色
var changeColor = function (curColor) {
  for (var i in colors) {
    if (i == curColor) {
      colors[i] = 'red';
    } else {
      colors[i] = '#BDC6B8';
    }
  }
}

Page({
  data: {
    newslist: [],
    page: 1,
    newstype: 'top',
    scrollHeight: 0,
    hidden: true,
    color: {
      top: 'red',
      shehui: '#BDC6B8',
      guonei: '#BDC6B8',
      guoji: '#BDC6B8',
      yule: '#BDC6B8',
      tiyu: '#BDC6B8',
      junshi: '#BDC6B8',
      keji: '#BDC6B8',
      caijing: '#BDC6B8',
      shishang: '#BDC6B8'
    }
  },

  // 页面初始化 options为页面跳转所带来的参数
  onLoad: function (options) {
    var _this = this;
    this.setData({
      hidden: false, // 阴藏或显示加载更多
    });

    // 网络请求
    wx.request({
      url: url,
      method: 'get',
      success: (res) => {
        _this.setData({
          newslist: res.data,
          hidden: true
        });
      }
    });
    //获得窗口的高度，在划到页面最底部时加载更多要用
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
  },

  //浏览某条新闻
  browsing: function (event) {
    var newstype = event.currentTarget.id;
    changeColor(newstype);
    this.setData({
      newstype: newstype,
      color: colors
    });
    url = 'http://v.juhe.cn/toutiao/index?type=' + newstype + '&key=947e35af807f89ca7180e0764bf9f53f';
    wx.request({
      url: url,
      method: 'get',
      success: (res) => {
        this.setData({
          newslist: res.data,
          page: 1
        });
      }
    });
  },

  //下拉或上拉加载更多
  loadmore: function (event) {
    this.setData({
      hidden: false,
      page: this.data.page + 1
    });
    url = 'http://v.juhe.cn/toutiao/index?type=' + this.data.newstype + '&key=947e35af807f89ca7180e0764bf9f53f';
    wx.request({
      url: url,
      method: 'get',
      success: (res) => {
        this.setData({
          newslist: res.data,
          hidden: true
        });
      }
    })
  }
})