import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteTask, editTask } from '../../store/taskThunks';
import { selectDeleteLoading } from '../../store/taskSlice';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import { Task } from '../../types';

interface Props {
  task: Task;
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDeleteLoading);

  return (
    <div className='card mb-2'>
      <div className='card-body d-flex justify-content-between'>
        <div className='form-check my-auto'>
          <input
            className='form-check-input'
            type='checkbox'
            checked={task.isDone}
            readOnly
            id={task.id}
            onClick={() => dispatch(editTask(task))}
          />
          <label className='form-check-label' htmlFor={task.id}>
            {task.task}
          </label>
        </div>
        <button
          className='btn btn-danger'
          type='button'
          disabled={loading ? loading === task.id : false}
          onClick={() => dispatch(deleteTask(task.id))}
        >
          {loading && loading === task.id && (<ButtonSpinner />)}
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;