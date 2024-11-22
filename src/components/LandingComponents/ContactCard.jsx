import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactCard({
  email,
  phone,
  location,
  title,
  details,
}) {
  return (
    <div className="flex flex-col justify-around items-center gap-6">
      {email && <MdEmail className="text-4xl" />}
      {phone && <FaPhoneAlt className="text-4xl" />}
      {location && <FaLocationDot className="text-4xl" />}
      <h1 className="text-blueShade font-roboto text-4xl font-normal tracking-tight">
        {title}
      </h1>
      <p className="text-blueShade font-roboto flex flex-col items-center text-center">
        <span>Lorem ipsum dolor sit amet </span>{" "}
        <span>consectetur adipisicing elit. Aliquam dolore ab, beatae</span>{" "}
        <span>nisi, totam consequuntur.</span>
      </p>
      <p className="text-blueShade font-roboto font-medium">{details}</p>
    </div>
  );
}
