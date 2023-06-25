
import { TextInput } from "react-native";
import { s } from "./SearchBar.style";

// Composant de barre de recherche
export function SearchBar({ onSubmit }) {
    return (
        <TextInput
            style={s.input}
            onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
            placeholder="Cherche une ville... Ex: Paris">
        </TextInput>
    );
}