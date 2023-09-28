import React from 'react'
import { useState, useEffect } from 'react'

import './App.css'

/*
Helloooo, and welcome to my little game!
This was done in about 5 days using Vite.js and the infinite combined knowledge and wisdom of some very nice people that post their problems, questions and solutions on the internet for us all to learn from their pain.
This is kind of my contribution so that you also can learn from my pains during the making of this game, even though this version is the "final" result, so you won't see a lot of messes explicitly. I do write about the reasons for some of my decisions and what trouble I had before deciding on using this variable for that or reusing part of the code or turning it into a function, etc, so take my word: this could be done in different ways, but this is one of the "good ones".

I don't have a good name for this puzzle game yet because I don't know how te "original" version of this is called (if anyone has ever bothered to give it a name), so for now it's "Resta-Zero" (Zero Remains). This is a kind of puzzle very commonly found in some adventure and exploring games, and I like them a lot, so now I can play it whenever I want. Hoooray! *self pats on shoulder*

If you're reading this you must be curious about how some stuff was made. Well... the code could be cleaner, but at least I put a lot of comments here and there. During development I put a lot of 'console.log's along the code but have decided to erase them for this "final" version. THey can be found in the github page for this project.

Some comments are a way for me to organize my thoughts while building this and others are so I can easily remeber what a specific part of code does. Sometimes variable inheritance gets confusing, so it's best to keep it clear, I guess.

I'm not the best at naming my functions and variables, but they should be pretty straightforward. Also, have I mentioned there's quite a bunch of comments? That should be handy.
You probably  already have the means to reach me, so get in touch.

Have fun!
José Cordeiro
@zerocordeiro
*/


function App() {

  const [contagem, setContagem] = useState(0);
  const [tabuleiro, setTabuleiro] = useState([]);
  const [firstTabuleiro, setFirstTabuleiro] = useState([]);
  const [gamesize, setGameSize] = useState();
  // const [victory,setVictory] = useState(false);
  // let victory = false;
  
  function checkVictory(tabuleiroalt){
    //goes through each row checking if all items are clicked. If it find one that isn't, will stop the loop as soon as it end the check by changing the value of the counters to the end condition
    // Was originally part of the code for changeButton, but as a separate function it's easier to use on different parts of the code, even though that means it has to recheck for the winning condition each time. But setting a separate variable to keep track of this wasn't really working, because it would reset each time the app reloaded and wouldn't let to show the "endgame" screen properly.
    let victorychecking=false;
    for(let posyn=0;posyn<(tabuleiroalt.length);posyn++){
      for(let posxn=0;posxn<(tabuleiroalt.length);posxn++){
        if(tabuleiroalt[posyn][posxn].clicked==true){
          // setVictory(true);
          victorychecking=true;
        }else{
          // setVictory(false);
          victorychecking=false;
          posxn=tabuleiroalt.length;
          posyn=tabuleiroalt.length;

        }
      }
    }
    return(victorychecking);
  }
  
  function ButtonOrBreak(uniqueElement,gameisfinished=false){ //returns the html elements to 'MakeArea' in order to correctly build the play area, by sending buttons to their respective rows and then a BreakRow when ending the lane.
  // console.log('running ButtonOrBreak');
  
    if(gameisfinished){
      if (uniqueElement == 'brbr'){
        // console.log('BR');
        return(<br/>);
      } else{
        let posx=uniqueElement.posx;
        let posy=uniqueElement.posy;
        let keystring=String(posx)+String(posy);
        let width_for_flex=0.9*((window.innerWidth)/(tabuleiro.length));
        if(window.innerHeight<window.innerWidth){width_for_flex=window.innerHeight/(tabuleiro.length);}
          width_for_flex*=0.9;
        return(
          <button style={{width:width_for_flex, maxWidth:width_for_flex,}} key={keystring} className='bluebutton shinybutton'></button>// 
        ); 
      }
    }


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
      
      let victory=checkVictory(tabuleiroalt);

      if(victory==true){
        
        console.log('Congratulations! You used '+ (contagem+1) + ' clicks to make the board clear :)');
        alert('Congratulations! You used '+ (contagem+1) + ' moves to complete this puzzle!');
        
      }
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
    if(tabuleiro==[]){
      return(
        <h1>Inicie o jogo</h1>
      );
    }
    if(checkVictory(tabuleiro)){
      return(
        <div>
          {tabuleiroBuilder() }
        </div>
        
      );
    }
    function tabuleiroBuilder(){
      let size_tabuleiro=(window.innerWidth);
      if(window.innerHeight<window.innerWidth){size_tabuleiro=window.innerHeight;}
      size_tabuleiro*=0.9;

      // console.log(victory);
      let doublearray=tabuleiro;

      if(doublearray.length==0){ // If the page does not have a board to show the size of the game area will shrink to pull the buttons to the top, making it easier to see and access them 
        size_tabuleiro=window.innerHeight*0.05;
      }
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
            ButtonOrBreak(element,checkVictory(tabuleiro)) //
          )
        )
        }
        </div>
      );
    }
    return(<>
      {tabuleiroBuilder()}
    </>)
  }



  function resizeTabuleiro(wd){
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
      setFirstTabuleiro(newtabuleiro);
      setContagem(0);

        //code bellow ('auto setter') makes automatic changes to the playing board so that each new board starts with a new random setup and is sure to have a solution.
        // If the boards were to be always changed from "all unchecked" to "all checked" not all board sizes would have a possible solution.
        // The way it's done now, the board is created "solved" and then some buttons are clicked, depending on the board size (code below), so it's made sure that all boards have a solution, as they were created "backwards"
        
        // AUTO SETTER
        let checkifmarked=[''];
        let maxstep=neww*neww-1;
        for(let step=0;step<maxstep;step++){
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
            // UNTESTED, UNPROVED conjecture: I believe this does not garantee that the puzzles will always be challenging, because it's possible that this random algorithm comes close to a solution to itsef (although unlikely or impossible that it will actually solve itself, especially in bigger sizes)
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
  }


  function newGameSize(form){
    form.preventDefault();
    //prevents reloading the whole page when getting data from the form
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
        placeholder='Size'
        value={gamesize}
        onChange={(e)=>{setGameSize(e.target.value)}}
        />
        <button className='setgame' type='submit'>Set game</button>
      </form>
      </div>
      </>
    );
  }
  
  function MyFooter(){
    return(
      <footer className='footer'>
        <p className='madeby'>Made by José Cordeiro (@zerocordeiro) &copy; 2023
        </p>
        <a href='https://www.linkedin.com/in/zerocordeiro/' target='newtab'>Linkedin</a>
        </footer>
    );
  }
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
      <br/>
      <MyFooter />
  </div>
  );
}



export default App


/*IDEAS:
- find out if there's an algorithm for solving this kind of puzzle that can be used to check for the least steps necessary to solve a specific configuration. Use this to set difficulty levels (pre-checking boards before they're rendered) and to show a goal for the player.
- make a way to save the current state of the board to keep playing after.
- make a way to save and export the current state of the board for sharing

*/