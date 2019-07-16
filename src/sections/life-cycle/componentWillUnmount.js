import React, { Component } from 'react'

class ComponenteADesmontar extends Component {
  // Estado del componente ComponenteADesmontar. He añadido el constructor solo por añadirlo porque realmente no es necesario.
  constructor(){
    super()
    this.state = { windowWidth: 0 }

    // Se pone en contexto la función _updateStateWithWindowWid
    // this._updateStateWithWindowWidth = this._updateStateWithWindowWidth.bind(this)
  }
  // Se actualiza state del componente con el ancho del navegador.
  _updateStateWithWindowWidth = ()=>{
    console.log('_updateStateWithWindowWidth')
    this.setState({ windowWidth: document.body.clientWidth })
  }

  // Este método es el último método del ciclo de vida de montaje.
  componentDidMount () {
    this._updateStateWithWindowWidth()
    window.addEventListener(
      'resize',
      // En componentDidMount  se pude actualizar el state del componente.
      this._updateStateWithWindowWidth
    )
  }
  // Antes de desmontar se remueven los eventos.
  componentWillUnmount () {
    console.log('componentWillUnmount')
    window.removeEventListener(
      'resize',
      this._updateStateWithWindowWidth
    )
  }

  render () {
    return (
      <div>
        <p>Ancho de la ventana: {this.state.windowWidth}</p>
      </div>
    )
  }
}

// Esta es la clase que se importa
class EjemploDeComponentWillUnmount extends Component {
  state = { mostrarComponente: true }

  render () {

    if (this.state.mostrarComponente) {
      return (
        <div>
          <h4>Ciclo de desmontaje: componentWillUnmount</h4>
          <ComponenteADesmontar />
          <button onClick={() => this.setState({ mostrarComponente: false })}>
            Desmontar componente
          </button>
        </div>
      )
    }

    return (
      <button onClick={() => this.setState({ mostrarComponente: true })}>
        Montar componente
      </button>
    )
  }
}

export default EjemploDeComponentWillUnmount