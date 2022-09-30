import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/taskSlice";
import themeReducer from "./theme/themeSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    themes: themeReducer,
  },
});

export default store;
