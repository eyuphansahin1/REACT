import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cardSlice';

function DetailComp({productDetail}) {
  console.log(productDetail);
  const [quantity, setQuantity] = useState(0)
  const dispatch=useDispatch()
  const decrement=()=>{
    setQuantity(quantity-1)
  }
  const increment=()=>{
    setQuantity(quantity+1)
  }

  const addBasket=()=>{
    dispatch(addToCart({id:productDetail?.id,title:productDetail?.title,image:productDetail?.image,price:productDetail?.price}))
  }
  return (
    <div className='flex gap-10 my-10'>
      <img className='w-[700px] h-[500px] object-cover' src={productDetail?.image} alt="" />
      <div className=''>
        <div className='text-4xl font-bold'>{productDetail?.title}</div>
        <div className='my-2 text-2xl'>{productDetail?.description}</div>
        <div className='my-2 text-xl text-red-500' >Rating:{productDetail?.rate}</div>
        <div className='my-2 text-xl text-red-500'>Count:{productDetail?.count}</div>
        <div className='text-5xl font-bold'>{productDetail?.price} <span className='text-sm'>TL</span></div>
        <div className='flex items-center gap-5 my-4'>
          <div onClick={decrement} className='text-5xl cursor-pointer'>-</div>
          <input type="text" className='w-20 text-center text-4xl font-bold' value={quantity} />
          <div onClick={increment} className='text-5xl cursor-pointer'>+</div>
        </div>
        <div onClick={addBasket} className='my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center'>Sepete Ekle</div>
      </div>
    </div>
  )
}

export default DetailComp