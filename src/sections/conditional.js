import React, { Component } from 'react'
import cars from '../original.json'
const Login = ()=> (
    <div>
        <p>Bienvenido</p>
        <button>Cerrar Sesion</button>       
    </div>
)
const Logout = ()=> (
    <div>
        <p>Crear Cuenta</p>
        <button>Login</button>       
    </div>
)

const CarItem= (props)=>{
    const {name,company} = props.car
    return  (<div >
        <p>{name}, {company}</p>
    </div>)
}

export default class ConditionalSection extends Component{

    constructor(){
        super()
        this.state = {
            Section : {0:<Login/>, 1: <Logout/>}
        }
    }
    render(){

   
        return <div>
            <h4>Conditional Rendering </h4>
            {this.state.Section[1]}
            {cars.map(
                (car,i)=>{
                    return <CarItem key ={i} car ={car}/>
                }
            )}
        </div>
    }
}

//27
