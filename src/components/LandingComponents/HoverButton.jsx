import Button from "../Button";

export default function HoverButton() {
  return (
    <div className="bg-cream flex flex-col md:flex-row gap-6 md:gap-36 p-8 md:p-24 justify-center md:justify-around mx-8 md:mx-24 rounded-xl mb-14">
      <div className="flex flex-col gap-5">
        <h1 className="text-blueShade font-roboto text-3xl md:text-4xl">
          Start chronicling your memories today
        </h1>
        <p className="text-blueShade font-thin">
          Create your own personal timeline of life experiences with The Memory
          Vault. Capture moments, emotions, and locations to build a rich
          archive of memories.
        </p>
      </div>
      <Button>Get Started</Button>
      {/* <button className="bg-indigo-600 text-white px-6 py-1 rounded-full mt-5 md:mt-0">
        Get Started
      </button> */}
    </div>
  );
}
