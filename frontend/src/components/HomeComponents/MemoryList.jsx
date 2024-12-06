import { motion } from "framer-motion";
import { useState, useContext } from "react";

import { EchoContext } from "../../store/cart-context.jsx";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import kedarkantha from "../../assets/Kedarkantha.jpg";
import Button from "../Button.jsx";
import Modal from "./Modal.jsx";

export default function Memories() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const echoes = useContext(EchoContext);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  return (
    <div className="flex flex-col gap-6 mx-8 mt-16 overflow-hidden">
      {echoes.map((echo, index) => (
        <div
          key={echo.id}
          className={`flex flex-col md:flex-row mb-6 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-stretch `}
        >
          <div className="w-full sm:w-1/3">
            <motion.img
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              src={kedarkantha}
              alt={echo.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full sm:w-2/3 flex flex-col px-4 grow min-h-full justify-between"
          >
            <div>
              <h1 className="text-3xl font-medium font-gummy text-blueShade">
                {echo.title}
              </h1>
              <p className="text-stone-700 font-ubuntu font-normal mt-2">
                {echo.description}
              </p>
            </div>
            <div className="flex gap-4">
              <MdEdit
                className="text-2xl hover:cursor-pointer"
                onClick={openEditModal}
              />
              <MdDelete
                className="text-2xl hover:cursor-pointer"
                onClick={openDeleteModal}
              />
            </div>
          </motion.div>
        </div>
      ))}
      <span className="self-center mb-10">
        <Button>View All Echoes</Button>
      </span>

      {isEditModalOpen && (
        <Modal title="Edit Echo" edit={true} onClose={closeEditModal}>
          <p>Content for editing the memory goes here.</p>
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal title="Delete Echo" del={true} onClose={closeDeleteModal}>
          <p>Are you sure you want to delete this memory?</p>
        </Modal>
      )}
    </div>
  );
}
