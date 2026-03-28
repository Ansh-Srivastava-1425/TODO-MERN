import "./todo.css";
import React, { useState } from 'react';

const Todo = () => {
    const [Inputs, setInputs] = useState({ title: "", body: "" });

    const show = () => {
        document.getElementById("textarea").style.display = "block";
    }

    const change = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const submit = () => {
        console.log(Inputs);
    }

    return (
        <div className='todo'>
            <div className='todo-main container d-flex justify-content-center align-items-center flex-column'>
                <div className='d-flex flex-column todo-inputs-div w-50 p-1'>

                    <input
                        type="text"
                        placeholder="TITLE"
                        name="title"
                        value={Inputs.title}
                        className='my-2 todo-inputs'
                        onClick={show}
                        onChange={change}
                    />

                    <textarea
                        id="textarea"
                        placeholder="BODY"
                        name="body"
                        value={Inputs.body}
                        className='p-2 todo-inputs'
                        onChange={change}
                    />

                </div>

                <div className='w-50 my-3 d-flex justify-content-end'>
                    <button className='my-btn py-1 px-2' onClick={submit}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;