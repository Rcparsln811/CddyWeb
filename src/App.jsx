import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import { players } from './data.jsx'
import Oyuncu from './Oyuncu.jsx'
import './css/Player.css'


function App() {

  return (
    <div className='fullbody' >
      <Header />
      <div className='player-main'>
        {
          players?.map((player) => (
            <Oyuncu key={player.id} player={player} />


          ))
        }
      </div>

    </div >


  )
}

export default App
