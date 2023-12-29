import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { AppDispatch } from '../app/store';
import { ApiTask, Task, TaskApiFetch } from '../types';

export const sendTask = createAsyncThunk<void, string, {dispatch: AppDispatch}>(
  'task/post',
  async (task, thunkAPI) => {
    const data: ApiTask = {
      task: task,
      isDone: false,
    };
    await axiosApi.post('/tasks.json', data);
    await thunkAPI.dispatch(fetchTask());
  },
);

export const fetchTask = createAsyncThunk<Task[]>(
  'task/fetchTasks',
  async () => {
    const taskResponse = await axiosApi.get<TaskApiFetch | null>('/tasks.json');
    const tasks = taskResponse.data;

    let taskArr: Task[] = [];

    if (tasks) {
      taskArr = Object.keys(tasks).map(key => {
        const task = tasks[key];
        return {
          ...task,
          id: key,
        };
      });
    }

    return taskArr;
  },
);


export const editTask = createAsyncThunk<void, Task, {dispatch: AppDispatch}>(
  'task/edit',
  async (task, thunkAPI) => {
    const data: ApiTask = {
      task: task.task,
      isDone: !task.isDone,
    };

    await axiosApi.put(`tasks/${task.id}.json`, data);
    await thunkAPI.dispatch(fetchTask());
  },
);

export const deleteTask = createAsyncThunk<void, string, {dispatch: AppDispatch}>(
  'task/delete',
  async (id, thunkAPI) => {
    await axiosApi.delete(`tasks/${id}.json`);
    await thunkAPI.dispatch(fetchTask());
  },
);