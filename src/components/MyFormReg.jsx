import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Container, Form, FormGroup, Label, Row, Col } from 'reactstrap';

const MyFormReg = () => {

    const { register, formState:{errors},handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
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
                    <Button href='#' color='primary' type="submit" value="Enviar" className='container-fluid'>
                        Registrar
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default MyFormReg 