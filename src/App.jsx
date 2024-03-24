import { useState, useEffect } from 'react';
import {
  Container,
  SearchBox,
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
  //
  useEffect(() => {
    async function fetchAllImages() {
      setIsLoading(true);
      setError(null);

      try {
        if (searchQuery.length >= 3) {
          const { data, totalPages } = await fetchImages(searchQuery, page);
          setImages(prevState => {
            return [...prevState, ...data];
          });
          setTotalPages(totalPages);
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

  return (
    <Container>
      <SearchBox
        setSearchQuery={setSearchQuery}
        setImages={setImages}
        setPage={setPage}
      />
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
