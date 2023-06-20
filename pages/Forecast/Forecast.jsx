import { s } from "./Forecast.style";
import { Txt } from "../../components/Txt/Txt";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { DAYS } from "../../services/date-service";

export function Forecast({ }) {
    const { params } = useRoute();
    const nav = useNavigation();

    // Bouton de retour en arrière
    const backButton = (
        <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
            <Txt> {"<"} </Txt>
        </TouchableOpacity>
    );

    // Header de la page Forecast, qui contient : le bouton retour en arrière ainsi que le nom de ville et son sous titre
    const header = (
        <View style={s.header}>
            {backButton}
            <View style={s.header_texts}>
                <Txt>{params.city}</Txt>
                <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
            </View>
        </View>
    );

    // Constante qui créer une liste des jours de la semaines avec leurs informations respectifs en utilisant la méthode .map
    const forecastList = (
        <View style={s.forecastList}>
            {
                params.time.map((time, index) => {
                    const code = params.weathercode[index]
                    const image = getWeatherInterpretation(code).image
                    const date = new Date(time);
                    const day = DAYS[date.getDay()];
                    const d = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}`
                    const temperature = params.temperature_2m_max[index]

                    return <ForecastListItem image={image} day={day} date={d} temperature={temperature.toFixed(0)} key={time} />
                })}
        </View>
    );

    // Affichage du header
    return (
        <>
            {header}
            {forecastList}
        </>
    );
}

