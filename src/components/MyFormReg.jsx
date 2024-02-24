import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Container, Form, FormGroup, Label, Row, Col } from 'reactstrap';
import peticionAxios from '../config/axios';
import { useNavigate } from 'react-router-dom';

const MyFormReg = () => {

    const { register, formState:{errors},handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async(data) => {
        //console.log(data)
        try {
            // Hacemos la peticion de logeo con el backend
            const registroUsuario = await peticionAxios.post("auth/registerUser", data);

            //Si hay un error lo retornamos
            if (registroUsuario.data.code !== 200){
                return alert(registroUsuario.data.msg);
            }

            //Regresamos a la pagina principal
            navigate("/");
        } catch (error) {
            console.log(error.message);
            alert("Hubo un error al crear el registro");
            alert(error.message);
        }
    }

    return (
        <Container id='ContentFormRegister'>
            <Row>
                <Col>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Registro de Rutas</h2>
                    <FormGroup>
                        <Label>Nombre:</Label>
                        <input className='form-control' type="text" {...register('name', {required: true})}/>
                        {errors.name?.type==='required' && <p>El campo es obligatorio</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label >Email:</Label>
                        <input className='form-control' type="email" {...register('email',{required: true, pattern:/^[^@]+@[^@]+\.[^@]+$/})}/>
                        {errors.email?.type==='required' && <p>El campo es obligatorio</p>}
                        {errors.email?.type==='pattern' && <p>Fofrmato inválido</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label >Contraseña:</Label>
                        <input className='form-control' type="password" {...register('password', {required: true})}/>
                        {errors.password?.type==='required' && <p>El campo es obligatorio</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label >Placa:</Label>
                        <input className='form-control' type="text" {...register('cardPlate', {required: true})}/>
                        {errors.password?.type==='required' && <p>El campo es obligatorio</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label >Modelo:</Label>
                        <input className='form-control' type="text" {...register('model', {required: true})}/>
                        {errors.password?.type==='required' && <p>El campo es obligatorio</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label >Marca:</Label>
                        <input className='form-control' type="text" {...register('brand', {required: true})}/>
                        {errors.password?.type==='required' && <p>El campo es obligatorio</p>}
                    </FormGroup>
                    <Button     color='primary' type="submit" value="Enviar" className='container-fluid'>
                        Registrar
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default MyFormReg 