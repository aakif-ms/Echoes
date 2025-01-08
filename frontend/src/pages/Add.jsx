import { useState } from "react";
import axios from "axios";

import prince from "../assets/LittlePrince1.jpg";

export default function Add() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const id = localStorage.getItem("userId");
  console.log(id);

  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      formData,
      id,
    };
    try {
      await axios.post("http://localhost:3000/echo/addEcho", data);
      alert("Echo added successfully");
    } catch (error) {
      console.log("Error Submitting Data", error);
      alert("Faled to submit data");
    }
  }

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-around items-center"
      style={{ backgroundImage: `url(${prince})` }}
    >
      <h1 className="text-6xl font-cursive text-gray-900">Write an Echo</h1>
      <div className="bg-white/50 w-[400px] h-[600px] backdrop-blur-sm p-6 rounded-lg shadow-md ">
        <form
          className="flex flex-col justify-between h-full"
          onSubmit={handleSubmit}
        >
          <span className="flex flex-col items-start">
            <label htmlFor="title" className="text-xl font-medium font-gummy">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="py-1 px-2 w-full border-b-2 border-black bg-transparent focus:outline-none text-xl font-gummy font-light placeholder:text-slate-600"
              placeholder="Enter the title"
              onChange={handleOnChange}
            />
          </span>
          <span className="flex flex-col items-start">
            <label htmlFor="date" className="text-xl font-medium font-gummy">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="py-1 px-8 w-full border-b-2 border-black bg-transparent focus:outline-none text-xl font-gummy font-light placeholder:text-slate-600"
              placeholder="Enter the title"
              onChange={handleOnChange}
            />
          </span>
          <span className="flex flex-col items-start">
            <label
              htmlFor="description"
              className="text-xl font-medium font-gummy"
            >
              Description:
            </label>
            <textarea
              name="description"
              id="description"
              rows={3}
              className="py-1 px-2 w-full border-2 rounded-xl border-black bg-transparent focus:outline-none text-lg font-gummy font-light placeholder:text-slate-600 resize-none"
              onChange={handleOnChange}
            ></textarea>
          </span>
          <span className="flex flex-col items-start gap-3">
            <label htmlFor="file" className="text-xl font-medium font-gummy">
              Upload File:
            </label>
            <div className="w-full">
              <label
                htmlFor="file"
                className="py-2 px-6 w-full text-center bg-transparent border-2 border-black rounded-full cursor-pointer text-xl font-gummy font-light hover:bg-gray-600"
              >
                Choose Files
              </label>
              <input
                type="file"
                id="file"
                name="file"
                className="hidden"
                onChange={handleOnChange}
              />
            </div>
          </span>
          <div className="flex justify-around">
            <button
              type="submit"
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>
            <button
              type="submit"
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
