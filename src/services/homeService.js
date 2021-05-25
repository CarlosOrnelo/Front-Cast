import http from './httpService';

const heroku = 'https://cors-anywhere.herokuapp.com/'
const apiEndpoint = 'https://listen-api-test.listennotes.com/api/v2/search?q=minimalism'

export async function getEpisodes() {
    const { data } = await http.get(heroku + apiEndpoint);
    return data;
}