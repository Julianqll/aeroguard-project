export async function fetchPersonData(dni: string) {
    const response = await fetch(`/api/dni?dni=${dni}`);
    const data = await response.json();  // Convertir la respuesta a JSON
    return data.data;  // Acceder a la propiedad 'data' de la respuesta JSON
}
