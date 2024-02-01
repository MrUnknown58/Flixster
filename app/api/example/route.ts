import { providers } from "@/web-providers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  // const media = {
  //   type: "movie",
  //   title: "Hamilton",
  //   releaseYear: 2020,
  //   tmdbId: "556574",
  // };
  // {
  //   type: "movie",
  //   title: "Animal",
  //   releaseYear: 2023,
  //   tmdbId: "781732",
  // },
  // {
  //   title: show.name,
  //   poster: getMediaPoster(show.poster_path),
  //   id: show.id,
  //   original_release_year: new Date(show.first_air_date).getFullYear(),
  //   object_type: mediatype,
  // };
  // {
  //   title: media.title,
  //   id: media.id.toString(),
  //   year: media.original_release_year ?? 0,
  //   poster: media.poster,
  //   type,
  // };

  // const output = await providers.runAll({
  //   media: {
  //     type: "movie",
  //     title: "Animal",
  //     releaseYear: 2023,
  //     tmdbId: "781732",
  //   },
  //   sourceOrder: ["flixhq"],
  // });
  // console.log(output);

  const { media } = await req.json();
  console.log(media);
  console.log("Came inside API route");
  const output = await providers.runAll({
    media: {
      type: media.type,
      title: media.title,
      releaseYear: media.year,
      tmdbId: media.tmdbId,
    },
    sourceOrder: ["flixhq"],
  });
  // @ts-ignore
  // const qualities = output?.stream?.qualities;
  // const video = Object.values(qualities);
  // console.log(video);
  const sources = await providers.listSources();
  // const embedScrapers = providers.listEmbeds();
  console.log(sources);
  // console.log(embedScrapers);
  // return NextResponse.json({ videoDetails: output, qualities, video });
  // return NextResponse.json({ response: "hello" });
  return NextResponse.json({
    videoDetails: output,
    type: output?.stream?.type,
  });
};
