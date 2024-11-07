import axios from 'axios';
import { api_key, defaultCity } from '../consts/env';
import { Weather } from '../models/weather';

const fetchWeatherForecast = async (city?: string): Promise<Weather> => {
    try {
        const cityName = encodeURIComponent(city ?? defaultCity);

        const response = await axios.get(
            `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${cityName}&days=3`
        );

        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error in fetch Weather API", error);
        throw error;
    }
};


export default fetchWeatherForecast;