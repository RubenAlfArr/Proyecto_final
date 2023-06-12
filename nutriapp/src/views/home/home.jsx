import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../../components/navbarComponent';
import { Card, CardGroup } from 'react-bootstrap';
import caloriesImage from "../../assets/calories.jpg";
import imcImage from "../../assets/imc.jpg";
import nutrientsImage from "../../assets/nutrients.jpg";
import recipesImage from "../../assets/recipes.jpg";

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

    const handleRecipesClick = () => {
      navigate('/recipes');
  }

    return (
    <div>
    <NavbarComponent />
      <div className='fondo'>
        <div className='containe'>
          <div className='marco'>
            <div className='card-container'>  
              <CardGroup style={{background: 'transparent', }}>
                <Card className='text-center' style={{ width: '18rem', background: 'transparent',  border: 'none', margin:'0 10px'}}>
                  <Card.Img style={{borderRadius: '40px' }} variant="top" src={imcImage} className='card-img' onClick={handleCalculateImcClick} />
                </Card>
                <Card className='text-center' style={{ width: '18rem', background: 'transparent',  border: 'none',  margin:'0 10px'}}>
                  <Card.Img style={{borderRadius: '40px' }} variant="top" src={caloriesImage} className='card-img' onClick={handleTotalCaloriasClick} />
                </Card>
                <Card  className='text-center' style={{ width: '18rem', background: 'transparent', border: 'none',  margin:'0 10px'}} >
                  <Card.Img  style={{borderRadius: '40px' }} variant="top" src={nutrientsImage} className='card-img' onClick={handleNutrientsClick} />
                </Card>
                <Card  className='text-center' style={{ width: '18rem', background: 'transparent', border: 'none',  margin:'0 10px'}} >
                  <Card.Img style={{borderRadius: '40px' }} variant="top" src={recipesImage} className='card-img' onClick={handleRecipesClick} />
                </Card>
              </CardGroup>
            
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
  
export default Home;