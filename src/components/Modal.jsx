/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import React from "react";

const opacityVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.06 } },
  exit: { opacity: 0 },
};

const variant = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, transition: { ease: "easeInOut", type: "spring", damping: 15, duration: 0.5 } },
  exit: { opacity: 0, scale: 0 },
};

const Modal = ({ children, isOpen = true, onClose, isAutomatic = true, ...rest }) => {
  const ref = useRef < HTMLDivElement > null;

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose;
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
      document.body.style.overflowY = "hidden";
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 min-w-full min-h-full flex justify-center items-center z-[3000] overflow-hidden">
          {/* background */}
          <motion.div
            {...opacityVariant}
            className="fixed top-0 left-0 min-w-full min-h-full bg-black/20 backdrop-blur-md flex items-center justify-center"
            onClick={isAutomatic ? onClose : () => {}}
          ></motion.div>

          {/* modal content */}
          <motion.div
            {...variant}
            className="md:max-h-3/4 mx-auto w-[96%] sm:w-fit max-w-[96%] sm:min-w-[30rem] relative z-[300]"
          >
            <div ref={ref} {...rest}>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;
