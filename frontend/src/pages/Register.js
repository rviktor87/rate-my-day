import {Alert, Button, Form} from "react-bootstrap";
import {useState} from "react";
import config from "../config";

function Register() {
  const [formFields, setFormFields] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState("");

  function onInputChange(event) {
    const {name, value} = event.target;
    setFormFields({
      ...formFields,
      [name]: value
    });
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      setErrorMessage("");
      await fetch(config.backendUrl + '/register', {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formFields)
      });
    } catch (error) {
      setErrorMessage(error.message);
    }

  }

  return (
    <Form onSubmit={onSubmit}>
      <h1>Regisztráció</h1>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email cím</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          name="email"
          onChange={onInputChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Jelszó</Form.Label>
        <Form.Control type="password" placeholder="Password" required name="password" onChange={onInputChange} />
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-3">
        Regisztráció
      </Button>
      { errorMessage &&
        <Alert variant="danger">
          {errorMessage}
        </Alert>
      }
    </Form>
  );
}

export default Register;
