import { createAction } from "../../utils/reducer/reduer.utils"
import { USER_ACTION_TYPES } from './user.types'
export let setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
}