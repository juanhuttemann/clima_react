import React, { Component } from 'react';

class Formulario extends Component {

    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima = (e) => {
        e.preventDefault();

        const respuesta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }

        this.props.datosConsulta(respuesta);
        
    }

    render() { 
        return ( 
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="ciudad" type="text" ref={this.ciudadRef} />
                                <label htmlFor="ciudad">Ciudad: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref = {this.paisRef}>
                                    <option defaultValue>Elige un país</option>
                                    <option value="AR" defaultValue>Argentina</option>
                                    <option value="BR" defaultValue>Brasil</option>
                                    <option value="ES" defaultValue>España</option>
                                    <option value="US" defaultValue>Estados Unidos</option>
                                    <option value="MX" defaultValue>México</option>
                                    <option value="PY" defaultValue>Paraguay</option>
                                </select>
                                <label htmlFor="pais">País: </label>
                            </div>
                            <div className = "input-field col s12 m8 l4 offset-m2 buscador">
                                <input type="submit" className="waves-effect waves-light btn btn-large green accent-3" value="buscar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Formulario;