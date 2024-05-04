import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4">
      <p className="text-lg md:text-base ">IT'S TIME TO GET TO</p>
      <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Alnahat <span className="text-yellow-400">Gym</span>
      </h1>

      <img
        src="GYM2.0.png
      "
      ></img>
      <div>
        <p class="text-lg md:text-base font-light text-black md:text-2xl sm:text-base">
          <span
            data-text="Transform"
            class="text-yellow-400 font-medium Animation"
          >
            Transform
          </span>{" "}
          your body, one rep at a time. Welcome to the ultimate destination for
          fitness enthusiasts.
        </p>
        <p class="text-lg md:text-base font-light text-black md:text-2xl sm:text-base">
          <span
            data-text="where sweat meets success,"
            class="text-yellow-400 font-medium Animation"
          >
            where sweat meets success,
          </span>{" "}
          and dedication breeds results
        </p>
      </div>

      <p>
        <span className="comma">&#44;</span>
        <span className="comma">&#44; </span>
        <span className=" text-black text-lg md:text-base">NO PAIN </span>
        <span className="text-yellow-400 text-lg md:text-base">NO GAIN </span>
        <span className="comma text-yellow-400">&#44;</span>
        <span className="comma text-yellow-400">&#44;</span>
      </p>
      <Button func={()=>{
        window.location.href = '#generate'
      }} text={"Accept & Begin"} />
    </div>
  );
}
