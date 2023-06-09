import {Form, Button, Table} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import NavbarComponent from '../../components/navbarComponent';


function CalculateImc() {
    const navigate = useNavigate();

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState('');

    const calculate = () => {
        if (weight && height) {
          const imc = weight / ((height / 100) ** 2);
          setResult(imc.toFixed(2)); //"toFixed(2)" method that round to 2 decimal" 
        }

        Swal.fire({
            title: 'Result',
             html: `${result}`,
             icon: 'success'
         })
      };
    
    const onExit = () => {
        navigate('/home');
    }

    //ok

  return (
    <div>
    <NavbarComponent />
    <div className='fondo'>
    
    <div className='containe'>
      <div className='marco-general'>
        <h1>Calculator of IMC</h1>
  
        <Table responsive='sm'>
          <thead>
            <tr>
              <th className="text-center">IMC</th>
              <th className="text-center"> Composición Corporal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">Menos de 18.5</td>
              <td className="text-center">Desnutrición</td>
            </tr>
            <tr>
              <td className="text-center">18.5 - 24.9</td>
              <td className="text-center">En tu Peso</td>
            </tr>
            <tr>
              <td className="text-center">25.0 - 29.9</td>
              <td className="text-center">Sobrepeso</td>
            </tr>
            <tr>
              <td className="text-center">Más de 30.0</td>
              <td className="text-center">Obesidad</td>
            </tr>
          </tbody>
        </Table>
  
        <Form>
          <Form.Group controlId='weight' className="mb-3">
            <Form.Label>Peso (kg):</Form.Label>
            <Form.Control type='text' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </Form.Group>
          <Form.Group controlId='height' className="mb-3">
            <Form.Label>Altura (cm):</Form.Label>
            <Form.Control type='text' value={height} onChange={(e) => setHeight(e.target.value)} />
          </Form.Group>
  
          <div style={{ marginTop: '16px' }} className="mb-3">
            <Button type='button' variant='success' onClick={calculate}>
              Calcular IMC
            </Button>{' '}
            <Button type='button' variant='danger' onClick={onExit}>
              Cancel
            </Button>
          </div>
        </Form>
  
        <br />
        {result && <p>Tu IMC es: {result}</p>}
      </div>
    </div>
  </div>
  </div>
  )
}

export default CalculateImc