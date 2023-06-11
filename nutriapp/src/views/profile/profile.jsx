import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../../style.css';
import loginImage from "../../assets/login.png";
import NavbarComponent from '../../components/navbarComponent';
import { useSelector} from 'react-redux';

function Profile() {

  const navigate = useNavigate();
  
  const name = useSelector((state) => state.user.name)
  const email = useSelector((state) => state.user.email)
  const user =  useSelector((state) => state.user.user)
  const password = useSelector((state) => state.user.password)
  const description = useSelector((state) => state.user.description)

  
  const handleEdit = () => {
      navigate('/edit');
  }

  const onExit = () => {
    navigate('/home');
  }
  
  return (
      <div className='fondo'>
          <NavbarComponent />
          <div className='containe'>
              <div className='marco-general'>
                  <div className='marco-imagen'>
                  <img className='img-izquierda' src={loginImage} alt="Login" />
                  <aside className='bold-text'>{name}</aside>
                  <br></br>
                  <aside>{email}</aside>
                  </div>

                  <div className='marco-profile'>
                      <p className='margin'>
                          <span className="bold-text">User:</span>{user}
                      </p>
                      <p className='margin'>
                          <span className="bold-text">Password:</span>{password}
                      </p>
                  </div>
                  <div className='marco-profile'>
                      <p className='margin-x'>{description}</p>
                  </div>
                  <div className='text-center'>
                      <Button type="button" className='button' variant="success" onClick={handleEdit}> Edit </Button>{' '}
                      <Button type="button" variant="danger" onClick={onExit}> Cancel </Button>
                  </div>
              </div>
          </div>
      </div>

  );
}
  
export default Profile