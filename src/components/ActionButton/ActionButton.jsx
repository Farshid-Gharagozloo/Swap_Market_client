import './ActionButton.scss';

export default function ActionButton({ src, alt, onClick, active }) {
  return (
    <div onClick={onClick} className={active ? "action action--active" : "action"}>
      <img src={src} alt={alt} className="action__icon" />
    </div>
  );
}
