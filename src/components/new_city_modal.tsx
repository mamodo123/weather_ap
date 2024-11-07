import React, { useState } from "react";
import { Text, Modal, TextInput, View, Button, TouchableWithoutFeedback, Keyboard, ImageBackground, ActivityIndicator } from "react-native";
import { images } from "../consts/images";
import { useWeather } from "../WeatherContext";
import { globalStyle } from "../consts/styles";
import { Weather } from "../models/weather";
import fetchWeatherForecast from "../functions/api";

interface NewCityModalProps {
    visible: boolean;
    closeCityModal: () => void;
}

const NewCityModal: React.FC<NewCityModalProps> = ({ visible, closeCityModal }) => {
    const { weatherData, setWeatherData } = useWeather();

    const [weather, setWeather] = useState<Weather | null>(weatherData);
    const [city, setCity] = useState<string>(weatherData?.location.name ?? "");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const searchWeatherByCity = async () => {
        try {
            setLoading(true);
            setError("");
            const newWeatherData = await fetchWeatherForecast(city);
            setWeather(newWeatherData);
        } catch {
            setError("Location not found");
        } finally {
            setLoading(false);
        }
    };

    const setSelectedWeather = () => {
        if (weather) {
            setWeatherData(weather);
            closeCityModal();
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={closeCityModal}
        >
            <TouchableWithoutFeedback onPress={closeCityModal}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{ width: '100%', padding: '10%', borderRadius: 15, overflow: "hidden" }}>
                            <ImageBackground
                                source={images.get('sun')!}
                                style={{
                                    padding: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 15,
                                    overflow: 'hidden',
                                }}
                                imageStyle={{ borderRadius: 15 }}
                            >
                                <Text
                                    style={[globalStyle.outsideStrokedText, {
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        marginBottom: 15,
                                    }]}
                                >
                                    Enter City Name
                                </Text>
                                <TextInput
                                    onChangeText={(text) => setCity(text)}
                                    defaultValue={weatherData?.location.name}
                                    placeholder="City name"
                                    placeholderTextColor="#444444"
                                    style={[globalStyle.outsideStrokedText, {
                                        borderBottomWidth: 1,
                                        borderColor: "#444",
                                        width: "100%",
                                        padding: 8,
                                        fontSize: 18,
                                        marginBottom: 20,
                                    }]}
                                />
                                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                    <Button
                                        title="Cancel"
                                        onPress={closeCityModal}
                                        color="#ad8653"
                                    />
                                    <Button
                                        title={loading ? "Loading..." : "Search"}
                                        onPress={searchWeatherByCity}
                                        color="#557356"
                                        disabled={loading}
                                    />
                                </View>
                                {error ? (
                                    <Text style={[globalStyle.outsideStrokedText, { color: '#ff3665', marginTop: 10 }]}>
                                        {error}
                                    </Text>
                                ) : (
                                    weather && (
                                        <View style={{ paddingVertical: 10, flexDirection: 'column', alignItems: 'center' }}>
                                            <Text style={globalStyle.outsideStrokedText}>{weather.location.name}</Text>
                                            <Text style={globalStyle.outsideStrokedText}>{weather.location.region}</Text>
                                            <Text style={globalStyle.outsideStrokedText}>{weather.location.country}</Text>
                                            <View style={{ marginTop: 10 }}>
                                                <Button
                                                    title="Select city"
                                                    onPress={setSelectedWeather}
                                                    color="#ada161"
                                                />
                                            </View>
                                        </View>
                                    )
                                )}
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default NewCityModal;
