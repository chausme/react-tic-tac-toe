import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import Profile from './components/profile.js';

const root = ReactDOMClient.createRoot(document.getElementById('app'));

root.render(
    <>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
    </>
);
