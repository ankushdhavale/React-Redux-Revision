import React, { useState } from 'react'
import './Product.css'
import { useDispatch } from 'react-redux'
import { addProduct } from './Silces/ProductSlice';


const Product = () => {
     const dispatch = useDispatch();
     const [productName , setProductName] = useState('');
     const [productPrice , setProductPrice] = useState('');

     const productHandeler = () =>{
        dispatch(addProduct({
            productName,
            productPrice
        }))
     }
  return (
    <div className='product-container'>
      <h1>Add User</h1>
        <div>
            <input onChange={(e)=>setProductName(e.target.value)}  type="text" placeholder='Product Name' />
            <input onChange={(e)=>setProductPrice(e.target.value)} type="no" placeholder='Product Price' />
        </div>
      <button onClick={productHandeler}>Add</button>
    </div>
  )
}

export default Product