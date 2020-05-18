import React, {Component} from 'react'

export default
class Formulario extends Component{

    constructor(){
        super()
    
        this.state = {inputName:'luis', inputTwitter:'@', inputTerms:true}
      }
      handleClick = (e) => {
        e.preventDefault()
        console.log(this.state)
      }
      render(){
        return(
        <form>
        <p>
           <label htmlFor='name'>Nombre:</label>
           <input id='name' name='name' value={this.state.inputName} onChange={e=>this.setState({inputName:e.target.value})}/>
         </p>
         <p>
           <label htmlFor='twitter'>Twitter:</label>
           <input id='twitter' name='twitter' value={this.state.inputTwitter} onChange={e=>this.setState({inputTwitter:e.target.value})}/>
         </p>
         <p>
           <input onChange={e=> this.setState({inputTerms:false})} type='checkbox' value={this.state.inputTerms}></input>
           <label>Aceptar Terminos</label>
         </p>
         <p><button onClick={this.handleClick}>Enviar</button></p>
         </form>)
    }
}
