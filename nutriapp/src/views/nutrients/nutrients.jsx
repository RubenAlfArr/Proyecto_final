import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../../components/navbarComponent';
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';


function Nutrients() {
    const navigate = useNavigate();
    const [datos, setDatos]= useState([])


    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/22347',
      headers: {
        'X-RapidAPI-Key': '9ab6bda5ecmsh5b429fe0551fa22p1c716ejsn602be4dad681',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    // const options = {
    //   method: 'GET',
    //   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1003464/nutritionWidget.json',
    //   headers: {
    //     'X-RapidAPI-Key': '9ab6bda5ecmsh5b429fe0551fa22p1c716ejsn602be4dad681',
    //     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
          
    //   }
    // }

    useEffect(() => {
      listaNutrients()
    },[]);
  

   
      function listaNutrients() {
        axios
          .request(options)
          .then(function (response) {
            setDatos(response.data);
            console.log(response.data);
            console.log(datos);
          })
          .catch(function () {
            console.log("Sucedio un error");
          });
      }
    

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