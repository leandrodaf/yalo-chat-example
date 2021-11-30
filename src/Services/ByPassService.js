const fetch = require('node-fetch')

const {
  redirect: { url, request },
} = require('../../config')

async function byPass(data) {
  if (!url) {
    throw new Error('There is no URL setting for the redirect')
  }

  const response = await fetch(url, { ...request, body: JSON.stringify(data) })
  let body = null

  if (response.headers.get('content-type').includes('application/json')) {
    body = response.json()
  } else {
    body = response.text()
  }

  if (response.ok) {
    return { status: response.status, body }
  }

  return { status: response.status, message: response.statusText }
}

module.exports = { byPass }
