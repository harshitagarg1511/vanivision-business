import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // Defensive: if the root isn't present, log and avoid throwing the createRoot error
  // This prevents the uncaught "Target container is not a DOM element" exception.
  // Investigate why the root is missing (served HTML mismatch, extensions, or fallback code).
  // eslint-disable-next-line no-console
  console.error('Root container not found. React mount aborted.');
}
