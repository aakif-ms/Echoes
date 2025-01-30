import { motion } from "framer-motion";
import { useContext, useState } from "react";
import useModal from "../hooks/useModal.jsx";

import { EchoContext } from "../../store/cart-context.jsx";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Button from "../Button.jsx";
import Modal from "./Modal.jsx";

export default function Memories() {
  const [echoId, setEchoId] = useState("");
  const { openModal, closeModal, currentModal } = useModal();
  const { echoes, fetchEchoes } = useContext(EchoContext);

  function handleRefresh() {
    fetchEchoes();
  }

  handleRefresh();

  return (
    <div className="flex flex-col gap-6 mx-8 mt-16 overflow-hidden">
      {echoes.map((echo, index) => (
        <div
          key={echo._id}
          className={`flex flex-col md:flex-row mb-6 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-stretch `}
        >
          <div className="w-full sm:w-1/3">
            <motion.img
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              src={echo.image}
              alt={echo.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full sm:w-2/3 flex flex-col px-4 grow min-h-full justify-between"
          >
            <div>
              <h1 className="text-3xl font-medium font-gummy text-blueShade">
                {echo.title}
              </h1>
              <h1 className="text-xl font-medium font-gummy text-blueShade">
                Date:{" "}
                {new Intl.DateTimeFormat("en-GB").format(new Date(echo.date))}
              </h1>
              <p className="text-stone-700 font-ubuntu font-normal mt-2">
                {echo.description}
              </p>
            </div>
            <div className="flex gap-4">
              <MdEdit
                className="text-2xl hover:cursor-pointer"
                onClick={() => {
                  setEchoId(echo._id);
                  openModal("Edit Echo");
                }}
              />
              <MdDelete
                className="text-2xl hover:cursor-pointer"
                onClick={() => {
                  setEchoId(echo._id);
                  openModal("Delete Echo");
                }}
              />
            </div>
          </motion.div>
        </div>
      ))}
      <div className="flex items-center justify-center my-10 md:mx-36">
        <div className="flex-1 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 shadow-md"></div>
        <span className="mx-4 text-xl font-ubuntu font-semibold text-gray-700">
          End of Echoes
        </span>
        <div className="flex-1 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 shadow-md"></div>
      </div>

      {currentModal === "Edit Echo" && (
        <Modal title="Edit Echo" edit={true} onClose={closeModal} id={echoId}>
          <p>Content for editing the memory goes here.</p>
        </Modal>
      )}

      {currentModal === "Delete Echo" && (
        <Modal title="Delete Echo" del={true} onClose={closeModal} id={echoId}>
          <p>Are you sure you want to delete this memory?</p>
        </Modal>
      )}
    </div>
  );
}
