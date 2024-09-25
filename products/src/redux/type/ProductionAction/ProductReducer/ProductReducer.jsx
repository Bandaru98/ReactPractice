// import Products from "../Products/Products"


const initialState = {
    cartdata: [],
    Products: [],
}

export const ProductReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {

        case 'AddtoCart':
            return {
                ...state, cartdata: [...state.cartdata, action.payload],
            }
        case 'RemovefromCart':
            const filterProduct = state.cartdata.filter((cartItem) => cartItem.id !== action.payload)
            return {
                ...state, cartdata: filterProduct
            }

        default:
            return state
    }
}

