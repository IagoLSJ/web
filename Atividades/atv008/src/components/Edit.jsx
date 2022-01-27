import React, { Component } from 'react'
import FirebaseContext from '../utils/FirebaseContext'


const EditPage = (props) => (
    <FirebaseContext.Consumer>
        {contexto => <Edit firebase={contexto} id={props.match.params.id} />}
    </FirebaseContext.Consumer>
)

 class Edit extends Component {

    constructor(props) {
        super(props)

        this.state = { nome: '', curso: '', IRA: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIRA = this.setIRA.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        this.props.firebase.getFirestore().collection('estudantes').doc(this.props.id).get().then(
            (estudante) =>{
                this.setState({
                    nome:estudante.data().nome,
                    curso:estudante.data().curso,
                    IRA:estudante.data().IRA
                })
            }
        ).catch(error =>console.log(error))
        
    }
    
    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }

    setIRA(e) {
        this.setState({ IRA: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()
        this.props.firebase.getFirestore().collection('estudantes').doc(this.props.id).set({
            nome:this.state.nome,
            curso:this.state.curso,
            IRA:this.state.IRA
        }).then(()=>{
           console.log("ok")
        }).catch(error => console.log(error))
        
        
        
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Editar Estudante</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label htmlFor='nome'>Nome: </label>
                        <input 
                        id="nome"
                        type="text" 
                        className="form-control" 
                        value={this.state.nome} 
                        onChange={this.setNome}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='curso'>Curso: </label>
                        <input 
                        id="curso"
                        type="text" 
                        className="form-control" 
                        value={this.state.curso} 
                        onChange={this.setCurso}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='IRA'>IRA: </label>
                        <input 
                        id='IRA'
                        type="text" 
                        className="form-control" 
                        value={this.state.IRA} 
                        onChange={this.setIRA}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Editar Estudante" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}
export default EditPage