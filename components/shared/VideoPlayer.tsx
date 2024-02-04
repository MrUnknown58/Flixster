"use client";
// @ts-nocheck

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({
  videoDetails,
  type,
}: {
  videoDetails: string;
  type: string;
}) => {
  const videoInfo = JSON.parse(videoDetails);
  console.log("Logging videoInfo: >>>>>>>", videoInfo);
  const [src, setSrc] = useState(
    "https://b-g-eu-8.feetcdn.com:2223/v3-hls-playback/bf401b40369f957a567be4140c5208158545062ecdfbb850252a5ff3de8eb68474f89ffc4746c66707319f8fff9bfd32693baf24f015b700a092b80a13bf05dc0175bfdc70d36607a2b39ba23dd45817184407b874525a2c46a4f663a1d5f52ff145e1a96186b955c5e2f1a7e89131e982e884338e381514bcbb2301ae8043c2dbfc64e70ca723d6971508161d2aa41a4dad9e336505488544958fa7ad46b46f1d25415e2f0f8ce1a0d3315a0be2dd7f/playlist.m3u8"
  );
  useEffect(() => {
    if (type === "hls") setSrc(videoInfo?.stream?.playlist);
    else if (type === "file") {
      // console.log(
      //   Object.values(videoInfo?.stream?.qualities).slice(-1)[0]?.url
      // );
      // @ts-ignore
      setSrc(Object.values(videoInfo?.stream?.qualities)?.slice(-1)[0]?.url);
    } else
      setSrc(
        "https://b-g-eu-8.feetcdn.com:2223/v3-hls-playback/bf401b40369f957a567be4140c5208158545062ecdfbb850252a5ff3de8eb68474f89ffc4746c66707319f8fff9bfd32693baf24f015b700a092b80a13bf05dc0175bfdc70d36607a2b39ba23dd45817184407b874525a2c46a4f663a1d5f52ff145e1a96186b955c5e2f1a7e89131e982e884338e381514bcbb2301ae8043c2dbfc64e70ca723d6971508161d2aa41a4dad9e336505488544958fa7ad46b46f1d25415e2f0f8ce1a0d3315a0be2dd7f/playlist.m3u8"
      );
  }, [
    type,
    videoDetails,
    videoInfo?.stream?.playlist,
    videoInfo?.stream?.qualities,
  ]);
  // const src = videoInfo?.stream?.playlist;
  console.log(src);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (!video) return;

  //   video.controls = true;
  //   const defaultOptions = {};
  //   if (video.canPlayType("application/vnd.apple.mpegurl")) {
  //     // This will run in safari, where HLS is supported natively
  //     video.src = src;
  //   } else if (Hls.isSupported()) {
  //     // This will run in all other modern browsers

  //     const hls = new Hls();
  //     hls.loadSource(src);
  //     const player = new Plyr(video, defaultOptions);
  //     hls.attachMedia(video);
  //   } else {
  //     console.error(
  //       "This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API"
  //     );
  //   }
  // }, [src, videoRef]);
  return (
    <>
      {/* <video width="1080" height="720" controls preload="none" autoPlay>
        <source src={url} />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          // srclang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video> 
        <ReactPlayer
          url={''}
          controls={true}
          width={"100%"}
          height={"50rem"}
          playing={true}
          onBuffer={() => console.log("onBuffer")}
        />
      </div> */}
      {/* <video data-displaymaxtap ref={videoRef} />
      <style jsx>{`
        video {
          max-width: 100%;
        }
      `}</style> */}
      <div className="h-3/4 w-full">
        <ReactPlayer
          url={src}
          controls={true}
          width="100%"
          height="100%"
          playing={true}
          // config={{
          //   file: {
          //     hlsOptions: { autoStartLoad: true }, // if you want to start loading the video as soon as possible
          //     hlsVersion: "0.14.17", // if you need to specify a specific hls.js version
          //   },
          // }}
        />
      </div>
    </>
  );
};

export default VideoPlayer;
