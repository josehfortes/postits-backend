export const createAccount = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Create account works',
        input: event,
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    }
  }
}
