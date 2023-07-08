// get route params
// route.get("/user/:name", user.routeParams)
async function routeParams(ctx) {
    try {
        ctx.body = ctx.params.name
    } catch (e) {
        ctx.status = e.status ? e.status : 500
    }
}

// get query params
// route.get("/users?page=1", user.queryParams)
async function queryParams(ctx) {
    try {
        const q = ctx.query
        if (!q.page) {
            ctx.throw(400)
        }
        ctx.body = { hello: "world" }
    } catch (e) {
        ctx.status = e.status ? e.status : 500
    }
}

// post body 
// route.post("/login", bodyParser(), user.bodyParams)
async function bodyParams(ctx) {
    try {
        const b = ctx.request.body
        if (!b.email) {
            ctx.throw(400)
        }
        ctx.body = b
    } catch (e) {
        ctx.status = e.status ? e.status : 500
    }
}

module.exports = {
    routeParams,
    queryParams,
    bodyParams
}