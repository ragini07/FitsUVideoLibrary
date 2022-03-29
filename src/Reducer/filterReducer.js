import { initialFilterState } from "../Utils/constants";

export const filterReducerFtn = (state , action) => {
    switch(action.type) {
        case "CATEGORY" :
            return {...state , category : action.payload }       
        case "CLEAR_FILTER" : 
            return initialFilterState
            
        default :
            return state
    }
}