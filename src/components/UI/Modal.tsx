import { X, Sparkles } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="modal-backdrop"
      onClick={handleBackdropClick}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-header-content">
            <div className="modal-title-container">
              <div className="modal-icon-container">
                <Sparkles size={18} />
              </div>
              <h3 className="modal-title">{title}</h3>
            </div>
            <button 
              className="modal-close-button"
              onClick={onClose}
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        <div className="modal-body">
          <div className="prose">
            {children}
          </div>
        </div>
        
        <div className="modal-footer">
          <div className="modal-footer-content">
            <button 
              className="button-secondary"
              onClick={onClose}
            >
              Cerrar
            </button>
            <button 
              className="button-primary"
              onClick={onClose}
            >
              ✨ Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
