import {BUY_CAKE} from './cakeTypes'

const initialSTate = {
    numOfCakes: 100
}



const cakeReducer = (state=initialSTate,action)=>{

    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes:state.numOfCakes-1
        }
   
        default: return state
    }
}

export default cakeReducer