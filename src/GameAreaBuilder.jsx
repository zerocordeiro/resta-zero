import { ButtonBuilder } from "./ButtonBuilder";
import { checkVictory } from "./checkVictory";
import { ButtonVictory } from "./ButtonVictory";

function GameAreaBuilder({changeColorAreaBuilder,tabuleiroAreaBuilder,contagemAreaBuilder}){
    let size_tabuleiro=(window.innerWidth);
    if(window.innerHeight<window.innerWidth){size_tabuleiro=window.innerHeight;}
        size_tabuleiro*=0.9;

    if(tabuleiroAreaBuilder.length==0){
      return(
        <h1 className='startgame'>Start a quick game or choose your board size.</h1>
      );
    }else if(checkVictory(tabuleiroAreaBuilder,contagemAreaBuilder)){
        return(
            <div className='gameArea' itemID='gameArea' style={{width:size_tabuleiro,height:size_tabuleiro,}}>{tabuleiroAreaBuilder.map(element=>element.map(singleobject=>(
                <ButtonVictory
                    tabuleiroButtonVictory={tabuleiroAreaBuilder}
                    y={singleobject.posy}
                    x={singleobject.posx}
                />
            ))
            )}
            </div>
        );
    }else{
    return(
        <div className='gameArea' itemID='gameArea' style={{width:size_tabuleiro,height:size_tabuleiro,}}>{tabuleiroAreaBuilder.map(element=>element.map(singleobject=>(
                <ButtonBuilder
                    changeColorButtonBuilder={changeColorAreaBuilder} 
                    tabuleiroButtonBuilder={tabuleiroAreaBuilder}
                    y={singleobject.posy}
                    x={singleobject.posx}
                />
            ))
        )}

      </div>
      
    );
}
  }
export {GameAreaBuilder}