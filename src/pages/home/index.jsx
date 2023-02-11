import React, { useState } from 'react'
import { Card } from '../../components/card'
import './style.css'

export function Home() {
  const [studentName, setStudentName] = useState()

  const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

  return (
    <div className='container'>
      <h1>Nome..: {studentName}</h1>
      <input type="text" 
      placeholder="Digite o nome..."
      onChange={e => setStudentName(e.target.value)}
      ></input>
      <button>Adicionar</button>
      <Card name="Micaela" time={timeNow} />
    </div>

  )
}