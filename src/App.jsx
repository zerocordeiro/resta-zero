import React from 'react'
import { useState } from 'react'

import './App.css'





function ButtonOrBreak(uniqueElement){
  if (uniqueElement == 'brbr'){
    return(<br/>);
  }
  return(
    <button key={uniqueElement.index} className={uniqueElement.index}>{uniqueElement}</button>
  );
}

function MakeArea(doublearray){
  let allelements = [];
  for(let i = 0; i<doublearray.length; i++){
    let singlearray=doublearray[i];
    singlearray.map(
      tile=>(allelements.push(tile))
    );
    allelements.push('brbr');
  }
  return(
    allelements.map(
      (element)=>(
        // <button>{element}</button>
        ButtonOrBreak(element) //
      )
    )
  )
}


function App() {
  const [tabuleiro, setTabuleiro] = useState([['a0','a1'],['b0','b1']]);

  function resizeTabuleiro(wd){
    let width=wd;
    let height=width;
    let newtabuleiro=Array();
    let newline=Array();
    for (let line=0;line<height;line++){
      for (let column=0;column<width;column++){
        const objecttabuleiro = {
          posx:column,
          posy:line,
          value:'teste',
        }
        newline.push(objecttabuleiro);
      }
      newtabuleiro.push(newline);
    }
    alert(newtabuleiro.entries);
    // setTabuleiro(['a','a','a','a','a'],['a','a','a','a','a'],['a','a','a','a','a']);
    // setTabuleiro((tabuleiro)=> (tabuleiro.push(newtabuleiro)));
    setTabuleiro([]);
    setTabuleiro([['a0','a1'],['b0','b1'],['c0','c1']])
  }

  function CircleButton(){
    function handleClick(msg='default'){
        // setTabuleiro([['a0','a1','a2'],['b0','b1','b2'],['c0','c1','c2']]);
        // setTabuleiro([['a0','a1'],['b0','b1'],['c0','c1']]);
        resizeTabuleiro(4);
        alert(msg);
    }
    return(
      <button className='circlebutton' onClick={()=>handleClick('clicked')}>
      {/* need to pass the function instead of calling it directly or else it triggers as page loads*/}
        Circle button
      </button>
    );
  }

  // const [tabuleiro, setTabuleiro] = useState([Array(3).fill([Array(3).fill('a')])]);
  // const [tabuleiro, setTabuleiro] = useState([Array(3).fill(['a','a','a'])]);
  // setTabuleiro([Array(3).fill(['item','item','item'])]);
  // const [tabuleiro, setTabuleiro] = useState([['a0','a1','a2'],['b0','b1','b2'],['c0','c1','c2']]);
  // const [tabuleiro, setTabuleiro] = useState([]);
  // setTabuleiro([['a0','a1','a2'],['b0','b1','b2'],['c0','c1','c2']]);
  // let tabuleiro = [['a0','a1'],['b0','b1']];
  
  return (
  <div itemID='divapp'>
    <h1 className='ola'>olá, mundo</h1>
    {MakeArea(tabuleiro)}
    <br/>
    <CircleButton />
      
  </div>
  );
}



export default App
