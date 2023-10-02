import React from 'react'
import { useState, useEffect } from 'react'

import './App.css'

import { checkVictory } from './checkVictory';
import { changeColor } from './changeColor';
import { MyFooter } from './MyFooter';
import { makeLongArray } from './MakeLongArray';
import { copyMultiArray } from './CopyMultiArray';

function ButtonBuilder({changeColorButtonBuilder,buttonclicked}){
  let colorbutton='red';
  buttonclicked?colorbutton='blue':colorbutton='red';
  return(
    <button  style={{backgroundColor:colorbutton}}
    onClick={()=>changeColorButtonBuilder(0,0)}
    >432345</button>
  );
}
  

function GameAreaBuilder({changeColorAreaBuilder,buttonclickedAreaBuilder}){
  return(
    <>
      <ButtonBuilder
            changeColorButtonBuilder={changeColorAreaBuilder} 
            buttonclicked={buttonclickedAreaBuilder}
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
      buttonclickedAreaBuilder={tabuleiro[0][0].clicked}
    />
    <br/>
      <br/>
      <MyFooter />
  </div>
  );
}



export default App
