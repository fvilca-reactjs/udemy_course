import React , {Component} from 'react';

export default
class Contador extends Component{
    constructor(){
      super()
      this.state = { contador : 5, mensaje: 'activo', id:0}
      setTimeout(
        ()=>{
            clearInterval(this.state.id)
            this.setState( {mensaje: "Timeout"})
            }
        ,6000 )  
    }
    render(){
      return <ContadorNumero/> 
    }
  }
  
   //hola
  class ContadorNumero extends Contador {
    constructor(){
      super()
      
      
      const id2 = setInterval(
        ()=>{
            this.setState( {contador: this.state.contador-1})
            this.setState( {id:  id2})
            },
        1000
      )
    }
    render(){
      return <div>
          <p>{this.state.contador}</p>
          <p>{this.state.mensaje}</p>
          </div>
 
    }
}