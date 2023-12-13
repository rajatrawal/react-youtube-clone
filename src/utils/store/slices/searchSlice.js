import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({

    name: 'search',
    initialState: {
        search: {

        }
    },
    reducers: {
        addSearch: (state, action) => {
            state.search[action?.payload?.query] = action?.payload?.data;
        },

    }
}

)

export default searchSlice.reducer;
export const { addSearch } = searchSlice.actions;