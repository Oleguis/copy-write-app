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
      <ul className='list-group'>
        {listaTextos.map((texto, pos) => {
          return (<li className='list-group-item m-1 w-75 border border-dark text-start' key = {texto + pos}>{texto}</li>)
        })}
      </ul>
    </div>
  )
}

const styles = {
  div: {
    display: "flex",
    width: "7"
  },
  ul: {
    listStyle: "none",
  }
}
export default ListResults