import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Profile = () => {
    const { backendUrl, token, navigate } = useContext(ShopContext);
    const [userData, setUserData] = useState(null);

    const loadUserProfile = async () => {
        try {
            if (!token) {
                return null;
            }
            const response = await axios.get(backendUrl + '/api/user/profile', { headers: { token } });
            if (response.data.success) {
                setUserData(response.data.user);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (!token && !localStorage.getItem('token')) {
            navigate('/login');
        } else if (token) {
            loadUserProfile();
        }
    }, [token, navigate]);

    return (
        <div className='border-t pt-14'>
            <div className='text-2xl mb-3'>
                <Title text1={'MY'} text2={'PROFILE'} />
            </div>

            {userData ? (
                <div className='max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 aurora-card flex items-center gap-10'>

                    <div className='flex-1 flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-gray-600 text-sm'>Name</p>
                            <p className='text-lg font-medium'>{userData.name}</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-gray-600 text-sm'>Email</p>
                            <p className='text-lg font-medium'>{userData.email}</p>
                        </div>

                        <div className='mt-4'>
                            <button
                                onClick={() => navigate('/orders')}
                                className='bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all flex items-center gap-2 text-sm'
                            >
                                View Orders <img className='w-3 h-3.5 items-center' src={assets.dropdown_icon} alt="" />
                            </button>
                        </div>
                    </div>

                    <div className='w-24 h-24 flex-shrink-0 relative'>
                        <img src={assets.profile_icon} className='w-full h-full object-scale-down rounded-full border-2 border-gray-300 ' alt="Profile" />
                    </div>
                </div>
            ) : (
                <div className='text-center py-10'>
                    <p>Loading profile...</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
