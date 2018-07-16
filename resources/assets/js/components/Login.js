import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';

class Login extends Component {
  handleSubmit(e){
    e.preventDefault();
  }
  render(){
    return(
    <Container>
    <Row>
    <Col md={{ size: 6, offset: 3 }}>
      <Form>
        <FormGroup className="mt-3">
          <Input type="text" placeholder="Логин" />
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="Пароль" />
        </FormGroup>

      </Form>
    </Col>
    </Row>
    </Container>
    )
  }
}

export default Login;
