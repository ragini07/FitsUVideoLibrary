import axios from 'axios'

export const isInHistory = (history , video) => {
    return history.some(el => el._id === video._id)
}

export const isInLikedVideos = (likedVideos , video) => {
    return likedVideos.some(el => el._id === video._id)
}
export const isInWatchLater = (watchlater , video) => {
    return watchlater.some(el => el._id === video._id)
}

export const addToHistory = async (dispatchUserData , token , video) => {
    try {
       const {data , status} = await axios.post('/api/user/history',{
            video
        },{
            headers : {
                authorization : token
            }
        })
        if(status === 200 || status === 201)
          dispatchUserData({type : "ADD_TO_HISTORY" , payload : video})
    }catch(error){
        console.log(error)
    }
}
export const removeFromHistory = async(dispatchUserData , token , video) => {
    try{
       const {data , status } = await axios.delete(`/api/user/history/${video._id}`,{
            headers : {
                authorization : token
            }
        })
        if(status === 200){
            dispatchUserData({type : "REMOVE_FROM_HISTORY" , payload : video})
        }
    }catch(error){
        console.log(error)
    }
}
export const clearHistory = async(dispatchUserData , token) => {
    try{
       const {data , status } = await axios.delete(`/api/user/history/all`,{
            headers : {
                authorization : token
            }
        })
        if(status === 200){
            dispatchUserData({type : "CLEAR_HISTORY"})
        }
    }catch(error){
        console.log(error)
    }
}
export const addToLikedVideos = async (dispatchUserData , token , video) => {
    try {
       const {data , status} = await axios.post('/api/user/likes',{
            video
        },{
            headers : {
                authorization : token
            }
        })
        console.log("add to liked videos" , data , status)
        if(status === 200 || status === 201)
          dispatchUserData({type : "ADD_TO_LIKED_VIDEOS" , payload : video})
    }catch(error){
        console.log(error)
    }
}
export const removeFromLikedVideos = async(dispatchUserData , token , video) => {
    try{
       const {data , status } = await axios.delete(`/api/user/likes/${video._id}`,{
            headers : {
                authorization : token
            }
        })
        console.log("remove from liked videos" , data , status)
        if(status === 200){
            dispatchUserData({type : "REMOVE_FROM_LIKED_VIDEOS" , payload : video})
        }
    }catch(error){
        console.log(error)
    }
}
export const addToWatchLater = async (dispatchUserData , token , video) => {
    try {
       const {data , status} = await axios.post('/api/user/watchlater',{
            video
        },{
            headers : {
                authorization : token
            }
        })
        console.log("add to watch later" , data , status)
        if(status === 200 || status === 201)
          dispatchUserData({type : "ADD_TO_WATCH_LATER" , payload : video})
    }catch(error){
        console.log(error)
    }
}
export const removeFromWatchLater = async(dispatchUserData , token , video) => {
    try{
       const {data , status } = await axios.delete(`/api/user/watchlater/${video._id}`,{
            headers : {
                authorization : token
            }
        })
        console.log("remove from watch later" , data , status)
        if(status === 200){
            dispatchUserData({type : "REMOVE_FROM_WATCH_LATER" , payload : video})
        }
    }catch(error){
        console.log(error)
    }
}