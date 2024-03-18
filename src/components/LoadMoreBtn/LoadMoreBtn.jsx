import styles from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ loadMore }) => {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => {
        loadMore();
      }}
    >
      Load more
    </button>
  );
};
