import React from 'react'

class Forms extends React.Component{

  constructor(){
    super()
    // EL CICLO DE MONTAJE
    // Se ejecuta siempre y solo lo hace una vez
    // Construye el componenete en su estado inicial
    // Obtiene los props
    // Primera ejecución del método render
    // termina con el componenete montado en el DOM.
    // En el ciclo de monataje no se debe de llamar a setState
    this.state={
      inputName: '',
      inputTwitter: '@',
      inputTerms: true
    }
  }

  handleChange = (e)=>{
    this.setState({inputTerms: e.target.checked})
    console.log(e.target.checked)
  }

  render(){
    return(
      <div>
        <h4>Formulario</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='name'>Nombre</label>
            <input id='name' name='name' onChange={e => this.setState({inputName: e.target.value})} placeholder='Introduce tu nombre' value={this.state.inputName}/>
          </div>
          <div>
            <label ref={inputElement=>this.inputName = inputElement} htmlFor='twitter'>Twitter</label>
            <input id='twitter' name='twitter' onChange={e=>this.setState({inputTwitter: e.target.value})} placeholder='Introduce tu Twitter' value={this.state.inputTwitter}/>
          </div>
          <div>
            <input checked={this.state.inputTerms} onChange={this.handleChange} type='checkbox'></input>
            <label htmlFor='checkbox'>Aceptar los términos y condiciones</label>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    )
  }
}

export default Forms