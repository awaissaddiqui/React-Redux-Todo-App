import React, { useState } from 'react';
import { addUser } from '../playground/reducers/UserReducer';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state)=> state.users)
    // const userEntries = Object.entries(users).filter(([key, value]) => key !== "_persist");
    // const userList = userEntries.map(([key, user]) => user);
    // console.log(usersEntries);

// actions
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        dispatch(addUser({
          id:newUserId,
          name, 
          email
        }))
        navigate("/")
    }
 

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg px-8 pb-8">
        <h1 className="text-2xl font-medium mb-6 text-center">Add new User</h1>
        

<form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="name" value={name} onChange={(e)=>setName(e.target.value)} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='john doe' required />
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add User</button>
</form>

      </div>
    </div>
  );
}

export default Create;
