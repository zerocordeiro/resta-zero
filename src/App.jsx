import React from 'react'
import { useState, useEffect } from 'react'

import './App.css'

import { checkVictory } from './checkVictory';
import { changeColor } from './changeColor';
import { MyFooter } from './MyFooter';
import { makeLongArray } from './MakeLongArray';
import { copyMultiArray } from './CopyMultiArray';

function ButtonBuilder({changeColorButtonBuilder}){
  let colorbutton='blue';
  return(
    <button  style={{backgroundColor:{colorbutton}}}
    onClick={()=>changeColorButtonBuilder(0,0)}
    >432345</button>
  );
}
  

function GameAreaBuilder({changeColorAreaBuilder}){
  return(
    <>
      <ButtonBuilder
            changeColorButtonBuilder={changeColorAreaBuilder} 
      />
    </>
    
  );
}


function App() {

  const [contagem, setContagem] = useState(0);
  const [tabuleiro, setTabuleiro] = useState([[{clicked:false},{clicked:false}],[{clicked:false},{clicked:false}]]);
  const [firstTabuleiro, setFirstTabuleiro] = useState([]);
  const [gamesize, setGameSize] = useState();
  // let allelements = [];

function clickedOnPosition(y=0,x=0){
  let tabuleironew=copyMultiArray(tabuleiro);
  tabuleironew[y][x].clicked=!tabuleironew[y][x].clicked;
  setTabuleiro(tabuleironew);
  setContagem((n)=>n+1);
  console.log('clicou');
}


  return ( //from App.
  <div itemID='divapp'>
    <h1 key="titlegame" className='ola'>Turn all buttons blue</h1>
    <p className='cctext'>Click count: </p> <p className="cccount">{contagem}</p>

    <GameAreaBuilder 
      changeColorAreaBuilder={clickedOnPosition}
    />
    <br/>
      <br/>
      <MyFooter />
  </div>
  );
}



export default App
