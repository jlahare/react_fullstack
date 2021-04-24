import axios from 'axios';

async function postPerson(nameValue, countryValue) {
    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }

    const params = new URLSearchParams()
    params.append('name', nameValue)
    params.append('country', countryValue)

    const res = await axios.post('http://localhost:3000/person/addPerson', params, config)
    .then((response) => {
        console.log('respone i received is ' + JSON.stringify(response));
        return response;
    }, (error) => {
        console.log('error i received is ' + error);
        throw error;
    });
    return res;
}

async function getPersons() {

    const res =  await axios.get('http://localhost:3000/person/getPersons')
    .then((response) => {
        console.log('respone i received is ' + JSON.stringify(response));
        return response;

    }, (error) => {
        console.log('error i received is ' + error);
        throw error;
    });
    return res;
}
export default {
    postPerson,
    getPersons
}