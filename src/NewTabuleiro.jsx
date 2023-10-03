import { autoSetter } from "./AutoSetter";
import { changeColor } from "./changeColor";

function newTabuleiro(size){
    let neww=size;
    let newh=neww;
    let newtabuleiroNT=[];
    for (let pos1=0;pos1<newh;pos1++){
        let newline=[];
        for (let pos2=0;pos2<neww;pos2++){
        newline.push({clicked:true,posx:pos2,posy:pos1});
        }
        newtabuleiroNT.push(newline);
    }
    // newtabuleiro=autoSetter({newtabuleiro});

//AUTO SETTER
let tabuleiroClicked=newtabuleiroNT;
    // console.log('tabuleiroClicked: ' + JSON.stringify(tabuleiroClicked));
    let checkifmarked=[''];
    let maxstep=tabuleiroClicked.length;
    for(let step=0;step<maxstep;step++){
        let posyc = Math.floor(Math.random()*(tabuleiroClicked.length - 1 + 1)) + 1 -1;
        let posxc = Math.floor(Math.random()*(tabuleiroClicked.length - 1 + 1)) + 1 -1;

        if(checkifmarked.includes({posy:posyc,posx:posxc})){
        step--;
        checkifmarked.splice((checkifmarked.indexOf({posyc,posxc})),1);
        }else{
        checkifmarked.push({posy:posyc,posx:posxc});
        }
        
        tabuleiroClicked = changeColor(tabuleiroClicked,posyc,posxc);
    }

//end of autosetter



return(newtabuleiroNT);  
}
export {newTabuleiro}