import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slice/userSlice';
import customerSlice from '../slice/customerSlice';
import transactionSlice from '../slice/transactionSlice';


const store = configureStore({
    reducer: {
        userKey: userSlice,
        transactionKey: transactionSlice,
        customerKey: customerSlice
    }
});

export default store;