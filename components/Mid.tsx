import React from "react";
import Whoissec from "@/components/Whoissec";

const Mid = () => {
  return (
    <section id="who" className="w-full pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
            Who is this for?
          </h2>
          <div className="hidden sm:inline-flex text-xs text-slate-400">
            Tailored for different roles
          </div>
        </div>
        <Whoissec />
      </div>
    </section>
  );
};

export default Mid;
