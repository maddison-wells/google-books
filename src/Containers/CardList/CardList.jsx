import React, { useEffect, useState } from "react";
import { fetchBooks } from "../../Data/js/main";
import Card from "../../Components/Card/Card";
import styles from "./CardList.module.scss";
import loadingGif from "../../img/loading.gif";
import noCover from "../../img/no-book-cover.jpeg";
import { languageCodeToName } from "../../Data/js/data";
import searchImg from "../../img/home-page-image.png";

const CardList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const results = await fetchBooks(searchTerm);
        setBooks(results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <section>
      <div className={styles.container}>
        {searchTerm && !loading && books.length === 0 && (
          <p>No results found.</p>
        )}

        {!searchTerm && (
          <img className={styles.container__img} src={searchImg} alt="Search" />
        )}
        {loading && <img src={loadingGif} alt="Loading" />}
      </div>
      <div className={styles.container}>
        {books.map((book, index) => (
          <Card
            key={book.id || index}
            image={book.imageLinks ? book.imageLinks.thumbnail : noCover}
            title={book.title}
            authors={
              book.authors && book.authors.length > 1
                ? book.authors.join(", ")
                : book.authors
            }
            description={book.description}
            averageRating={book.averageRating}
            categories={book.categories}
            language={languageCodeToName(book.language)}
            publishedDate={book.publishedDate}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
