
const Details = ({ episodeDetail, handleDetails }) => {

    const date = episodeDetail ? new Date(episodeDetail.pub_date_ms * 1000) : null
    const months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return (
        <div className={episodeDetail ? 'l-main__episode-details' : null}>
            {episodeDetail ? (
                <div className='l-main__episode-details__active'>
                    <div className='l-main__episode-details__active__top'>
                        <img src={episodeDetail.thumbnail} width='160' height='160'/>
                        <div className='episode-titles'>
                            <span>{episodeDetail.podcast.title_original}</span>
                            <h1>{episodeDetail.title_original}</h1>
                        </div>
                        <img src="images/close-button.svg" height='16' width='16' onClick={() => handleDetails(null)}/>
                    </div>
                    <div className='l-main__episode-details__active__medium'>
                        <hr />
                        <span>{months_arr[date.getMonth()] + ' ' + date.getDay()}</span>
                        <hr />
                    </div>
                    <div className='l-main__episode-details__active__bottom'>
                        <p>{episodeDetail.description_original}</p>
                    </div>
                </div>
            ) 
            : 
            null}
        </div>
    );
};

export default Details;