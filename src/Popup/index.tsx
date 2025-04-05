import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from './Popup.tsx';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>,
  );
}
