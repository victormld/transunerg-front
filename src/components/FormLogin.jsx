import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Label, Row, Col } from 'reactstrap';
import peticionAxios from '../config/axios.js';


const FormLogin = () => {

    const { register, formState:{errors}, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async(data) => {

        try {
            // Hacemos la peticion de logeo con el backend
            const inicioUsuario = await peticionAxios.post("auth/login", data);

            //Si hay un error lo retornamos
            if (inicioUsuario.data.code !== 200){
                return alert(inicioUsuario.data.msg.error.message);
            }

            // Guardamos los datos del usuario en el localStorage
            localStorage.setItem("user", {
                ...inicioUsuario.data.userData,
                token: inicioUsuario.data.token
            })

            console.log(inicioUsuario);
            //Regresamos a la pagina principal
            navigate("/")
        } catch (error) {
            console.error(error.message);
            alert("Hubo un error al realizar la peticion de inicio de sesion")
            alert(error.message);
        }
    }
    return (
        <Container id="ContentFormLogin">
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit(data => onSubmit(data))}>
                        <h2>Bienvenido Conductor</h2>
                        <FormGroup>
                            <Label >Email:</Label>
                            <input className='form-control' type="email" {...register('email',{required: true, pattern:/^[^@]+@[^@]+\.[^@]+$/})} />
                            {errors.email?.type==='required' && <p>El campo es obligatorio</p>}
                            {errors.email?.type==='pattern' && <p>Fofrmato inválido</p>}
                        </FormGroup>
                        <FormGroup>
                            <Label >Contraseña:</Label>
                            <input className='form-control' type="password" {...register('password', {required: true})}/>
                            {errors.password?.type==='required' && <p>El campo es obligatorio</p>}
                        </FormGroup>
                        <div className='row flex justify-center'>
                            <Button color='primary' type="submit" value="Enviar" className='col-xs-12 col-md-5 m-1'>
                                Ingresar
                            </Button>
                            <Link to={"/Registro"} className='col-xs-12 col-md-5 m-1 btn bg-info text-white'>
                                <p>Registrese</p>
                            </Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default FormLogin 