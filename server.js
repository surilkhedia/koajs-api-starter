const Koa = require('koa')
const TreeRouter = require('koa-tree-router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
// config
const origin = require('./config/copts')
// initialize server and router
const server = new Koa()
const route = new TreeRouter()
server.use(cors({ origin: origin }))
// controllers
const user = require('./controllers/user')
// controllers passed to routes
route.get("/user/:name", user.routeParams)
route.get("/users?page=1", user.queryParams)
route.post("/login", bodyParser(), user.bodyParams)
// pass router to server
server.use(route.routes())
// server ready
server.listen(process.env.PORT || 8080)