---
id: koa2
slug: /knowledgeStructure/node/koa2
title: koa2 + vue实现上传图片到七牛云
date: 2021-11-28
tags:
  - node
  - koa2
---


## koa-multer
首先安装插件 koa-multer 用于上传图片和qiniu。
```bash
yarn add  koa-multer
yarn add  koa-qiniu  
```
## 服务端 
新建文件qiniu.js
```javascript
const multer = require("@koa/multer");
const Router = require("@koa/router");
const router = new Router();
var uuid = require('uuid');
const  func  = require("../untils/upload");


const storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //   cb(null, path.join(__dirname, "../../public"));
    // },
    // filename: function (req, file, cb) {
    //   let type = file.originalname.split(".")[1];
    //   cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`);
    // },
});

const limits = {
    fields: 10, //非文件字段的数量
    fileSize: 500 * 1024, //文件大小 单位 b
    files: 1, //文件数量
};

const upload = multer({ storage, limits });
var fs = require('fs');
const {formatResponse} = require("../untils/common");
router.post('/upload',upload.single("file"), async (ctx, next) => {
    try {
        const file = ctx.file; // 获取上传文件
        // console.log(ctx.file)
        if (file) {
            const fileName = uuid.v1();
            // 创建文件可读流
            const reader = fs.createReadStream(file.path);
            // 获取上传文件扩展名
            const ext = file.originalname.split(".").pop();
            // 命名文件以及拓展名
            const fileUrl = `public/${fileName}.${ext}`;

            const result = await func.upToQiniu(reader, fileUrl);

            console.log(result)

            if (result) {
                ctx.body = formatResponse("200", result, "success");
            } else {
                ctx.body = formatResponse("500", '上传失败', "success");
            }
        } else {
            ctx.body = formatResponse("500", '没有选择图片', "success");
        }
    } catch (err) {
        ctx.body = formatResponse("500", 'err', "success");
    }
})
module.exports = router
```

## 在util文件夹中新建upload.js

```javascript
let uuid = require('uuid');
let fs = require('fs');
// 上传到七牛
let qiniu = require('qiniu'); // 需要加载qiniu模块的
// 引入key文件
const QINIU = {
    accessKey: '输入Accesskey',  // 在七牛云官网申请
    secretKey: '输入secretKey',
    bucket: 'my-workspace-image'  // bucket是存储空间名称
}
const upToQiniu = (filePath, key) => {
    const accessKey = QINIU.accessKey
    const secretKey = QINIU.secretKey
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
  
    const options = {
        scope: QINIU.bucket
    }
    const putPolicy = new qiniu.rs.PutPolicy(options);

    const uploadToken = putPolicy.uploadToken(mac);
    // zone 华东机房  zone1 华北机房  zone2 华南机房   zoneNa0 北美
    const config = new qiniu.conf.Config()
    config.zone = qiniu.zone.zone2
    
    const localFile = filePath
    const formUploader = new qiniu.form_up.FormUploader(config)
    const putExtra = new qiniu.form_up.PutExtra()
    // 文件上传
    return new Promise((resolved, reject) => {
        formUploader.putStream(uploadToken, key, localFile, putExtra, function (respErr, respBody, respInfo) {
            if (respErr) {
                reject(respErr)
            } else {
                resolved(respBody)
            }
        })
    })
}
module.exports = {
    upToQiniu,
}

```
在上传图片到七牛云时，想到不能直接放在自己的存储空间下面，所以可以在每张上传的图片路径上加上 /public

```javascript
   const fileUrl = `public/${fileName}.${ext}`;
```
这样上传的图片会是 my-workspace-image/public 里面。

## vue中，直接用element ui 控件

```bash
       <el-upload
          class="avatar-uploader"
          name="file"
          :action="'localhost:8081/qiniu/upload'"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :on-error="uploadFiled"
            >
          <img v-if="imageUrl" :src="imageUrl | img" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
         </el-upload>
```
js

```javascript
    const   handleAvatarSuccess=(res, file)=>{
            // debugger
            if(res.code==='200'){
                this.ruleForm.courseTypeLogo = res.data.key;
                this.imageUrl = res.data.key;
                this.$message({
                    message: '上传成功',
                    type: 'success'
                });
            }else {
                // this.$message.error('上传失败');
            }
        }
    const  uploadFiled=(err)=>{
            this.$message.error('上传失败');
          console.log(err)
        }
     const  beforeAvatarUpload=(file)=>{
            const isJPG = file.type === 'jpg' || 'png';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG和png 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
```
