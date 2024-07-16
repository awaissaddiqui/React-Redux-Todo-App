import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './reducers/UserReducer';

function Home() {
    const dispatch = useDispatch();

    const users = useSelector((state=> state.users));
    // const userEntries = Object.entries(users).filter(([key, value]) => key !== "_persist");
    // const userList = userEntries.map(([key, user]) => user);
    // console.log(userList);
    // console.log(users);
    // const user = useStore((state=> state.users))
    // const {users} = user.getState();
    // console.log(users);

    //  console.log(users);

    const handleDelete=(id)=>{
        dispatch(deleteUser({id}))
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="container ">
            <h2 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                CRUD App 
            </h2>
            </div>
            <Link
                to="/create"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                Create +
            </Link>
            <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="text-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">{user.id}</td>
                            <td className="px-6 py-4">{user.name}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">
                                <Link
                                    to={`/update/${user.id}`}
                                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
