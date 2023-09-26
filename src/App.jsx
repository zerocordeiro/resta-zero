import React from 'react'
import { useState } from 'react'

import './App.css'


var nomedosbotoes = 1;

function App() {


function ButtonTile(){
  return(
    <button key={uniqueElement.index} className={uniqueElement.index}>{uniqueElement}</button>
  );
}

function changeButton(posx,posy){ //activated by clicking on the buttons of 'tabuleiro' play area
  console.log('function changeButton (posx, posy) = ' + posx + ' , ' + posy);
  let tabuleiroalt=tabuleiro;
  return(console.log('nada')
  );
}

function ButtonOrBreak(uniqueElement){ //returns the html elements to 'MakeArea' in order to correctly build the play area, by sending buttons to their respective rows and then a BreakRow when ending the lane.
  console.log('running ButtonOrBreak');
  if (uniqueElement == 'brbr'){
    console.log('BR');
    return(<br/>);
  } else{
    let posx=uniqueElement.posx;
    console.log(uniqueElement.posx);
    let posy=uniqueElement.posy;
    let butcolor=uniqueElement.value?'redbutton':'bluebutton';
    // console.log('Not BR. uniqueElement: '+ uniqueElement);
    return(
      <button className='butcolor' onClick={()=>changeButton(posx,posy)}>{nomedosbotoes}</button> //TODO: get data from the element passed down from 'MakeArea' and use it as parameters for a function that will be activated 'onClick' to change the state of 'tabuleiro'. 
    ); //have already set a way to define the button color. Now need to make it change with the click of the button
  }
  
}

function MakeArea(doublearray){ //gets 'tabuleiro' from main App
  //'doublearray' is a misleading name, because it's actually a multidimensional array. It was called double at the beginning because at first this code was tested with a [[a0,a1],[b0,b1]] array.
  // console.log('In MakeArea -> doublearray: ' + doublearray + '. length:' + doublearray.length)
  let allelements = []; //sets new empty array to use in for loop
  let controlobject = {}; //sets net object for parameter control (defining what matrix cell each button stands for)
  // console.log('allelements: '+ allelements + '.');
  for(let i = 0; i<doublearray.length; i++){
    let singlearray=doublearray[i];
    // console.log('singlearray: '+singlearray +'. length: ' + singlearray.length);
    for(let j=0; j<singlearray.length;j++){
      console.log('In MakeArea. posx:' + i + ', posy:' +j);
      controlobject.posx = j;
      controlobject.posy = i;
      controlobject.value = doublearray[j][i].value;
      console.log('controlobject{posx:' + controlobject.posx+', posy:' + controlobject.posy+'}');
      allelements.push({posx:controlobject.posx,posy:controlobject.posy,value:controlobject.value}); // creates an object that pulls the position of each item in the original 'tabuleiro' array. This data will be used in the buttons to create an 'onClick' function that will change the state of each tile in 'tabueiro'.
    }
    // singlearray.map(
    //   item=>(allelements.push(item))
    // );
    // console.log('after mapping: allelements: '+allelements);
    allelements.push('brbr');
    // console.log('allelements pushed "brbr"')
    // console.log('allelements after brbr:'+ allelements+ '. length: ' + allelements.length);

  }
  return(
    allelements.map( //obs: allelements is a linear array
      (element)=>(
        // <button>{element}</button>
        ButtonOrBreak(element) //
      )
    )
  );
}


  const [tabuleiro, setTabuleiro] = useState([['a0','a1'],['b0','b1']]);

  function resizeTabuleiro(wd){
    console.log('------------------------------------------'
    +'------------------------------'+
    '----------------------------------' + 
    'running resizeTabuleiro')
    let counterresizetab = 0;
    let neww=wd;
    let newh=neww;
    let newtabuleiro=[];
    for (let line=0;line<newh;line++){
      let newline=[];
      for (let column=0;column<neww;column++){
        var objecttabuleiro = {};
        var objecttabuleiro = {
          posx:column,
          posy:line,
          value:false,
        };
        // console.log('objecttabuleiro['+ objecttabuleiro.posy + ']['+objecttabuleiro.posx+']. objecttabuleiro: '+ objecttabuleiro,);
        newline.push({objecttabuleiro});
        if (column==0){console.log('column ==0' + objecttabuleiro);}
      }
      counterresizetab++;
      newtabuleiro.push(newline);
      // console.log('newtabuleiro after push(newline): ' +newtabuleiro);
    }
    // console.log(' newtabuleiro.length = ' + newtabuleiro.length);
    // setTabuleiro(['a','a','a','a','a'],['a','a','a','a','a'],['a','a','a','a','a']);
    // setTabuleiro((tabuleiro)=> (tabuleiro.push(newtabuleiro)));
    // setTabuleiro([]);
    // setTabuleiro([['a0','a1'],['b0','b1'],['c0','c1']]);
    // alert('tabuleiro pos troca: ' + tabuleiro);
    //   let sizetab = 4;
    //   let differenttabuleiro = [];
    //   let newlinetabuleiro = [];
    //   for(let i =0; i< sizetab; i++){
    //     for(let j=0;j<sizetab;j++){
    //       newlinetabuleiro.push('');
    //     }
    //     differenttabuleiro.push(newlinetabuleiro);
    //     // alert(newline);
    //   }
    //   alert('differenttabuleiro: ' + differenttabuleiro)
    //   alert('tabuleiro: '+tabuleiro+ ' <br/> agora vai trocar');
      
    //   setTabuleiro(differenttabuleiro);
    //   alert('novo tabuleiro: '+ tabuleiro);

      setTabuleiro(newtabuleiro);
      nomedosbotoes++;
      console.log('newtabuleiro: ' + newtabuleiro + '----------------------------------- --------------------------------------------------- --------------------------------------------------- ---------------------------------------------------- ----------------------------------------------------------------------------------------------------------- -----------------------tabuleiro after setTabuleiro (l.111): '+ tabuleiro);
  }

  function CircleButton(){ // used during testing of this code.
    function handleClick(msg='default'){
        // setTabuleiro([['a0','a1','a2'],['b0','b1','b2'],['c0','c1','c2']]);
        // setTabuleiro([['a0','a1'],['b0','b1'],['c0','c1']]);
        resizeTabuleiro(5);
        console.log(msg);
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
    <h1 key="gamearea" className='ola'>olá, mundo</h1>
    {MakeArea(tabuleiro)}
    {/* MakeArea builds the gameplay area from the original  "matrix" tabuleiro*/}
    <br/>
    <CircleButton key="circbut"/>
    {/* CIrcleButton is just a normal button put here to test some things, like sending some console messages.
    It's currently beign used to try to edit the 'tabuleiro' array.
    Also used to check if the page is at least partically being build */}
    <button key="testbut" onClick={()=>(alert(tabuleiro))}>Ver tabuleiro</button>
    {/* used just to see what's stored in the 'tabuleiro' array */}
      
  </div>
  );
}



export default App
