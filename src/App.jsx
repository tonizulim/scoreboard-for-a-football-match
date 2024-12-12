import { useState } from 'react'
import './App.css'

import Sat from './components/sat'

import hajduk_logo from './hajduk.png'
import dinamo_logo from './din.jpg'

const CurrentDate=new Date();

function App() {

  return (
    <>
      <div id="mai">
        <div id="date">
        <h1>{CurrentDate.getDate()}.{CurrentDate.getMonth()+1}.{CurrentDate.getFullYear()}</h1>
        </div>
        <div id="logo">
          <div id="hajduk" className="klub">
            <img src={hajduk_logo} alt="hajduk_grb" height="170" ></img>
            <h1>Hajduk</h1>
          </div>

          <div id="dinamo" className="klub">
            <img src={dinamo_logo} alt="hajduk_grb" height="170" style={{ borderRadius: '50%' }}></img>
            <h1>Dinamo</h1>
          </div>

        </div>

        <div id="stats">

          <Sat></Sat>
        
        </div>

      </div>
    </>
  )
}

export default App
