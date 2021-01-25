import {combineReducers} from "redux";
import { SET_HOTEL, SHOW_ADD } from "../Constants";

const initialState = { hotel: null, showAdd: false }

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOTEL: return {...state, hotel: action.payload }
        case SHOW_ADD: return {...state, showAdd: action.payload}
        default: return state
    }
}

export const RootReducer = combineReducers({
    hotelReducer
})
