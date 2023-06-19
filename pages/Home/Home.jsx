import { Text, View } from "react-native";
import { s } from "./Home.style";
import { useEffect, useState } from "react";
import * as NavigationBar from 'expo-navigation-bar';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { MeteoAPI } from "../../api/meteo";

export function Home() {

    // Etat qui permet de stocker les coordonnées du téléphone
    const [coords, setCoords] = useState();
    // Etat qui permet de stocker les doonnées de l'API via les coordonnées de l'utilisateur
    const [weather, setWeather] = useState();

    // Permet de changer la couleur de la NavigationBar d'Android
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("#000040");
    }, []);

    // Permet de récuperer les positions GPS une seule fois lors du chargemment de l'application
    useEffect(() => {
        getUserCoords();
    }, []);

    // Permet de faire appel à la fonction fetchWeather chaque fois que les coordonnées changent.
    useEffect(() => {
        if (coords) {
            fetchWeather(coords)
        }
    }, [coords]);

    // Fonction qui permet de demander à l'utilisateur de partager ou non sa position GPS.
    // Si OUI ====> on récupère ses positions est on les sauvegardes via le setCoords prévu à cet effet.
    // Si NON ====> on affiche des fausses coordonnées, par exemple ici, ceux de Paris.
    async function getUserCoords() {
        let { status } = await requestForegroundPermissionsAsync();
        if (status == "granted") {
            const location = await getCurrentPositionAsync();
            setCoords({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            })
        } else {
            setCoords({ lat: "48.85", lng: "2.35" });
        }
    }

    // Fonction asynchrone (promesse, attente) qui permet de récuperer les données de l'API selon les coordonnées du téléphone
    // Il stock en suite les données attendu dans le state "weather".
    async function fetchWeather(coordinates) {
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
        setWeather(weatherResponse);
    }

    console.log(weather);



    return (
        <>
            <View style={s.meteo_basic}></View>
            <View style={s.searchbar_container}></View>
            <View style={s.meteo_advanced}></View>
        </>
    );
}
