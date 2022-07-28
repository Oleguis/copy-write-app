import React from 'react'

function ListResults({ listaTextos }) {
  return (
    <div className='
      container 
      m-5 
      p-5 
      bg-light 
      text-start 
      d-flex 
      justify-content-center 
      w-100'>
      <h5 className='text-start'>Resultado:</h5>
      <ul className='list-group w-100 d-flex align-items-center h-100'>
        {listaTextos.map((texto, pos) => {
          return (<li 
                    className='list-group-item 
                              m-1 
                              w-75 
                              border 
                              border-dark 
                              text-start
                              rounded' 
                              key = {texto + pos}
                              >
                              {texto}
                  </li>)
        })}
      </ul>
    </div>
  )
}

export default ListResults