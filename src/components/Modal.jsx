export default function Modal({ children, isOpen, onClose }) {
  if (!isOpen) {
    return;
  }
  return (
    <div className="modal">
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
}
