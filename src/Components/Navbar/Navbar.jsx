import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = ({ setLinkClicked }) => {
  const linkStyles = ({ isActive }) => {
    return isActive
      ? `${styles.nav__link} ${styles.nav__linkActive}`
      : `${styles.nav__link}`;
  };

  const handleLinkClick = () => {
    setLinkClicked(true);

    // setTimeout(() => {
    //   setLinkClicked(false);
    // }, 2000);
  };
  return (
    <nav className={styles.nav}>
      <NavLink className={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink
        className={linkStyles}
        onClick={handleLinkClick}
        to="best-selling"
      >
        Top Selling Books
      </NavLink>
      <NavLink
        className={linkStyles}
        onClick={handleLinkClick}
        to="/top-fantasy"
      >
        Top Fantasy Books
      </NavLink>
      <NavLink
        className={linkStyles}
        onClick={handleLinkClick}
        to="/top-children"
      >
        Top Childrens Books
      </NavLink>
      <NavLink
        className={linkStyles}
        onClick={handleLinkClick}
        to="/top-graphic-novels"
      >
        Top Graphic Novels
      </NavLink>
    </nav>
  );
};

export default Navbar;
