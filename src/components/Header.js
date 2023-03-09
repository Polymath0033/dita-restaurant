import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../assets/Logo.svg";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="FoodLY_LOGO" />
        FOODLY
      </div>
      <nav>
        <ul>
          {[
            { name: "Home", link: "/" },
            { name: "About us", link: "/about-us" },
            { name: "Menu", link: "/menu" },
            { name: "Contact us", link: "/contact-us" },
          ].map((link) => (
            <li key={link.link}>
              <NavLink
                className={(active) => (active.isActive ? classes.active : "")}
                to={link.link}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button>Log in</button>
        <ul>
          <i className={`bi bi-facebook ${classes.icon}`}></i>
          <i className={`bi bi-instagram ${classes.icon}`}></i>
          <i className={`bi bi-whatsapp ${classes.icon}`}></i>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
