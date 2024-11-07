import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getDayShort } from '../functions/date';
import { globalStyle } from '../consts/styles';
import { router } from 'expo-router';
import { DailyForecast } from '../models/weather';

interface WeatherForecastProps {
    forecastDays: DailyForecast[];
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecastDays }) => {

    const handlePress = (dayIndex: number) => {
        router.push({
            pathname: 'day_info',
            params: { dayIndex: dayIndex },
        });
    };

    return (
        <FlatList
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            style={{ width: '100%' }}
            data={forecastDays}
            keyExtractor={(item, index) => `${item.date}-${index}`}
            ItemSeparatorComponent={() => (
                <View style={{ height: 1, backgroundColor: 'white', opacity: 0.8 }} />
            )}
            renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => handlePress(index + 1)} style={styles.container}>
                    <View style={styles.dayContainer}>
                        <Text style={[globalStyle.outsideStrokedText, { textAlign: 'center', fontSize: 25 }]}>
                            {getDayShort(item.date).toUpperCase()}
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.icon}
                            source={{ uri: 'https://' + item.day.condition.icon }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.tempContainer}>
                            <Text style={globalStyle.outsideStrokedText}>{item.day.maxtemp_c}°</Text>
                            <Text style={globalStyle.outsideStrokedText}>{item.day.mintemp_c}°</Text>
                        </View>
                        <Text style={[globalStyle.outsideStrokedText, { fontSize: 14 }]}>
                            Humidity: {item.day.avghumidity}%
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
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
        flexDirection: 'column', // Alterado para coluna
        justifyContent: 'center',
        alignItems: 'center',
    },
    tempContainer: {
        width: '100%',
        paddingHorizontal: '5%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
    },
});

export default WeatherForecast;
