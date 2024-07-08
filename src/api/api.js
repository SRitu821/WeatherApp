
const apiKey = '546612ae423a6b42db4b336f0c59a477'; //api key

const getWeather = async(city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default getWeather;