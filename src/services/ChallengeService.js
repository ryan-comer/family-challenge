import axios from 'axios';

const API_URL = 'http://localhost';
//const API_URL = 'http://familychallenge';
const API_PORT = 5000;

const CHALLENGES_ENDPOINT = '/getChallenges';

export function getChallenges() {
    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}:${API_PORT}${CHALLENGES_ENDPOINT}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}