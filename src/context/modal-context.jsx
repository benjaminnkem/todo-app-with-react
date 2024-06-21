/* eslint-disable react/prop-types */
"use client";
import { createContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import React from "react";

export const ModalContext = createContext(undefined);

const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const showModal = (content) => setModalContent(content);

  const hideModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <AnimatePresence initial={true} mode="wait">
        {modalContent}
      </AnimatePresence>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
