import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import { players } from './data.jsx'
import Oyuncu from './Oyuncu.jsx'


function App() {

  return (
    <div>
      <Header />
      {
        players?.map((player) => (
          <Oyuncu key={player.id} player={player} />


        ))
      }

    </div >


  )
}

export default App
