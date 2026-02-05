export default function Modal({ children, isOpen, onClose }) {
  if (!isOpen) {
    return;
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
