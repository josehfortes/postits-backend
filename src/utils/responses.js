export const ok = (data) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

export const created = (data) => {
  return {
    statusCode: 201,
    body: JSON.stringify(data),
  }
}

export const badRequest = (data) => {
  return {
    statusCode: 400,
    body: JSON.stringify(data),
  }
}

export const unauthorized = (data) => {
  return {
    statusCode: 401,
    body: JSON.stringify(data),
  }
}

export const serverError = (data) => {
  return {
    statusCode: 500,
    body: JSON.stringify(data),
  }
}
