export const filterByCategory = (videos , category) => {
    if(category)
         return videos.filter(video => video["category"]===category)
    return videos
  
}