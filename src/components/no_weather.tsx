import { View, Text, StyleSheet } from 'react-native';

export default function NoWeather() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>No weather provided</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // You can adjust the background color
    },
    message: {
        fontSize: 18,
        color: 'black', // Or any color you prefer
        textAlign: 'center',
    },
});
