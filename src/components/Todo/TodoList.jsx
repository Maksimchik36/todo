import React from 'react';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [value, setValue] = useState('');
  const [todoArr, setTodoArr] = useState([]);
  const [chec, setChec] = useState([]);
  const [finished, setFinished] = useState(0);

  const handleClick = () => {
    const todo = {};

    todo.id = Math.random();
    todo.text = value;
    todo.isDone = false;

    setTodoArr(prev => [...prev, todo]);

    setValue('');
  };

  useEffect(() => {
    setFinished(chec.reduce((acc, el) => (el === true ? acc + 1 : acc), 0));
  }, [chec]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div style={{ margin: 20 }}>
        <button type="button" onClick={handleClick} disabled={!value.trim()}>
          Add
        </button>
      </div>
      <div style={{ display: 'flex' }}>
        <p></p>
        <p>All : {todoArr.length}</p>
        <p>Finished : {finished}</p>
        <p>Unfinish : {todoArr.length - finished}</p>
      </div>
      <div style={{ backgroundColor: 'teal', width: '300px', height: '300px' }}>
        <ul>
          {todoArr.map(item => (
            <TodoItem
              key={item.id}
              props={item}
              todoArr={todoArr}
              setChec={setChec}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
