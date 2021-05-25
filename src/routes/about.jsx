import React, { Component } from 'react';
import SideBar from '../components/sideBar';
import { PageContext, pages } from '../contexts/PageContext';
import AboutDetails from '../components/aboutDetails';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <main className='l-main'>
                    <PageContext.Provider value={pages}>
                            <SideBar />
                            <AboutDetails />
                    </PageContext.Provider>
                </main>
            </React.Fragment>
        );
    }
}

export default About;