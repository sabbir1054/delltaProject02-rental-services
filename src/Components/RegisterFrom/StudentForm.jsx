import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../Firebase/FirebaseInit';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import styles from "../../pages/RegisterPage/RegisterPage.module.css";
import { useNavigate } from 'react-router-dom';
const StudentForm = () => {
  const [match, setMatch] = useState(true);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

   const navigate = useNavigate();
  
  // date and time
  const today = new Date();
  const date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  //post user data function

  const postData = (data) => {
    const url = "https://stormy-forest-12943.herokuapp.com/users";

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  //post result data function

  const postResultData = (data) => {
    const url = "https://stormy-forest-12943.herokuapp.com/results";

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.date = date;

    if (data.password !== data.confirmPass) {
      setMatch(false);
    } else {
      setMatch(true);
      const url = `/dashboard/${data.email}`;
      createUserWithEmailAndPassword(data.email, data.password).then(() => {
       const newResult = { email: `${data.email}`, results: [] };
        postData(data);
        postResultData(newResult);
        
        user?navigate(url):navigate('/')
      });
    }
  };
  return (
    <>
      <h4 className="display-6 text-black text-center pt-2">Sign up</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="student"
          className="d-none"
          {...register("role", { required: true })}
        />
        <input
          placeholder="ID"
          className={`my-1 py-2 ${styles.input_box_id}`}
          {...register("id", { required: true })}
        />
        <input
          className={` my-1  py-2 ${styles.input_box_name}`}
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          className={` my-1  py-2 ${styles.input_box_email}`}
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          className={` my-1  py-2 ${styles.input_box_name}`}
          placeholder="Department"
          {...register("dept", { required: true })}
        />
        <input
          className={` my-1  py-2 ${styles.input_box_email}`}
          placeholder="Level"
          {...register("level", { required: true })}
        />
        <input
          className={` my-1  py-2 ${styles.input_box_name}`}
          placeholder="Mobile"
          {...register("mobile", { required: true })}
        />
        <input
          className={` my-1  py-2 ${styles.input_box_email}`}
          placeholder="Address"
          {...register("address", { required: true })}
        />
        <input
          className={` my-1  py-2 ${styles.input_box_name}`}
          placeholder="Balance"
          {...register("balance", { required: true })}
        />
        <input
          className={` my-1  py-2 ${styles.input_box_email}`}
          defaultValue={`Registered Date: ${date}`}
          disabled
        />

        <input
          className={` my-1  py-2 ${styles.input_box_name}`}
          placeholder="Password"
        type='password'
          {...register("password", { required: true })}
        />
        <input
          className={` my-1  py-2 ${styles.input_box_email}`}
          placeholder="Confirm Password"
        type='password'
          {...register("confirmPass", { required: true })}
        />

        {match ? "" : <span className="text-danger">Password not matched</span>}
        <div className="text-center">
          {" "}
          <input
            type="submit"
            value="Sign up"
            className={`${styles.student_submit_btn} py-2 my-2 w-50 `}
          />
        </div>
      </form>
    </>
  );
};

export default StudentForm;