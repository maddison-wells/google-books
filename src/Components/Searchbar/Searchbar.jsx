import Button from "../Button/Button";
import { useRef } from "react";
import styles from "./Searchbar.module.scss";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ setSearchTerm }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputRef.current.value);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search title, author, series ..."
        ref={inputRef}
      />
      <Button name={"Search"}></Button>
    </form>
  );
};

export default Searchbar;
