import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../../components/navbarComponent';
import { useState } from 'react'
import mockDatabase from '../../mock_db.json';


function Nutrients() {

  const navigate = useNavigate();
  const [weight, setWeight] = useState('');
  const [objective, setObjective] = useState('');
  const [calories, setCalories] = useState('');

  
    const handleWeightChange = (event) => {
      setWeight(event.target.value);
    };
  
    const handleObjectiveChange = (event) => {
      setObjective(event.target.value);
    };
  
    const handleCaloriesChange = (event) => {
      setCalories(event.target.value);
    };
  


    const handleSubmit = () => {
 
        // Realiza las operaciones con la base de datos mockeada según los valores seleccionados
      

        // Filtra las recetas según el peso seleccionado
        if (weight === '1') {
          return console.log('perder');
        } else if (weight === '2') {
          return console.log('perder');
        }
        
        // Filtra las recetas según el objetivo
        if (objective === '1') {
          return console.log('salud');
        } else if (objective=== '2') {
          return console.log('musculo');
        }else if (objective === '3') {
          return console.log('vege');
        }

        // Filtra las recetas según las calorias
        if (calories === '1') {
          return console.log('-');
        } else if (calories === '2') {
          return console.log('=');
        }else if (calories === '3') {
          return console.log('+');
        }
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
        <h1>Nutrients Recomendamos</h1>
        <Form>
          <Form.Group className="mb-3">
          <Form.Label htmlFor="weightSelect">¿Quiero ganar o perder peso?</Form.Label>
              <Form.Select id="weightSelect" value={weight} onChange={handleWeightChange}>
                  <option value="1">Ganar peso</option>
                  <option value="2">Perder peso</option>
              </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label htmlFor="objectiveSelect">¿Que Objetivo?</Form.Label>
              <Form.Select id="objectiveSelect" value={objective} onChange={handleObjectiveChange}>
                  <option value="1">Mejorar la salud Cardiovascular</option>
                  <option value="2">Aumentar masa muscular</option>
                  <option value="3">Seguir una dieta Vegetariana</option>
              </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3" >
              <Form.Label htmlFor="caloriesSelect">Cuantas Kcal necesito consumir</Form.Label>
              <Form.Select id="caloriesSelect" value={calories} onChange={handleCaloriesChange}>
                  <option value="1">Menos de 1500 Kcal</option>
                  <option value="2">Entre 1500 2000 Kcal</option>
                  <option value="3">Mas de 2000 Kcal</option>
              </Form.Select>
          </Form.Group>
        <div className="text-center">
          <Button type="button" variant="success" onClick={handleSubmit} > Calcular  </Button>{' '}
          <Button type="button" variant="danger" onClick={onExit}> Cancel </Button>
        </div>
        </Form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Nutrients