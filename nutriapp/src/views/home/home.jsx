import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
      <div>
        <h1>Welcome to Home</h1>
        <p>Here can Calculate you IMC</p>
        <Button variant="primary" onClick={handleCalculateImcClick} type="submit" style={{marginBottom: '20px'}}>
              Calculate IMC
        </Button > 
        <p style={{marginTop: '20px'}}>Here you can see Total Calorias</p>
        <Button variant="primary" onClick={handleTotalCaloriasClick} type="submit" style={{marginTop: '5px'}}>
              Calculate Calories
        </Button> 
        <p style={{marginTop: '20px'}}>Here you can see Nutrients</p>
        <Button variant="primary" onClick={handleNutrientsClick} type="submit" style={{marginTop: '5px'}}>
              Nutrients
        </Button> 
      </div>
    );
  }
  
export default Home;