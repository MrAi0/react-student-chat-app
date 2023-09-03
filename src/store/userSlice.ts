import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
    initialStep: boolean;
    name: string;
    age: string;
}

const initialState: UserState = {
    initialStep: false,
    name: '',
    age: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setInitialStep: (state, action: PayloadAction<boolean>) => {
            state.initialStep = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setAge: (state, action: PayloadAction<string>) => {
            state.age = action.payload;
        },
    },
});

export const { setInitialStep, setName, setAge } = userSlice.actions;

export default userSlice.reducer;