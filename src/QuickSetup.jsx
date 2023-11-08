import { newTabuleiro } from "./NewTabuleiro"
import { randomNumber } from "./RandomNumber"

function QuickSetup({resetTabuleiroQuickSetup}){
    return(
        <button className='quicksetup' onClick={()=>resetTabuleiroQuickSetup((newTabuleiro(randomNumber(10,3))))}>
        Quick game
        </button>
    )
}

export {QuickSetup}