import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../../components/navbarComponent.';
import { Card, CardGroup } from 'react-bootstrap';

function Home() {
    const navigate = useNavigate();

    const handleCalculateImcClick = () => {
        navigate('/imc');
     };

    const handleTotalCaloriasClick = () => {
        navigate('/calories');
    }

    const handleNutrientsClick = () => {
        navigate('/nutrients');
    }

    return (
      <div className='fondo'>
        <NavbarComponent />
        <div className='containe'>
          <div className='marco'>
            <h1>Home</h1>
            <h1></h1>
            <div className='card-container'>  
              <CardGroup style={{background: 'transparent' }}>
                <Card className='text-center' style={{ width: '18rem', background: 'transparent',  border: 'none', margin:'0 10px'}}>
                  <Card.Img variant="top" src="http://www.escueladisenosocial.org/wp-content/uploads/2015/06/balanza-677x300-672x300.jpg" className='card-img' />
                  <Card.Body>
                    <Card.Title>Calculate IMC</Card.Title>
                    <Card.Text>
                      Calcula tu índice de masa corporal
                    </Card.Text>
                    <Button variant="success" onClick={handleCalculateImcClick}>Go</Button>
                  </Card.Body>
                </Card>
                <Card className='text-center' style={{ width: '18rem', background: 'transparent',  border: 'none',  margin:'0 10px'}}>
                  <Card.Img variant="top" src="https://www.masmusculo.com/blog/wp-content/uploads/2016/12/calcular.jpg" className='card-img' />
                  <Card.Body>
                    <Card.Title>Calculate Calories</Card.Title>
                    <Card.Text>
                      Calcula las Calorías que gastas
                    </Card.Text>
                    <Button variant="success" onClick={handleTotalCaloriasClick}>Go</Button>
                  </Card.Body>
                </Card>
                <Card  className='text-center' style={{ width: '18rem', background: 'transparent', border: 'none',  margin:'0 10px'}} >
                  <Card.Img variant="top" src="https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453" className='card-img' />
                  <Card.Body>
                    <Card.Title>Nutrients</Card.Title>
                    <Card.Text>
                      Mira que nutrientes te vienen mejor
                    </Card.Text>
                    <Button variant="success" onClick={handleNutrientsClick}>Go</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div> 
          </div>
        </div>
      </div>
    );
  }
  
export default Home;