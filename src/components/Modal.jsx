import { useEffect } from "react";

export default function Modal({ children, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);
  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
