import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface URlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export const formUrlQuery = ({ params, key, value }: URlQueryParams) => {
  const currUrl = qs.parse(params);
  currUrl[key] = value;
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currUrl,
    },
    { skipNull: true }
  );
};

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: {
  params: string;
  keysToRemove: string[];
}) => {
  const currUrl = qs.parse(params);
  keysToRemove.forEach((key) => delete currUrl[key]);
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currUrl,
    },
    { skipNull: true }
  );
};

export const convertTMDBtoMedia = (media: any, type: string) => {
  const mediatype = type === "movie" ? "movie" : "show";
  console.log(media);
  return {
    title: media?.title,
    tmdbId: media?.id?.toString(),
    year:
      +media?.release_date?.split("-")[0] ||
      media?.first_air_date?.split("-")[0] ||
      0,
    type: mediatype,
  };
};
