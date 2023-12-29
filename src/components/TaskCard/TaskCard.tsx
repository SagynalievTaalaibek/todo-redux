import React from 'react';
import { Task } from '../../types';

interface Props {
  task: Task;
}

const TaskCard: React.FC<Props> = ({task}) => {
  return (
    <div className='card mb-2'>
      <div className='card-body d-flex justify-content-between'>
        <div className='form-check my-auto'>
          <input className='form-check-input' type='checkbox' checked={task.isDone} id={task.id} />
          <label className='form-check-label' htmlFor={task.id}>
            {task.task}
          </label>
        </div>
        <button className='btn btn-danger'>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;