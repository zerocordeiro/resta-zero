import React from 'react'
import { useState } from 'react'

// import './App.css'



function App() {

  const [counting, setCounting] = useState(0);
  const [buttoncolor,setButtonColor] = useState('blue');
  
  function ButtonCreator(){ 
    function changeButton(){ 
      if(buttoncolor!='blue'){
        setButtonColor('blue');
      }else{setButtonColor('red');}
      setCounting((n)=>n+1); 
    }
    return(
      <button style={{width:200,height:200,backgroundColor:buttoncolor}} onClick={()=>changeButton()}>BUTTON</button>// 
    ); 
  }

  function MakeArea(){
    return(<div className='gameArea' itemID='gameArea/'>{ButtonCreator()} </div> );
    }

  return (
  <div itemID='divapp'>
    <p className='cctext'>Click count: </p> <p className="cccount">{counting}</p>
    <MakeArea key='makearea' itemID='makearea' />
  </div>
  );
}



export default App
