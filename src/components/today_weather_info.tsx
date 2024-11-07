import { globalStyle } from "../consts/styles";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Weather } from "../models/weather";
import { router } from "expo-router";


interface TodayWeatherInfoProps {
    weather: Weather;
}

const TodayWeatherInfo: React.FC<TodayWeatherInfoProps> = ({ weather }) => {

    const openCurrentDayInfo = () => {
        router.push({
            pathname: 'day_info',
            params: { dayIndex: 0 },
        });
    };

    return (
        <View style={{ width: '100%' }}>
            <TouchableOpacity onPress={openCurrentDayInfo}>
                <View style={globalStyle.overlayContainer}>
                    <Image
                        style={globalStyle.logo}
                        source={{
                            uri: 'https://' + weather.current.condition.icon.replace('64x64', '128x128'),
                        }}
                        resizeMode="contain"
                    />
                    <Text style={{ color: 'white', fontSize: 35 }}>{weather.current.temp_c}° c</Text>
                    <Text style={{ color: 'white' }}>Humidity: {weather.current.humidity}%</Text>
                    <Text style={{ color: 'white', marginTop: 10, fontSize: 25 }}>{weather.current.condition.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TodayWeatherInfo;