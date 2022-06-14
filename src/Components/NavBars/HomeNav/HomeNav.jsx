import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/FirebaseInit';
import styles from './HomeNav.module.css'
const HomeNav = () => {
  const  [user]  = useAuthState(auth);
  console.log(user);
    return (
      <>
        <Navbar className={styles.navBackground}>
          <Container>
            <Navbar.Brand>
              <Link to="/home" className="text-decoration-none text-white ">
                Rental Service and Attendance System
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {user ? (
                  <div>
                    <small className="text-white">user : {user.email}</small>
                    <Link
                      to={`/dashboard/${user.email}`}
                      className={` mx-2 text-white ${styles.navLink}`}
                    >
                      Dashboard
                    </Link>
                  </div>
                ) : (
                  <p></p>
                )}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default HomeNav;