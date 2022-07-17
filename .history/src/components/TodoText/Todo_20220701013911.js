import React, { useState } from 'react';

const Todo = () => {
    const [task, setTask] = useState('');
  const handleChange = event => {
    setTask(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    console.log('handleClick ', task);
  };
    return (
        <div >
            <div className='bg-dark'>
                <input name='task' onChange={handleChange} type="text" placeholder="Type here" class="input w-full max-w-xs" />
                <button onClick={handleClick} className="btn btn-primary">enter task</button>
            </div>
        </div>
    );
};

export default Todo;