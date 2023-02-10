import { Card } from '../../components/card'
import './style.css'

export function Home() {
  const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..."></input>
      <button>Adicionar</button>
      <Card name="Micaela" time={timeNow} />
    </div>

  )
}