const baseResponse = {
  status: 500,
  errors: [],
  message: 'Fatal error',
  stack: null,
}

module.exports = (err, req, res) => {
  baseResponse.stack = err.stack
  baseResponse.message = err.message

  if ((err.details || []).length > 0) {
    baseResponse.status = 400
    baseResponse.errors = err.details
  }

  return res.status(baseResponse.status).json(baseResponse)
}
