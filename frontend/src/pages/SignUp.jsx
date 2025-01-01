import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { register } from "../api";

import InputBox from "../components/AuthComponents/InputBox";
import SubmitBtn from "../components/AuthComponents/Button";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await register(formData);
      navigate("/home");
    } catch (e) {
      console.log(e.response.data.message);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center lg:justify-start ">
      <div className="w-screen lg:w-1/2 h-screen flex flex-col p-0 lg:p-20 gap-16 mx-44 lg:mx-0">
        <div className="flex flex-col">
          <h1 className="text-7xl font-ubuntu font-normal tracking-wide text-darkPurple lg:text-start text-center">
            Welcome
          </h1>
          <h1 className="text-7xl font-medium font-gummy tracking-wider text-darkPurple lg:text-start text-center">
            To Echoes !
          </h1>
          <p className="text-gray-400 font-ubuntu mt-10 lg:text-start text-center">
            <span className="text-2xl font-Ubuntu font-medium text-black">
              Sign Up
            </span>{" "}
            to your account and let your echoes come to life, where memories
            await to be revisited and cherished
          </p>
        </div>
        <form
          action="#"
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <InputBox
            type="text"
            entry="name"
            text="Name"
            onChange={handleInputChange}
          />
          <InputBox
            type="email"
            entry="email"
            text="Email"
            onChange={handleInputChange}
          />
          <InputBox
            type="password"
            entry="password"
            text="Create Password"
            onChange={handleInputChange}
          />
          <SubmitBtn />
          <p className="font-ubuntu text-gray-500 font-medium">
            Already have an account?
            <Link to="/login" className="text-purple-500">
              Login Here
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden lg:block lg:w-1/2 h-screen">
        <DotLottieReact
          src="https://lottie.host/fa318e68-ac87-4663-9012-24a6fd682028/i3Jy7D5nvJ.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}
