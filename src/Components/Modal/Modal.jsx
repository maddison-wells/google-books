import React, { useState, useRef, useEffect } from "react";
import styles from "./Modal.module.scss";
import { Helmet } from "react-helmet";

const Modal = ({
  closeModal,
  title = "Unknown",
  authors = "Unknown author",
  description = "Not available",
  image,
  averageRating = "No rating",
  categories,
  language,
  publishedDate,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeModal]);

  const generateStars = (rating) => {
    const starCount = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = Array.from({ length: starCount }, (_, index) => (
      <i key={index} className="fa-solid fa-star"></i>
    ));

    if (hasHalfStar) {
      stars.push(<i key="half" className="fa-solid fa-star-half"></i>);
    }

    return stars;
  };

  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/e25bb34f55.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <article ref={modalRef} className={styles.card}>
        <div className={styles.card__container}>
          {/* <img className={styles.card__img} src={image} alt="book image" /> */}
          <p>
            <span className={styles.card__stars}>
              {generateStars(averageRating)}
            </span>
          </p>

          <h1 className={styles.card__heading}>{title}</h1>
          <h4 className={styles.card__subheading}>{authors}</h4>
          <p>
            Published: {publishedDate} ({language})
          </p>
          <p>
            Categories: <span className={styles.card__span}>{categories}</span>
          </p>
        </div>
        <p className={styles.card__description}>{description}</p>

        <div className={styles.card__container}>
          <button onClick={closeModal} className={styles.card__button}>
            Close
          </button>
        </div>
      </article>
    </>
  );
};

export default Modal;
