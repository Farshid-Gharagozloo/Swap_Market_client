import ActionButton from '../ActionButton/ActionButton';
import closeIcon from '../../assets/icons/close-24px.svg';
import Button from '../Button/Button';
import './Modal.scss';

export default function Modal({ title, onDelete, onClose, children }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__close">
          <ActionButton src={closeIcon} alt="Close Icon" onClick={onClose} />
        </div>
        <div className="modal__content">
          <h2 className="modal__title">{title}</h2>
          <p className="modal__text">{children}</p>
          <div className="modal__actions">
            <Button variant="cancel" onClick={onClose} />
            <Button variant="delete" onClick={onDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}
