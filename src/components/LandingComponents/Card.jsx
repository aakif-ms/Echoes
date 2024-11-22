import { FaRegUserCircle } from "react-icons/fa";

export default function Card({ image }) {
  return (
    <div className="bg-cream w-[500px] h-[200px] px-4 py-6 rounded-lg shadow-lg flex flex-col gap-12 items-center text-blueShade text-xl font-semibold">
      {image && (
        <div className="flex justify-between gap-4 w-full">
          <h1
            style={{ fontWeight: 450 }}
            className="text-4xl text-blueShade font-gummy"
          >
            Sign Up
          </h1>
          <h1
            style={{ fontWeight: 450 }}
            className="text-4xl text-blueShade font-gummy"
          >
            01
          </h1>
        </div>
      )}
      {!image && (
        <div className="flex items-center w-full gap-3">
          <FaRegUserCircle className="text-4xl"/>
          <div className="flex flex-col justify-center">
            <h1 className="text-blueShade font-medium">Aakif Mushtaq</h1>
            <p className="text-blueShade font-light">Developer</p>
          </div>
        </div>
      )}
      <p className="text-blueShade font-light font-gummy">
        Create an account on Echoes by providing your email and creating a
        password
      </p>
    </div>
  );
}
