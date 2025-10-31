import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // 1. Get the current location object from React Router
  const location = useLocation();

  // 2. Use the useEffect hook to run code when the location changes
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [location.pathname]); // Dependency array: Re-run effect whenever the URL path changes

  // This component doesn't render anything, it only handles a side effect
  return null;
};

export default ScrollToTop;