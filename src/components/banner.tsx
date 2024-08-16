import React from "react";
import { db } from "@/libs/db";

const Banner = () => {
  return (
    <div
      className={"h-[80vh] relative bg-cover"}
      style={{
        backgroundImage: "url('./banner.jpg')",
      }}
    >
      <div className={"absolute bg-black/40 w-full h-full"} />
      <div className={"mx-[200px] relative z-50 py-32"}>
        <h2 className={"text-8xl text-white font-bold drop-shadow-xl"}>
          {db.website.title}
        </h2>
        <p className={"text-white mt-12 drop-shadow-xl"}>
          {db.website.description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
