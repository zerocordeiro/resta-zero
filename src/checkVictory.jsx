
function checkVictory(tabuleiroalt,contagem){
    let victorychecking=false;
    for(let posyn=0;posyn<(tabuleiroalt.length);posyn++){
      for(let posxn=0;posxn<(tabuleiroalt.length);posxn++){
        if(tabuleiroalt[posyn][posxn].clicked==true){
          victorychecking=true;
        }else{
          victorychecking=false;
          posxn=tabuleiroalt.length;
          posyn=tabuleiroalt.length;
        }
      }
    }
    
    if(victorychecking==true && typeof(contagem)=='number'){
        console.log('Congratulations! You used '+ (contagem+1) + ' clicks to make the board clear :)');
        alert('Congratulations! You used '+ (contagem+1) + ' moves to complete this puzzle!');
      }

    return(victorychecking);
}

export { checkVictory };