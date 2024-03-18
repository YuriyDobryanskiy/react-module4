import styles from './SearchBox.module.css';
import { BsSearch } from 'react-icons/bs';

export const SearchBox = ({ setSearchQuery }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;

    if (query.trim() === '') {
      alert('Введіть текст для пошуку зображень.');
      return;
    }
    setSearchQuery(query);
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
