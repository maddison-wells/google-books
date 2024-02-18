import Button from "../../Components/Button/Button";
import Searchbar from "../../Components/Searchbar/Searchbar";
import styles from "./Header.module.scss";

const Header = ({ setSearchTerm }) => {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.header__title}>Ink Inquiry.</h1>
        <p className={styles.header__text}>
          Dive into a world of literary exploration powered by Google Books API.
        </p>
      </div>
      <Searchbar setSearchTerm={setSearchTerm} />
    </header>
  );
};

export default Header;
