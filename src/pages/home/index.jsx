import React, { useEffect, useState } from 'react'
import { Card } from '../../components/card'
import './style.css'

export function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({name: '' , avatar: '' })
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
  useEffect(() => {
    const urlGitHub = 'https://api.github.com/users/MicaelaPinheiroDS'
    fetch(urlGitHub).then(response => response.json().then (data =>{
      setUser(
        {
          name: data.name,
          avatar: data.avatar_url,
        }
      )
    }))
  }, [])
 

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        
        <div>
          <strong>{user.name}</strong>
          <img alt="img user" src={user.avatar} />
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