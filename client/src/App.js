import React, { useState } from "react";
import FormGetText from "./components/FormGetText";
import ListResults from "./components/ListResults";


function App() {

  const [listaTextos, setListaTextos] = useState([]);

  return (
    <div className="text-center" style={styles.divPpal}>
      <div style={styles.divSecondary}>
        <FormGetText listaTextos = {listaTextos} setListaTextos = {setListaTextos} />
        <ListResults listaTextos = {listaTextos} />
      </div>
    </div>
  );
}

// Estilos css en línea para los divs
const styles = {
  divPpal: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center"
  },
  divSecondary: {
    backgroundColor: "#e7e9eb", 
    width: "95%", 
    height: "95vh"
  }
}


export default App;
