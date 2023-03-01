import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./Slices/UserSlices";

const store = configureStore ({

    reducer: {
        user:usersSlice.reducer
    },

});

export default store;