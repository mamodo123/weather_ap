import React, { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import WeatherForecast from "../components/forecast_days_list";
import { globalStyle } from "../consts/styles";
import { getBgByCondition } from "../functions/bg_images";
import { getDayShort } from "../functions/date";
import TodayWeatherInfo from "../components/today_weather_info";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NewCityModal from "../components/new_city_modal";
import { useWeather } from "../WeatherContext";
import NoWeather from "../components/no_weather";

const WeatherScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openCityModal = () => setModalVisible(true);
  const closeCityModal = () => setModalVisible(false);

  const { weatherData } = useWeather();

  const insets = useSafeAreaInsets();

  if (weatherData) {

    return (
      <ImageBackground
        source={getBgByCondition(weatherData.current.condition.code)}
        style={globalStyle.background}
        resizeMode="cover"
      >
        <View style={{ paddingTop: insets.top, flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '2%' }}>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={globalStyle.outsideStrokedText}>{getDayShort(weatherData.current.last_updated)}</Text>
            <TouchableOpacity onPress={openCityModal}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={globalStyle.outsideStrokedText}>
                  {weatherData.location.name}
                </Text>
                <Text style={[globalStyle.outsideStrokedText, { fontSize: 16 }]}>▼</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={globalStyle.topContainer}>
            <TodayWeatherInfo weather={weatherData} />
          </View>
          <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <WeatherForecast forecastDays={weatherData.forecast.forecastday.slice(1)} />
          </View>
        </View>

        <NewCityModal visible={modalVisible} closeCityModal={closeCityModal} />

      </ImageBackground>
    );
  } else {
    return <NoWeather />;
  }
};

export default WeatherScreen;
