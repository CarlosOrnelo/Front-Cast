import React, { useState, useEffect, useRef } from 'react';
import Ordenate from './ordenate';
const _ = require('lodash');

function ContentBody({episodes, setCurrent, ordenateButton, handleOrdenate, handleOrdenateButton}) {

    // States
    const [divElements, setDivElements] = useState([]);
    const [episodesCheck, setEpisodesCheck] = useState();

    const episodesRef = useRef();

    if (episodes !== episodesCheck) {
        setEpisodesCheck(episodes);
        episodesRef.current = episodes;
    };
   
    useEffect(() => {
        setDivElements(changeDiv());
    }, 
    [episodesCheck]
    );


    useEffect(() => {

        let timeout = null;
        
        const resizeListener = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => changeDiv(), 150)
        };
        window.addEventListener('resize', resizeListener);
        
        return() => window.removeEventListener('resize', resizeListener);
    }, [])

    const getChunck = (windowSize) => {
        let chunkSize = 1

        if(windowSize > 1360)
            chunkSize = 8
        else if (windowSize > 1024) 
            chunkSize = 7
        else if (windowSize > 600)
            chunkSize = 6
        else if (windowSize > 554)
            chunkSize = 5
        else chunkSize = 4

        return chunkSize
    }
    
    const changeDiv = () => {

        const chunkSize = getChunck(window.innerWidth);
        
        let components = [];
       
        components = _.chunk(episodesRef.current, chunkSize);

        if (components.length > 0) {
            const lastElement = [...components[components.length - 1]];
            for (let index = 0; index < chunkSize - lastElement.length; index++) {
                components[components.length - 1].push({id: index});
            };
        };
       
        setDivElements(components);

        return components;
    };

    return (
        <main className='l-main__content__body'>
            <section className='l-main__content-container__divider'> 
                <hr/>
                    <Ordenate
                        ordenateButton={ordenateButton}
                        handleOrdenate={handleOrdenate}
                        handleOrdenateButton={handleOrdenateButton}
                    />
                <hr/>
            </section>
            <ul className='l-main__content-container__body'>
                {divElements.map((episode, range) => {
                    return (
                        <div className='divLateral' key={'divLateral-' + range}>
                            {episode.map((element) => {
                                return (
                                    <li key={element.id}>
                                        <button onClick={() => setCurrent(element)}>
                                            <div className='image-wrapper'>
                                                <img src={element.image}/>
                                            </div>
                                        </button>
                                    </li>
                                )
                            })}
                        </div>
                    )
                })}
            </ul>
        </main>
    )
}

export default ContentBody;
