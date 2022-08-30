import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlicer";

export default configureStore({
  reducer: {
    toDo: todoReducer,
  },
});
