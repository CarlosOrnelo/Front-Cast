import { useEffect, useRef, useState } from "react";

const SearchBar = ({handleSearch, searched, handleDetails}) => {

    // States
    const [focus, setFocus] = useState(false);

    // Refs
    const inputRef = useRef('');
    
    // Styles
    const styleSearch = {
        "backgroundImage": "url(images/loupe-icon.svg)"
    };

    useEffect(() => {
        window.addEventListener('click', () => {
            if(document.activeElement === inputRef.current) {
                setFocus(true);
                return 
            };
            setFocus(false);
            
            if(inputRef.current.value) {
                inputRef.current.value = '';
                handleSearch('');
            }
        });
    }, [])


    // Functions
    const handleFocus = (searchQuery) => {
        handleSearch(searchQuery);
        inputRef.current.focus();
    };

    const handleNewDetails = (element) => {
        inputRef.current.value = '';
        setFocus(false);
        handleDetails(element);
    };


    return (
        <div className='search-general'>
            <div className={focus ? 'search-bar-focused' : 'search-bar'}>
            {/* <div className='search-bar'> */}
                <input 
                    type="text" 
                    className='search-field' 
                    placeholder='Search...'
                    onChange={(e) => handleFocus(e.target.value)}
                    ref={inputRef}
                    style={styleSearch}
                />

                {!searched ? null : (
                    <div className='search-result'>
                        {searched.length !== 0 ? (
                            searched.map(element => {
                                return (
                                    <div key={element.id} className='item-search'>
                                        <button className='button-search-result' onClick={() => handleNewDetails(element)}>
                                            <img src={element.image}/>
                                            <div className='episode-name'>
                                                {element.title_original}
                                            </div>
                                        </button>
                                    </div>
                                )
                            })
                        ) :
                        // If there is no results, return this Div 
                        (
                            <div className='no-result'>
                                <p>No podcasts found</p>
                            </div>

                        )
                        }
                    </div>
                )}
            </div>
        </div>
    )
};

export default SearchBar;