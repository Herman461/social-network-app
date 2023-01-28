import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {createWrapper} from "next-redux-wrapper";



const makeStore = () => configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof makeStore>
export const wrapper = createWrapper<RootState>(makeStore);


