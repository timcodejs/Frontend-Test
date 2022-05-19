import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { MACBOOK_2020_PRO_13 } from './api/data/MACBOOK_2020_PRO_13';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App sale={MACBOOK_2020_PRO_13} />
  </React.StrictMode>
);
