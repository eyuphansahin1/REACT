import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {STATUS} from '../utils/status'


const initialState={
    products:[],
    productsStatus:STATUS.IDLE,
    productDetail:[],
    productDetailStatus:STATUS.IDLE
}

export const getProducts=createAsyncThunk('getProducts',async()=>{
    const response=await fetch('https://fakestoreapi.com/products');
    const data= await response.json()
    return data
})

export const getDetailProduct = createAsyncThunk('getDetailProduct', async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`); // Yanlış tırnak işaretleri kaldırıldı
    const data = await response.json();
    return data;
});

export const getCategoryProducts=createAsyncThunk('getCategoryProducts',async(category)=>{
    const response=await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data= await response.json()
    return data
})


const productSlice =createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state)=>{
            state.productsStatus=STATUS.LOADING;
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.products=action.payload
            state.productsStatus=STATUS.SUCCESS;
        })
        .addCase(getProducts.rejected,(state)=>{
            state.productsStatus=STATUS.FAIL;
        })
        

        .addCase(getCategoryProducts.pending,(state)=>{
            state.productsStatus=STATUS.LOADING;
        })
        .addCase(getCategoryProducts.fulfilled,(state,action)=>{
            state.products=action.payload
            state.productsStatus=STATUS.SUCCESS;
        })
        .addCase(getCategoryProducts.rejected,(state)=>{
            state.productsStatus=STATUS.FAIL;
        })



        .addCase(getDetailProduct.pending,(state)=>{
            state.productDetailStatus=STATUS.LOADING;
        })
        .addCase(getDetailProduct.fulfilled,(state,action)=>{
            state.productDetail=action.payload
            state.productDetailStatus=STATUS.SUCCESS;
        })
        .addCase(getDetailProduct.rejected,(state)=>{
            state.productDetailStatus=STATUS.FAIL;
        })
    }
})

export default productSlice.reducer