import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import nextId from "react-id-generator";

interface Task {
  id?: string;
  is_completed: boolean;
  description: string;
}

interface TaskDetail {
  id: string;
  is_completed?: boolean;
  description?: string;
}

interface TasksState {
  task_list: Array<Task>;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  task_list: [],
  loading: "idle",
} as TasksState;

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask_automatic_Id: (state, action: PayloadAction<Task>) => {
      const task: Task = action.payload;
      task.id = nextId();
      state.task_list.push(task);
    },
    update_task: (state, action: PayloadAction<TaskDetail>) => {
      const update_values: TaskDetail = action.payload;
      const task = state.task_list.find((task) => task.id === update_values.id);

      if (update_values.is_completed !== undefined) {
        task!.is_completed = update_values.is_completed;
      }

      if (update_values.description !== undefined) {
        task!.description = update_values.description;
      }
    },
    delete_task: (state, action: PayloadAction<TaskDetail>) => {
      const task_idx = state.task_list.findIndex(
        (task) => task.id === action.payload.id
      );

      state.task_list.splice(task_idx, 1);
    },
    // delete_completed
  },
});

export type { Task, TaskDetail };

export const { addTask_automatic_Id, update_task, delete_task } =
  tasksSlice.actions;

export default tasksSlice.reducer;
