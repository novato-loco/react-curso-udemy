// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


// class Contador extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {contador: this.props.contadorInicial}
//     setInterval(()=>{
//       this.setState({contador: this.state.contador + 1})
//     }, 1000)
//   }

//   render(){
//     return <ContadorNumero numero={this.state.contador}/>
//   }
// } 

// Contador.defaultProps={
//   contadorInicial: 0
// }

// class ContadorNumero extends React.Component{
//   render(){
//     return(<span>{this.props.numero}</span>)
//   }
// }

// function App() {
//   return (
//     <div className="App">
//     <p>Primer contador con state</p>
//     <Contador contadorInicial={100}/>
//     </div>
//   );
// }

// export default App;
