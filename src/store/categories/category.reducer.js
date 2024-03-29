import { CATEGORIES_ACTION_TYPES } from "./category.types"
export let CATEGORIES_INITIAL_STATE = {
  categoriesMap: []
}
export let categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  let { type, payload } = action
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload }
    default:
      return state
  }
}