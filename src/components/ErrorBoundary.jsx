// src/components/ErrorBoundary.jsx
import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('UI Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h1>Something went wrong</h1>
          <p>Our team has been notified. Please try refreshing.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
