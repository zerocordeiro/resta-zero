function makeLongArray(matrixarray){
    let doublearray = matrixarray;
    let allelementsft = [];

    for(let i = 0; i<doublearray.length; i++){
      let singlearray=doublearray[i];
      for(let j=0; j<singlearray.length;j++){
        let posxnew_obj = j;
        let posynew_obj = i;
        let clickednew_obj = doublearray[i][j].clicked;
        allelementsft.push({posx:posxnew_obj,posy:posynew_obj,clicked:clickednew_obj}); 
      }
      allelementsft.push('brbr');
    }
    return(allelementsft);
  }
  export {makeLongArray};