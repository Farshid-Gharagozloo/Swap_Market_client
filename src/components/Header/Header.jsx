import logo from "../../assets/logo/swap_logo.jpg";

import './Header.scss';


export default function Header() {
    return (
        <section className="header">
            <div className="header__logo">
                <img src={logo} alt="swap_logo" className="header__logo-img" />
            </div>
            <div className="header__navbar">
                <ul className="header__titles">
                    <li className="header__page">Home Page</li>
                    <li className="header__page">Sign up</li>
                    <li className="header__page">Log in</li>
                    <li className="header__page">About</li>
                </ul>
            </div>
        </section>
    );
};
