import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({product}) {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`products/${product?.id}`)} className='2xl:w-[400px] xl:w-[350px] h-[350px] p-3 mb-2 mx-2 border rounded-md relative cursor-pointer hover:shadow-md'>
        <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{product?.price} <span className='text-sm'>TL</span></div>
        <img src={product?.image} alt=""  className=' h-[200px]  object-cover m-auto'/>
        <div className='text-center px-3 mt-3 text-lg font-bold'>{product?.title}</div>
    </div>
  )
}

export default Product