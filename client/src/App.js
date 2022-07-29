import React, { useState } from 'react'
import FormGetText from './components/FormGetText'
import ListResults from './components/ListResults'

function App () {
  const [listaTextos, setListaTextos] = useState([])

  return (
    <div className='text-center' style={{ backgroundColor: 'lightgray', height: '98vh' }}>
      <div>
        <FormGetText listaTextos={listaTextos} setListaTextos={setListaTextos} />
        <ListResults listaTextos={listaTextos} />
      </div>
    </div>
  )
}
export default App
