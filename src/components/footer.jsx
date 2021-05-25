import Player from './player';

function Footer({currentEpisode, handleDetails}) {

    return(
        <footer className={!currentEpisode ? 'l-footer-hide' : 'l-footer'}>
            <Player 
                currentEpisode={currentEpisode}
                handleDetails={handleDetails}
            />
        </footer>
    );
};

export default Footer;