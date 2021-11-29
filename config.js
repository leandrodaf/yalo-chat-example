module.exports = {
  port: process.env.PORT || 3001,
  ttl: +process.env.TTL, // seconds
  database: {
    redis: {
      url: process.env.REDIS_HOST,
      database: +process.env.REDIS_DATABASE || 0,
    },
  },
  redirect: {
    url: process.env.URL_REDIRECT,
    request: {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
    },
  },
}
