import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', IRA: 0 }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIRA = this.setIRA.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        axios.get(`http://localhost:3002/estudantes/retrieve/${this.props.match.params.id}`) //EXPRESS PURO
        .then(
            (res)=>{
                this.setState({
                    nome:res.data.nome,
                    curso:res.data.curso,
                    IRA:res.data.IRA
                })
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
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

        const estudantes = {
            nome: this.state.nome,
            curso: this.state.curso,
            IRA: parseInt(this.state.IRA,10)
        }

        axios.put(`http://localhost:3002/estudantes/update/${this.props.match.params.id}`,estudantes) //EXPRESS PURO
        .then(
            (res)=>{
                this.props.history.push('/list')
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
                <h3>Editar estudantes</h3>
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
                            value={this.state.IRA} onChange={this.setIRA}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Atualizar" className="btn btn-primary" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}