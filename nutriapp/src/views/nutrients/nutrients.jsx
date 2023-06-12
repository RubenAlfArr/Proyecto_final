import {Form, Button,  ListGroup} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../../components/navbarComponent';
import { useState } from 'react'
import mockDatabase from '../../mock_db.json';
import Modal from 'react-bootstrap/Modal';


function Nutrients() {

  const navigate = useNavigate();
  const [weight, setWeight] = useState("");
  const [objective, setObjective] = useState("");
  const [calories, setCalories] = useState("");

  const [recipes, setRecipes] = useState([])
  const [selectedNutrients, setSelectedNutrients] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  

    const handleSubmit = () => {

        if (weight === "ganar" && objective === "1" && calories === "1") {
          const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
          const fatCondition = parseFloat(recipe.fat) > 50;
          const proteinCondition = parseFloat(recipe.protein) < 50;
          const caloriesCondition =  recipe.calories <= 1000 
            return fatCondition && proteinCondition && caloriesCondition;
          })
        
          setRecipes(filteredRecipes);
          console.log("Filtrado por ganar peso, mejorar la salud cardiovascular y menos de 1000 Kcal");

          }else if(weight === "ganar" && objective === "1" && calories === "2") {
            const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
              const fatCondition = parseFloat(recipe.fat) > 50;
              const proteinCondition = parseFloat(recipe.protein) < 50;
              const caloriesCondition =  (recipe.calories > 1000 && recipe.calories <= 1500)
                return fatCondition && proteinCondition && caloriesCondition;
              })
            
              setRecipes(filteredRecipes);
              console.log("Filtrado por ganar peso, mejorar la salud cardiovascular y entre 1500 Kcal");
          
        }  else if(weight === "ganar" && objective === "1" && calories === "3") {
          const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
            const fatCondition = parseFloat(recipe.fat) > 50;
            const proteinCondition = parseFloat(recipe.protein) < 50;
            const caloriesCondition =  recipe.calories > 1500;
              return fatCondition && proteinCondition && caloriesCondition;
            })
          
            setRecipes(filteredRecipes);
            console.log("Filtrado por ganar peso, mejorar la salud cardiovascular y entre 2000 Kcal");
          
        }  else if(weight === "ganar" && objective === "2" && calories === "1") {
          const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
            const fatCondition = parseFloat(recipe.fat) > 50;
            const proteinCondition = parseFloat(recipe.protein) > 50;
            const caloriesCondition =  recipe.calories < 1000;
              return fatCondition && proteinCondition && caloriesCondition;
            })
          
            setRecipes(filteredRecipes);
            console.log("Filtrado por ganar peso, masa muscular y entre 1000 Kcal");
          
        }  else if(weight === "ganar" && objective === "2" && calories === "2") {
          const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
            const fatCondition = parseFloat(recipe.fat) > 50;
            const proteinCondition = parseFloat(recipe.protein) > 50;
            const caloriesCondition =  (recipe.calories > 1000 && recipe.calories <= 1500)
              return fatCondition && proteinCondition && caloriesCondition;
            })
          
            setRecipes(filteredRecipes);
            console.log("Filtrado por ganar peso, mejorar masa y entre 1500 Kcal");
        }  else if(weight === "ganar" && objective === "2" && calories === "3") {
          const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
            const fatCondition = parseFloat(recipe.fat) > 50;
            const proteinCondition = parseFloat(recipe.protein) > 50;
            const caloriesCondition = recipe.calories > 1500
              return fatCondition && proteinCondition && caloriesCondition;
            })
          
            setRecipes(filteredRecipes);
            console.log("Filtrado por ganar peso, mejorar masa y entre 2000 Kcal");
        }  else if(weight === "perder" && objective === "1" && calories === "1") {
          const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
            const fatCondition = parseFloat(recipe.fat) < 50;
            const proteinCondition = parseFloat(recipe.protein) < 50;
            const caloriesCondition =  recipe.calories < 1000
              return fatCondition && proteinCondition && caloriesCondition;
            })
          
            setRecipes(filteredRecipes);
            console.log("Filtrado por perder peso, salud y entre 1000 Kcal");
        }  else if(weight === "perder" && objective === "1" && calories === "2") {
          const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
            const fatCondition = parseFloat(recipe.fat) < 50;
            const proteinCondition = parseFloat(recipe.protein) < 50;
            const caloriesCondition =  (recipe.calories > 1000 && recipe.calories <= 1500)
              return fatCondition && proteinCondition && caloriesCondition;
            })
          
            setRecipes(filteredRecipes);
            console.log("Filtrado por perder peso, salud y entre 1500 Kcal");
        }  else if(weight === "perder" && objective === "1" && calories === "3") {
          const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
            const fatCondition = parseFloat(recipe.fat) < 50;
            const proteinCondition = parseFloat(recipe.protein) < 50;
            const caloriesCondition =  recipe.calories > 1500
              return fatCondition && proteinCondition && caloriesCondition;
            })
          
            setRecipes(filteredRecipes);
            console.log("Filtrado por perder peso, salud y entre 20000 Kcal");
        }  else if(weight === "perder" && objective === "2" && calories === "1") {
          const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
            const fatCondition = parseFloat(recipe.fat) < 50;
            const proteinCondition = parseFloat(recipe.protein) > 50;
            const caloriesCondition =  recipe.calories < 1000
              return fatCondition && proteinCondition && caloriesCondition;
            })
          
            setRecipes(filteredRecipes);
            console.log("Filtrado por perder peso, masa y entre 1000 Kcal");
        }else if(weight === "perder" && objective === "2" && calories === "2") {
          const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
            const fatCondition = parseFloat(recipe.fat) < 50;
            const proteinCondition = parseFloat(recipe.protein) > 50;
            const caloriesCondition =  (recipe.calories > 1000 && recipe.calories <= 1500)
              return fatCondition && proteinCondition && caloriesCondition;
            })
          
            setRecipes(filteredRecipes);
            console.log("Filtrado por perder peso, masa y entre 1500 Kcal");
        }
        else if(weight === "perder" && objective === "2" && calories === "3") {
          const filteredRecipes = Object.values(mockDatabase).filter((recipe) => {
            const fatCondition = parseFloat(recipe.fat) < 50;
            const proteinCondition = parseFloat(recipe.protein) > 50;
            const caloriesCondition =  recipe.calories > 1500
              return fatCondition && proteinCondition && caloriesCondition;
            })
          
            setRecipes(filteredRecipes);
            console.log("Filtrado por perder peso, salud y entre 2000 Kcal");
        }
        
      }
    
      console.log(recipes)

    const onExit = () => {
        navigate('/home');
    }

    function dameDetallesNutrients(nutrientsId) {
      console.log("Selected Nutrients ID:", nutrientsId);
      const selectedRecipe = recipes.find((recipe) => recipe.id === nutrientsId);
      setSelectedNutrients(selectedRecipe);
      setModalShow(true);
    }

  return (
    <div>
      <NavbarComponent />
      <div className='fondo'>
        <div className='containe'>
        <div className='marco-general'>
          <h1>Nutrients</h1>
          <Form>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="weightSelect">¿Quiero ganar o perder peso?</Form.Label>
                <Form.Select id="weightSelect" value={weight} onChange={(e) => setWeight(e.target.value)}>
                    <option value="ganar">Ganar peso</option>
                    <option value="perder">Perder peso</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label htmlFor="objectiveSelect">¿Que Objetivo?</Form.Label>
                <Form.Select id="objectiveSelect" value={objective} onChange={(e) => setObjective(e.target.value)}>
                    <option value="1">Mejorar la salud Cardiovascular</option>
                    <option value="2">Aumentar masa muscular</option>
                </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="caloriesSelect">Cuantas Kcal necesito consumir</Form.Label>
                <Form.Select id="caloriesSelect" value={calories} onChange={(e) => setCalories(e.target.value)}>
                    <option value="1">Menos de 1000 Kcal</option>
                    <option value="2">Entre 1000 1500 Kcal</option>
                    <option value="3">Mas de 1500 Kcal</option>
                </Form.Select>
            </Form.Group>
          <div className="text-center">
            <Button type="button" variant="success" onClick={handleSubmit} > Calcular  </Button>{' '}
            <Button type="button" variant="danger" onClick={onExit}> Cancel </Button>
          </div>
          </Form>
          {/*list of random recipes */}
          {recipes.length > 0 && (
            <div className="text-center">
              <br/>
              <h3>Random Recipes:</h3>
              <ListGroup>
              {recipes.slice(0, 10).map((recipe) => (
                  <ListGroup.Item action onClick={() => dameDetallesNutrients(recipe.id)} key={recipe.id}>{recipe.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          )}

          {/* virifica si tiene valor diferente de null, y si es asi lo ejecuta */}
          {selectedNutrients &&(
                <Modal show={modalShow} onHide={()=>setModalShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                  
                  <Modal.Body>
                      <div style={{ textAlign: 'center' }}>
                        <p><strong> Name:</strong> {selectedNutrients.name}</p>
                        <p><strong> Fat: </strong>{selectedNutrients.fat}</p>
                        <p><strong> Calories: </strong>{selectedNutrients.calories}</p>
                        <p><strong> Protein: </strong>{selectedNutrients.protein}</p>
                        <p><strong> Instruction: </strong> {selectedNutrients.instructions}</p>
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

export default Nutrients