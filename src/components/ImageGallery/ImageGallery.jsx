import styles from './ImageGallery.module.css';
import { ImageCard } from '../../components';
// import { lazy } from 'yup';
//const ImageCard = lazy(() => import('../ImageCard/ImageCard'));

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={styles.imagesList}>
      {images.map(image => (
        <ImageCard key={image.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};
