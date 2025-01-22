import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiInstance from '../../api/instance';

const initialState = {
    products: []
}

export const addProduct = createAsyncThunk('product/addProduct', async (input, { rejectWithValue }) => {
    try {
        console.log(input);
        const { data } = await apiInstance.post('/api/product/addProduct', input);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
    }
})

export default productSlice.reducer;