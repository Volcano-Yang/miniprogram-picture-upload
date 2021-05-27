const app = getApp();
const db = wx.cloud.database();
const store = db.collection("store");
const userInfo = db.collection("userInfo");
const _ = db.command;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    imgMaxNumber: 4
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  ChooseImage() {
    wx.chooseImage({
      count: this.data.imgMaxNumber, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },

  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },

  DelImg(e) {
    wx.showModal({
      title: '确定删除这张图片吗？',
      cancelText: '再看看',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },

  uploadPhoto(filePath) {
    return wx.cloud.uploadFile({
      cloudPath: `${Date.now()}-${Math.floor(Math.random(0, 1) * 10000000)}.png`,
      filePath
    })
  },

  uploadImgs() {
    wx.showLoading({
      title: '上传中'
    })
    const uploadTask = this.data.imgList.map(item => this.uploadPhoto(item))
    Promise.all(uploadTask).then(result => {
      console.log("上传结果", result)
      let resultImageUrls = [];
      for (const file of result) {
        resultImageUrls.push(file.fileID);
      }
      console.log("上传后的图片云存储路径", resultImageUrls)
      wx.hideLoading();
      wx.showToast({
        title: '上传图片成功',
        icon: 'success'
      })
    }).catch(() => {
      wx.hideLoading()
      wx.showToast({
        title: '上传图片错误',
        icon: 'error'
      })
    })
  }
})