import { ProductReducer } from "../type/ProductionAction/ProductReducer/ProductReducer";
import {combineReducer} from 'redux'

export const Reducer=combineReducer({productdata: ProductReducer})