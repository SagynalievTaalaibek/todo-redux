export interface Task {
  id: string;
  task: string;
  isDone: boolean;
}


export interface ApiTask {
  task: string;
  isDone: boolean;
}

export interface TaskApiFetch {
  [key: string]: Task;
}