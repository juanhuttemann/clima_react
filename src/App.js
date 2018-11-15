import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {

  datosConsulta = respuesta => {
    if (respuesta.ciudad === '' || respuesta.pais === '') {
      console.log('errores');
    } else {
      console.log('todo correcto');
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          titulo="Clima React"
        />
        <Formulario
          datosConsulta = {this.datosConsulta}
        />
      </div>
    );
  }
}

export default App;
