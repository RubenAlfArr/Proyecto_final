import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style.css'
import Swal from 'sweetalert2';


function handleLogout() {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Estás a punto de salir',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, estoy seguro'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = '/';
    }
  });
}


  
function NavbarComponent() {
  return (
    <>
    <Navbar bg="light" variant="light"  >
      <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/imc">IMC</Nav.Link>
          <Nav.Link href="/calories">Calories</Nav.Link>
          <Nav.Link href="/nutrients">Nutrients</Nav.Link>
          <Nav.Link href="/recipes">Recipes</Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Brand>
            <img alt="" src="https://cdn-icons-png.flaticon.com/512/263/263100.png" width="30" height="30" />{' '}
          </Navbar.Brand>
          <NavDropdown  id="profile-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/edit">Edit Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Salir</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
    
  </>
  )
}

export default NavbarComponent