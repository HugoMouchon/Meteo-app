
// fonction permettant de récupérer la date du jour et de retourner l'heure ainsi que les minutes
// Utilisation du "padStart" afin de rajouter un zéro devant les minutes compris entre 0 et 9.
export function nowToHHMM() {
    const d = new Date();
    return `${d.getHours()}:${d.getMinutes().toString().padStart(2, 0)}`;
}