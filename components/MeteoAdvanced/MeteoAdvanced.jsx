import { View } from "react-native";
import { s } from "./MeteoAdvanced.style";
import { Txt } from "../Txt/Txt";

// Composant qui affiche le lever de soleil, le coucher de soleil et la vitesse du vent de la journée.
export function MeteoAdvanced({ dusk, down, wind }) {
    return (
        <View style={s.container}>
            <View style={{ alignItems: "center" }}>
                <Txt style={{ fontSize: 20 }}>{dusk}</Txt>
                <Txt style={{ fontSize: 15 }}>Aube</Txt>
            </View>

            <View style={{ alignItems: "center" }}>
                <Txt style={{ fontSize: 20 }}>{down}</Txt>
                <Txt style={{ fontSize: 15 }}>Crépuscule</Txt>
            </View>

            <View style={{ alignItems: "center" }}>
                <Txt style={{ fontSize: 20 }}>{wind} km/h</Txt>
                <Txt style={{ fontSize: 15 }}>Vent</Txt>
            </View>
        </View>
    );
}