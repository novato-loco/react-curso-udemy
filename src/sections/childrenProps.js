import React, {Component} from 'react'
import PropTypes from 'prop-types'

// Este componente es reusable 
class Box extends Component{
 render(){
  return(
      // Esto es prácticamente una plantilla
    <div style={{border: '1px solid #000', margin: 5, padding: 5}}>
      {/* Se invoca props para obtener la propiedad children */}
      {this.props.children}
    </div>
  )
 } 
} 

class Article extends Component {
  // Se recomienda especificar los tipos de las propiedades antes del contructor, auque... también podrían ir afuera de la clase.
  // Esto solo sirve en el entorno de desarrollo.
  static propTypes={
    author: PropTypes.string.isRequired
  }

  render(){
    const {author, children, date, title} = this.props
    return (
      <section>
        <h2>{title}</h2>
        <p><em>Escrito por {author}</em></p>
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}


export default Article