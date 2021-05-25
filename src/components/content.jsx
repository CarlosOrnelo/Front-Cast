import Header from './header';
import ContentBody from './contentBody';

function Content({episodes, setCurrent, handleSearch, searched, ordenateButton, handleOrdenate, handleOrdenateButton, handleDetails, currentEpisode}) {

    return (
        <div className='l-main__content'>
            <div className='l-main__content-container'>
                <Header
                    handleSearch={handleSearch} 
                    searched={searched}
                    setCurrent={setCurrent}
                    episodes={episodes}
                    handleDetails={handleDetails}
                />
                <ContentBody 
                    episodes={episodes}
                    setCurrent={setCurrent}
                    ordenateButton={ordenateButton}
                    handleOrdenate={handleOrdenate}
                    handleOrdenateButton={handleOrdenateButton}
                />
            </div>
        </div>
    )
};

export default Content;