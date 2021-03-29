import React, { useEffect } from 'react'
import './Todo.scss'
import TodoList from './TodoList';

function Todo({text, setText, todos, setTodos, setStatus, filteredTodos}) {
    useEffect(()=> {
        const input1 = document.querySelector('input')
        input1.focus(); 
    },[])
    const handeleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text1: text , completed: false, id: Math.random() * 1000} 
          ])
        setText('')
    }
    const handleFilter = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div className='form-container'>
            <form onSubmit={handeleSubmit}>
                <div>
                    <input className='input' type='text' value={text} onChange={e => setText(e.target.value)} required/>
                    <button type='submit' >+</button>
                </div>
                <div className='select'>
                    <select name='todos' onChange={handleFilter} className='filterTodos'>
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='uncompleted'>Uncompleted</option>
                    </select>
                </div>
            </form>
            <div id='div1'>
               <ul id='ul1'>
                    {
                        filteredTodos.map(todo => (
                        <TodoList
                             key={todo.id} 
                             todo={todo} 
                             todos={todos} 
                             setTodos={setTodos} 
                             text={todo.text1}
                        />))
                    }
               </ul>
            </div>
        </div>
    )
}

export default Todo
