import { useState } from "react";

import { newTabuleiro } from "./NewTabuleiro";


function NewGameSize({resettabuleiroNewGameSize, gamesizeNewGameSize, setGameSizeNewGameSize}){
    function NewSizeFromForm(form){
        form.preventDefault();
    //prevents reloading the whole page when getting data from the form
    if(gamesizeNewGameSize>15){setGameSizeNewGameSize(15);
    }else if(gamesizeNewGameSize<2){setGameSizeNewGameSize(2);
    }else{
        resettabuleiroNewGameSize( newTabuleiro(gamesizeNewGameSize) );
    }
    }

    return(
        <div className='formcontainer'>
            <form onSubmit={NewSizeFromForm}>
            <input 
            id='input-size'
            type='number'
            placeholder='2 - 15'
            value={gamesizeNewGameSize}
            onChange={(e)=>{setGameSizeNewGameSize(e.target.value)}}
            />
            <button className='setgame' type='submit'>Set game</button>
            </form>
        </div>
    );
}

export {NewGameSize};