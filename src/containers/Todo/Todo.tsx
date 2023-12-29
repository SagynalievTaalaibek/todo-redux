import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTask, sendTask } from '../../store/taskThunks';
import { selectFetchLoading, selectTask } from '../../store/taskSlice';
import { useSelector } from 'react-redux';
import TaskCard from '../../components/TaskCard/TaskCard';
import Spinner from '../../components/Spinner/Spinner';

const Todo = () => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState('');
  const tasks = useAppSelector(selectTask);
  const loading = useSelector(selectFetchLoading);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(sendTask(task));
    setTask('');
  };

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  return (
    <div className='container mt-3'>
      <form className='row g-3' onSubmit={onSubmit}>
        <div className='col-auto'>
          <label htmlFor='task' className='visually-hidden'>Task</label>
          <input
            type='task'
            className='form-control'
            id='task'
            placeholder='Task'
            required
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
        </div>
        <div className='col-auto'>
          <button type='submit' className='btn btn-primary mb-3' disabled={loading}>Add task</button>
        </div>
      </form>
      <h5 className='mb-3'>My tasks:</h5>
      <div className='w-50'>
        {loading ? (<Spinner/>) : tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Todo;