import styles from './ImageGallery.module.css';
import { ImageCard } from '../../components';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.imagesList}>
      {images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </ul>
  );
};
