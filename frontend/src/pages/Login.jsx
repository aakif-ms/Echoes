/* eslint-disable react/no-unescaped-entities */
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { login } from "../api";

import { EchoContext } from "../store/cart-context";
import CheckBox from "../components/AuthComponents/Checkbox";
import SubmitBtn from "../components/AuthComponents/Button";
import InputBox from "../components/AuthComponents/InputBox";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const {saveToken} = useContext(EchoContext);

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
      const { data } = await login(formData);
      saveToken(data.token);
      navigate("/home");
    } catch (err) {
      console.log(err.response.data.message);
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
              Log in
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
            type="email"
            entry="email"
            text="Email"
            onChange={handleInputChange}
          />
          <InputBox
            type="password"
            entry="password"
            text="Password"
            onChange={handleInputChange}
          />
          <div className="flex justify-between w-full lg:w-3/5 gap-4 lg:gap-0">
            <CheckBox />
            <Link className="mt-2 text-purple-500 text-sm lg:text-lg">
              Forget Your Password
            </Link>
          </div>
          <SubmitBtn />
          <p className="font-ubuntu text-gray-500 font-medium">
            Don't have an account?
            <Link to="/signUp" className="text-purple-500">
              Create here
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
