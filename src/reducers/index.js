import ProductoReducer from "./ProductoReducer";
import {combineReducers} from "redux"

const allReducers = combineReducers({
    productos: ProductoReducer
})

export default allReducers;