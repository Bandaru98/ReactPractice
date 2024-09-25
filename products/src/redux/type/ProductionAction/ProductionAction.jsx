import { ACTION_TYPE } from "../ActionType"

export const AddtoCart = (product) => {
    return { type: ACTION_TYPE.AddtoCart, payload: product }
}
export const RemovefromCart = (id) => {
    return { type: ACTION_TYPE.RemovefromCart, payload: id }
}