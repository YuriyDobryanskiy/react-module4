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
    setImages([]);
    setPage(1);
  }, [searchQuery]);

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
        console.error('response =>', error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllImages();
  }, [searchQuery, page]);

  // const handleImageClick = largeImageURL => {
  //   setShowModal(true);
  //   setLargeImageURL(largeImageURL);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setLargeImageURL('');
  // };

  const loadMore = () => {
    setPage(prevState => (prevState += 1));
  };

  return (
    <Container>
      <h1>Image Search</h1>

      <SearchBox setSearchQuery={setSearchQuery} />
      <ImageGallery images={images} />
      {isLoading && <LoadingSpinner />}

      {totalPages > 1 && !error && <LoadMoreBtn loadMore={loadMore} />}
      {/* {showModal && (
        <ImageModal onClose={closeModal} largeImageURL={largeImageURL} />
      )} */}
    </Container>
  );
};