// CORS Options

var whitelist = [
    'http://localhost:4000',
    'http://localhost:3000',
    'http://localhost:5000'
]

function origin(ctx) {
    if (whitelist.indexOf(ctx.headers.origin) !== -1) {
        return ctx.headers.origin
    } else {
        return 'http://localhost:4000'
    }
}

module.exports = origin