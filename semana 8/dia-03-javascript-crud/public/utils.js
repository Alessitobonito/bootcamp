export const renderPeliculas = (peliculas) => {
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
               <button class="pelicula__edit" data-id="${pelicula.id}">Editar</button>
               <button class="pelicula__delete" data-id="${pelicula.id}">Eliminar</button>
            </div>

            </td>
        </tr>`
    })

    peliculasList.innerHTML = elements

    const removePelicula = document.querySelectorAll('.pelicula__delete')

    removePelicula.forEach(remove => {
        remove.addEventListener('click', async (event) => {
            event.preventDefault()

            const id = remove.dataset.id
            const url = `http://localhost:3000/peliculas/${id}`

            const response = await fetch(url, {
                method: 'DELETE'
            })

            const data = await response.json()

            renderPeliculas(data)
        })
    })
}

const editPelicula = async (event) => {
    event.preventDefault()

    const id = event.target.dataset.id
    const url = `http://localhost:3000/peliculas/${id}`

    const response = await fetch(url, {
        method: 'GET'
    })

    const data = await response.json()

    renderPeliculas(data)
}

const peliculasList = document.querySelectorAll('.pelicula__edit')

peliculasList.forEach(pelicula => {
    pelicula.addEventListener('click', editPelicula )
    
})