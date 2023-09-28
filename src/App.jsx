import React from 'react'
import { useState, useEffect } from 'react'

import './App.css'


function App() {

  const [contagem, setContagem] = useState(0);
  const [tabuleiro, setTabuleiro] = useState([]);
  const [gamesize, setGameSize] = useState();
  // const [victory,setVictory] = useState(false);
  let victory = false;
  

  
  function ButtonOrBreak(uniqueElement){ //returns the html elements to 'MakeArea' in order to correctly build the play area, by sending buttons to their respective rows and then a BreakRow when ending the lane.
  // console.log('running ButtonOrBreak');
  
    function changeButton(posy,posx){ //this is the function that will be called upon each button clicked in the 'tabuleiro' play area

      // console.log('function changeButton (posy, posx) = ' + posy + ' , ' + posx);
      let tabuleiroalt=tabuleiro;
      tabuleiroalt[posy][posx].clicked = !tabuleiroalt[posy][posx].clicked;    

      // Code below will make spaces adjacent to the one clicked on to also change
      // To make checks simpler and the code easier to visualize let's set four variables for the 4 possiblwe adjacent squares.
      let posybefore = posy-1;
      let posyafter = posy+1;
      let posxbefore = posx-1;
      let posxafter = posx+1;
      if(posybefore>=0){
        tabuleiroalt[posybefore][posx].clicked = !tabuleiroalt[posybefore][posx].clicked;
      }
      if(posyafter<tabuleiro[0].length){
        tabuleiroalt[posyafter][posx].clicked = !tabuleiroalt[posyafter][posx].clicked;
      }
      if(posxbefore>=0){
        tabuleiroalt[posy][posxbefore].clicked = !tabuleiroalt[posy][posxbefore].clicked;
      }
      if(posxafter<tabuleiro[0].length){
        tabuleiroalt[posy][posxafter].clicked = !tabuleiroalt[posy][posxafter].clicked;
      }
      // End of change to adjacent squares
      setContagem((n)=>n+1); //this is what makes the screen update with each click
      setTabuleiro[tabuleiroalt];

      //Checking for victory condition      
      //goes through each row checking if all items are clicked. If it find one that isn't, will stop the loop as soon as it end the check by changing the value of the counters to the end condition
      for(let posyn=0;posyn<(tabuleiroalt.length);posyn++){
        for(let posxn=0;posxn<(tabuleiroalt.length);posxn++){
          if(tabuleiroalt[posyn][posxn].clicked==true){
            // setVictory(true);
            victory=true;
          }else{
            // setVictory(false);
            victory=false;
            posxn=tabuleiroalt.length;
            posyn=tabuleiroalt.length;

          }
        }
      }
      if(victory==true){
        
        console.log('Congratulations! You used '+ (contagem+1) + ' clicks to make the board clear :)');
        alert('Congratulations! You used '+ (contagem+1) + ' moves to complete this puzzle!');
        
        // setTabuleiro(['victory']);
      }


      // End of check for victory condition
    } //end of changeButton
  
  if (uniqueElement == 'brbr'){
    // console.log('BR');
    return(<br/>);
  } else{
    let posx=uniqueElement.posx;
    let posy=uniqueElement.posy;
    let butcolor=uniqueElement.clicked?'bluebutton':'redbutton';
    let keystring=String(posx)+String(posy);
    let width_for_flex=0.9*((window.innerWidth)/(tabuleiro.length));
    if(window.innerHeight<window.innerWidth){width_for_flex=window.innerHeight/(tabuleiro.length);}
      width_for_flex*=0.9;
    return(
      <button style={{width:width_for_flex, maxWidth:width_for_flex,}} key={keystring} className={butcolor} onClick={()=>changeButton(posy,posx)}></button>// 
    ); 
  }
  
}


  function MakeArea(){ //gets 'tabuleiro' from main App
    //'doublearray' is a misleading name, because it's actually a multidimensional array. It was called double at the beginning because at first this code was tested with a [[a0,a1],[b0,b1]] array.
    
    // if(victoryMSG==false){return(
    //   <div>FIM</div>
    // );
        // const screencontent = document.window.getElementById('gameArea');
        // screencontent.style.backgroundColor="red";
    // }
    let size_tabuleiro=(window.innerWidth);
    if(window.innerHeight<window.innerWidth){size_tabuleiro=window.innerHeight;}
    size_tabuleiro*=0.9;
    console.log(victory);

      let doublearray=tabuleiro;
      // console.log('Running MakeArea')
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
          // creates objects that contain the position of each item in the original 'tabuleiro' array. This data will be used in the buttons to create an 'onClick' function that will change the state of each tile in 'tabuleiro'.
        }
        allelements.push('brbr');
      }
      // allelements.map((item,index)=>(console.log(index)));
      



        return(
          
          <div className='gameArea' itemID='gameArea' style={{width:size_tabuleiro,height:size_tabuleiro,}}>{
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
    // if(wd==tabuleiro.length){
    //   console.log('sem alteração');
    // }else{
      let neww=wd;
      let newh=neww;
      let newtabuleiro=[];
      for (let pos1=0;pos1<newh;pos1++){
        let newline=[];
        for (let pos2=0;pos2<neww;pos2++){
          newline.push({posx:pos2,posy:pos1,clicked:true});
        }
        newtabuleiro.push(newline);
      }
        setTabuleiro(newtabuleiro);
        setContagem(0);

        //code bellow ('auto setter') makes automatic changes to the playing board so that each new board starts with a new random setup and is sure to have a solution.
        // If the boards were to be always changed from "all unchecked" to "all checked" not all board sizes would have a possible solution.
        // The way it's done now, the board is created "solved" and then some buttons are clicked, depending on the board size (code below), so it's made sure that all boards have a solution, as they were created "backwards"

        // AUTO SETTER
        let checkifmarked=[''];
        for(let step=0;step<neww*neww;step++){
          // This will go through the board "clicking" squares at random to set a new challenge each time the board is reset. 
          //The number of steps is the same as the number of pieces in the board.
          let posyc = Math.floor(Math.random()*(neww - 1 + 1)) + 1 -1;
          let posxc = Math.floor(Math.random()*(neww - 1 + 1)) + 1 -1;

          //AUTO SETTER CHECK
          // these lines are meant to prevent the 'auto setter' from just cancelling any 'click' it already made (when testing without this check a lot of boards just came in already cleared). 
          if(checkifmarked.includes({posy:posyc,posx:posxc})){
            step--;
            checkifmarked.splice((checkifmarked.indexOf({posyc,posxc})),1);
            // by removing the coordinates from the 'checkifmarked' we allow them to be clicked on again. This isn't as optimized but is quite  easier than preventing the coordinate from being clicked on again.
            // This, along with the number of steps in this loop being equal to the number of available pieces in the board, makes so that ALL pieces will be 'clicked' on at random.
            // UNTESTED, UNPROVED conjecture: I believe this does not garantee that the puzzles will always be challenging, because it's possible that this random algorithm comes close to a solution to itsef (although unlikely or impossible that it will actually solve itself)
          }else{
            checkifmarked.push({posy:posyc,posx:posxc});
          } 
          // END OF AUTO SETTER CHECK.
          
        //basically had to repeat the content of changeButton function because couldn't call it here, for some reason. 
        // did some small changes just to accomodate variables names I was using and to make it easier to spot differences while reviewing
        //For now it's working, but TODO: optimize this to reduce code size. 
          let tabuleiroalt=newtabuleiro;
        tabuleiroalt[posyc][posxc].clicked = !tabuleiroalt[posyc][posxc].clicked;    
        let posybefore = posyc-1;
        let posyafter = posyc+1;
        let posxbefore = posxc-1;
        let posxafter = posxc+1;
        if(posybefore>=0){
          tabuleiroalt[posybefore][posxc].clicked = !tabuleiroalt[posybefore][posxc].clicked;
        }
        if(posyafter<tabuleiroalt[0].length){
          tabuleiroalt[posyafter][posxc].clicked = !tabuleiroalt[posyafter][posxc].clicked;
        }
        if(posxbefore>=0){
          tabuleiroalt[posyc][posxbefore].clicked = !tabuleiroalt[posyc][posxbefore].clicked;
        }
        if(posxafter<tabuleiroalt[0].length){
          tabuleiroalt[posyc][posxafter].clicked = !tabuleiroalt[posyc][posxafter].clicked;
        }//Here ends the code copied from changeButton

        }

    // }
  }


  function newGameSize(form){
    form.preventDefault();
    //prevents reloading the whole page when getting data from the form
    // if(!gamesize||gamesize<=0){
    //   return(document.getElementById('input-size').focus());
    // }else{
    //   resizeTabuleiro(gamesize);
    //   document.getElementById('input-size').focus();
    // }
    if(gamesize>15){setGameSize(15);
    }else if(gamesize<2){setGameSize(2);
    }else{
      resizeTabuleiro(gamesize);
    }
    

    
    document.getElementById('input-size').focus();
  }


  function CircleButton(){ 
    // name heralded from the beginning of this code
    function handleClick(msg='default'){
        let randomnumber = Math.floor(Math.random()*(10 - 3 + 1)) + 3;
        // Math.floor(Math.random()*(max - min + 1)) + min;
        resizeTabuleiro(randomnumber);
        // console.log(msg);
    }
    return(
      <>
        <button className='circlebutton' onClick={()=>handleClick('clicked')}>
      {/* need to pass the function instead of calling it directly or else it triggers as page loads*/}
        Quick setup
      </button>
      <div className='formcontainer'>
      <form onSubmit={newGameSize}>
        <input 
        id='input-size'
        type='number'
        placeholder='Set board size'
        value={gamesize}
        onChange={(e)=>{setGameSize(e.target.value)}}
        />
        <button className='setgame' type='submit'>Set game</button>
      </form>
      </div>
      
      
      </>
    );
  }
  
  
  // useEffect(
  //   ()=>{
  //     console.log('Effect');
  //     MakeArea();
  //   },[tabuleiro]
  // )

  return (
    
  <div itemID='divapp'>
    <h1 key="titlegame" className='ola'>Turn all buttons blue</h1>
    <p className='cctext'>Click count: </p> <p className="cccount">{contagem}</p>

    <MakeArea key='makearea' id='makearea' />
    {/* MakeArea builds the gameplay area from the original  "matrix" tabuleiro*/}
    <br/>
    {/* <CircleButton key="circbut"/> */}
    {CircleButton() } 
    {/* by calling CircleButton like this we prevent the input field bein out of focus every time because of the page loading */}
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


/*IDEAS:
- find out if there's an algorithm for solving this kind of puzzle that can be used to check for the least steps necessary to solve a specific configuration. Use this to set difficulty levels (pre-checking boards before they're rendered) and to show a goal for the player.
- make a way to save the current state of the board to keep playing after.
- make a way to save and export the current state of the board for sharing

*/