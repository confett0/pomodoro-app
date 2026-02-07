export default function Modal({ children, isOpen, onClose }) {
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
