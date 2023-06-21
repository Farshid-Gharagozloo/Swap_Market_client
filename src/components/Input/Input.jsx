import errorIcon from '../../assets/icons/error-24px.svg';
import './Input.scss';

export default function Input({ children, type, placeholder, hasError, label, ...others }) {
  const ErrorMessage = () => (
    <div className={!hasError ? 'input__warning' : 'input__warning input__warning--visible'}>
      <img src={errorIcon} alt="Error Icon" className="input__icon" />
      <span className="input__error-message">This field is required</span>
    </div>
  );

  if (type === 'search') {
    return (
      <div className="input__wrapper">
        <input type={type} className={'input input--search'} placeholder="Search..." {...others} />
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="input__wrapper">
        <label className="input__label">
          {label || placeholder}
          <textarea
            type={type}
            className={'input input--textarea' + (hasError ? ' input--error' : '')}
            placeholder={placeholder}
            {...others}
          />
        </label>
        <ErrorMessage />
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className="input__wrapper">
        <label className="input__label">
          {label || placeholder}
          <select
            type={type}
            className={'input input--dropdown' + (hasError ? ' input--error' : '')}
            placeholder={placeholder}
            {...others}
          >
            {children}
          </select>
        </label>
        <ErrorMessage />
      </div>
    );
  }

  return (
    <div className="input__wrapper">
      <label className="input__label">
        {label || placeholder}
        <input
          type={type}
          className={'input' + (hasError ? ' input--error' : '')}
          placeholder={placeholder}
          {...others}
        />
      </label>
      <ErrorMessage />
    </div>
  );
}
