import React from 'react'
import Card from "./Card"
function Products({productsList,handleAddToCart}) {
  return (
    
    <div className='d-flex justify-content-evenly flex-wrap '>
        {
            productsList.map(
                productInfo=>{
                    return(
                        <Card key={productInfo.id} productInfo={productInfo} 
                        handleAddToCart={handleAddToCart}
                        />
                    );
                }
            )
        }
        
    </div>
  )
}

export default Products