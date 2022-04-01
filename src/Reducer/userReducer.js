import {initialUserDataState} from '../Utils/constants'

export const userReducerFtn = (state , action) => {
    switch(action.type){
        case "ADD_TO_HISTORY" :  {
            return {...state , history : [ ...state.history , {...action.payload}]}
        }                
        case "REMOVE_FROM_HISTORY" : {
            return { ...state , history : state.history.filter(el => el._id !== action.payload._id) }
        }
        case "CLEAR_HISTORY" : {
            return { ...state , history : [] }
        }
        case "ADD_TO_LIKED_VIDEOS" : {
            return {...state , likedVideos : [...state.likedVideos , {...action.payload}]}
        }
        case "REMOVE_FROM_LIKED_VIDEOS" : {
            return {...state , likedVideos : state.likedVideos.filter(el => el._id !== action.payload._id)}
        }
        case "ADD_TO_WATCH_LATER" : {
            return {...state , watchlater : [...state.watchlater , {...action.payload}]}
        }
        case "REMOVE_FROM_WATCH_LATER" : {
            return {...state , watchlater : state.watchlater.filter(el => el._id !== action.payload._id)}
        }
        case "SET_CART" : {
            return {...state , cart : [...action.payload]}
        }
        case "SET_WISHLIST" : {
            return {...state , wishlist : [...action.payload]}
        }
        case "CLEAR_USER_DATA" : {
            return initialUserDataState
        }
      
        default:
            break;
    }
}
