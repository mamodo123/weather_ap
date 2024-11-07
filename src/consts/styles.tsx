import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    topContainer: {
        width: '100%',
        alignItems: 'center',
        padding: '10%',
    },
    overlayContainer: {
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        alignItems: 'center',
        padding: '5%',
        color: 'white',
        borderRadius: 30,
    },
    logo: {
        width: 128,
        height: 128,
        resizeMode: 'contain'
    },
    outsideStrokedText: {
        fontSize: 20,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    }
});