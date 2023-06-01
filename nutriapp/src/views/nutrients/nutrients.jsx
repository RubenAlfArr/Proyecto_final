import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Nutrients() {
    const navigate = useNavigate();

    
    const onExit = () => {
        navigate('/home');
    }
  return (
    <div>
        <h1>Nutrients</h1>
        <Button type="button" variant="primary" > Calcular </Button>{' '}
        <Button type="button" variant="danger" onClick={onExit}> Cancel </Button>
    </div>
  )
}

export default Nutrients