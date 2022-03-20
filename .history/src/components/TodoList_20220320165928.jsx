import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {

  const handleDelete = (id) => {
      setTaskList(taskList.filter((task) => task.id !== id));

  }
  return (
    <div className="todoList">
        <div className="todos">
            {taskList.map((task,index) => (
            <div className="todo completed" key={index}>
                <div className="todoText">
                    <span>{task.text}</span>
                </div>
                <div className="icons">
                    <button>チェック</button>
                    <button onClick={() => handleDelete(task.id)}>ゴミ箱</button>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
