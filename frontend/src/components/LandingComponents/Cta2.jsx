import CtaText from "./CtaText";
import image from "../../assets/camera.jpg";

export default function CTA2() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-center mx-8 md:mx-36 gap-8 md:gap-16 mb-14">
        <div className="order-1 hidden w-full md:w-[650px] max-w-xl h-auto md:flex justify-center md:justify-start">
          <img
            src={image}
            alt=""
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-8">
          <CtaText
            heading="Capture Memories"
            text="Easily save and document your life experiences with photos, videos, locations, dates, and emotion tags."
          />
          <CtaText
            heading="Organize Your Timeline"
            text="Organize your memories in a visually engaging timeline for easy browsing and recollection."
          />
          <CtaText
            heading="Share or Keep Private"
            text="Choose to share your memories with others or keep them private for your personal reflection."
          />
        </div>
      </section>
      
    </>
  );
}
