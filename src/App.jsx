import React from 'react'
import { useState } from 'react'

function App() {
  const [counting, setCounting] = useState(0);
  const [buttoncolor,setButtonColor] = useState('blue');  

  function checkChanges(){
    setCounting((n)=>n+1); 
  }
  function changeButton(){ 
    if(buttoncolor!='blue'){
      setButtonColor('blue');
    }else{setButtonColor('red');}
  }

  function changeButtonExtra(){
    checkChanges();
    changeButton();
  }
  function ButtonCreator(){ 

    return(
      <button style={{width:200,height:200,backgroundColor:buttoncolor}} onClick={()=>changeButtonExtra()}>BUTTON</button>// 
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
