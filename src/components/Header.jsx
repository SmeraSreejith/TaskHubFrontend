import { faDiagramSuccessor, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { tokenContext } from '../context/TokenContext';

function Header() {
  const nav = useNavigate();
  const { tokenStatus, setTokenStatus } = useContext(tokenContext);

  const handleLogout = () => {
    sessionStorage.clear();
    toast.error('User Logged out!!');
    setTokenStatus(false);
    nav('/');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <div className='p-2 '><FontAwesomeIcon icon={faDiagramSuccessor} fade className='me-2'/>TaskHub</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <button type='button' className='btn btn-outline-danger' onClick={handleLogout}><FontAwesomeIcon icon={faPowerOff} className='me-2'/>LOGOUT</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header