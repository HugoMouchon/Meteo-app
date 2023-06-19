import { Text, View } from "react-native";
import { s } from "./Home.style";
import { useEffect, useState } from "react";
import * as NavigationBar from 'expo-navigation-bar';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { MeteoAPI } from "../../api/meteo";
import { Txt } from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../services/meteo-service";

export function Home() {

    // Etat qui permet de stocker les coordonnées du téléphone
    const [coords, setCoords] = useState();
    // Etat qui permet de stocker les doonnées de l'API via les coordonnées de l'utilisateur
    const [weather, setWeather] = useState();
    // Constante qui permet de stocker et de vérifier si "current_weather" existe dans le state.
    const currentWeather = weather?.current_weather

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

    return currentWeather ? (
        <>
            <View style={s.meteo_basic}>
                {/* Composant qui affiche
                    - La température actuelle arrondi au nombre entier
                    - Le nom de la ville 
                    - le label et le graphique correspondant au temps actuel (la fonction est dans "meteo-service.js")
                */}
                <MeteoBasic
                    temperature={Math.round(currentWeather?.temperature)}
                    city="Todo"
                    interpretation={getWeatherInterpretation(currentWeather.weathercode)}
                />
            </View>
            <View style={s.searchbar_container}></View>
            <View style={s.meteo_advanced}></View>
        </>
    ) : null
}
