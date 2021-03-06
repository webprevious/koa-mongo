const router = require('koa-router')()
const mongoose = require('mongoose')

router.post('/addGoodsCateory', async (ctx, next) => {
  // 获取modle
  const goodsCategory = mongoose.model('goodsCategory')
  // create存操作方法不需要创建保存实例，存入字段需要跟前端传入对应
  await goodsCategory.create(ctx.request.body).then(res => {
    console.log(res)
    ctx.body = {
      code: 1,
      data: {}
    }
  }).catch(err => {
    ctx.body = {
      code: 0,
      data: err
    }
  })
})

module.exports = router