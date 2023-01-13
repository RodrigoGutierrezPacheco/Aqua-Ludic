import { MotionConfig } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { motion } from 'framer-motion';
import './Navbar.css'

function NavBar() {
  return (
    <>
      {['xxl'].map((expand) => (
				<motion.div whileTap={{color:'black'}} >
        <Navbar key={expand} className='navbar'  expand={expand} className="mb-3">
          <Container fluid>
            <motion.a whileHover={{scale:1.1,fontWeight:2000,borderBottom:'5px solid blue'}} whileTap={{scale:0.7}}><Navbar.Brand href="/"><motion.a whileHover={{scale:2,color:'blue',rotate:25,marginBottom:'5px solid blue'}} whileTap={{scale:3}}>Aqua-Ludic</motion.a></Navbar.Brand></motion.a>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <motion.a className='navbar-text' whileTap={{scale:0.7,href:'/'}} whileHover={{scale:1.3,color:'blue',fontWeight:2000,borderBottom:'4px solid blue',textAlign:'center'}}><Nav.Link href="/"><motion.a whileHover={{color:'blue'}} href='/'>Inicio</motion.a></Nav.Link></motion.a>
									<motion.a className='navbar-text' whileTap={{scale:0.7}} whileHover={{scale:1.3,marginLeft:'15%',color:'blue',fontWeight:2000,borderBottom:'4px solid blue'}}><Nav.Link href="/nosotros"><motion.a whileHover={{color:'blue',textAlign:'center'}}>¿Quiénes Somos?</motion.a></Nav.Link></motion.a>
									<motion.a className='navbar-text' whileTap={{scale:0.7}} whileHover={{scale:1.3,marginLeft:'15%',color:'blue',fontWeight:2000,borderBottom:'4px solid blue'}}><Nav.Link href="/productos"><motion.a whileHover={{color:'blue'}}>Productos</motion.a></Nav.Link></motion.a>
									<motion.a className='navbar-text' whileTap={{scale:0.7}} whileHover={{scale:1.3,marginLeft:'15%',color:'blue',fontWeight:2000,borderBottom:'4px solid blue'}}><Nav.Link href="/cotizaciones"><motion.a whileHover={{color:'blue'}}>Cotizaciones</motion.a></Nav.Link></motion.a>
                </Nav>
               {/* aqui puede ir imagen para contacto */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
				</motion.div>
      ))}
    </>
  );
}

export default NavBar;