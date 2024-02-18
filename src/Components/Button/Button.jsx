import styles from "./button.module.scss";

const Button = ({ handleEvent, name }) => {
  return (
    <button className={styles.button} onClick={handleEvent}>
      {name}
    </button>
  );
};

export default Button;
