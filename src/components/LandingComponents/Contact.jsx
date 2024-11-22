import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center mt-12 gap-16 mb-20">
      <div className="flex flex-col gap-5 items-center ">
        <p className="text-blueShade font-roboto">
          Get in touch with us today!
        </p>
        <h1 className="text-blueShade text-5xl font-roboto font-normal mb-2">
          Contact Us
        </h1>
        <p className="text-blueShade font-roboto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-7 md:gap-0 justify-around w-full">
            <ContactCard email={true} title="Email" details="aakif.msiddiqui@gmail.com"/>
            <ContactCard phone={true} title="Phone" details="+91-123-456-7890"/>
            <ContactCard location={true} title="Office" details="KIET Institute, Ghaziabad"/>
      </div>
    </div>
  );
}
