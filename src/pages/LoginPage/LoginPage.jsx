import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdEmail, MdVpnKey } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="py-5 my-5 ">
      <Container>
        <Row className="bg-light">
          <Col sm={6} className="p-5">
            <img
              src="https://i.ibb.co/YQ6TvYd/Illustration.png"
              alt=""
              className="img-fluid"
            />
          </Col>
          <Col
            sm={5}
            className={`bg-white ms-5 my-5 rounded ${styles.login_wrap}`}
          >
            <h1>
              Welcome to{" "}
              <span className={`d-block fw-bold ${styles.colored_text}`}>
                Student Portal
              </span>
            </h1>

            {/* LOGIN FORM SECTION */}
            <div className="login-form  py-5 ">
              <div className="w-100">
                <MdEmail className={styles.emailIcon} />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("email")}
                    placeholder='Email'
                    className={`w-100 my-3 py-2 ${styles.input_box}`}
                  />{" "}
                  <br />
                  <input
                    {...register("password", { required: true })}
                    placeholder="Password"
                    type="password"
                    className={`${styles.input_box} w-100 mt-3 py-2`}
                  />{" "}
                  <MdVpnKey className={styles.passIcon} />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <p className="text-end my-0 text-primary text-decoration-underline">Forgot Password</p>
                  <input
                    value="Login"
                    type="submit"
                    className={`${styles.submit_btn} w-100 my-3 py-2`}
                  />
                </form>
                <br />
                <p className="fs-6">
                  Don't have an account? <Link to="/register"> Register</Link>{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
