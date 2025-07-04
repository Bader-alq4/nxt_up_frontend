import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';

// ✅ Initialize Sentry FIRST
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: import.meta.env.MODE,
});

// // ✅ Optional: Confirm Sentry initialized
// console.log("Sentry DSN:", import.meta.env.VITE_SENTRY_DSN);

// // ✅ OPTIONAL: Trigger test error (REMOVE after testing)
// setTimeout(() => {
//   throw new Error("🔥 Sentry test error from main.jsx");
// }, 1000);

// ✅ Render App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
