export default function Card() {
  return (
    <div className="bg-cream w-[500px] h-[200px] px-4 py-6 rounded-lg shadow-lg flex flex-col gap-7 md:gap-12 items-center text-blueShade text-xl font-semibold">
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
      <p className="text-blueShade font-light font-gummy">
        Create an account on Echoes by providing your email and creating a
        password
      </p>
    </div>
  );
}
