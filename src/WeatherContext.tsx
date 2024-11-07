import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Weather } from './models/weather';

interface WeatherContextType {
  weatherData: Weather | null;
  setWeatherData: (data: Weather | null) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
