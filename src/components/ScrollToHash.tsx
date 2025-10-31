import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  // Get the current URL path and hash (e.g., "#hyderabad")
  const { pathname, hash } = useLocation();

  // useEffect runs every time the path or hash changes
  useEffect(() => {
    // 1. Check if a hash exists in the URL
    if (hash) {
      // 2. Remove the '#' prefix to get the element ID (e.g., "hyderabad")
      const id = hash.substring(1); 
      const element = document.getElementById(id);
      
      // 3. Use a setTimeout to ensure the target component is fully rendered
      // before attempting to scroll to it.
      const timeoutId = setTimeout(() => {
        if (element) {
          // 4. Force the element to scroll into the viewport
          element.scrollIntoView({ 
            behavior: 'smooth', // Optional: smooth scroll animation
            block: 'start'      // Aligns the top of the element to the top of the viewport
          });
        }
      }, 10); // A small delay is often needed in SPAs
      
      return () => clearTimeout(timeoutId); // Cleanup function
    } 
    // If there's no hash, you might optionally want to scroll to the top of the page.
    else {
        window.scrollTo(0, 0); 
    }
  }, [pathname, hash]); // Rerun whenever the path or hash changes

  // This component doesn't render anything, it only handles a side effect
  return null;
};

export default ScrollToHash;