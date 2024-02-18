export const fetchBooks = async (searchTerm, limit = 40) => {
  const key = "AIzaSyAOxvj0vhDEKy_sgNqNyijutb9RbuwFeDc";
  // console.log(searchTerm);

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q="${searchTerm}"&maxResults=${limit}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const fetchedData = await response.json();
    console.log(fetchedData);

    const cleanedData = fetchedData.items.map((book) => {
      const {
        title,
        authors,
        description,
        imageLinks,
        idpublishedDate,
        averageRating,
        categories,
        language,
        publishedDate,
      } = book.volumeInfo;

      const { id } = book.accessInfo;

      return {
        title,
        authors,
        description,
        imageLinks,
        publishedDate,
        averageRating,
        categories,
        language,
        publishedDate,
        id,
      };
    });

    return cleanedData;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
