import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from "../TodoForm";
import { Modal } from '../Modal';
import './AppUI.css';

function AppUI() {
    const {
        error,
        loading,
        searchedTasks,
        taskFinished,
        taskDone,
        openModal,
        setOpenModal
    } = useContext(TodoContext)
    return (
    <div className='mainContainer'>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
        {error && <p>Something is wrong, Reload...</p>}
        {loading && <p>Loading yours tasks...</p>}
        {(!loading && !searchedTasks.length) && <p>Create your first task!</p>}
            {searchedTasks.map(task => (
                <TodoItem
                    key={task.text}
                    text={task.text}
                    completed={task.completed}
                    onDone={() => taskDone(task.text)}
                    onFinish={() => taskFinished(task.text)}
                />
            ))}
        </TodoList>
        {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}
        <CreateTodoButton
            setOpenModal={setOpenModal}
        />
    </div>
    );
}
export { AppUI };