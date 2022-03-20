import React from 'react'

export const InputForm = () => {

    const handleSubmit = (e) => {
        console.log("a");
        e.preventDefault();
    }
  return (
    <div className="inputForm">
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>
            <i className="fa-solid fa-plus"></i>
            </button>
        </form>
    </div>
  )
}
