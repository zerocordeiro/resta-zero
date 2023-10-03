function randomNumber(max,min){
    let numero=Math.floor(Math.random()*(max - min + 1)) + min;
    return( numero );
  }
export {randomNumber}