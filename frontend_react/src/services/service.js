class Service {
    /** GET REQUEST */

    // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    _linkTmdb = "https://api.themoviedb.org/3/";

    /** description movies */
    async getDataMoviesPopular() {
        const data = await fetch(`${this._linkTmdb}movie/popular?api_key=4b9514bc01000261f03dfb9e5e317db3&language=en-US&page=1`);
        if (data.status > 300 || data.status < 199) {
            throw new Error(`Виникла помилка у запиті: ${data.statusText} ${data.status} ${data.ok}`);
        } else {
            return await data.json();
        }
    }

    /** description people */
    async getDataPeoplePopular() {
        const data = await fetch(`${this._linkTmdb}person/popular?api_key=4b9514bc01000261f03dfb9e5e317db3&language=en-US&page=1`);
        if (data.status > 300 || data.status < 199) {
            throw new Error(`Виникла помилка у запиті: ${data.statusText} ${data.status} ${data.ok}`);
        } else {
            return await data.json();
        }
    }


    /** backend project */
    _linkDjango = "pop_piple/"
    async getData() {
        const data = await fetch(`${this._linkDjango}`);
        if (data.status > 300 || data.status < 199) {
            throw new Error(`Виникла помилка у запиті: ${data.statusText} ${data.status} ${data.ok}`);
        } else {
            return await data.json();
        }
    }
    
    /** backend project */
    // _linkDjango = "https://127.0.0.1:8000/"
    // async getData() {
    //     const data = await fetch(`${this._linkDjango}test/`);
    //     if (data.status > 300 || data.status < 199) {
    //         throw new Error(`Виникла помилка у запиті: ${data.statusText} ${data.status} ${data.ok}`);
    //     } else {
    //         return await data.json();
    //     }
    // }

}

export { Service };