import React, { useContext, createContext } from 'react';

export const pages = [
    {page: '/podcasts', name: 'Podcasts', image: 'images/podcasts.svg'},
    {page: '/about', name: 'About', image: 'images/about.svg'}
];

export const PageContext = createContext();