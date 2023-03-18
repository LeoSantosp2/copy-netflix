import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home';

import GlobalStyled from '../styles/GlobalStyled';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <GlobalStyled />

            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}
