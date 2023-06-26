import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/swap_logo.jpg";

import './Header.scss';


export default function Header() {

    const navigate = useNavigate();
    const handlesignout = () =>{
        sessionStorage.removeItem('authToken');
        navigate("/")
        window.location.reload(false);
    }

    const navLinkActive = ({ isActive }) => {
        if (isActive) {
          return 'header__page header__page--active';
        } else {
          return 'header__page';
        }
    };

    return (
        <section className="header">
            <div className="header__logo">
                <Link to="/" className="header__logo-link">
                    <img src={logo} alt="swap_logo" className="header__logo-img" />
                </Link>
            </div>
            <div className="header__navbar">
                <ul className="header__titles">
                    <li className="header__page">
                        <NavLink className={navLinkActive} to="/">
                            Home Page
                        </NavLink>
                    </li>
                    <li className="header__page">
                        <NavLink className={navLinkActive} to="/signup">
                            Sign up
                        </NavLink>
                    </li>
                    <li className="header__page">
                        {!sessionStorage.authToken ? (
                            <NavLink className={navLinkActive} to="/signin">
                               Sign in
                            </NavLink> )
                         : (
                            <NavLink className={navLinkActive} onClick={handlesignout}>
                               Sign out
                            </NavLink> )
                        }
                    </li>
                    <li className="header__page">About</li>
                </ul>
            </div>
        </section>
    );
};

