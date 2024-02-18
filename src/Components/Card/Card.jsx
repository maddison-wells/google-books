import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./Card.module.scss";

const Card = ({
  title = "Unknown",
  authors = "Unknown author",
  description = "Not available",
  image,
  averageRating = "No rating",
  categories,
  language,
  publishedDate,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleInfo = () => {
    setShowModal(true);
  };

  const truncatedDescription =
    description && description.length > 130
      ? description.substring(0, 130) + "..."
      : description;

  return (
    <article className={styles.card}>
      <img className={styles.card__img} src={image} alt="book image" />
      <div className={styles.card__container}>
        <h1 className={styles.card__heading}>{title}</h1>
        <h4 className={styles.card__subheading}>{authors}</h4>

        <p className={styles.card__description}>{truncatedDescription}</p>
        <Button name={"More Info"} handleEvent={handleInfo} />
      </div>
      {showModal && (
        <Modal
          closeModal={() => setShowModal(false)}
          image={image}
          title={title}
          authors={authors}
          description={description}
          averageRating={averageRating}
          categories={categories}
          language={language}
          publishedDate={publishedDate}
        />
      )}
    </article>
  );
};

export default Card;
