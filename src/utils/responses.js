const headers = {
  'Access-Control-Allow-Origin': `${process.env.SITE_URL}`,
  'Access-Control-Allow-Credentials': true,
}

export const ok = (data) => {
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(data),
  }
}

export const created = (data) => {
  return {
    statusCode: 201,
    headers,
    body: JSON.stringify(data),
  }
}

export const badRequest = (data) => {
  return {
    statusCode: 400,
    headers,
    body: JSON.stringify(data),
  }
}

export const unauthorized = (data) => {
  return {
    statusCode: 401,
    headers,
    body: JSON.stringify(data),
  }
}

export const serverError = (data) => {
  return {
    statusCode: 500,
    headers,
    body: JSON.stringify(data),
  }
}
