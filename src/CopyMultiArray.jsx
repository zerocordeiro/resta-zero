function copyMultiArray(originalarray){
    let copiedarray=[];
    
    for(let y=0;y<originalarray.length;y++){
        let copiedrow=[];
        for(let x=0;x<originalarray[y].length;x++){
            copiedrow.push(originalarray[y][x]);
        }
        copiedarray.push(copiedrow);
    }
    return(copiedarray);
}

export {copyMultiArray};