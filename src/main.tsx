import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { EXAMPLE_JSON_DATA } from './utils/constants.ts';

document.documentElement.style.setProperty('--bg-color', EXAMPLE_JSON_DATA.palette.background);

const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.className = "bg-[var(--bg-color)]";
}

createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
