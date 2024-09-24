import React from 'react';


const PriceDetails = ({priceDetails}) => {
    console.log(priceDetails)
    const { totalMRP, couponDiscount, platformFee, shippingCharges, totalAmount }=priceDetails;
  return (
    <div className="card p-4 mb-3">
      <h5 className="mb-4">Price Details</h5>
      <div className="d-flex justify-content-between mb-2">
        <span>Total MRP</span>
        <span>₹{Math.round(totalMRP)}</span>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <span>Coupon Discount</span>
        <span className="text-success">{couponDiscount}</span>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <span>Platform Fee</span>
        <span>₹{platformFee}</span>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <span>Shipping Charges</span>
        <span>₹{shippingCharges}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between mb-4">
        <strong>Total Amount</strong>
        <strong>₹{Math.round(totalAmount)}</strong>
      </div>
      <button className="btn btn-secondary btn-block w-50 mx-auto p-2 fs-5">Place Order</button>
    </div>
  );
};

export default PriceDetails;
