import React from 'react'
import { useSelector } from 'react-redux'

const ProductList = () => {

    const product = useSelector((state)=>state.state)
    console.log(product);
    
  return (
    <div>
      hello
    </div>
  )
}

export default ProductList
