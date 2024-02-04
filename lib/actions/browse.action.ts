export const browseCollection = async (query: string) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;

  try {
    const response = await fetchData(url);
    const movieInfo = response?.results?.filter(
      (item: any) =>
        (item.media_type === "movie" || item.media_type === "tv") && item.id
    );
    return movieInfo;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieInfo = async (id: string, type: string) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.NEXT_TMDB_API_READ_ACCESS_TOKEN}&language=en-US&append_to_response=videos,images,credits`;

  try {
    const response = await fetchData(url);
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchData = async (url: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_TMDB_API_READ_ACCESS_TOKEN}`,
    },
  };
  return await fetch(url, options)
    .then((response) => response.json())
    .then((data) => data);
};
