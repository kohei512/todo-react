import React from 'react'

export const InputForm = () => {

    const handleSubmit = () => {
        console.log("a")
    }
  return (
    <div className="inputForm">
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>
            <i class="fa-solid fa-plus"></i>
            </button>
        </form>
    </div>
  )
}
