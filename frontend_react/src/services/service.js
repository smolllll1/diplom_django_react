class Service  {


_link = "https://127.0.0.1:8000/"
    // description
    async getData() {
        const data = await fetch(`${this._link}test/`);
        if (data.status > 300 || data.status < 199) {
            throw new Error(`Виникла помилка у запиті: ${data.statusText} ${data.status} ${data.ok}`);
        } else {
            return await data.json();
        }
    }
    
}

export {Service};

/**_link = "https://swapi.dev/api/"
    // description
    async getPeoples() {
        const data = await fetch(`${this._link}people/`);
        if (data.status > 300 || data.status < 199) {
            throw new Error(`Виникла помилка у запиті: ${data.statusText} ${data.status} ${data.ok}`);
        } else {
            return await data.json();
        }
    }
    async getPlanets() {
        const data = await fetch(`${this._link}planets/`);
        if (!data.ok) {
            throw new Error(`Виникла помилка у запиті: ${data.statusText} ${data.status} ${data.ok}`);
        } else {
            return await (data.json());
        }

    } */
