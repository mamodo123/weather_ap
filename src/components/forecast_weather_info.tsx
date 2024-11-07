import { globalStyle } from "../consts/styles";
import { Image, Text, View } from "react-native";
import { getDayShort } from "../functions/date";
import { DailyForecast } from "../models/weather";


interface ForecastWeatherInfoProps {
    forecastDay: DailyForecast;
}

const ForecastWeatherInfo: React.FC<ForecastWeatherInfoProps> = ({ forecastDay }) => {

    return (
        <View style={globalStyle.overlayContainer}>
            <Text style={{ color: 'white', fontSize: 35 }}>{getDayShort(forecastDay.date)}</Text>
            <Text style={{ color: 'white', fontSize: 15 }}>Averages</Text>
            <Image
                style={globalStyle.logo}
                source={{
                    uri: 'https://' + forecastDay.day.condition.icon.replace('64x64', '128x128'),
                }}
                resizeMode="contain"
            />
            <Text style={{ color: 'white', fontSize: 35 }}>{forecastDay.day.avgtemp_c}° c</Text>
            <Text style={{ color: 'white' }}>Humidity: {forecastDay.day.avghumidity}%</Text>
            <Text style={{ color: 'white', marginTop: 10, fontSize: 25 }}>{forecastDay.day.condition.text}</Text>
        </View>
    );
};

export default ForecastWeatherInfo;