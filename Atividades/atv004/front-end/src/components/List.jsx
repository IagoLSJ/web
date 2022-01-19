import React, { Component } from 'react';
import axios from 'axios'

import TableRow from './TableRow'

export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = { estudantes: [] }

        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3002/estudantes/list') //EXPRESS PURO
            .then(
                (res) => {
                    this.setState({ estudantes: res.data })
                    console.log(this.state.estudantes)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    apagarElementoPorId(id) {
        let estudantesTemp = this.state.estudantes
        for (let i = 0; i < estudantesTemp.length; i++) {
            if (estudantesTemp[i]._id === id) {
                estudantesTemp.splice(i, 1)
            }
        }
        this.setState({ estudantes: estudantesTemp })
    }

    montarTabela() {
        if (!this.state.estudantes) return

        return this.state.estudantes.map
            (
                (estudante, i) => {
                    return <TableRow estudante={estudante} key={i} apagarElementoPorId={this.apagarElementoPorId}/>
                }
            )
    }

    render() {
        return (
            <div>
                <p>Listar estudantes</p>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan='2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}