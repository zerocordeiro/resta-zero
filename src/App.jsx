import React from 'react'
import { useState, useEffect } from 'react'

import './App.css'

import { checkVictory } from './checkVictory';
import { changeColor } from './changeColor';
import { MyFooter } from './MyFooter';
import { copyMultiArray } from './CopyMultiArray';
import { ButtonBuilder } from './ButtonBuilder';
import { GameAreaBuilder } from './GameAreaBuilder';
import { randomNumber } from './RandomNumber'; 
import { QuickSetup } from './QuickSetup';
import { NewGameSize } from './NewGameSize';








function App() {

  const [contagem, setContagem] = useState(0);
  const [tabuleiro, setTabuleiro] = useState([]);
  const [firstTabuleiro, setFirstTabuleiro] = useState([]);
  const [gamesize, setGameSize] = useState();

function clickedOnPosition(y,x){
  setTabuleiro(changeColor(tabuleiro,y,x));
  setContagem((n)=>n+1);
}
function resetTabuleiro(newtabuleiro){
  setTabuleiro(newtabuleiro);
  setContagem(0);
}
function resetGameSize(newgamesize){
  setGameSize(newgamesize);
}


  return ( //from App.
  <div itemID='divapp'>
    <h1 key="titlegame" className='ola'>Turn all buttons blue</h1>
    <p className='cctext'>Click count: </p> <p className="cccount">{contagem}</p><br/>

    <GameAreaBuilder 
      changeColorAreaBuilder={clickedOnPosition}
      tabuleiroAreaBuilder={tabuleiro}
      contagemAreaBuilder={contagem}
    />
    <br/>
    <QuickSetup 
      resetTabuleiroQuickSetup={resetTabuleiro}
    />
    <NewGameSize
      resettabuleiroNewGameSize={resetTabuleiro}
      gamesizeNewGameSize={gamesize}
      setGameSizeNewGameSize={resetGameSize}
    />
      <br/>
      <MyFooter />
      <div style={{position:'absolute',top:0,right:0,textAlign:'right', color:'rgba(120,120,120,0.3)',fontSize:14}}>
        V.0.23111081909
      </div>
  </div>
  );
}



export default App
