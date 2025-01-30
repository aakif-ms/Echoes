import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import axios from "axios";

import InputBox from "../components/FormComponents/InputBox.jsx";
import DescriptionBox from "../components/FormComponents/DescriptionBox.jsx";
import FileBox from "../components/FormComponents/FileBox.jsx";

export default function AddPage() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    image: null,
  });

  const id = localStorage.getItem("userId");

  function handleOnChange(event) {
    const { name, value, files } = event.target;
    if (name === "image") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("date", formData.date);
    data.append("image", formData.image);
    data.append("id", id);

    try {
      await axios.post("http://localhost:3000/echo/addEcho", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Echo Added Successfully");
    } catch (error) {
      console.log("Error Adding Data", error);
      alert("Failed to Submit Data");
    }
  }
  return (
    <div className="h-screen w-full bg-red-300 flex justify-center items-center">
      <div className="w-full min-h-3/4 bg-white rounded-3xl flex px-12 py-8 mx-20">
        <form action="#" className="flex flex-col gap-3 w-1/2" onSubmit={handleSubmit}>
          <InputBox text="Title" entry="title" type="text" onChange={handleOnChange}/>
          <InputBox text="Date" entry="date" type="date" onChange={handleOnChange}/>
          <DescriptionBox onChange={handleOnChange}/>
          <FileBox onChange={handleOnChange}/>
          <span className="flex justify-start gap-5">
            <button
              type="submit"
              className="bg-green-300 justify-start px-5 py-3 rounded-xl text-lg font-bold font-ubuntu"
            >
              Submit
            </button>
            <button
              type="submit"
              className="bg-red-400 justify-start px-5 py-3 rounded-xl text-lg font-bold font-ubuntu"
            >
              Cancel
            </button>
          </span>
        </form>
        <DotLottieReact
          className="w-1/2"
          src="https://lottie.host/c2517a1e-c54c-4b9d-95e7-72c1c7c6b62e/BEmQZwNXvE.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}
