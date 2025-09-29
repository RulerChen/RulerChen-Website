import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './styles.css';

interface CarouselItem {
  src: string;
  alt?: string;
  caption?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  width?: string | number;
  height?: string | number;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showIndicators = true,
  showArrows = true,
  width = '100%',
  height = 'auto',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Convert relative URLs to absolute URLs
  const processedItems = items.map((item) => ({
    ...item,
    src: useBaseUrl(item.src),
  }));

  useEffect(() => {
    if (!autoPlay || isHovered || processedItems.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === processedItems.length - 1 ? 0 : prevIndex + 1));
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered, processedItems.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? processedItems.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === processedItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  if (!processedItems || processedItems.length === 0) {
    return null;
  }

  return (
    <div
      className="carousel-container"
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
    >
      <div className="carousel-wrapper">
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {processedItems.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={item.src}
                alt={item.alt || `Slide ${index + 1}`}
                className="carousel-image"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {item.caption && <div className="carousel-caption">{item.caption}</div>}
            </div>
          ))}
        </div>

      </div>

      {(showIndicators || showArrows) && processedItems.length > 1 && (
        <div className="carousel-indicators">
          {showArrows && (
            <button className="carousel-arrow carousel-arrow-prev" onClick={goToPrevious} aria-label="Previous slide">
              ‹
            </button>
          )}
          
          {showIndicators && processedItems.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          
          {showArrows && (
            <button className="carousel-arrow carousel-arrow-next" onClick={goToNext} aria-label="Next slide">
              ›
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Carousel;
