import React from 'react'

export const InputForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleChange = (e) => {
        var inputText = e.target.value;

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
