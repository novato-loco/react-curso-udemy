import React, {Component} from 'react'
// React es la librería
// Component es un módulo de React

class LoginButton extends React.Component{
  render(){
    return <button>Iniciar sesión</button>
  }
}

class LogoutButton extends React.Component{
  render(){
    return(
      <div>
        <p>Bienvenido!</p>
        <button>Cerrar sesión</button>
      </div>
    )
  }
}

// function useConditionalRendering(mostrarA){
//   if(mostrarA){
//     return <ComponenteA/>
//   }else{
//     return <ComponenteB/>
//   }
// }

export default class ConditionalSection extends React.Component{
  constructor(){
    super()
    this.state = {isUserLoggged: false}
  }
  render(){
    return(
      <div>
        <h4> Conditional rendering</h4>
        // Es más aconsejable usar el operador terniario
        {this.state.isUserLoggged ? <LoginButton/> : <LogoutButton/>}
      </div>
    )
  }
}


