import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {completedTasks,totalTasks} = useContext(TodoContext)
  return (
    <div className='containerHeader'>
      <h2>Pending Tasks : {totalTasks} </h2>
      <h2 className="TodoCounter">Tasks completed : {completedTasks}</h2>
    </div>
  );
}

export { TodoCounter };