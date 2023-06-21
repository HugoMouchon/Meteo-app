
import { TextInput } from "react-native";
import { s } from "./SearchBar.style";

// Composant générique qui permet d'appliquer un style défini (couleur + font) pour le texte de l'application
export function SearchBar({ onSubmit }) {
    return (
        <TextInput style={s.input} onSubmitEditing={onSubmit} placeholder="Cherche une ville... Ex: Paris">

        </TextInput>
    );
}