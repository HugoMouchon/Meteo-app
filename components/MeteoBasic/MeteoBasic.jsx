import { Image, View } from "react-native";
import { s } from "./MeteoBasic.style";
import { Txt } from "../Txt/Txt";

// Composant qui affiche La ville, la température, l'heure, le temps, ainsi qu'une image représentant graphiquement le temps qu"il fait
export function MeteoBasic({ }) {
    return (
        <>
            <View style={s.clock}>
                <Txt>Clock</Txt>
            </View>

            <Txt> City</Txt>

            <Txt style={s.weather_label}> Label</Txt>

            <View style={s.temperature_container}>
                <Txt style={s.temperature}>3°C</Txt>
                <Image style={s.image} />
            </View>
        </>
    );
}