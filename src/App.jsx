import React from 'react'
import { useState , useEffect } from 'react'

function App() {
  const [counting, setCounting] = useState(0);
  const [buttoncolor,setButtonColor] = useState(['blue']);  


  useEffect(()=> {
    setCounting((n)=>n+1); 
  },[buttoncolor]);

  function changeButton(){ 
    if(buttoncolor[0]!=['blue']){
      setButtonColor(['blue']);
    }else{setButtonColor(['red']);}
    console.log(buttoncolor[0]);
  }

  function ButtonCreator(){ 

    return(
      <button style={{width:200,height:200,backgroundColor:buttoncolor[0]}} onClick={()=>changeButton()}>BUTTON</button>// 
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
