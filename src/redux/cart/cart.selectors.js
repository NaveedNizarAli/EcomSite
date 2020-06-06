import {createSelector} from 'reselect';

//two types of selector input and output input donot need create selector

//input selector slicing the data
const selectCart = state => state.cart;

//ouput selector which need both input selector and create selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems=>
        cartItems.reduce((accumalatedQuantity, cartItem)=>
        accumalatedQuantity + cartItem.quantity
    ,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
      cartItems => 
        cartItems.reduce((accumalatedQuantity, cartItem)=>
        accumalatedQuantity + cartItem.quantity * cartItem.price
    ,0)
)