import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Todo from './components/Todo'
import Update from './components/update'
import CreateTodo from './components/Create'




function App() {
  const [count, setCount] = useState(0)
 

  return (
   
 <Routes>
  <Route path='/' element={<Todo/>}/>
  <Route path='/update' element={<Update/>}/>
  <Route path='/create' element={<CreateTodo/>}/>
  
 </Routes>

  )
}

export default App
