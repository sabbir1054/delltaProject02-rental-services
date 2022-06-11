import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from "../../pages/RegisterPage/RegisterPage.module.css";
const StudentForm = () => {
  const [match, setMatch] = useState(true);


  // date and time
  const today = new Date();
  const date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

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
       console.log(data);
    }
  };
  return (
    <>
      <h4 className="display-6 text-black text-center pt-2">Sign up</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="teacher"
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
          {...register("password", { required: true })}
        />
        <input
          className={` my-1  py-2 ${styles.input_box_email}`}
          placeholder="Confirm Password"
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