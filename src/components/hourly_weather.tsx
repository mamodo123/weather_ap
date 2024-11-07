import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { getHourFromDate } from '../functions/date';
import { globalStyle } from '../consts/styles';
import { DailyForecast } from '../models/weather';

interface HourlyWeatherProps {
    forecastDay: DailyForecast;
}

const HourlyWeather: React.FC<HourlyWeatherProps> = ({ forecastDay }) => {

    return (
        <FlatList
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            style={{ width: '100%' }}
            data={forecastDay.hour}
            keyExtractor={(item, index) => `${item.time}-${index}`}
            ItemSeparatorComponent={() => (
                <View style={{ height: 1, backgroundColor: 'white', opacity: 0.8 }} />
            )}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <View style={styles.dayContainer}>
                        <Text style={[globalStyle.outsideStrokedText, { textAlign: 'center', fontSize: 25 }]}>
                            {getHourFromDate(item.time)}h
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Image
                            style={styles.icon}
                            source={{ uri: 'https://' + item.condition.icon }}
                            resizeMode="contain"
                        />
                        <Text style={[globalStyle.outsideStrokedText, { fontSize: 14, textAlign: 'center' }]}>
                            {item.condition.text}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={[globalStyle.outsideStrokedText, { fontSize: 20, lineHeight: 40 }]}>
                            {item.temp_c}°
                        </Text>
                        <Text style={[globalStyle.outsideStrokedText, { fontSize: 14, lineHeight: 20 }]}>
                            Humidity: {item.humidity}%
                        </Text>
                    </View>
                </View>
            )}
            scrollEnabled={false} // Desativa a rolagem da FlatList
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dayContainer: {
        flex: 1,
        alignItems: 'center',
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    icon: {
        width: 40,
        height: 40,
    },
});

export default HourlyWeather;
