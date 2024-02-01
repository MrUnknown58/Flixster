import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {/* <TopBar /> */}
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col">
          <div className="mx-auto size-full bg-slate-950">
            {/* <p className="text-white">Navbar</p> */}
            {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
