import React from "react";
import Whoissec from "@/components/Whoissec";

const Mid = () => {
  return (
    <section id="who" className="w-full pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col mb-12">
          <p className="text-sm uppercase tracking-widest text-accentPrimary font-semibold mb-2">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-fraunces font-medium tracking-tight text-textPrimary">
            Who is this for?
          </h2>
        </div>
        <Whoissec />
      </div>
    </section>
  );
};

export default Mid;
