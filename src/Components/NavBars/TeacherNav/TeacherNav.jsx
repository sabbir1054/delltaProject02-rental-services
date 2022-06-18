import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/FirebaseInit';
import styles from "../StudentsNav/StudentNav.module.css";
const TeacherNav = () => {
     const [user] = useAuthState(auth);
     console.log(user);
     const handleSignOut = () => {
       signOut(auth)
         .then(() => {
           // Sign-out successful.
         })
         .catch((error) => {
           // An error happened.
         });
     };
    return (
      <>
        <Navbar className={styles.teacherNavBg} expand="lg">
          <Container>
            <Navbar.Brand>
              {" "}
              <Link
                to={`/dashboard/${user.email}`}
                className="text-decoration-none text-white "
              >
                Teachers Portal
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Link
                  to={`/profile/${user.email}`}
                  className={`text-decoration-none mx-2 text-white ${styles.navLink}`}
                >
                  Profile
                </Link>
                <Link
                  to={`/courses/${user.email}`}
                  className={`text-decoration-none mx-2 text-white ${styles.navLink}`}
                >
                  Courses
                </Link>
                <Link
                  to={`/results/${user.email}`}
                  className={`text-decoration-none mx-2 text-white ${styles.navLink}`}
                >
                  Result
                </Link>
                <Link
                  to={`/balance/${user.email}`}
                  className={`text-decoration-none mx-2 text-white ${styles.navLink}`}
                >
                  Balance
                </Link>
              </Nav>
              {user ? (
                <div>
                  <small className="text-white">user : {user.email}</small>
                  <Link
                    to={`/`}
                    className={`text-decoration-none mx-2 text-white ${styles.navLink}`}
                    onClick={() => handleSignOut()}
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                ""
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default TeacherNav;