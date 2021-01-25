import { createUser } from './service'
import { created, serverError } from '../../utils/responses'

export const createAccount = async (event) => {
  try {
    const body = JSON.parse(event.body)
    const user = await createUser(body)
    return created(user)
  } catch (err) {
    return serverError(err)
  }
}
