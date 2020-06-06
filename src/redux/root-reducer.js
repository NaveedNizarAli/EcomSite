import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
export default combineReducers({
    user: userReducer,
    cart: cartReducer
})


//the root reducer where each reducer object come and combine as one object