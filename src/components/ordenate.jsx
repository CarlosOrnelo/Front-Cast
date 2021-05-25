
const Ordenate = ({ordenateButton, handleOrdenate, handleOrdenateButton}) => {

    return (
        <div className='ordenate'>
            <button className='ordenate-button' onClick={() => handleOrdenateButton(!ordenateButton)}>
                <img src="images/ordenate-button.svg" alt=""/>
            </button>
            {!ordenateButton ? null : (
                <div className='ordenate-objects'>
                    <button className='podcast-name-button' onClick={() => handleOrdenate('name')}>
                        Podcast Name
                    </button>
                    <button className='podcast-date-button' onClick={() => handleOrdenate('date')}>
                        Podcast Date
                    </button>
                </div>
            )}
        </div>
    );
};

export default Ordenate;