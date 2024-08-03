import React, { useState, useEffect } from 'react';
import { HiChevronUp } from 'react-icons/hi';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 300) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [isVisible]);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-primary text-white rounded-full p-2 shadow-lg hover:bg-primary-dark transition-colors duration-300"
        aria-label="Scroll to Top"
      >
        <HiChevronUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
