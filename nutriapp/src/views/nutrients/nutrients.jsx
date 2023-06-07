import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../../components/navbarComponent.';

function Nutrients() {
    const navigate = useNavigate();

    
    const onExit = () => {
        navigate('/home');
    }
  return (
    <div className='fondo'>
    <NavbarComponent />
    <div className='containe'>
      <div className='marco-general'>
        <h1>Nutrients</h1>
        <Button type="button" variant="success" > Calcular </Button>{' '}
        <Button type="button" variant="danger" onClick={onExit}> Cancel </Button>
    </div>
    </div>
    </div>
  )
}

export default Nutrients