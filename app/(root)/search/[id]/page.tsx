// import { getVideoDetails } from "@/lib/actions/video.action";
import { SearchParamsProps } from "@/types";
import React from "react";

const SearchPlayer = async ({ searchParams }: SearchParamsProps) => {
  const searchDetails = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchParams.q}`
  );
  const searchDetailsJson = await searchDetails.json();
  console.log("Logging search results  >>>>>", searchDetailsJson?.results[0]);
  console.log(+searchDetailsJson?.results[0]?.release_date?.split("-")[0]);
  // const videoDetails = await getVideoDetails({
  //   media: {
  //     type: "movie",
  //     title: searchDetailsJson?.results[0]?.title,
  //     releaseYear: +searchDetailsJson?.results[0]?.release_date?.split("-")[0],
  //     tmdbId: searchDetailsJson?.results[0]?.id,
  //   },
  // });

  // @ts-ignore
  // const videoUrl = videoDetails.video[0].url;
  // console.log(videoUrl);
  return <></>;
};

export default SearchPlayer;
