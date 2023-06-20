import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    clock: {
        alignItems: "flex-end",
    },

    weather_label: {
        alignSelf: "flex-end",
        transform: [{ rotate: "-90deg" }],
        fontSize: 20,
    },

    image: {
        height: 90,
        width: 90,
    },

    temperature_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40
    },

    temperature: {
        fontSize: 80,
    },
});