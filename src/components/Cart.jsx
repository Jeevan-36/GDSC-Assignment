import React from 'react';

const Cart = ({item, handleCartItemDelete }) => {
  return (
    <div className="card cart-item mb-3 m-2" style={{ position: 'relative', maxWidth: '250px' }}>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
        onClick={() => handleCartItemDelete(item)}
      ></button>
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">${item.price}</p>
      </div>
    </div>
  );
};

export default Cart;
