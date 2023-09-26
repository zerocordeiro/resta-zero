import React from 'react'
import { useState, useEffect } from 'react'

import './App.css'




function App() {
  const [contagem, setContagem] = useState(0);
  const [tabuleiro, setTabuleiro] = useState([]);
  const [gamesize, setGameSize] = useState();

  function CheckButton(){
    return(
      <button id="ver_tabuleiro" class="ver-tabuleiro" key="testbut" onClick={()=>(alert(
        '0:' +
        tabuleiro[0][0].clicked+ ' , ' + 
        tabuleiro[0][1].clicked+ ' , ' + 
        tabuleiro[0][2].clicked+ ' , ' + 
        // tabuleiro[0][3].clicked+ ' , ' + 
        // tabuleiro[0][4].clicked+ ' , ' + 
        '\r\n' +
        '2: ' +
        tabuleiro[2][0]['clicked']+ ' , ' + 
        tabuleiro[2][1]['clicked']+ ' , ' + 
        tabuleiro[2][2]['clicked']+ ' , ' + 
        // tabuleiro[2][3]['clicked']+ ' , ' + 
        // tabuleiro[2][4]['clicked']+ ' , ' +
        '\r\n' 
        // + '4: ' +
        // tabuleiro[4][0]['clicked']+ ' , ' + 
        // tabuleiro[4][1]['clicked']+ ' , ' + 
        // tabuleiro[4][2]['clicked']+ ' , ' + 
        // tabuleiro[4][3]['clicked']+ ' , ' + 
        // tabuleiro[4][4]['clicked']+ ' , ' 
        ))}>Ver <br/> valor nas <br/> linhas <br/> 0 e -1.</button>
      /* used to check value changes in the last row of the game board. Just to make sure that it's not getting 'undefined' instead of T or F*/
    );
  }

  function ButtonOrBreak(uniqueElement){ //returns the html elements to 'MakeArea' in order to correctly build the play area, by sending buttons to their respective rows and then a BreakRow when ending the lane.
  console.log('running ButtonOrBreak');

  function changeButton(posy,posx){ //activated by clicking on the buttons of 'tabuleiro' play area
    console.log('function changeButton (posy, posx) = ' + posy + ' , ' + posx);
    let tabuleiroalt=tabuleiro;
    tabuleiroalt[posy][posx].clicked = !tabuleiroalt[posy][posx].clicked;
    // setTabuleiro[''];
    // console.log('zerou tabuleiro');
    setContagem((n)=>n+1);
    setTabuleiro[tabuleiroalt];
    // console.log('tabuleiro['+posy+']['+posx+'].clicked: ' + tabuleiro[posy][posx]['clicked'])
    // return(     
    //   MakeArea()
    //   );
  }
  
  if (uniqueElement == 'brbr'){
    // console.log('BR');
    return(<br/>);
  } else{
    let posx=uniqueElement.posx;
    let posy=uniqueElement.posy;
    let butcolor=uniqueElement.clicked?'redbutton':'bluebutton';
    let keystring=String(posx)+String(posy);
    let width_for_flex=window.innerWidth/(tabuleiro.length*1.1);
    return(
      <button style={{border:'4px solid black',minWidth:width_for_flex,}} key={keystring} className={butcolor} onClick={()=>changeButton(posy,posx)}></button>// 
    ); 
  }
  
}


function MakeArea(){ //gets 'tabuleiro' from main App
  //'doublearray' is a misleading name, because it's actually a multidimensional array. It was called double at the beginning because at first this code was tested with a [[a0,a1],[b0,b1]] array.

    let doublearray=tabuleiro;
    console.log('Running MakeArea')
    let allelements = []; //sets new empty array to use in for loop
    let controlobject = {}; //sets net object for parameter control (defining what matrix cell each button stands for)
    // console.log('allelements: '+ allelements + '.');
    for(let i = 0; i<doublearray.length; i++){
      let singlearray=doublearray[i];
      // console.log('singlearray: '+singlearray +'. length: ' + singlearray.length);
      for(let j=0; j<singlearray.length;j++){
        // console.log('In MakeArea. posx:' + i + ', posy:' +j);
        controlobject.posx = j;
        controlobject.posy = i;
        controlobject.clicked = doublearray[i][j].clicked;

        allelements.push({posx:controlobject.posx,posy:controlobject.posy,clicked:controlobject.clicked}); 
        // creates an object that pulls the position of each item in the original 'tabuleiro' array. This data will be used in the buttons to create an 'onClick' function that will change the state of each tile in 'tabueiro'.
      }
      allelements.push('brbr');
    }
    allelements.map((item,index)=>(console.log(index)));
    return(
      <div className='gameArea'>{
        allelements.map( //obs: allelements is a linear array
        (element)=>(
          ButtonOrBreak(element) //
        )
      )
      }
        
      </div>
      
    );

}



  function resizeTabuleiro(wd){
    console.log('------------------------------------------'
    +'------------------------------'+
    '----------------------------------' + 
    'running resizeTabuleiro')
    if(wd==tabuleiro.length){
      console.log('sem alteração');
    }else{
    let neww=wd;
    let newh=neww;
    let newtabuleiro=[];
    for (let pos1=0;pos1<newh;pos1++){
      let newline=[];
      for (let pos2=0;pos2<neww;pos2++){
        newline.push({posx:pos2,posy:pos1,clicked:false});
      }
      newtabuleiro.push(newline);
    }
      setTabuleiro(newtabuleiro);
    }
  }
  function setNewGameSize(form){
    form.preventDefault();
    //prevents reloading the whole page from getting data from the form
    if(!gamesize){
      return(document.getElementById('input-size').focus());
    }else{
      resizeTabuleiro(gamesize);
      document.getElementById('input-size').focus();
    }
  }
  function CircleButton(){ // used during testing of this code.
    function handleClick(msg='default'){
        resizeTabuleiro(3);
        console.log(msg);
    }
    return(
      <>
      <form onSubmit={setNewGameSize}>
        <input 
        id='input-size'
        type='number'
        placeholder='Set board size'
        value={gamesize}
        onChange={(e)=>{setGameSize(e.target.value)}}
        />
        <button className='setgame' type='submit'>Set game</button>
      </form>
      <button className='circlebutton' onClick={()=>handleClick('clicked')}>
      {/* need to pass the function instead of calling it directly or else it triggers as page loads*/}
        Play game
      </button>
      </>
    );
  }
  
  
  useEffect(
    ()=>{
      console.log('Effect');
      MakeArea();
    },[tabuleiro]
  )

  return (
  <div itemID='divapp'>
    <h1 key="gamearea" className='ola'>Hello</h1>
    <p>Número de jogadas: {contagem}</p>
    <MakeArea />
    {/* MakeArea builds the gameplay area from the original  "matrix" tabuleiro*/}
    <br/>
    <CircleButton key="circbut"/>
    {/* CircleButton is just a normal button put here to test some things, like sending some console messages.
    It's currently beign used to try to edit the 'tabuleiro' array.
    Also used to check if the page is at least partically being build */}
    {/* <CheckButton /> */}
      <br/>
      {/* {JSON.stringify(tabuleiro)} */}
      {/* THis JSON is just to see the changes in the 'tabuleiro' array values*/}
  </div>
  );
}



export default App
