
import React,{useState} from "react";

import { useForm } from "react-hook-form";
import { Col, Container, Row, Form ,Card} from "react-bootstrap";
import {useNavigate}from 'react-router-dom'
const SignUp = () => {
    const [user,setUser]=useState([])
    const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
    console.log(data);
    setUser(data)
    localStorage.setItem('user',JSON.stringify(data))
    
    navigate('/movie_list')
}

  return (
  
   <div>
    <h1>Registration Form</h1>
      <Container style={{display:'flex' ,justifyContent:'center'}}>
        <Col xs={2}sm ={6}>
          <Card className="shadow-lg">
          <Row>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column >
                  Name
                </Form.Label>
                <Col >
                  <Form.Control plaintext placeholder="Enter the Name" {...register("name", { required: true })} />
                </Col>
                {errors.name && <span style={{color:'red'}}>This field is required</span>}
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column >
                  email
                </Form.Label>
                <Col >
                  <Form.Control plaintext placeholder="Enter the email id" type="email" {...register("email",{ required: true })} />
                </Col>
                {errors.email && <span style={{color:'red'}}>This field is required</span>}
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column >
          Phone number
        </Form.Label>
        <Col >
          <Form.Control plaintext placeholder="Enter the Contact number" type="number" minLength={10} maxLength={10}{...register("phone",{ required: true })}/>
        </Col>
        {errors.phone && <span style={{color:'red'}}>This field is required</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Profession</Form.Label>

      <select {...register("Profession")}  className="mb-3">
        <option value="female">Accountant</option>
        <option value="male">Actor</option>
        <option value="other">other</option>
      </select>
      </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column >
                  Password
                </Form.Label>
                <Col >
                  <Form.Control type="password" placeholder="Password" {...register("password",{ required: true })}/>
                </Col>
                {errors.password && <span style={{color:'red'}}>This field is required</span>}
              </Form.Group>

              <input type="submit" className="mb-3"/>

            </Form>
          </Row>
        </Card>
        </Col>
      </Container>
    </div>

    
  )
}

export default SignUp