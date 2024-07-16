import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './reducers/UserReducer';


function Update() {
    const dispatch = useDispatch();
    const users = useSelector((state)=> state.users);
    const { id } = useParams();
    const numericId = Number(id); // Convert id to a number
    const findUserById = users.filter(f => f.id === numericId);
    const {name, email } = findUserById[0];

    const [editName, setEditName]= useState(name)
    const [editEmail, setEditEmail]= useState(email)
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateUser({
            id,
            editName,
            editEmail
        }))
        navigate("/")
    }


    return (
        <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg px-8 pb-8">
        <h1 className="text-2xl font-medium mb-6 text-center">Update User</h1>
        

<form className="max-w-sm mx-auto" onSubmit={handleSubmit} >
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="name" value={editName} onChange={(e)=>setEditName(e.target.value)} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='john doe' required />
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" value={editEmail} onChange={(e)=>setEditEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
</form>

      </div>
    </div>
    );
}

export default Update;