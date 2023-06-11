import NavbarComponent from '../../components/navbarComponent';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Recipes() {

  const navigate = useNavigate();
  const [choice, setChoice] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);

  const options = {
    method: 'GET',
    url: 'https://edamam-recipe-search.p.rapidapi.com/search',
    params: {q: choice}, // Utiliza el valor seleccionado en el formulario
    headers: {
      'X-RapidAPI-Key': '9ab6bda5ecmsh5b429fe0551fa22p1c716ejsn602be4dad681',
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    }
  };

  function getRecipes(){
    axios
      .request(options)
      .then(function (response) {
        const allRecipes = response.data.hits.map(hit => hit.recipe);
      setRecipes(allRecipes);
      console.log(allRecipes);
      })
      .catch(function (error="Se producio un error") {
        console.log(error);
      });
  }

  function dameDetallesRecipe(recipeId) {
    const selectedRecipe = recipes.find(recipe => recipe.uri === recipeId);
    setSelectedRecipe(selectedRecipe);
    setModalShow(true);
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
            <h2>Buscador de Recetas</h2>
            <br/>
              <Form>
                <Form.Group controlId="choice" className="mb-3">
                  <Form.Label>Elige una opción:</Form.Label>
                  <Form.Select value={choice} onChange={(e) => setChoice(e.target.value)}>
                    <option value="">Seleccione una opción</option>
                    <option value="rise">Arroz</option>
                    <option value="paste">Pasta</option>
                    <option value="potato">Patatas</option>
                    <option value="meat">Carne</option>
                    <option value="fish">Pescado</option>
                    <option value="legumes">Legumbres</option>
                  </Form.Select>
                </Form.Group>
              </Form>
                <div className="text-center"> 
                  <Button type="button" variant="success" onClick={getRecipes} > Search </Button>{' '}
                  <Button type="button" variant="danger" onClick={onExit}> Cancel </Button>
                </div>


                {/* Mostrar las recetas */}
                <div>
                  {recipes.length > 0 && (
                    <div className="text-center">
                      <br/>
                      <h2>Recetas relacionadas:</h2>
                      <div >
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {recipes.map((recipe, index) => (
                          <ListGroup   key={index}>
                          <ListGroup.Item  action onClick={() => dameDetallesRecipe(recipe.uri)}>
                            {recipe.label}
                          </ListGroup.Item>
                        </ListGroup>
                        ))}
                      </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* {datosCocktail && (...)} virifica si tiene valor diferente de null, y si es asi lo ejecuta */}
                {selectedRecipe &&(
                <Modal show={modalShow} onHide={()=>setModalShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                  
                  <Modal.Body>
                      <div style={{ textAlign: 'center' }}>
                        <img src={selectedRecipe.image} style={{ display: 'block', margin: 'auto', width: '30%', height: '30%'  }}/>
                      </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      OK
                    </Button>
                  </Modal.Footer>
                </Modal>
                )}
              </div>
          </div>
      </div>
      </div>
    )
  }

export default Recipes