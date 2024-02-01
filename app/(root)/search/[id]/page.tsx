import VideoPlayer from "@/components/shared/VideoPlayer";
// import { getVideoDetails } from "@/lib/actions/video.action";
import { SearchParamsProps } from "@/types";
import React from "react";

const SearchPlayer = async ({ searchParams }: SearchParamsProps) => {
  const searchDetails = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchParams.q}&api_key=6449600bc907edb730bac53dfb0d5236`
  );
  const searchDetailsJson = await searchDetails.json();
  console.log("Logging search results  >>>>>", searchDetailsJson?.results[0]);
  // const videoUrl =
  //   "https://in1-as2-01.shegu.net/vip/p1/movie_mp4_h264/2020/2/9/27769/movie.27769.2020.360p.H264.20200703064504.mp4?KEY1=R-MbE4aiLMeVKtmRqGvksQ&KEY2=1706621803";
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
