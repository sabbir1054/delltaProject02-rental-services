import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './StudentNav.module.css'

const StudentNav = () => {
    return (
      <>
        <Navbar className={styles.stuNavBg} expand="lg">
          <Container>
            <Navbar.Brand>
              {" "}
              <Link to="/home" className="text-decoration-none text-white ">
                Student Portal
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Link
                  to="/s-profile"
                  className={`text-decoration-none mx-2 text-white ${styles.navLink}`}
                >
                  Profile
                </Link>
                <Link
                  to="/s-courses"
                  className={`text-decoration-none mx-2 text-white ${styles.navLink}`}
                >
                  Courses
                </Link>
                <Link
                  to="/s-result"
                  className={`text-decoration-none mx-2 text-white ${styles.navLink}`}
                >
                  Result
                </Link>
                <Link
                  to="/balance"
                  className={`text-decoration-none mx-2 text-white ${styles.navLink}`}
                >
                  Balance
                </Link>
              </Nav>
              <Link
                to="/"
                className={`text-decoration-none mx-2 text-white ${styles.navLink}`}
              >
                Logout
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default StudentNav;