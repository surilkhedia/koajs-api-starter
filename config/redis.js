// optional redis config file

const { createClient } = require('redis')
const redis = createClient()
redis.connect()
module.exports = redis