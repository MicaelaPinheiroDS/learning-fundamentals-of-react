import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home/index'
import './styles/global.css'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
