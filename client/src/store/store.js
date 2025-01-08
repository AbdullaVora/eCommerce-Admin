import { configureStore } from '@reduxjs/toolkit';
import  productSlice  from '../features/slices/productSlice';

const store = configureStore({
    reducer: {
        products: productSlice
    }
});

export default store;
