import { useState } from "react";
import axios from 'axios'

export default function Modal({ title, edit, del, onClose, id }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    id: id,
  });


  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    try {
      await axios.put("http://localhost:3000/updateEcho", formData);
      alert("Echo updated successfully");
      onClose();
      console.log("Modal closed");
    } catch (e) {
      console.error("Error during submission:", e);
    }
  }

  async function handleOnDelete(event) {
    event.preventDefault();
    try {
      await axios.delete("http://localhost:3000/deleteEcho", {
        data: formData,
      });
      console.log(formData);  
      alert("Echo deleted successfully");
      onClose();
    } catch(e) {
      console.error("Error during deletion", e);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-gummy font-semibold">{title}</h2>
          <button
            className="text-xl font-bold text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        {edit && (
          <form
            className="flex flex-col justify-between gap-5 h-full"
            onSubmit={handleOnSubmit}
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
                className="py-1 px-2 w-full border-b-2 border-black bg-transparent focus:outline-none text-xl font-gummy font-light placeholder:text-slate-600"
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
                type="button"
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        {del && (
          <form onSubmit={handleOnDelete}>
            <p>Are You sure you want to delete this</p>
            <button
                type="submit"
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                Submit
              </button>
              <button
                type="button"
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
                onClick={onClose}
              >
                Cancel
              </button>
          </form>
        )}
      </div>
    </div>
  );
}
