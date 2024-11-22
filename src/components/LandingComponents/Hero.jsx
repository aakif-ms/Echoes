/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";

import Button from "../Button.jsx";
import MARQUEE_IMAGES from "../../assets/marqueeImages/marquee.js";


export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 space-y-10">
        <h1 className="text-5xl text-purpleBlue font-medium tracking-normal text-center md:text-center">
          Capture Your Life's Moment
        </h1>
        <div className="tracking-wide text-lg font-gummy mx-5 md:mx-20">
          <p className="flex flex-col items-center text-center">
            <span>
              Echoes app allows you to document your life experiences in a
              visually engaging timeline. Save photos, locations,
            </span>
            <span className="mt-2">
              dates, and emotions to create a rich archive of memories.
            </span>
          </p>
        </div>
        <Button animate={false}>Get Started</Button>
      </div>

      <Marquee className="mt-24 mb-4" speed={65}>
        {MARQUEE_IMAGES.map((image, index) => (
          <img src={image} key={index} alt="image" className="w-[400px] mx-4" />
        ))}
      </Marquee>
      <Marquee className="mb-16" direction="right" speed={65}>
        {MARQUEE_IMAGES.map((image, index) => (
          <img src={image} key={index} alt="image" className="w-[400px] mx-4" />
        ))}
      </Marquee>
    </>
  );
}
