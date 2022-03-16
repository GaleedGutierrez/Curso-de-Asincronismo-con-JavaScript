const fetchData = require('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const charecter = await fetchData(`${url_api}${data.results[0].id}`);
        const origin = await fetchData(charecter.origin.url);

        console.log(data.info.count, '\n', charecter.name, '\n', origin.dimension);
    } catch (error){
        console.error(error)
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');