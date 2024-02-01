"use server";

import { providers } from "@/web-providers";
interface VideoDetails {
  media: {
    type: "movie";
    title: string;
    releaseYear: number;
    tmdbId: string;
  };
}
export const getVideoDetails = async ({ media }: VideoDetails) => {
  // const output = await providers.runAll({
  //   media: {
  //     type: media.type,
  //     title: media.title,
  //     releaseYear: media.releaseYear,
  //     tmdbId: media.tmdbId,
  //   },
  // });
  const output = await providers.runAll({
    media: {
      type: "movie",
      title: "Animal",
      releaseYear: 2023,
      tmdbId: "781732",
    },
  });
  if (!output) console.log("no output");

  // @ts-ignore
  // const qualities = output?.stream?.qualities;
  // const video = Object.values(qualities);
  const type = output?.stream?.type;
  console.log("type:  ", type);

  return { videoDetails: output, type };
};
