import styles from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onClose, largeImageURL }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.content}>
      <button onClick={onClose} className={styles.close}>
        X
      </button>
      <img src={largeImageURL.url} alt={largeImageURL.alt} />
    </Modal>
  );
};
