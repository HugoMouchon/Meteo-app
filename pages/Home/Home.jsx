import { Text, View } from "react-native";
import { s } from "./Home.style";
import { useEffect, useState } from "react";
import * as NavigationBar from 'expo-navigation-bar';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";

export function Home() {

    // Etat qui permet de stocker les coordonnées du téléphone
    const [coords, setCoords] = useState();

    // Permet de récuperer les positions GPS une seule fois lors du chargemment de l'application
    useEffect(() => {
        getUserCoords();
    }, []);

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
    console.log(coords);

    // Permet de changer la couleur de la NavigationBar d'Android
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("#000040");
    }, []);

    return (
        <>
            <View style={s.meteo_basic}></View>
            <View style={s.searchbar_container}></View>
            <View style={s.meteo_advanced}></View>
        </>
    );
}
