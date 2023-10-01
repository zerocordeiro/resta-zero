function changeColor(tabuleiroccolor,posy,posx){
    let tabuleiroalt=tabuleiroccolor;
    tabuleiroalt[posy][posx].clicked = !tabuleiroalt[posy][posx].clicked;    

    let posybefore = posy-1;
    let posyafter = posy+1;
    let posxbefore = posx-1;
    let posxafter = posx+1;
    if(posybefore>=0){
      tabuleiroalt[posybefore][posx].clicked = !tabuleiroalt[posybefore][posx].clicked;
    }
    if(posyafter<tabuleiroalt[0].length){
      tabuleiroalt[posyafter][posx].clicked = !tabuleiroalt[posyafter][posx].clicked;
    }
    if(posxbefore>=0){
      tabuleiroalt[posy][posxbefore].clicked = !tabuleiroalt[posy][posxbefore].clicked;
    }
    if(posxafter<tabuleiroalt[0].length){
      tabuleiroalt[posy][posxafter].clicked = !tabuleiroalt[posy][posxafter].clicked;
    }
    return(tabuleiroalt);
}

// testing
// let tabuleiroccolor = [[{clicked:false}]];
// let posy=0;
// let posx=0;
// changeColor(tabuleiroccolor,posy,posx);
// check testing
// console.log(JSON.stringify(changeColor(tabuleiroccolor,posy,posx)));

export {changeColor};