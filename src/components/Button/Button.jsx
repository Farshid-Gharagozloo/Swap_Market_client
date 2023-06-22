import editIcon from '../../assets/icons/edit-24px-white.svg';
import './Button.scss';

export default function Button(props) {
  const { variant, type, children, ...others } = props;

  if (variant === 'secondary' || variant === 'cancel') {
    return (
      <button className="button button--secondary" type={type || 'button'} {...others}>
        {variant === 'cancel' && 'Cancel'}
        {children}
      </button>
    );
  }

  if (variant === 'edit') {
    return (
      <button className="button button--edit" type={type || 'button'} {...others}>
        <img src={editIcon} alt="Edit Icon" className="button__icon" />
        <span className="button__text">Edit</span>
      </button>
    );
  }

  if (variant === 'delete') {
    return (
      <button className="button button--delete" type={type || 'button'} {...others}>
        Delete
      </button>
    );
  }

  return (
    <button className="button" type={type || 'button'} {...others}>
      {children}
    </button>
  );
}
