export default function CtaText({heading, text}) {
  return (
    <div className="flex flex-col gap-6 justify-start">
      <h1 className="text-5xl text-purpleBlue font-medium tracking-normal font-roboto">
        {heading}
      </h1>
      <p className="flex flex-col text-purple text-purpleBlue text-md tracking-tighter font-gummy">
        <span>
          {text}
        </span>
        
      </p>
    </div>
  );
}
