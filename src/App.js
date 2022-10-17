import React from "react";
import Formulario from "./Componentes/Formulario/Formulario";

class App extends React.Component {

  render() {
    return(
      <div className="container row m-2 justify-content-center align-items-center">
        <Formulario/>
      </div>
    );
  }
}

export default App;