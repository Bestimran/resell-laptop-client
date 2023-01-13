import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex items-center justify-center h-[80vh] flex-col bg-green-200'>
           <figure>
           <img className='rounded-full' src={user?.photoURL} alt="" />
           </figure>
            <h1 className='text-4xl text-black font-serif'>WellCome  {user?.displayName}</h1>
           <div>
            <Link className='underline text-2xl text-base-100'>Profile</Link>
           
           </div>
        </div>
    );
};

export default Dashboard;