import Modal from 'react-modal';

export const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <img src={image.urls.regular} alt={image.description} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}