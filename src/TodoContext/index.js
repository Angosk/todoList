import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext()

function TodoProvider(props) {
    const {
        item: tasks,
        saveItem: saveTasks,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])
    const [search, setSearch] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const completedTasks = tasks.filter(task => task.completed).length //# verify how it works (!!)
    const totalTasks = tasks.length

    let searchedTasks = []
    if (!search.length >= 1) {
        searchedTasks = tasks
    } else {
        searchedTasks = tasks.filter(task => {
            const taskText = task.text.toLowerCase()
            const searchText = search.toLowerCase()
            return taskText.includes(searchText) //# it require the return because is a function
        })
    }

    const taskAdd = (text) => {
        const newTask = [...tasks]
        newTask.push({
            completed: false,
            text
        })
        saveTasks(newTask)
    }
    const taskDone = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text)
        const newTask = [...tasks]
        newTask[taskIndex].completed = !newTask[taskIndex].completed
        saveTasks(newTask)
    }

    const taskFinished = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text)
        const newTask = [...tasks]
        newTask.splice(taskIndex, 1)
        saveTasks(newTask)
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTasks,
            completedTasks,
            search,
            setSearch,
            searchedTasks,
            taskAdd,
            taskDone,
            taskFinished,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}