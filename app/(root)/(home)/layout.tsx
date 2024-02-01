import Link from "next/link";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {/* <TopBar /> */}
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col">
          <div className="mx-auto size-full bg-slate-950">
            {/* <p className="bg-transparent text-white">Navbar</p> */}
            <div className="fixed z-50 space-x-4 pt-4">
              <Link href={"/"}>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex size-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Flixster
                  </span>
                </button>
              </Link>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex size-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Border Magic
                </span>
              </button>
            </div>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
