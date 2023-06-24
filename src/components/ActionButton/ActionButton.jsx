import './ActionButton.scss';

export default function ActionButton({ src, alt, onClick }) {
  return (
    <div onClick={onClick} className="action">
      <img src={src} alt={alt} className="action__icon" />
    </div>
  );
}
