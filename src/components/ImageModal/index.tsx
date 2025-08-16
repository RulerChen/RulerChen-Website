import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './styles.css';

interface ImageModalProps {
  src: string;
  alt?: string;
  caption?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt = '', caption, width, height, className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageUrl = useBaseUrl(src);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      <figure className={`image-modal-container ${className}`}>
        <img
          src={imageUrl}
          alt={alt}
          width={width}
          height={height}
          className="image-modal-thumbnail"
          onClick={openModal}
          style={{ cursor: 'pointer' }}
          loading="lazy"
        />
        {caption && <figcaption className="image-modal-caption">{caption}</figcaption>}
      </figure>

      {isModalOpen && (
        <div
          className="image-modal-overlay"
          onClick={handleModalClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Full screen image view"
        >
          <div className="image-modal-content">
            <button className="image-modal-close" onClick={closeModal} aria-label="Close modal">
              ×
            </button>
            <img src={imageUrl} alt={alt} className="image-modal-fullscreen" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
