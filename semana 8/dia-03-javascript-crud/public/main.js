import {renderPeliculas} from './utils.js'
import {fetchPeliculas} from './services.js'

const peliculasForm = document.querySelector('#peliculasform')

peliculasForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const pelicula = {
        nombre: peliculasForm.nombre.value,
        imagen: peliculasForm.imagen.value,
        estreno: peliculasForm.estreno.value,
        generoId: peliculasForm.genero.value,
        resumen: peliculasForm.resumen.value
    }

    const url = 'http://localhost:3000/peliculas'

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pelicula)
    })

    const data = await response.json()

    renderPeliculas(data)

    if (response.ok) {
        peliculasForm.reset()
    }
})

fetchPeliculas()
    .then(data => {
        renderPeliculas(data)
    }) 