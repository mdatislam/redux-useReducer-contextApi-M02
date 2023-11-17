import { actionTypes } from "./ActionTypes"

export const initialState = {
    loading: false,
    foods: [],
    orders:[],
    error: false

}

export const foodReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.loading_start:
            return {
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.loading_success:
            return {
                ...state,
                loading: false,
                foods: action.payload,
                error: false
            };

            case actionTypes.order_submit:
            return {
                ...state,
                orders:[...state.orders,action.payload]
            };
        case actionTypes.loading_error:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}