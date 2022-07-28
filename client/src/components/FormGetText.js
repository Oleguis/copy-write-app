import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

function FormGetText ({ listaTextos, setListaTextos }) {
  const [newText, setNewText] = useState('')
  const dominioText = 'https://backend-copy-write.herokuapp.com' // 'http://localhost:3001'

  const handletChange = function (event) {
    setNewText(event.target.value)
  }

  const sendText = function (event) {
    event.preventDefault()
    if (newText !== '') {
      fetch(`${dominioText}/iecho?text=${newText}`)
        .then(resp => resp.json())
        .then(textReversado => {
          setListaTextos([textReversado.text, ...listaTextos])
        })
        .catch(error => console.log(error))
    }
    setNewText('')
  }
  return (
    <form className='bg-danger text-center' onSubmit={sendText}>
      <input
        className='w-50 h-100 p-1 m-3'
        type='text'
        onChange={handletChange}
        value={newText}
      />
      <Button className='bottom m-2' type='submit'>Send</Button>
    </form>
  )
}

export default FormGetText
