function ButtonVictory({tabuleiroButtonVictory,y,x}){
    let width_for_flex=0.9*((window.innerWidth)/(tabuleiroButtonVictory.length));
    if(window.innerHeight<window.innerWidth){width_for_flex=window.innerHeight/(tabuleiroButtonVictory.length);}
      width_for_flex*=0.9;
    if(x==0&&y!=0){
      return(
        <>
        <br />
        <button 
          style={{width:width_for_flex, maxWidth:width_for_flex,}}
          className='bluebutton shinybutton'
        
        ></button>
        </>
      );
    }
    return(
      <button 
      style={{width:width_for_flex, maxWidth:width_for_flex,}}
      className='bluebutton shinybutton'
      ></button>
    );
  }
  export {ButtonVictory};