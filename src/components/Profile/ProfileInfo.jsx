import React from 'react'
import { FaMobileAlt } from 'react-icons/fa';
import { FaPenFancy, FaUser } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { useSelector } from 'react-redux';

const ProfileInfo = () => {
  const profileDetailSections = ['Personal Information', 'Study Abroad Preferences', 'Budget Preference', 'Education Funds', 'Immigration Status'];

  const user = useSelector(state => state.user.user);
  if (!user) {
    return <div className='h-screen flex justify-center items-center w-full'>Loading....</div>
  }

  return (
    <div className='min-h-screen px-4 w-full md:w-4/5'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='md:col-span-3 w-full'>
          <b className='text-3xl'>Profile</b>
          <p className='py-1 text-gray-600'>View and maintain your profile</p>
        </div>
        <div className='md:col-span-1 flex md:items-end'>
          <button className='p-2 px-5 bg-[#152347] text-white rounded-xl font-bold cursor-pointer flex gap-3 items-center justify-center md:justify-between'>
            <FaPenFancy />Edit My Profile
          </button>
        </div>
      </div>

      {/* User Details */}
      <div className='shadow-lg rounded-lg my-10 p-6 bg-white'>
        <h2 className='text-xl font-semibold pb-4'>Contact Details</h2>

        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mt-4 text-gray-700 gap-4'>
          <div className='flex items-center gap-3 '>
            <FaUser className='text-[#152347]' size={22} /> {user?.name}
          </div>
          <div className='flex items-center gap-3 '>
            <MdOutlineEmail className='text-[#152347]' size={22} /> {user?.email}
          </div>
          <div className='flex items-center gap-3'>
            <FaMobileAlt className='text-[#152347]' size={22} /> {user?.mobile || "Not provided"}
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div>
        {profileDetailSections.map((i) => (
          <div key={i} className='w-full h-[300px]'>
            <h1 className='p-2 bg-[#152347] text-[#fff]'>{i}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfileInfo;
