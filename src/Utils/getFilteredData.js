export const filterByCategory = (videos, category) => {
  if (category) return videos.filter((video) => video["category"] === category);
  return videos;
};

export const filterBySearchQuery = (filteredVideosByCategory, searchQuery) => {
  if (searchQuery)
    return filteredVideosByCategory.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return filteredVideosByCategory;
};

export const filterBySort = (filteredVideosBySearchQuery, sortBy) => {
  if (sortBy && sortBy === "Newest First")
    return [...filteredVideosBySearchQuery].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy && sortBy === "Oldest First")
    return [...filteredVideosBySearchQuery].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  return filteredVideosBySearchQuery;
};
