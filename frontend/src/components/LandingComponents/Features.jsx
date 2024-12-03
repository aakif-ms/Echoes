import Card from "./Card";

export default function FeaturesCards() {
  return (
    <div className="flex flex-col gap-12 justify-around mx-16">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-6xl text-blueShade font-roboto text-center">
          Discover the power of our product
        </h1>
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
      <div className="flex flex-wrap justify-center gap-16">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}
