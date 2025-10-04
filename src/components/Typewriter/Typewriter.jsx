import { useState, useEffect } from 'react';

import './Typewriter.css';

export const useTypewriter = ({ words = [], loop = true, typeSpeed = 70, deleteSpeed = 30, delaySpeed = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));

          if (displayText === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          setDisplayText(currentWord.substring(0, displayText.length + 1));

          if (displayText === currentWord) {
            if (loop || wordIndex < words.length - 1) {
              setIsPaused(true);
            }
          }
        }
      },
      isPaused ? delaySpeed : isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [displayText, wordIndex, isDeleting, isPaused, words, loop, typeSpeed, deleteSpeed, delaySpeed]);

  return displayText;
};

export const Typewriter = ({ words, loop, typeSpeed, deleteSpeed, delaySpeed, className, ...props }) => {
  const text = useTypewriter({ words, loop, typeSpeed, deleteSpeed, delaySpeed });

  return (
    <span className={className} {...props}>
      {text}
      <span className="typewriter-cursor">_</span>
    </span>
  );
};
