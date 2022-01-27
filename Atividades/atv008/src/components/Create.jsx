import React, { Component } from "react";
import FirebaseContext from "../utils/FirebaseContext";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const CreatePage = () => (
    <FirebaseContext.Consumer>
        {(contexto) => <Create firebase={contexto} />}
    </FirebaseContext.Consumer>
);

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = { nome: "", curso: "", IRA: 0};

        this.setNome = this.setNome.bind(this);
        this.setCurso = this.setCurso.bind(this);
        this.setIRA = this.setIRA.bind(this);
       
    }

    setNome(e) {
        this.setState({ nome: e.target.value });
    }

    setCurso(e) {
        this.setState({ curso: e.target.value });
    }

    setIRA(e) {
        this.setState({ IRA: e.target.value });
    }

    

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Criar Estudante</h3>
                <Formik
                    initialValues={
                        {
                            nome: '',
                            curso: '',
                            IRA: 0
                        }
                    }
                    validationSchema={
                        Yup.object({
                            nome: Yup.string().required('Required'),
                            curso: Yup.string().required('Required'),
                            IRA: Yup.number().max(10, 'Nota maxima e 10').required('Required')
                        })
                    }
                    onSubmit={
                        (values, { setSubmitting }) => {
                            this.ref = this.props.firebase
                            .getFirestore()
                            .collection("estudantes")
                            .add({
                                nome: values.nome,
                                curso: values.curso,
                                IRA: values.IRA,
                            })
                            .then(() => console.log(`Inserido com sucesso`))
                            .catch(() => console.log("error"));
                
                        this.setState = { nome: "", curso: "", IRA: "" };
                        }
                    }
                >
                    {
                        (props) => (
                            <div>
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="nome"> Nome: </label>
                                        <Field name="nome" id="nome" type="text"
                                            className={props.touched.nome ? (props.errors.nome ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'} />
                                        <div className="invalid-feedback">
                                            <ErrorMessage name="nome" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="curso">Curso: </label>
                                        <Field name="curso" id="curso" type="text"
                                            className={props.touched.curso ? (props.errors.curso ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'} />
                                        <div className="invalid-feedback">
                                            <ErrorMessage name="curso" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="IRA">IRA: </label>
                                        <Field name="IRA" id="IRA" type="IRA"
                                            className={props.touched.IRA ? (props.errors.IRA ? 'form-control is-invalid' : 'form-control is-valid') : 'form-control'}
                                        />
                                        <div className="invalid-feedback">
                                            <ErrorMessage name="IRA" />
                                        </div>
                                    </div>
                                    
                    
                        
                                    <div>
                                        <button className="btn btn-primary" type="submit" disabled={props.isSubmitting ? true : false}>Enviar                    </button>
                                    </div>
                                </Form>
                            </div>
                        )
                    }
                </Formik>
            </div>
        );
    }
}

export default CreatePage;
