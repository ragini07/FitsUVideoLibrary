import { initialFilterState } from "../Utils";

export const filterReducerFtn = (state , action) => {
    switch(action.type) {
        case "CATEGORY" :
            return {...state , category : action.payload }     
        case "FILTER_BY_SEARCH" : 
            return {...state , searchQuery :  action.payload}    
        case "CLEAR_FILTER" : 
            return initialFilterState
        default :
            return state
    }
}