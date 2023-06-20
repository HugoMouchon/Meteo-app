import { Txt } from "../Txt/Txt";
import { s } from "./ForecastListItem.style";
import { Image, View } from "react-native";

// Item représentant une journée de la semaine avec comme informations son graphique, le nom du jour, sa date, et sa température. 
export function ForecastListItem({ image, day, date, temperature }) {
    return (
        <View style={s.container}>
            <Image style={s.image} source={image} />
            <Txt style={s.day}>{day} </Txt>
            <Txt style={s.date}> {date} </Txt>
            <Txt>{temperature}° </Txt>
        </View>
    );
}