import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducers/Reducer";

const store = configureStore({ reducer: Reducer });

export default store;
