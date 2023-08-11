import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCategoryProducts, getDetailProduct } from '../redux/productSlice';
import DetailComp from '../components/detail/DetailComp';
import Loading from '../components/Loading'
import Product from '../components/home/Product';
function Detail() {
    const {id}=useParams()
    const dispatch=useDispatch();
    const  {productDetail,productDetailStatus,products}=useSelector(state=>state.products);

    useEffect(() => {
      dispatch(getDetailProduct(id))
      dispatch(getCategoryProducts(productDetail.category))
    }, [dispatch,id,productDetail.category])
    console.log("mqelşafdmaslpfmd");
    console.log(productDetail);
    console.log(productDetailStatus);
  return (
    <div>
        {productDetailStatus=="LOADING"? <Loading/>: <DetailComp productDetail={productDetail}/>}
        <div><h1 className='text-5xl my-5'>similar products</h1></div>
        <div className='flex justify-center align-center'>
        {
          products?.map((product,index)=>{
            return <Product product={product} key={index} />
          })

        }
        </div>
    </div>
  )
}

export default Detail