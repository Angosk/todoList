import React, { useContext, useState } from 'react';
import {TodoContext} from '../TodoContext'
import './TodoSearch.css';

function TodoSearch() {
  const {search, setSearch} = useContext(TodoContext)
  const searching = (event) => {
    setSearch(event.target.value)
    console.log(event.target.value)
  }

  return (
    <>
      <input
      className="TodoSearch"
      placeholder="Search"
      onChange={searching}
    />
    </>
  );
}

export { TodoSearch };
