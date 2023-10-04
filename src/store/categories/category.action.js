import { createAction } from "../../utils/reducer/reduer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types"
export let setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)