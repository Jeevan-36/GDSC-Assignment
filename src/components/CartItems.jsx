import React from 'react'
import Cart from './Cart';
function CartItems({cartList,handleCartItemDelete}) {
  return (
    <><div className="alert alert-secondary text-center">
          {cartList.length !== 0 ?
              <p>Card Items</p> :
              <p>Cart is Empty</p>}
      </div><div className="bg-dark mt-5 p-3 d-flex justify-content-evenly flex-wrap">

              {cartList.map(
                  item => {
                      return (
                          <Cart item={item} key={item.id} handleCartItemDelete={handleCartItemDelete}></Cart>
                      );
                  }
              )}
          </div></>
  )
}

export default CartItems