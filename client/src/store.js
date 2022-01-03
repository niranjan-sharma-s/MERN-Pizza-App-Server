import {combineReducers} from 'redux'
import { createStore ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"
import { getAllPizzasReducer , addNewPizzaReducer , getPizzaByIdReducer,editPizzaReducer} from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducer'
import { userReducer , loginUserReducer,getAllUsersReducer} from './reducers/userReducer'
import { getUserOrdersReducer, orderReducer,getAllOrdersReducer } from './reducers/orderReducer'


const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer:cartReducer,
    userReducer:userReducer,
    loginUserReducer:loginUserReducer,
    orderReducer:orderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    addNewPizzaReducer:addNewPizzaReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    editPizzaReducer:editPizzaReducer,
    getAllOrdersReducer:getAllOrdersReducer,
    getAllUsersReducer:getAllUsersReducer,
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) :null
const initialState = {
    cartReducer :
    {cartItems : cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)))

export default store;