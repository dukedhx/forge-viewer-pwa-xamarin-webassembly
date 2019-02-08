
const serve = require('koa-static')
const Koa = require('koa')

const Router = require('koa-router')

const router = new Router({ prefix: '/api/forge' })

const ForgeSDK = require('forge-apis')

const config = require('config')
const app = new Koa()

app.use(serve('./www'))

router.get(
  '/dictionary/:key',
  ctx => {
    ctx.type = ctx.query['type'] || 'application/json'

    let body = (config.dicts[ctx.params.key]||[]).reduce((o,e)=>{ o[e]=process.env[e] || config.get(e); return o},{})

    ctx.body = ctx.query['type'] == 'js'? ('export default '+JSON.stringify(body)) : body

  }
)

router.get('/token', async ctx => await new ForgeSDK.AuthClientTwoLegged(process.env.FORGE_CLIENT_ID || config.get('FORGE_CLIENT_ID'), process.env.FORGE_CLIENT_SECRET || config.get('FORGE_CLIENT_SECRET'), config.scope).authenticate().then(data => ctx.body = data))


app.use(router.routes())

const server = app.listen(process.env.PORT || 5000, () => {
  console.info(`Server listening on port: ${process.env.PORT || 5000}.\n`)

  if(process.argv[2]==='test') server.close()
})
