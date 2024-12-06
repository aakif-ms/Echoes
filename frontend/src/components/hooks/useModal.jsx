import { useState } from "react";

export default function useModal() {
    const [currentModal, setCurrentModal] = useState(null);

    function openModal(modalName) {
        setCurrentModal(modalName);
    }
    function closeModal() {
        setCurrentModal(null);
    }
    function toggleModal(modalName) {
        if(currentModal === modalName) {
            closeModal();
        } else {
            openModal(modalName);
        }
    }
    
    return {openModal, closeModal, toggleModal, currentModal}
}