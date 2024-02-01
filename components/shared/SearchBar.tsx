"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

interface SearchBarProps {
  initialValue: string;
  path: string;
}
const SearchBar = ({ initialValue, path }: SearchBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const route = path;
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "q",
          value: search,
        });
        router.push(newUrl);
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ["q"],
          });
          console.log(newUrl);
          router.push(newUrl);
        } else console.log("route is not same as pathname");
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [pathname, route, router, search, searchParams]);
  return (
    <>
      <div className="mx-14 flex h-[56px] grow items-center rounded-[10px] bg-gray-100/10 px-6">
        <span className="pr-3">🔍</span>
        <Input
          className="z-20 w-full flex-1 rounded-full border-none bg-transparent text-gray-300 opacity-65 shadow-none outline-none placeholder:text-gray-400 sm:py-4 sm:pr-2"
          placeholder="Ready to watch? What's your pick?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
