// import React, {Component, PureComponent} from 'react'
import React, {Component} from 'react'
// Se importa la clse para declarar los tipos de las propiedades
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
  // Los botones aparecen en este mismo orden
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)
// Si se quisiera evitar usar el método shouldComponentUppdate, el componente tendría que heredar de PureComponent
class AnimalImage extends Component {
  // Se supone que los estados se debeen de inicializar en el contructor.
  constructor(props){
    super(props)
    this.state = {src: ANIMAL_IMAGES[this.props.animal]}
  }  
  // Este método se ejecuta simpre que recibe nuevas props ("nuevas props" no quiere decir que sean diferentes a las iniciales).
  // Si es necesario, se renderiza nuevamente
  componentWillReceiveProps(nextProps){
    console.log("1.- ComponentWillReciveProps")
    console.log(nextProps)
    // Invertigaré los operadores de comparación en React
    // if(this.props.animal !== nextProps.animal){
    this.setState({src: ANIMAL_IMAGES[nextProps.animal]})   
    // }
  }

  // Todo esto puede ser reemplazado por PureComponent, una clase de Component.
  shouldComponentUpdate(nextProps){
    console.log("2.- shouldComponentUpdate")
    console.log(nextProps)
    return this.props.animal !== nextProps.animal
  }

  componentWillUpdate(nextProps, nextState){
    console.log("3.- componentWillUpdate")
    console.log(nextProps, nextState)
    const img = document.querySelector('img')
    img.animate([{
      filter: 'blur(0px)'
    }, {
      filter: 'blur(2px)'
    }], {
      duration: 500,
      easing: 'ease'
    })
  }

  componentDidUpdate(){
    console.log("4.- componentDidUpdate")
    const img = document.querySelector('img')
    img.animate([{
      filter: 'blur(2px)'
    }, {
      filter: 'blur(0px)'
    }], {
      duration: 1500,
      easing: 'ease'
    })
    console.log("from img element", {alt: img.alt})
  }

  // El render en el ciclo de vida de montaje es el tercero. Esto quiere decir que se ejecuta antes que componentWillReceiveProps y shouldComponentUpdate.
  render (){
    console.log("-> render")
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img alt={this.props.animal} src={this.state.src} width="250">
        </img>
      </div>
    )
  }
}
// Declaración del tipo de la propiedad animal
AnimalImage.propTypes={
  // animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
  // Esto es mejor porque si el día a de mañana se agregan más animales o se eliminan no se afecta el código en esta parte.
  animal: PropTypes.oneOf(ANIMALS)
}

class EjemploDeCicloDeActualizacion extends Component{
  state = {animal:"panda"}

  _renderAnimalButton=(animal)=>{
    return <button key={animal} onClick={()=>this.setState({animal})}>{animal}</button>
  }

  render (){
    return (
      <div>
        <h4>Ciclo de actualización. Ejemplo del método ComponentWillReciveProps y shouldComponentUpdate</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal}/>
      </div>
    )
  }
}

export default EjemploDeCicloDeActualizacion