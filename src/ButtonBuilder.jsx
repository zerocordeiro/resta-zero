function ButtonBuilder({changeColorButtonBuilder,tabuleiroButtonBuilder,y,x}){
    let colorClass='';
    tabuleiroButtonBuilder[y][x].clicked?colorClass='bluebutton':colorClass='redbutton';
    let width_for_flex=((window.innerWidth)/(tabuleiroButtonBuilder.length));
    if(window.innerHeight<window.innerWidth){width_for_flex=window.innerHeight/(tabuleiroButtonBuilder.length);}
      width_for_flex*=0.8;
    if(x==0&&y!=0){
      return(
        <>
        <br />
        <button 
          style={{width:width_for_flex, maxWidth:width_for_flex,}}
          className={colorClass}
          onClick={()=>changeColorButtonBuilder(y,x)}
        ></button>
        </>
      );
    }
    return(
      <button 
      style={{width:width_for_flex, maxWidth:width_for_flex,}}
      className={colorClass}
      onClick={()=>changeColorButtonBuilder(y,x)}
      ></button>
    );
  }
  export {ButtonBuilder};