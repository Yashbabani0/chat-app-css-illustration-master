import React from "react";
import MobileImg from "./MobileImg";

export default function Content() {
  return (
    <div className="z-10 flex flex-col items-center justify-center md:flex-row md:justify-between absolute top-[50%]">
      <div>
        <MobileImg />
      </div>
      <div className="h-[20em] p-[1.62em] text-center md:w-[50%] md:text-left">
        <h1 className="text-very-dark-desaturated-violet font-bold text-4xl pb-[1em]">
          Simple booking
        </h1>
        <p className="text-dark-grayish-violet text-lg font-medium md:w-[68%]">
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </p>
      </div>
    </div>
  );
}
