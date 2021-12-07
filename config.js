module.exports = {
  port: process.env.PORT || 3001,
  ttl: +process.env.TTL, // seconds
  database: {
    mysql: {
      connectionLimit: 10,
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
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
