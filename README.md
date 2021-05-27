<div align="center">

# Miniprogram-Picture-Upload
努力帮助你快速实现小程序的图片上传功能 

༼ つ ◕_◕ ༽つ  Please give me a star 
</div> 

## 🌼  功能   
- **支持设置图片上传数量**  
  本组件支持开发者设置小程序图片上传的数量上限，通过设置imgMaxNumber的值即可。
- **支持预览图片**  
  用户上传图片之后，支持点击放大预览。
- **支持删除已选择的图片**  
  用户选择图片之后，想要更换可以点击每个图片
- **提供云开发多图片上传示例**  
  组件提供以小程序云开发为后台的多图片上传到云储存的逻辑示例。
- **好看的界面**  
  借助colorUI实现界面，优雅简洁。并且用户达到图片上传上限后，有相应的提示和样式改变，会自动隐藏上传按钮。

---
## 💻  效果预览

| 未上传时界面 | 图片选择界面 | 图片上传满时界面 | 图片删除界面 |
| ---- |  ----| ----| ----|
|![](https://qny.volcanoblog.cn/markdown/20210527212337.png) | ![](https://qny.volcanoblog.cn/markdown/20210527214932.png) | ![](https://qny.volcanoblog.cn/markdown/20210527215038.png) | ![](https://qny.volcanoblog.cn/markdown/20210527215011.png) |


上传成功后控制台会自动打印图片预览链接

![](https://qny.volcanoblog.cn/markdown/20210527220247.png)

---

## 👩‍💻  马上下载 

```bash
git clone https://github.com/Volcano-Yang/miniprogram-picture-upload.git

cd miniprogram-picture-upload && code .
```

---
## 🎉  预览效果

① 下载完代码之后，导入项目到微信小程序开发工具

② 配置小程序appID和云开发envID

project.config.json填入appid
```json
{
    ...
    "appid": "xxxxxx",
    "projectname": "miniprogram-picture-upload",
    "libVersion": "2.14.1",
    ...
}
```

app.js填入appid
```js
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        // 需要替换成自己的云开发环境ID
        env: "xxxxxx"
      })
    }
```

③ 如果在自己的小程序中使用示例代码，复制index页面的wxml和js代码到自己的页面。

> 注意如果样式失效，要注意[安装colorUI](https://github.com/weilanwl/ColorUI)

<details>
<summary>
  如果你不是用ColorUI
</summary>

>*你可参照我的ui编写自己喜欢的样式，然后复用我的逻辑*  

</details>

---

## 🔗  相关链接

- 👉 [colorUI](https://github.com/weilanwl/ColorUI)

---

## 📘 待完成任务  

- [ ] 去除colorUI库依赖
- [ ] 制作成组件代码

---
  
<div align="center">
  
  
感谢你的鼓励和支持，我努力做的更好。

</div>


