import { Image, TouchableOpacity, View } from "react-native";
import { s } from "./MeteoBasic.style";
import { Txt } from "../Txt/Txt";
import { Clock } from "../Clock/Clock";

// Composant qui affiche La ville, la température, l'heure, le label, ainsi qu'une image représentant graphiquement le temps qu"il fait.
export function MeteoBasic({ onPress, temperature, city, interpretation }) {
    return (
        <>
            <View style={s.clock}>
                <Clock />
            </View>

            <Txt style={s.city}>{city}</Txt>

            <Txt style={s.weather_label}>{interpretation.label}</Txt>

            <View style={s.temperature_container}>
                <TouchableOpacity onPress={onPress}>
                    <Txt style={s.temperature}>{temperature}°C</Txt>
                </TouchableOpacity>
                <Image style={s.image} source={interpretation.image} />
            </View>
        </>
    );
}