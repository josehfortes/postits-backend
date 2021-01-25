import { createUser } from './service'

export const createAccount = async (event) => {
  try {
    const body = JSON.parse(event.body)
    const user = await createUser(body)
    return {
      statusCode: 200,
      body: JSON.stringify({
        user,
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    }
  }
}
