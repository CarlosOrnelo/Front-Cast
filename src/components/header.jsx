import React, { useContext } from 'react';
import { PageContext } from '../contexts/PageContext';
import SearchBar from '../components/searchBar';

function Header({handleSearch, searched, setCurrent, handleDetails}) {

    const pages = useContext(PageContext);

    const title = pages.filter(element => {
        return element.page === window.location.pathname
    });

    return (
        <header className='l-main__content-container__header'>
            <h1>{title[0].name}</h1>
            <SearchBar
                handleSearch={handleSearch}
                searched={searched}
                setCurrent={setCurrent}
                handleDetails={handleDetails}
            />
        </header>
    )
}

export default Header;
