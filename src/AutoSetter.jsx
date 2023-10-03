import { useState } from "react";
import { copyMultiArray } from "./CopyMultiArray";
import { changeColor } from "./changeColor";
//Couldn't make this work.
//Instead had to use almost the exact code in the NewTabuleiro function

function autoSetter(tabuleiroAutoSetter){
//     let tabuleiroClicked=tabuleiroAutoSetter;
//     let checkifmarked=[''];
//     let maxstep=tabuleiroClicked.length;
//     for(let step=0;step<maxstep;step++){
//         let posyc = Math.floor(Math.random()*(tabuleiroClicked.length - 1 + 1)) + 1 -1;
//         let posxc = Math.floor(Math.random()*(tabuleiroClicked.length - 1 + 1)) + 1 -1;

//         if(checkifmarked.includes({posy:posyc,posx:posxc})){
//         step--;
//         checkifmarked.splice((checkifmarked.indexOf({posyc,posxc})),1);
//         }else{
//         checkifmarked.push({posy:posyc,posx:posxc});
//         }
        
//         tabuleiroClicked = changeColor(tabuleiroClicked,posyc,posxc);
//     }
//     return(tabuleiroClicked);
}
export  {autoSetter}