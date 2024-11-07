import React from 'react';
import { ImageBackground, View, ScrollView } from 'react-native';
import { getBgByCondition } from '../functions/bg_images';
import HourlyWeather from '../components/hourly_weather';
import { globalStyle } from '../consts/styles';
import ForecastWeatherInfo from '../components/forecast_weather_info';
import { useLocalSearchParams } from 'expo-router';
import { useWeather } from '../WeatherContext';
import NoWeather from '../components/no_weather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ForecastDayInfo = () => {
    const params = useLocalSearchParams();
    const { dayIndex } = params;
    const { weatherData } = useWeather();
    const dayIndexNumber = Number(dayIndex);
    const forecastDay = weatherData?.forecast.forecastday[dayIndexNumber];

    if (!forecastDay) {
        return <NoWeather />;
    }

    const insets = useSafeAreaInsets();

    return (
        <ImageBackground
            source={getBgByCondition(forecastDay.day.condition.code)}
            style={globalStyle.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={{ paddingTop: insets.top, flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: '2%' }}>
                <View style={globalStyle.topContainer}>
                    <ForecastWeatherInfo forecastDay={forecastDay} />
                </View>
                <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <HourlyWeather forecastDay={forecastDay} />
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default ForecastDayInfo;
