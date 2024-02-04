import {
  makeProviders,
  makeSimpleProxyFetcher,
  makeStandardFetcher,
  targets,
} from "@movie-web/providers";

// this is how the library will make http requests
// const myFetcher = makeStandardFetcher(fetch);

// const fetcher = makeSimpleProxyFetcher(process.env.NEXT_CORS_PROXY_URL!, fetch);

// make an instance of the providers library
console.log(process.env.NEXT_CORS_PROXY_URL);
export const providers = makeProviders({
  fetcher: makeStandardFetcher(fetch),
  proxiedFetcher: makeSimpleProxyFetcher(
    "https://your.proxy.workers.dev/",
    fetch
  ),
  // proxiedFetcher: makeSimpleProxyFetcher(
  //   process.env.NEXT_CORS_PROXY_URL!,
  //   fetch
  // ),
  // will be played on a native video player
  target: targets.BROWSER,
});
