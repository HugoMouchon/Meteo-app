
import { useEffect, useState } from "react";
import { nowToHHMM } from "../../services/date-service";
import { Txt } from "../Txt/Txt";
import { s } from "./Clock.style";

// Composant qui affiche l'heure actuelle
export function Clock({ }) {

    // Etat qui stock l'heure actuelle
    const [time, setTime] = useState(nowToHHMM());

    // Mise à jours de l'heure toutes les minutes
    useEffect(() => {
        setInterval(() => {
            setTime(nowToHHMM());
        }, 1000)
    }, [])

    return (
        <>
            <Txt style={s.time}>
                {time}
            </Txt>
        </>
    );
}