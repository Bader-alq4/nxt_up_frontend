import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

function PageTransition({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Short delay to show transition

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
}

export default PageTransition; 