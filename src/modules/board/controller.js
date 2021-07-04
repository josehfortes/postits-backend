import {
  badRequest, created, ok, serverError,
} from '../../utils/responses'
import {
  createBoard, listBoards, getBoard, updateBoard, deleteBoard,
} from './service'

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

export const listAll = async (event) => {
  try {
    const auth = event.requestContext.authorizer
    const boards = await listBoards(auth)
    return ok(boards)
  } catch (err) {
    return serverError(err)
  }
}

export const get = async (event) => {
  try {
    const { queryStringParameters } = event
    if (!queryStringParameters || !queryStringParameters.id) throw new Error('id_required')

    const auth = event.requestContext.authorizer
    const board = await getBoard(auth, queryStringParameters.id)
    return ok(board)
  } catch (err) {
    if (err.message === 'id_required') return badRequest(err.message)
    return serverError(err)
  }
}

export const put = async (event) => {
  try {
    const { queryStringParameters } = event
    if (!queryStringParameters || !queryStringParameters.id) throw new Error('id_required')

    const auth = event.requestContext.authorizer
    const body = JSON.parse(event.body)
    const updatedBoard = await updateBoard(auth, queryStringParameters.id, body)
    return ok(updatedBoard)
  } catch (err) {
    if (err.message === 'id_required') return badRequest(err.message)
    return serverError(err)
  }
}

export const deleteController = async (event) => {
  try {
    const { queryStringParameters } = event
    if (!queryStringParameters || !queryStringParameters.id) throw new Error('id_required')

    const auth = event.requestContext.authorizer
    await deleteBoard(auth, queryStringParameters.id)
    return ok()
  } catch (err) {
    if (err.message === 'id_required') return badRequest(err.message)
    return serverError(err)
  }
}
