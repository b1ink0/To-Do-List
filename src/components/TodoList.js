import React, {useEffect} from 'react'
import img1 from './img/delete.svg'
import img2 from './img/tic.svg'

function TodoList({text, todo, todos, setTodos, night}) {
    let TodoHeight;
    useEffect(()=>{
        handleTrash()
    },[])
    const handleTrash = () => {
        let trash = document.querySelector('.trash') || 0;
        setTodos(
            todos.filter(item => item.trash == false)
        )
    }
    const handleDelete = () => {  
        TodoHeight = document.getElementById(`${todo.id}`).offsetHeight;
        const hmm = document.getElementById(`${todo.id}`)
        hmm.style.margin = `${-TodoHeight*0.5}px`;
        setTodos(
            todos.map(item => {
                if (item.id === todo.id){
                    return {
                        ...item,
                        trash: !item.trash
                    }
                }
                return item;
            })
        )
        setTimeout(function() {
            setTodos(todos.filter((el) => el.id !== todo.id)) 
        },500)
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
        <div className={`${night ? "todoN" : "todo"} ${todo.trash ? "trash" : ''}`} id={todo.id}>
            <li className={`todo-list ${todo.completed ? "completed" : ""}`}><span>{text}</span></li>
            <button onClick={handleComplete} className={`${night ? "completeBtnN" : 'completeBtn'} ${todo.completed ? "completedBtn" : ""}`}><img src={img2}/></button>
            <button onClick={handleDelete} className={`${night ? "trashBtnN" : "trashBtn"}`}><img src={img1}/></button>
        </div>
    )
}

export default TodoList
