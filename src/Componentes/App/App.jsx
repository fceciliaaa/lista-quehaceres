import { useState } from 'react'
import './App.css'
import Lista from '../Lista/Lista'


const App = () => {

  const [toDoList, setToDoList] = useState([
    { tarea: 'Planchar', completado: false },
    { tarea: 'Barrer', completado: false },
    { tarea: 'Sacar la basura', completado: false },

  ])

  return (
    <>
      <Lista toDoList={toDoList} setToDoList={setToDoList} />
    </>
  )
}


export default App
