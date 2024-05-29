import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4  bg-[#7c3aed] text-black p-2 rounded-full shadow-md hover:bg-blue hover:text-white focus:outline-none
       ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={24} />
    </button>
  );
}

export default ScrollToTop;