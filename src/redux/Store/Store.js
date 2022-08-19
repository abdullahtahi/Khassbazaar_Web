import { configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { loginreducer } from '../Reducer/loginReducer'
import { handlereducer } from '../Reducer/handlestate'
import { getallproducts } from '../Reducer/getallproducts'
import { SingleProduct } from '../Reducer/SingleProduct'

const reducer=combineReducers({
    loginreducer,
    handlereducer,
    getallproducts,
    SingleProduct

})
export const  store = configureStore({reducer})