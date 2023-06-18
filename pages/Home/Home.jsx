import { Text, View } from "react-native";
import { s } from "./Home.style";
import { useEffect } from "react";
import * as NavigationBar from 'expo-navigation-bar';

export function Home() {

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("#000040");
    }, []);

    return (
        <>
            <View style={s.meteo_basic}>
                <Text style={{ fontSize: 60, color: "white" }}>Hello</Text>
            </View>
            <View style={s.searchbar_container}></View>
            <View style={s.meteo_advanced}></View>
        </>
    );
}