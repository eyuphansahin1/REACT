import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCategories } from '../../redux/CategorySlice'
import { getProducts } from '../../redux/productSlice'
function Category({setCategory}) {
  const dispatch=useDispatch()
  const {categories}=useSelector(state=>state.categories)
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  
  console.log(categories);
  return (
    <div className='w-1/6 bg-gray-100 p-4 max-h-screen'>
      <div className='border-b pb-1 px-2 text-xl font-bold w-2/4'>Categories</div>
      <div onClick={()=>dispatch(getProducts())} className='text-lg  cursor-pointer hover:bg-gray-200 p-2  ' key={1000} >All</div>
      {
        categories?.map((category,i)=>(
          <div onClick={()=>setCategory(category)} className='text-lg  cursor-pointer hover:bg-gray-200 p-2  ' key={i} >{category}</div>
          ))
      }

  
    </div>
  )
}

export default Category