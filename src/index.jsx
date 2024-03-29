import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './assets/styles/main.module.scss';
import { App } from './App';

const rootElement = ReactDOMClient.createRoot(document.getElementById('root'));

rootElement.render(
    <App />
);
