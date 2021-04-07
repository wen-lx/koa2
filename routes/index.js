const router = require('koa-router')()
const db = require('./database')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

function classList () {
  const sql = 'SELECT * FROM class';
  return db.query(sql)
}
router.get('/class', async (ctx, next) => {
  await classList().then(async res => {
    console.log(ctx, res)
    await ctx.render('class', {
      arr: [{id: 12, name: 1223, count: 223, teacher: 234}]
    })
  })
})

module.exports = router
