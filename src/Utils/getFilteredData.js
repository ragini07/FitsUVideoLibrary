export const filterByCategory = (videos , category) => {
    if(category)
         return videos.filter(video => video["category"]===category)
    return videos
  
}

export const filterBySearchQuery = (filteredVideosByCategory, searchQuery) => {
    if (searchQuery)
      return filteredVideosByCategory.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return filteredVideosByCategory;
  };