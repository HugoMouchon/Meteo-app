import { Text } from "react-native";
import { s } from "./Txt.style";

// Composant générique qui permet d'appliquer un style défini (couleur + font) pour le texte de l'application
export function Txt({ children, style }) {
    return (
        <Text style={[s.text, style]}>
            {children}
        </Text>
    );
}