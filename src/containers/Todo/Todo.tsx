import { useState } from 'react';

const Todo = () => {
  const [task, setTask] = useState('');

  return (
    <div className='container mt-3'>
      <form className='row g-3'>
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
          <button type='submit' className='btn btn-primary mb-3'>Add task</button>
        </div>
      </form>

      <div className='w-50'>
        <div className="card">
          <div className='card-body d-flex justify-content-between'>
            <div className="form-check my-auto">
              <input className="form-check-input" type="checkbox" id="taskCheckbox" />
              <label className="form-check-label" htmlFor="taskCheckbox">
                Task 1
              </label>
            </div>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;