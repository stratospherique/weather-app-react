const baseApi = 'https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40';

const getAll = () => fetch(baseApi, { method: 'GET' })
  .then((response) => response.json())
  .catch((error) => {
    console.error(error);
    return null;
  });

export default getAll;
