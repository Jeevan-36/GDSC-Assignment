import React from 'react'
import Header from './components/Header'
import Products from "./components/Products"
import CartItems from './components/CartItems'
import PriceDetails from './components/PriceDetails'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {

  const [productsList,setProductsList]=useState([]);
  const [cartList,setCartList]=useState([]);
  const [priceDetails,setPriceDetails]=useState({
    totalMRP:0,
    couponDiscount:10,
    platformFee:50,
    shippingCharges:57,
    totalAmount:0
  });
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(json=>setProductsList(json))
    .catch(err=>console.log(err));
   },[]);


  const handleAddToCart=(productInfo)=>{
   const newCartList=[...cartList,productInfo]
   setCartList(newCartList);
   const totalMRP = newCartList.reduce((acc, item) => acc + item.price, 0);
   const newPriceDetails={
    totalMRP:priceDetails.totalMRP+productInfo.price,
    couponDiscount:priceDetails.couponDiscount+2,
    platformFee:priceDetails.platformFee,
    shippingCharges:priceDetails.shippingCharges+1,
    totalAmount: totalMRP - priceDetails.couponDiscount + priceDetails.platformFee + priceDetails.shippingCharges
   }
   setPriceDetails(newPriceDetails);

  }
  const handleCartItemDelete=(item)=>{
    
     const newCartList=cartList.filter((product)=>product.id!==item.id);
     setCartList(newCartList);
     const totalMRP = newCartList.reduce((acc, item) => acc + item.price
     , 0);
     const newPriceDetails={
      totalMRP:totalMRP,
      couponDiscount:priceDetails.couponDiscount,
      platformFee:priceDetails.platformFee,
      shippingCharges:priceDetails.shippingCharges,
      totalAmount: totalMRP - priceDetails.couponDiscount + priceDetails.platformFee + priceDetails.shippingCharges
      }
      setPriceDetails(newPriceDetails)
  }
  

  return (
    <div className='m-2'>
      <Header />
      <Products productsList={productsList}
      handleAddToCart={handleAddToCart}></Products>
      <CartItems cartList={cartList} handleCartItemDelete={handleCartItemDelete} ></CartItems>
      {
        cartList.length!==0&&<PriceDetails priceDetails={priceDetails}></PriceDetails>
      }
      
    </div>
  )
}

export default App