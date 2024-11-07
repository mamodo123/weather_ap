import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, ActivityIndicator, Linking } from 'react-native';
import { ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import fetchWeatherForecast from '../functions/api';
import { nightImage } from '../consts/images';
import { useWeather } from '../WeatherContext';
import { defaultCity } from '../consts/env';
import { globalStyle } from '../consts/styles';
import { router } from 'expo-router';

const LoadWeatherScreen = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { setWeatherData } = useWeather();

  const getLocationAndWeather = async () => {
    setLoading(true);
    try {
      const { status, canAskAgain } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        if (!canAskAgain) {
          setErrorMsg('Permission to access location is permanently denied.');
          Alert.alert(
            'Permission Denied',
            'You have permanently denied location access. Please enable it in the app settings.',
            [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Open Settings', onPress: () => Linking.openSettings() },
            ]
          );
        } else {
          setErrorMsg('Permission to access location was denied.');
        }
      } else {
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

        const data = await fetchWeatherForecast(`${location.coords.latitude},${location.coords.longitude}`);
        setWeatherData(data);
        router.replace({
          pathname: 'weather',
        });
      }
    } catch (error) {
      setErrorMsg('Error fetching weather data.');
    } finally {
      setLoading(false);
    }
  };

  const useDefaultCityWeather = async () => {
    try {
      setLoading(true);
      const data = await fetchWeatherForecast(defaultCity);
      setWeatherData(data);
      router.replace({
        pathname: 'weather',
      });
    } catch (error) {
      setErrorMsg('Error fetching default city weather data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocationAndWeather();
  }, []);

  if (loading) {
    return (
      <ImageBackground
        source={nightImage}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.text}>Loading location...</Text>
        </View>
      </ImageBackground>
    );
  } else {
    return (
      <ImageBackground
        source={nightImage}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={globalStyle.overlayContainer}>
            <Text style={styles.infoText}>
              We request your location to display the weather for your current location.
            </Text>
            {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
            <Button title="Try Again" onPress={getLocationAndWeather} />
            <View style={{ marginTop: 10 }}>
              <Button title={`Use default: ${defaultCity}`} onPress={useDefaultCityWeather} />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default LoadWeatherScreen;
