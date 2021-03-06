import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class TableRow extends Component {

    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar(){
        axios.delete(`http://localhost:3002/estudantes/delete/${this.props.estudante._id}`) //EXPRESS PURO
        .then(
            (res)=>{
                console.log('Registro foi apagado.')
                this.props.apagarElementoPorId(this.props.estudante._id)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    
    render() {
        return (
            <tr>
                <td>
                    {this.props.estudante._id}
                </td>
                <td>
                    {this.props.estudante.nome}
                </td>
                <td>
                    {this.props.estudante.curso}
                </td>
                <td>
                    {this.props.estudante.IRA}
                </td>
                <td style={{ textAlign: "center" }}>
                    <Link to={`/edit/${this.props.estudante._id}`} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button className="btn btn-danger" onClick={this.apagar}>Apagar</button>
                </td>
            </tr>
        )
    }
}