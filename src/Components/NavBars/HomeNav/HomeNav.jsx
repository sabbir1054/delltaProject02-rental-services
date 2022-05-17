import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './HomeNav.module.css'
const HomeNav = () => {
    return (
      <>
        <Navbar className={styles.navBackground}>
          <Container>
            <Navbar.Brand>
              <Link to='/home' className='text-decoration-none '>Rental Service and Attendance System</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Link to="/home">Logout</Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default HomeNav;