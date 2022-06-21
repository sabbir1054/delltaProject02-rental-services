import React, { useState } from 'react';

const SingleUserBalance = ({ user }) => {

const [isEditable, setIsEditable] = useState(false);

const updateProfile = () => {
    setIsEditable(true);
  };
  const saveProfile = () => {
    setIsEditable(false);
  };


        //update data
    const handleUpdate = (data) => {
    
      fetch(
        `http://localhost:5000/updateBalance/${user.email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
    
    const onSubmit = () => {
        const newBalance={}
        const balance = document.getElementById(`balance${user.id}`).value;
        newBalance.balance = balance;
        handleUpdate(newBalance);
        saveProfile();
    }

    return (
      <>
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <input id={`balance${user.id}`} defaultValue={user.balance} />
          </td>
          <td>
            <button
              className={`btn btn-primary ${isEditable ? "" : "d-none"}`}
              onClick={onSubmit}
            >
              Save
            </button>
            <button
              className={`btn btn-warning ${isEditable ? "d-none" : ""}`}
              onClick={updateProfile}
            >
              Update
            </button>
          </td>
        </tr>
      </>
    );
};

export default SingleUserBalance;