import styles from './SearchBar.module.css';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = ({ setSearchQuery, setImages, setPage }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;

    if (query.trim() === '') {
      alert('Введіть текст для пошуку зображень.');
      return;
    }
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <BsSearch className={styles.searchSVG} />
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={styles.searchInput}
          />
          <button type="submit" className={styles.submitBtn}>
            Search
          </button>
        </div>
      </form>
    </header>
  );
};
