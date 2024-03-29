import { useState, useEffect } from 'react';
import {
  Container,
  SearchBar,
  ImageGallery,
  LoadingSpinner,
  ErrorMessage,
  LoadMoreBtn,
  ImageModal,
} from 'components';

import { fetchImages } from './services/api.js';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  //
  //

  useEffect(() => {
    async function fetchAllImages() {
      setIsLoading(true);
      setError(null);

      try {
        if (searchQuery.length >= 3) {
          const { data, totalPages } = await fetchImages(searchQuery, page);
          if (data.length != 0) {
            setImages(prevState => {
              return [...prevState, ...data];
            });
            setTotalPages(totalPages);
          } else {
            ErrorMessage('No items were found for your request!');
            setTotalPages(0);
          }
        }
      } catch (error) {
        ErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllImages();
  }, [searchQuery, page]);

  const handleImageClick = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  const loadMore = () => {
    setPage(prevState => (prevState += 1));
  };

  function clearSubmit(query) {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  }

  return (
    <Container>
      <SearchBar clearSubmit={clearSubmit} />
      <ImageGallery images={images} onClick={handleImageClick} />
      {isLoading && <LoadingSpinner />}

      {totalPages > 1 && !error && <LoadMoreBtn loadMore={loadMore} />}
      {showModal && (
        <ImageModal
          isOpen={showModal}
          onClose={closeModal}
          largeImageURL={largeImageURL}
        />
      )}
    </Container>
  );
};
