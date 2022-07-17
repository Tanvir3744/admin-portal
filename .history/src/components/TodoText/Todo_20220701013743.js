import React from 'react';

const Todo = () => {
    const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    console.log('handleClick ', message);
  };
    return (
        <div >
            <div className='bg-dark'>
                <input name='task' type="text" placeholder="Type here" class="input w-full max-w-xs" />
                <button onChange={handleClick} className="btn btn-primary">enter task</button>
            </div>
        </div>
    );
};

export default Todo;