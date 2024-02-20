import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Container, Form, FormGroup, Label, Row, Col } from 'reactstrap';

const FormLogin = () => {

    const { register, formState:{errors}, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <Container id="ContentFormLogin">
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit(onSubmit)}>
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
                        <Button color='primary' type="submit" value="Enviar" href='#'>
                            Ingresar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default FormLogin 