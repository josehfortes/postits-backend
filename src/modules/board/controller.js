import { created, serverError } from '../../utils/responses'
import { createBoard } from './service'

export const create = async (event) => {
  try {
    const auth = event.requestContext.authorizer
    const body = JSON.parse(event.body)
    const board = await createBoard(auth, body)
    return created(board)
  } catch (err) {
    return serverError(err)
  }
}
