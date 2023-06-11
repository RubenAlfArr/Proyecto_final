import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NavbarComponent from '../../components/navbarComponent';
import Swal from 'sweetalert2';

function CalculateCalories() {
  const navigate = useNavigate();

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('1');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState('');
    

  const calculate = () => {
      const weightValue = parseFloat(weight);
      const heightValue = parseFloat(height);
      const ageValue = parseInt(age);

      if (!isNaN(weightValue) && !isNaN(heightValue) && !isNaN(ageValue)) {
          
          let bmr;
          if (gender === 'male') {
            bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5;
          } else {
            bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161;
          }
    

          let calories;
          switch (activityLevel) {
            case '1':
              calories = bmr * 1.2;
              break;
            case '2':
              calories = bmr * 1.375;
              break;
            case '3':
              calories = bmr * 1.55;
              break;
            case '4':
              calories = bmr * 1.725;
              break;
            case '5':
              calories = bmr * 1.9;
              break;
            default:
              calories = bmr;
              break;
          }
    
          setResult(calories.toFixed(2));

          Swal.fire({
            title: 'Result',
             html: `${result}`,
             icon: 'success'
          })

      }else{

        Swal.fire({
          title: 'Rellena los campos',
           icon: 'info'
        })
      }
    };

  const onExit = () => {
      navigate('/home');
  }

  return (
    <div>
      <NavbarComponent />
      <div className='fondo'>
        <div className='containe'>
          <div className='marco-general'>
            <h1>Calculator of Calories</h1>
             
          <Form>
                <Form.Group controlId="old" className="mb-3">
                    <Form.Label>Edad (años):</Form.Label>
                    <Form.Control type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="weight" className="mb-3">
                    <Form.Label>Peso (kg):</Form.Label>
                    <Form.Control type="text" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="height" className="mb-3">
                    <Form.Label>Altura (cm):</Form.Label>
                    <Form.Control type="text" value={height} onChange={(e) => setHeight(e.target.value)}/>
                </Form.Group>
                <div style={{ marginTop: '16px' }} className="mb-3">
                    <Form.Label>Elige Sexo:      </Form.Label>
                    <Form.Check inline type="radio" value="male" label="Masculino" name="radioGroup" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)}/>
                    <Form.Check inline type="radio" value="female" label="Femenino" name="radioGroup" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)}/> 
                </div>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Nivel de actividad fisica</Form.Label>
                    <Form.Select id="disabledSelect" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} >
                        <option value="1">Poco o ninguno</option>
                        <option value="2">Ejericio ligero (1-3 dias)</option>
                        <option value="3">Ejercicio moderado (3-5 dias)</option>
                        <option value="4">Ejercicio fuerte (6-7 dias)</option>
                        <option value="5">Ejercicio muy fuerte</option>
                    </Form.Select>
                </Form.Group>
    
                <div className="text-center" style={{ marginTop: '16px' }}>
                    <Button type="button" variant="success" onClick={calculate} > Calcular Calories</Button>{' '}
                    <Button type="button" variant="danger" onClick={onExit}> Cancel </Button>
                </div>
            </Form>

            <br />
            <div className='marco-profile'>
              {result && <p>Tu cuerpo necesita aproximadamente: {result} Kcal</p>} 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculateCalories