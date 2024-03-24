import styles from './ImageCard.module.css';

export const ImageCard = ({ image, onClick }) => {
  return (
    <li className={styles.imageListItem} data-id={image.id}>
      <img
        className={styles.image}
        src={image.urls.small}
        data-src={image.urls.regular}
        alt={image.description}
        onClick={() =>
          onClick({ url: image.urls.full, alt: image.alt_description })
        }
      />
    </li>
  );
};
