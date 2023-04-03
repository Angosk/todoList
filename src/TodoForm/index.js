import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm () {
    const [newTaskValue, setNewTaskValue] = useState('')

    const {
        taskAdd,
        setOpenModal
    }= useContext(TodoContext)

    const onCancel = () => {
        setOpenModal()
    }

    const onSubmit = (event) => {
        event.preventDefault()
        taskAdd(newTaskValue)
        setOpenModal()
    }

    const onChange = (event) => {
        setNewTaskValue(event.target.value)
    }

    return(
        <form
            className="container"
            onSubmit={onSubmit}
            >
            <div className="boxContainer">
                <label className="textBox">Add a new Task</label>
                <textarea
                    value={newTaskValue}
                    onChange={onChange}
                    placeholder="Type Here"
                />
                <div className="boxButton">
                    <button
                        className="buttonCancel"
                        type="button"
                        onClick={onCancel}
                        >
                        Cancel
                    </button>
                    <button
                        className="buttonSubmit"
                        type="submit">
                        Add
                    </button>
                </div>
            </div>
            
        </form>
    )
}
export { TodoForm }