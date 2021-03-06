import React ,{ useState, useEffect } from 'react'
import './App.scss';
import Todo from './components/Todo';

function App() {
  const [text, setText] = useState('') //for text
  const [todos, setTodos] = useState([]) // where main todos stored
  const [status, setStatus] = useState('all') // in which seate in it
  const [night, setNight] = useState(false)
  const [filteredTodos, setFilteredTodos] = useState([]) // for storing filtered ones
  useEffect(()=>{
    getLocalN()
    getLocalTodos()
  },[])
  useEffect(()=>{
    filterHandler()
    saveLocalN()
    saveLocalTodos()
  },[todos, status, night])
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  } 
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null ){
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  const saveLocalN = () => {
    localStorage.setItem('night', JSON.stringify(night))
  }
  const getLocalN = () => {
    if (localStorage.getItem('night') === null ){
      localStorage.setItem('night', JSON.stringify())
    } else {
      let localN = JSON.parse(localStorage.getItem('night'))
      setNight(localN)
    }
  }
  return (
    <div className={`${night ? "AppN" : "App"}`}>
      <Todo
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos} 
        status={status} 
        setStatus={setStatus} 
        todos={todos} 
        setTodos={setTodos} 
        text={text} 
        setText={setText}
        night={night}
        setNight={setNight}
      />
    </div>
  );
}

export default App;