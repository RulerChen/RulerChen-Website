import React, { useState, useCallback } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './styles.css';

interface ImageModalProps {
  src: string;
  alt?: string;
  caption?: string;
  width?: string | number;
  height?: string | number;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt = '', caption, width = '100%', height }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageUrl = useBaseUrl(src);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleModalClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    },
    [closeModal],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal],
  );

  return (
    <>
      <figure className={`image-modal-container`}>
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
          <button className="image-modal-close" onClick={closeModal} aria-label="Close modal">
            ×
          </button>
          <div className="image-modal-content">
            <img src={imageUrl} alt={alt} className="image-modal-fullscreen" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
