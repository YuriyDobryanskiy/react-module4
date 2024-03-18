import styles from './ImageCard.module.css';

export const ImageCard = ({ image }) => {
  return (
    <li className={styles.imageListItem} data-id={image.id}>
      <img
        className={styles.image}
        src={image.urls.small}
        data-src={image.urls.regular}
        alt={image.description}
      />
    </li>
  );
};
