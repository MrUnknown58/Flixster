import VideoPlayer from "@/components/shared/VideoPlayer";
import { getMovieInfo } from "@/lib/actions/browse.action";
import { convertTMDBtoMedia } from "@/lib/utils";
import React from "react";

const StreamMovies = async ({ params }: any) => {
  console.log(params);
  const movieInfo = await getMovieInfo(params.id, "movie");
  console.log(movieInfo);
  const media = convertTMDBtoMedia(movieInfo, "movie");

  const videoDetails = await fetch(
    `${process.env.NEXT_SERVER_API_URL}/api/example`,
    {
      method: "POST",
      body: JSON.stringify({ media }),
      cache: "no-cache",
    }
  ).then((res) => res.json());
  console.log(videoDetails);
  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            <h1>Search</h1>
            {videoDetails.videoDetails && (
              <VideoPlayer
                type={videoDetails.type}
                videoDetails={JSON.stringify(videoDetails.videoDetails)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StreamMovies;
