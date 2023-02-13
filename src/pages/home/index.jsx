import React, { useState } from 'react'
import { Card } from '../../components/card'
import './style.css'

export function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])
  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString(
        ['pt-BR'], 
        {
          hour: '2-digit', 
          minute: '2-digit',
          second: '2-digit'
        }
      )
    }
    setStudents(prevState => [...prevState, newStudent])
  }
 

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        
        <div>
          <strong>Micaela Pinherio</strong>
          <img alt="img user" src="https://github.com/MicaelaPinheiroDS.png" />
        </div>
        
      </header>
      <input type='text' 
      placeholder='Digite o nome...'
      onChange={event => setStudentName(event.target.value)}
      ></input>
      <button type='button' onClick={handleAddStudent}>Adicionar</button>
      
      {
        students.map(student => <Card key= {student.time} name={student.name} time={student.time} />)
      }
    
    </div>

  )
}