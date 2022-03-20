import React from 'react'

export const TodoList = (taskList, setTaskList) => {
  return (
    <div className="todoList">
        <div className="todos">
            {taskList.map(task => (
            <div className="todo">
                <div className="todoText">
                    <span>プログラミング</span>
                </div>
                <div className="icons">
                    <button>チェック</button>
                    <button>ゴミ箱</button>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
