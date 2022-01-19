import React, { Component } from 'react'
import axios from 'axios'

export default class Create extends Component {

    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', IRA: 0 }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIRA = this.setIRA.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e) {
        this.setState({nome:e.target.value})
    }

    setCurso(e) {
        this.setState({curso:e.target.value})
    }

    setIRA(e) {
        this.setState({IRA:e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const estudante = {
            nome: this.state.nome,
            curso: this.state.curso,
            IRA: parseInt(this.state.capacidade,10)
        }
        axios.post('http://localhost:3002/estudantes/register',estudante) //EXPRESS PURO 
        .then(
            (res)=>{
                console.log('Estudante salva com sucesso!')
                console.log(res.data._id)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )

 

        this.setState({nome: '', curso: '', IRA: 0})
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Criar Estudante</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome}
                        />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control" 
                            value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="number" className="form-control" 
                            value={this.state.capacidade} onChange={this.setIRA}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Criar" className="btn btn-primary" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}