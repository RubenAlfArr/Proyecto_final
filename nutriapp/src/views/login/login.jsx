import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import loginImage from "../../assets/login.png";
import { useState } from 'react'
import '../../style.css';

function Login() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (login === 'ruben' && password === 'dam') {
        navigate('/home');
      } else {
        setError('Usuario y/o contraseña incorrectos');
        console.log('Usuario y/o contraseña incorrectos');
      }
    };

    return (
      <div className='fondo'>
        <div className='containe'>
          <div className='marco'>
          <img className='image' src={loginImage} alt="Login" />
  
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Label className="form-label">User</Form.Label>
              <Form.Control className="form-control" type="text" placeholder="Enter User" onChange={(event) => setLogin(event.target.value)} />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control className="form-control" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
            </Form.Group>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <Button className="login-button" variant="success" type="submit" style={{ border: 'none', borderRadius: '8px', backgroundColor: 'rgba(241, 39, 39, 0.781)', }}>Login</Button>
  
            </Form>
          </div>
        </div>
      </div>
    )
  }
export default Login