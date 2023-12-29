import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteTask, fetchTask } from './taskThunks';
import { RootState } from '../app/store';
import { Task } from '../types';

interface TaskState {
  tasks: Task[];
  fetchLoading: boolean;
  deleteLoading: false | string;
}

const initialState: TaskState = {
  tasks: [],
  deleteLoading: false,
  fetchLoading: false,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTask.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchTask.fulfilled, (state, { payload: tasks }: PayloadAction<Task[]>) => {
      state.fetchLoading = false;
      state.tasks = tasks;
    });
    builder.addCase(fetchTask.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(deleteTask.pending, (state, { meta }) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteTask.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteTask.rejected, (state) => {
      state.deleteLoading = false;
    });
  },
});

export const taskReducer = taskSlice.reducer;
export const selectTask = (state: RootState) => state.task.tasks;
export const selectFetchLoading = (state: RootState) => state.task.fetchLoading;
export const selectDeleteLoading = (state: RootState) => state.task.deleteLoading;