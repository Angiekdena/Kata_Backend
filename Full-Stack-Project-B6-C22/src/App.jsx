import { useState } from 'react'
import informacionLogo from './assets/informacion.png'
import edificioLogo from '/edificio.jpg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fco.pinterest.com%2Fpin%2F536069161878250575%2F&psig=AOvVaw2FrfALHf8Q3pJE5qG03gWr&ust=1694273833482000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOiA6oGsm4EDFQAAAAAdAAAAABAE" target="_blank" rel="noreferrer">
          <img src={edificioLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.timetoast.com%2Ftimelines%2Fel-derecho-de-acceso-a-la-informacion-y-la-transparencia-9b0c7c41-f16c-473f-8985-7f2126656ed5&psig=AOvVaw2yR4lpEY1gw0CurWelpKGv&ust=1694274111810000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMic6Iatm4EDFQAAAAAdAAAAABAh" target="_blank" rel="noreferrer">
          <img src={informacionLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Todo a la Mano</h1>
      
    </>
  )
}

export default App
