import ActionButton from '../ActionButton/ActionButton';
import returnIcon from '../../assets/icons/back-arrow-svgrepo-com.svg';
import './PageHeader.scss';

export default function PageHeader({ title, onReturn, children, nowrap }) {
  return (
    <header className={nowrap ? 'page-header page-header--nowrap' : 'page-header'}>
      <div className="page-header__left">
        {onReturn && <ActionButton onClick={onReturn} src={returnIcon} alt="Return Icon" />}
        <h2 className="page-header__title">{title}</h2>
      </div>
      <div className="page-header__right">{children}</div>
    </header>
  );
}
