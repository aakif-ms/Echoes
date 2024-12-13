import { useState } from "react";

export default function useModal() {
  const [currentModal, setCurrentModal] = useState(null);

  function openModal(modalName) {
    setCurrentModal(modalName);
  }
  function closeModal() {
    console.log("closeModal called");
    setCurrentModal(null);
  }

  return { openModal, closeModal, currentModal };
}
