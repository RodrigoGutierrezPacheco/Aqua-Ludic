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
        <Navbar key={expand} className='navbar'  expand={expand}  className="mb-3">
          <Container fluid>
            <motion.a transition={{duration:1}} initial={{scale:1.2}} animate={{scale:1,rotate:360}} whileHover={{scale:1.1,fontWeight:2000,borderBottom:'5px solid white',borderTop:'5px solid white'}} whileTap={{scale:0.7}}><Navbar.Brand href="/"><motion.a whileHover={{scale:2,color:'white',rotate:25,marginBottom:'5px solid white'}} whileTap={{scale:3,transition:{duration:1}}}><motion.img className='navbar-logo' src='images/logo-blanco.webp'/></motion.a></Navbar.Brand></motion.a>
            <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas style={{backgroundColor:'black',margin:'2px solid white'}}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header style={{color:'white',backgroundColor:'white'}} closeButton>
                <Offcanvas.Title style={{color:'black',}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='flex'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
								<motion.a className='navbar-text' whileTap={{scale:0.7,href:'/'}} whileHover={{scale:1.3,color:'white',fontWeight:2000,borderBottom:'4px solid white',textAlign:'center'}}><Nav.Link href="/"><motion.a whileHover={{color:'white'}} style={{color:'white'}} href='/' className='navbar-text'>Inicio</motion.a></Nav.Link></motion.a>
								<motion.a className='navbar-text' whileTap={{scale:0.7,href:'/'}} whileHover={{scale:1.3,color:'white',fontWeight:2000,borderBottom:'4px solid white',textAlign:'center'}}><Nav.Link href="/"><motion.a whileHover={{color:'white'}} style={{color:'white'}} href='/' className='navbar-text'>Nosotros</motion.a></Nav.Link></motion.a>
								<motion.a className='navbar-text' whileTap={{scale:0.7,href:'/'}} whileHover={{scale:1.3,color:'white',fontWeight:2000,borderBottom:'4px solid white',textAlign:'center'}}><Nav.Link href="/"><motion.a whileHover={{color:'white'}} style={{color:'white'}} href='/' className='navbar-text'>Productos</motion.a></Nav.Link></motion.a>
								<motion.a className='navbar-text' whileTap={{scale:0.7,href:'/'}} whileHover={{scale:1.3,color:'white',fontWeight:2000,borderBottom:'4px solid white',textAlign:'center'}}><Nav.Link href="/"><motion.a whileHover={{color:'white'}} style={{color:'white'}} href='/' className='navbar-text'>Proyectos</motion.a></Nav.Link></motion.a>
								<motion.a className='navbar-text' whileTap={{scale:0.7,href:'/'}} whileHover={{scale:1.3,color:'white',fontWeight:2000,borderBottom:'4px solid white',textAlign:'center'}}><Nav.Link href="/"><motion.a whileHover={{color:'white'}} style={{color:'white'}} href='/' className='navbar-text'>Cotizaciones</motion.a></Nav.Link></motion.a>
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