import React, { useEffect } from 'react'
import './Todo.scss'
import TodoList from './TodoList';
import NightMode from './img/moon1.svg'
import LightMode from './img/sun.svg'


function Todo({text, setText,
               todos, setTodos,
               status, setStatus,
               filteredTodos,
               night, setNight,
            }) {
    useEffect(()=> {
        const input1 = document.querySelector('input')
        input1.focus(); 
    },[])
    const handeleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text1: text , completed: false, trash: false, id: Math.random() * 1000} 
          ])
        setText('')
    }
    const handleFilter = (e) => {
        setStatus(e.target.value)
    }
    const handleNightBtn = () => {
        setNight(!night);
    }
    return (
        <div className='form-container'>
            <form onSubmit={handeleSubmit}>
                <h1 className='h1'>To-Do-List</h1>
                <button onClick={handleNightBtn} type='button' className={`${night ? "nightModeN" : "nightMode"}`}>
                    <img className={`${night ? "nightModeImgN" : "nightModeImg"}`} src={`${night ? LightMode : NightMode}`}/>
                </button>
                <div className={`${night ? "inputDivN" : "inputDiv"}`}>
                    <input placeholder='Add your new to-do...' className={`${night ? "inputN" : "input"}`} type='text' value={text} onChange={e => setText(e.target.value)} required/>
                    <button className={`${night ? "inputBtnN" : "inputBtn"}`} type='submit' ><span className='btnSpan1'></span><span className='btnSpan2'></span></button>
                </div>
                <div className={`${night ? "selectN1" : "select"}`}>
                    <h1>To-Do :  </h1>
                    <select name='todos' onChange={handleFilter} className={`${night ? "selectN" : "filteredTodos"}`}>
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='uncompleted'>Uncompleted</option>
                    </select>
                </div>
                <h1 className='h2'>List : {status}</h1>
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
                             night={night}
                        />))
                    }
               </ul>
            </div>
        </div>
    )
}

export default Todo
