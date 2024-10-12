import React from 'react'
import { Header } from './components/Header'
import Appointments from './pages/Appointments'

const App = () => {
  return (
    <>
    <Header tittle='Citas médicas para mascotas'/>

    <main className='flex container m-auto gap-12 py-5 border'>
    <Appointments />
    </main>
    </>
  )
}

export default App