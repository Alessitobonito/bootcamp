const fetchPeliculas = async () => {
    const url = 'http://localhost:3000/peliculas'

    const response = await fetch(url)

    const data = await response.json()

    return data
}

const renderPeliculas = (peliculas) => {
    const peliculasList = document.querySelector('.movies__list')

    let elements = ''

    peliculas.forEach(pelicula => {
        elements += `<tr>
            <td>${pelicula.id}</td>
            <td>
                <img src="${pelicula.imagen}" alt="${pelicula.nombre}" />
            </td>
            <td>
                <strong>${pelicula.nombre}</strong>
                <div class="fs-small">
                    <strong>Realse:${pelicula.estreno}</strong>
                </div>
                <div class="fs-small">
                    <strong>Genero:${pelicula.generoId}</strong>
                </div>
                <div class="fs-small">
                    <strong>Sinopsis:${pelicula.resumen}</strong>
                </div>                
            </td>
            <td>
            <div class="flex gap-0.5"> 
               <button class="pelicula__edit">Editar</button>
               <button class="pelicula__delete">Eliminar</button>
            </div>

            </td>
        </tr>`
    })

    peliculasList.innerHTML = elements
}

fetchPeliculas()
    .then(data => {
        renderPeliculas(data)
    })