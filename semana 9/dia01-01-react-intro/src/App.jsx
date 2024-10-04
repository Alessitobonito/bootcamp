// COMPONENTE USANDO FUNCTION

// function App() {
//   return (
//     <h1>Hola React.js</h1>
//   )
// }

// export default App


// COMPONENTE USANDO ARROW FUNCTIONS

// const App = () => {
//   return (
//     <h1>Hola React.js usando Arrow Functions</h1>
//   )
// }

// export default App

// COMPONENTES DE REACT USANDO MÚLTIMPLES LÍNEAS CON UN FRAGMENT

// const App = () => {
//   return (
//     <>
//       <h1>Hola React.js</h1>
//       <p>Estoy en el bootcamp!</p>
//     </>
//   )
// }

// export default App

// EXTENSIONS NECESARIAS PARA USAR REACT EN VSCODE

// ES7+ React/Redux/React-Native snippets
// https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

// SNIPPETS PARA CREAR COMPONENTES

// rafce y rfc

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// ANIDANDO COMPONENTES DENTRO DE OTROS

// function Saludo() {
//   return <h4>Hola Victor</h4>
// }

// function Despedida() {
//   return <h4>Adios Victor</h4>
// }

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>

//       <Saludo />
//       <Despedida />
//     </>
//   )
// }

// export default App


// IMPORTANDO COMPONENTES EXTERNOS Y USANDO EXPRESIONS CON JSX {}

import Despedida from "./components/Despedida";
import Saludo from "./components/Saludo";
import { LISTA_DE_FRUTAS, EDAD } from "./components/frutas";

const App = () => {
  const nombre = 'Victor'

  return (
    <>
      <h1>Hola React!</h1>
      <p>Estoy en el bootcamp!</p>

      {/* Comentario en React dentro de JSX */}

      {1 + 2}

      {`Hola ${nombre}!!!`}

      {LISTA_DE_FRUTAS}

      {EDAD}

      <Saludo />
      <Despedida />
    </>
  )
}

export default App