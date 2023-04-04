import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from "../TodoForm";
import { Modal } from '../Modal';
import imageNoTask from '../assets/imageNoTask.png'
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
        {loading &&
            <div className="loadingSkeleton">
                <div className="background"> Loading...</div>
            </div>
        }
        {(!loading && !searchedTasks.length) &&
            <div className="containerNoTask">
                <h2 className="hederNoTask">Improve your day, create your first task!</h2>
                <img
                    className="imageNoTask"
                    src={imageNoTask}
                    alt="image for invite a create a task" />
            </div>}
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