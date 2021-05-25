import React, { Component, useContext } from 'react';
import SideBar from '../components/sideBar';
import Content from '../components/content';
import Footer from '../components/footer';
import Details from '../components/details';
import { PageContext, pages } from '../contexts/PageContext';
import { getEpisodes } from '../services/homeService';

class Home extends Component {

    state = {
        count: 0,
        episodes: [],
        currentEpisode: '',
        searchQuery: '',
        ordenate: 'name',
        ordenateButton: false,
        episodeDetail: null
    };

    async componentDidMount() {
        const {count, results} = await getEpisodes();
        this.setState({ count });
        this.setState({ episodes: results });
    }

    setCurrent = current => {
        this.setState({currentEpisode: current});
    };

    handleSearch = searchQuery => {
        this.setState({ searchQuery })
    };

    handleOrdenate = (method) => {
        
        const ordenateButton = !this.state.ordenateButton
        let episodes = [...this.state.episodes]

        if(method === 'date') {
            episodes = episodes.sort(function(x, y) {
                return x.pub_date_ms - y.pub_date_ms
            });
            this.setState({episodes});
            this.setState({ ordenateButton });
            return null;
        };

        episodes = episodes.sort(function(x, y) {
            let a = x.title_original.toLowerCase(), b = y.title_original.toLowerCase();
            return a == b ? 0 : a > b ? 1 : -1;
        });
        this.setState({ episodes });
        this.setState({ ordenateButton })
    };

    handleOrdenateButton = ordenateButton => {
        this.setState({ ordenateButton });
    };

    handleDetails = episodeDetail => {

        const searchQuery = '';

        this.setState({ searchQuery })
        this.setState({ episodeDetail })
    };
   
    render() {

        let searchedEpisodes = this.state.searchQuery ? this.state.episodes.filter(episodes => episodes.title_original.toLowerCase().match(this.state.searchQuery.toLowerCase())) : null;

        const styleMain = {
            'height': '90vh'
        };

        return (
            <React.Fragment>
                <Details
                    episodeDetail={this.state.episodeDetail}
                    handleDetails={this.handleDetails}
                />
                <main className='l-main' style={this.state.currentEpisode.length === 0 ? null : styleMain}>
                    <PageContext.Provider value={pages}>
                        <SideBar />
                        <Content 
                            episodes={this.state.episodes}
                            setCurrent={this.setCurrent}
                            handleSearch={this.handleSearch}
                            searched={searchedEpisodes}
                            ordenateButton={this.state.ordenateButton}
                            handleOrdenate={this.handleOrdenate}
                            handleOrdenateButton={this.handleOrdenateButton}
                            handleDetails={this.handleDetails}
                        />
                    </PageContext.Provider>
                </main>
                <Footer
                    currentEpisode={this.state.currentEpisode}
                    handleDetails={this.handleDetails}
                />
            </React.Fragment>
        );
    }
}

export default Home;