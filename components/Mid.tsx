import React from "react";
import Whoissec from "@/components/Whoissec";

const Mid = () => {
  return (
    <section className="mt-20 mb-20 container mx-auto">
      <div className="mx-5 px-2 flex items-center justify-center relative right-3  w-full flex-col gap-7">
        <h2 className="text-2xl sm:text-3xl relative right-5 font-bold tracking-wide text-neutral-50 md:text-4xl">
          Who is this for?
        </h2>
        <Whoissec />
        
      </div>
    </section>
  );
};

export default Mid;
