import { useContext } from "react";
import { ModalContext } from "../context/modal-context";

function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export default useModal;
