import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../pages/RegisterPage/RegisterPage.module.css";
const StudentInfo = ({ userData }) => {
    const [isEditable, setIsEditable] = useState(false);


//post data to database
/*     const postData = (data) => {
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

 */

    const updateProfile = () => {
        setIsEditable(true);
    }
    const saveProfile = () => {
      setIsEditable(false);
    };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="ID">
          <small className="fs-5"> Id :</small>{" "}
        </label>
        <input
          disabled
          defaultValue={userData.id ? userData.id : ``}
          className={`my-1 py-2 ${styles.input_box_id}`}
          {...register("id", { required: true })}
        />{" "}
        <br />
        <label htmlFor="ID">
          <small className="fs-5 me-3"> Name:</small>{" "}
        </label> <br />
        <input
          disabled={isEditable ? false : true}
          defaultValue={userData.id ? userData.name : ``}
          className={` my-1  py-2 ${styles.input_box_name}`}
          placeholder="Name"
          {...register("name", { required: true })}
        />{" "}
        <br />
        <label htmlFor="email">
          <small className="fs-5"> Email :</small>{" "}
        </label> <br />
        <input
          disabled
          defaultValue={userData.id ? userData.email : ``}
          className={` my-1  py-2 ${styles.input_box_email}`}
          placeholder="Email"
          {...register("email", { required: true })}
        />{" "}
        <br />
        <label htmlFor="email">
          <small className="fs-5 "> Department :</small>{" "}
        </label> <br />
        <input
          disabled
          defaultValue={userData.id ? userData.dept : ``}
          className={` my-1  py-2 ${styles.input_box_name}`}
          placeholder="Department"
          {...register("dept", { required: true })}
        />{" "}
        <br />
        <label htmlFor="email">
          <small className="fs-5"> Mobile:</small>{" "}
        </label> <br />
        <input
          disabled={isEditable ? false : true}
          defaultValue={userData.id ? userData.mobile : ``}
          className={` my-1  py-2 ${styles.input_box_name}`}
          placeholder="Mobile"
          {...register("mobile", { required: true })}
        />{" "}
        <br />
        <label htmlFor="email">
          <small className="fs-5"> Address :</small>{" "}
        </label> <br />
        <input
          disabled={isEditable ? false : true}
          defaultValue={userData.id ? userData.address : ``}
          className={` my-1  py-2 ${styles.input_box_email}`}
          placeholder="Address"
          {...register("address", { required: true })}
        />
      
        <div className="py-2">
            {" "}
                <input
                  type="submit"
                  value={`${isEditable?'Save':'Update profile'}`}
                      className={`${styles.student_submit_btn} py-2 my-2 w-25 `}
                      onClick={isEditable?saveProfile:updateProfile}
                />
        </div>
      </form>
    </div>
  );
};

export default StudentInfo;
