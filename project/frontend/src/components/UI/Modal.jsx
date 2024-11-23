import React, { useState, useEffect } from "react";

export default function Modal({ isOpen, onClose, children, large }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowModal(true), 200);
    } else setShowModal(false);
  }, [isOpen]);

  const modalWidth = large ? "w-[100%] xl:w-[80%]" : "w-[60%] xl:w-[40%]";

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
          {/* پس‌زمینه مدال */}
          <div
            className={`relative bg-myWhite p-6 rounded-lg shadow-lg ${modalWidth} transition-transform duration-300 ease-in-out transform ${
              showModal ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            {/* دکمه بستن */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-black hover:text-greydark focus:outline-none text-xl"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="mt-2">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}