import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Col, Container, Row, Form, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userDetails, setUser] = useState();
  const [err, setErr] = useState( false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    console.log(data);
   
   if (userDetails && userDetails.name===data.name && userDetails.password===data.password){
     
      navigate("/movie_list");
    }
    else{
      
      setErr(true)
    }
  };
  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (user) {
      setUser(user);
    }
  }, []);
  userDetails && console.log(userDetails,"frofdgdg")
  return (
    <div>
        <h1>Login Here</h1>
    <Container style={{display:"flex",justifyContent:'center'}}>
        <Col xs={12} sm={6} >
          <Card className="shadow-lg">
            {err && <p style={{color:'red'}}>Invalid user Name or Password</p>}
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
                  <Form.Control
                    plaintext
                    placeholder="Enter the Name"  
                    {...register("name", { required: true })}
                  />
                </Col>
                {errors.name && <span style={{color:'red'}}>This field is required</span>}
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="formPlaintextPassword"
              >
                <Form.Label column >
                  Password
                </Form.Label>
                <Col >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                </Col>
                {errors.password && <span style={{color:'red'}}>This field is required</span>}
              </Form.Group>

              <input type="submit"  className="m-3" />
              <p onClick={()=>navigate('/signup')}>Register? Click Here</p>
            </Form>
          </Card>
        </Col>
      </Container>
  </div>
  );
};

export default Login;
