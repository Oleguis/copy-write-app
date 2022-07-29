import React from 'react'

function ListResults ({ listaTextos }) {
  return (
    <div class='container text-center bg-light my-3 py-2 w-75 rounded'>
      <div class='row'>
        <div class='col-sm'>
          <h5 className='text-start'>Resultado:</h5>
        </div>
      </div>
      <div class='row'>
        <div class='col-sm'>
          <ul className='list-group d-flex align-items-center'>
            {listaTextos.map((texto, pos) => {
              return (
                <li className='list-group-item m-2 w-75 border border-secondary text-start rounded' key={texto + pos}>
                  {texto}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ListResults
