import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    const onHome = () =>{
        navigate('/home')
    }

  return (
    <div>LOGIN
    <Button type="button" variant="primary" onClick={onHome}> Cancel </Button>
    </div>
  )
}

export default Login