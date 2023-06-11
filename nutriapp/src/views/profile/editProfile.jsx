import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../style.css'
import NavbarComponent from '../../components/navbarComponent';
import {Form, Button,} from 'react-bootstrap';
import { useState } from 'react'
import { store } from '../../store';
import { setProfile } from '../../redux/userSlice';
import { useSelector } from 'react-redux';

function EditProfile() {

  const navigate = useNavigate();

  const defaultName = useSelector((state) => state.user.name);
  const defaultEmail = useSelector((state) => state.user.email);
  const defaultUser = useSelector((state) => state.user.user);
  const defaultPassword = useSelector((state) => state.user.password);
  const defaultDescription = useSelector((state) => state.user.description);

  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [user, setUser] = useState(defaultUser);
  const [password, setPassword] = useState(defaultPassword);
  const [description, setDescription] = useState(defaultDescription);

  const handleSave = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('User:', user);
    console.log('Password:', password);
    console.log('Description:', description);

    store.dispatch(setProfile({ name, email, user, password, description }));

    Swal.fire('Cambios guardados', 'El perfil ha sido actualizado', 'success');
    navigate('/profile');
  }

  const onExit = () => {
    navigate('/home');
  }

  return (
    <div>
    <NavbarComponent />
    <div className='fondo'>
    
    <div className='containe'>
      <div className='marco-general'>
        <h2>Edita tu Perfil</h2>
        <Form onSubmit={handleSave}>
          <Form.Group controlId='nombre' className="mb-3">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId='email' className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId='email' className="mb-3">
            <Form.Label>User:</Form.Label>
            <Form.Control type='text' value={user} onChange={(e) => setUser(e.target.value)} />
          </Form.Group>
          <Form.Group controlId='password' className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group controlId='description' className="mb-3">
            <Form.Label>Description:</Form.Label>
            <Form.Control type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
          <div style={{ marginTop: '16px' }} className="text-center">
            <Button type='submit' variant='success'> Save </Button>{' '}
            <Button type='button' variant='danger' onClick={onExit}>Cancel</Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
  </div>
  )
}

export default EditProfile