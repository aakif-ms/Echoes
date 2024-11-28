import Marquee from "react-fast-marquee";
import MARQUEE_IMAGES from "../assets/marqueeImages/marquee";

export default function View() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8 mb-16 text-3xl text-blueShade text-center font-gummy">
        Take a moment to journey through the echoes{" "}
        <span> of your past, where</span>{" "}
        <span>each memory holds a story waiting to be revisited.</span>
      </div>
      <Marquee>
        {MARQUEE_IMAGES.map((image, index) => (
          <img src={image} key={index} alt="image" className="w-[400px] mx-4 rounded-xl" />
        ))}
      </Marquee>
      <form action="#" className="flex justify-center items-center gap-4 mx-20 mt-16"> 
        <label htmlFor="search" className="text-xl text-blueShade font-gummy">Search:</label>
        <input type="text" id="search" name="search" placeholder="Search Echoes" className="border-2 border-black w-96 px-3 py-2 rounded-xl" />
      </form>
    </>
  );
}
