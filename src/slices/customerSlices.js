import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: "Rishabh",
        email: "rishabhraghav2012@gmail.com",
        phone: 9997053746,
    },
];

const customerSlice = createSlice({
    name: 'customers',
    initialState: initialState,
    reducers: {
        addCustomer: (state, action) => {
            state.push(action.payload);
        },
        deleteCustomer: (state, action) => {
            return state.filter((customer, i) => i !== action.payload);
        },
        editCustomer: (state, action) => {
            const { index, name, email, phone } = action.payload;
            return state.map((customer, i) => (i === index ? { name, email, phone } : customer));
        },
    }
});

export default customerSlice.reducer;
export const {addCustomer, deleteCustomer, editCustomer} = customerSlice.actions;