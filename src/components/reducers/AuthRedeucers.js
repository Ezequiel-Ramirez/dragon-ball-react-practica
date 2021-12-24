import { authTypes } from "../../types/authTypes"

export const AuthReducers = (state, action) => {
    
    switch(action.type) {
        case authTypes.LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case authTypes.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
        default:
            return state
        }    
}
