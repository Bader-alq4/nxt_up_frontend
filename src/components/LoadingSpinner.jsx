function LoadingSpinner({ size = 'medium', light = false }) {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizes[size]} border-4 border-t-blue-600 border-r-transparent border-b-blue-600 border-l-transparent rounded-full animate-spin`}
        role="status"
        aria-label="loading"
      >
      </div>
    </div>
  );
}

export default LoadingSpinner; 