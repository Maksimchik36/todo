import React from 'react';
import { useState } from 'react';

const TodoItem = ({ props, todoArr, setChec }) => {
  const [box, setBox] = useState(false);

  const onChange = e => {
    setBox(prev => !prev);
    const newArray = todoArr.map(el =>
      el.id === props.id ? (el.isDone = e.target.checked) : el.isDone
    );
    setChec(newArray);
  };

  return (
    <>
      <li id={props.id} style={{ display: 'flex', alignItems: 'baseline' }}>
        <div>
          <p className={box ? 'isDone' : null}>{props.text}</p>
        </div>
        <div>
          <input type="checkbox" checked={box} onChange={onChange} />
        </div>
      </li>
    </>
  );
};

export default TodoItem;
