import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ConditionalSection from './sections/conditional'
// import cars from './data/cars.json'
// import Forms from './sections/forms'
// import Article from './sections/childrenProps'
// import FetchExample from './sections/fetch-example'
// import  EjemploDeCicloDeActualizacion from './sections/life-cycle/ejemploCicloDeActualizacion'
// import EjemploDeComponentWillUnmount from './sections/life-cycle/componentWillUnmount'
import BitCoinPriceContainer from './sections/container-component/'


class App extends React.Component {

  render(){
   return (
    <div className="App">

      {/*<Forms/>*/}
      {/*<h4>Children props</h4>
      <Article author="Miguel" date={new Date().toLocaleDateString()} title="Articulo sobre children props">
        <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.chiildren</p>
      </Article>
        <Article author="Miguel" date={new Date().toLocaleDateString()} title="Articulo sobre children props">
        <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.chiildren</p>
      </Article>
        <Article author="Miguel" date={new Date().toLocaleDateString()} title="Articulo sobre children props">
        <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.chiildren</p>
      </Article>*/}

      {/*<FetchExample/>*/}

      {/*<EjemploDeCicloDeActualizacion/>*/}
      {/*<EjemploDeComponentWillUnmount/>*/}
      <BitCoinPriceContainer/>

    </div>
  );
  }
}

export default App;
