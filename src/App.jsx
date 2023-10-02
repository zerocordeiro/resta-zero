import React from 'react'
import { useState } from 'react'

function App() {
  const [counting, setCounting] = useState(0);
  const [buttoncolor,setButtonColor] = useState('blue');
  const [buttoncolorant,setButtonColorAnt] = useState(buttoncolor);
  
  function ButtonCreator(){ 
    function changeButton(){ 
      if(buttoncolor!='blue'){
        setButtonColor('blue');
      }else{setButtonColor('red');}
    }
    return(
      <button style={{width:200,height:200,backgroundColor:buttoncolor}} onClick={()=>changeButton()}>BUTTON</button>// 
    ); 
  }
  function checkChanges(){
    if(buttoncolorant!=buttoncolor){
      setCounting((n)=>n+1); 
      setButtonColorAnt(buttoncolor);
    }
  }

  function MakeArea(){
    return(<div className='gameArea' itemID='gameArea/'>{ButtonCreator()} </div> );
  }

  return (
  <div itemID='divapp'>
    <p className='cctext'>Click count: </p> <p className="cccount">{counting}</p>
    <MakeArea key='makearea' itemID='makearea' />
    {checkChanges()}
  </div>
  );
}

export default App
