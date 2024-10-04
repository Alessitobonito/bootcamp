export const fetchPeliculas = async () => {
    const url = 'http://localhost:3000/peliculas'

    const response = await fetch(url)

    const data = await response.json()

    return data
}