
export const API_KEY = '585f48feebe2af92b908be39cef4eca8'
export const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast'


const WeatherService = {
    getForecastByCityName: async (city) => {
        try {

            console.log('log city', city.toLowerCase())

            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=585f48feebe2af92b908be39cef4eca8&units=metric`).then(response => response.json())

            console.log('log response', response)
            const forecastData = response.list.filter((_, index) => index % 8 === 0);

            return forecastData;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    },
};

export default WeatherService