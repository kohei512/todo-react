import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputText);

        setTaskList([
            ...taskList,
            {
                text: inputText
            }
        ]);
        // console.log(taskList);
    }

    const handleChange = (e) => {
        setInputText(e.target.value);
        // console.log(inputText);

    }

    return (
    <div className="inputForm">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button>
            <i className="fa-solid fa-plus"></i>
            </button>
        </form>
    </div>
  )
}
