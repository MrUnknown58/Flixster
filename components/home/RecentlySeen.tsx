"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";
import { Link } from "lucide-react";

const movieInfo = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    year: 1974,
    rating: 9,
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    rating: 9,
  },
  {
    id: 5,
    title: "Superman",
    year: 1978,
    rating: 7.3,
  },
];
const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    {/* <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    /> */}
    <p>{title}</p>
  </div>
);

// {
//   adult: false,
//   backdrop_path: null,
//   id: 1149117,
//   title: 'Animal',
//   original_language: 'en',
//   original_title: 'Animal',
//   overview: 'A young boy on the edge retaliates against his cruel school bully. This film presents a complex character study of the bully, consumed by grief and a tumultuous relationship with his mother.',
//   poster_path: null,
//   media_type: 'movie',
//   genre_ids: [],
//   popularity: 0.948,
//   release_date: '2023-07-14',
//   video: false,
//   vote_average: 0,
//   vote_count: 0
// }
const RecentlySeen = ({ data }: { data: string }) => {
  const parsedData = JSON.parse(data);
  console.log("Logging ParsedData: >>>>>.", parsedData);
  return (
    <div className="bg-slate-950 px-44">
      <FollowerPointerCard
        title={<TitleComponent title={"Test"} avatar={""} />}
      >
        <div className="flex flex-wrap items-center gap-4 bg-slate-950">
          {parsedData.map((movie: any) => (
            <div key={movie.id}>
              <MovieCards movieInfo={JSON.stringify(movie)} />
            </div>
          ))}
        </div>
      </FollowerPointerCard>
    </div>
  );
};
const MovieCards = ({ movieInfo }: { movieInfo: string }) => {
  const data = JSON.parse(movieInfo);
  console.log("Logging Data:", data);
  return (
    <div
      onClick={() => {
        window.location.href = `/movie/${data.id}`;
      }}
    >
      <CardContainer className="inter-var">
        <CardBody className="group/card relative size-auto  rounded-xl border border-black/[0.1] bg-gray-900 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[15rem]">
          <CardItem translateZ="100" className="mt-4 w-full">
            <Image
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/w185/${data.poster_path}`
                  : "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              // src={
              //   "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              // }
              height="1000"
              width="1000"
              className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {data.title || data.name}
            {/* Test */}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 max-w-sm text-sm capitalize text-neutral-500 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
            {/* {data?.media_type}{" "}
            {data?.release_date && " - " + data?.release_date?.split("-")[0]} */}
          </CardItem>

          {/* <div className="mt-10 flex items-center justify-between">
            <CardItem
              translateZ={20}
              as="button"
              className="cursor-none rounded-xl px-4 py-2 text-xs font-normal text-white hover:cursor-none"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="cursor-pointer rounded-xl bg-black px-4 py-2 text-xs font-bold text-white hover:cursor-none dark:bg-white dark:text-black"
            >
              Sign up
            </CardItem>
          </div> */}
        </CardBody>
      </CardContainer>
    </div>
  );
};
export default RecentlySeen;
