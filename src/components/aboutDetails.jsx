const AboutDetails = () => {
    return (
        <div className='about-details'>
            <div className='about-details__top'>
                <h1>
                    Front Cast
                </h1>
            </div>
            <hr />
            <div className='about-details__medium'>
                <p>
                    Front Cast is a Pocket Cast clone, using the test API from Listen Notes (listennotes.com).
                </p>
            </div>
            <div className='about-details__bottom'>
                <h3>
                    <a href="https://github.com/CarlosOrnelo/">
                        <img src="images/GitHub-Mark/PNG/GitHub-Mark-64px.png" alt="" />
                    </a>
                </h3>
            </div>
        </div>
    )
};

export default AboutDetails;