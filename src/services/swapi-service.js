export default class SwapiService {

    _apiBase = "https://randomuser.me/api";
    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
        }

        return res.json();
    }

    async getAllPeaple() {
        const res = await this.getResource(`?results=50&seed=abc`);
        return res.results;
    }
}


const api = new SwapiService();

export {
    api
}
