import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function FormGetText({listaTextos, setListaTextos}) {
  const [newText, setNewText] = useState('');
  const dominioText = 'http://localhost:3001';

  const handletChange = function(event){
    setNewText(event.target.value);
  }

  const sendText = function(event){
		event.preventDefault();
    if (newText !== ''){
        fetch(`${dominioText}/iecho?text=${newText}`)
        .then(resp => resp.json())
        .then(textReversado => {
          setListaTextos([textReversado.text, ...listaTextos]);          
        })                                                  
        .catch(error => console.log(error))
    }
    setNewText('');
  }

  return (
    // <div style={styles}>
        <form className='bg-danger text-center' onSubmit={sendText}>
            <input 
              className="w-50 h-100 m-2" 
              type="text" 
              onChange={handletChange}
              value={newText}/>
            <Button className="bottom" type="submit">Send</Button>
        </form>
    // </div>

)}

export default FormGetText