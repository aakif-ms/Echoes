/* eslint-disable react/no-unescaped-entities */
import Card from "./Card";

export default function Testimonial() {
  return (
    <div className="flex flex-col gap-12 justify-around mx-16 mt-24 mb-20">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-6xl text-blueShade font-roboto text-center">
          Testimonials
        </h1>
        <p className="flex flex-col items-center text-center">
          <span>
            Echoes has truly transformed the way I document my life experiences.
            It's
          </span>
          <span className="mt-2">
            so easy to use and helps me cherish my memories in a beautiful way
          </span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-16">
        <Card image={false}/>
        <Card image={false}/>
        <Card image={false}/>
        <Card image={false}/>
      </div>
    </div>
  );
}
