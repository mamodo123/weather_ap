import { Stack } from "expo-router";
import { WeatherProvider } from "../WeatherContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
    return (
        <SafeAreaProvider>
            <WeatherProvider>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name="weather" />
                    <Stack.Screen name="day_info" />
                </Stack>
            </WeatherProvider>
        </SafeAreaProvider>
    );
};