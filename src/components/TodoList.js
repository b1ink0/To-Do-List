import React from 'react'

function TodoList({text, todo, todos, setTodos}) {
    const handleDelete = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const handleComplete = () => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id){
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        )
    }
    return (
        <div className='todo'>
            <li className={`todo-list ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={handleComplete} className='completeBtn'>✓</button>
            <button onClick={handleDelete} className='trashBtn'>×</button>
        </div>
    )
}

export default TodoList
