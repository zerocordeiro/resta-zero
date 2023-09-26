import React from 'react'
import { useState } from 'react'

import './App.css'

var nomedosbotoes = 1;


function App() {

  const [tabuleiro, setTabuleiro] = useState([['a0','a1'],['b0','b1']]);

function ButtonOrBreak(uniqueElement){ //returns the html elements to 'MakeArea' in order to correctly build the play area, by sending buttons to their respective rows and then a BreakRow when ending the lane.
  console.log('running ButtonOrBreak');

  function changeButton(posy,posx){ //activated by clicking on the buttons of 'tabuleiro' play area
    console.log('function changeButton (posy, posx) = ' + posy + ' , ' + posx);
    let tabuleiroalt=tabuleiro;
    tabuleiroalt[posy][posx].clicked = !tabuleiroalt[posy][posx].clicked;
    setTabuleiro[tabuleiroalt];
    console.log('tabuleiro['+posy+']['+posx+'].clicked: ' + tabuleiro[posy][posx]['clicked'])   
    return(     
      MakeArea(tabuleiro)
      );
  }
  
  if (uniqueElement == 'brbr'){
    // console.log('BR');
    return(<br/>);
  } else{
    let posx=uniqueElement.posx;
    let posy=uniqueElement.posy;
    let butcolor=uniqueElement.clicked?'redbutton':'bluebutton';
    let keystring=String(posx)+String(posy);
    return(
      <button key={keystring} className={butcolor} onClick={()=>changeButton(posy,posx)}>{nomedosbotoes}</button>// 
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
  return(
    allelements.map( //obs: allelements is a linear array
      (element)=>(
        ButtonOrBreak(element) //
      )
    )
  );
}



  function resizeTabuleiro(wd){
    console.log('------------------------------------------'
    +'------------------------------'+
    '----------------------------------' + 
    'running resizeTabuleiro')
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
      nomedosbotoes++;
      console.log('newtabuleiro: ' + newtabuleiro + '----------------------------------- --------------------------------------------------- --------------------------------------------------- ---------------------------------------------------- ----------------------------------------------------------------------------------------------------------- -----------------------tabuleiro after setTabuleiro (l.111): '+ tabuleiro);
  }

  function CircleButton(){ // used during testing of this code.
    function handleClick(msg='default'){
        resizeTabuleiro(3);
        console.log(msg);
    }
    return(
      <button className='circlebutton' onClick={()=>handleClick('clicked')}>
      {/* need to pass the function instead of calling it directly or else it triggers as page loads*/}
        Play game
      </button>
    );
  }
  
  


  return (
  <div itemID='divapp'>
    <h1 key="gamearea" className='ola'>Hello</h1>
    <MakeArea />
    {/* MakeArea builds the gameplay area from the original  "matrix" tabuleiro*/}
    <br/>
    <CircleButton key="circbut"/>
    {/* CircleButton is just a normal button put here to test some things, like sending some console messages.
    It's currently beign used to try to edit the 'tabuleiro' array.
    Also used to check if the page is at least partically being build */}
    <button id="ver_tabuleiro" key="testbut" onClick={()=>(alert(
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
    {/* used to check value changes in the last row of the game board. Just to make sure that it's not getting 'undefined' instead of T or F*/}
      <br/>
      {JSON.stringify(tabuleiro)}
  </div>
  );
}



export default App
