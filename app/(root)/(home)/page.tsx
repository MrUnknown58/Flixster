import { LampDemo } from "@/components/home/LampDown";
import RecentlySeen from "@/components/home/RecentlySeen";
import SearchBar from "@/components/shared/SearchBar";
import { browseCollection } from "@/lib/actions/browse.action";
import { SearchParamsProps } from "@/types";

export default async function Home({ searchParams }: SearchParamsProps) {
  const response = await browseCollection(searchParams.q || "");
  console.log("Logging Response >>>>>>>", response);
  return (
    <>
      <div className="flex size-full flex-col rounded-lg bg-slate-950">
        <div className="bg-slate-950">
          <div className="h-[40rem]">
            <LampDemo>
              {/* <div className=""> */}
              <p className="mt-20">
                {/* <Meteors /> */}
                Looking for a fantasy movie ? Scream is a good option.
              </p>
              <div className="mt-10 flex flex-col gap-2">
                {/* <div className="h-44 bg-red-300 text-white">Hello</div> */}
                <SearchBar initialValue="" path="/" />
              </div>

              {/* <div className="h-44 bg-red-300 text-white">Hello</div> */}
              {/* </div> */}
            </LampDemo>
          </div>
          <RecentlySeen data={JSON.stringify(response)} />
        </div>
      </div>
    </>
  );
}
