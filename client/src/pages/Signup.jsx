import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

export default function Signup() {
  const [formdata, setformdata] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);  // State to track errors
  const [loading, setLoading] = useState(false);  // State to track loading state

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true when the request starts
    setError(null);  // Reset the error state before the new request
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });

      // Check if response is not ok (status other than 2xx)
      // if (!res.ok) {
      //   throw new Error('Signup failed. Please try again.');  // Throw error if signup fails
      // }

      const data = await res.json();  // Handle successful response
      console.log(data);  // You can use this data as needed
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);  // Set the error state with the error message
    } finally {
      setLoading(false);  // Stop the loading spinner once the request is completed
    }
    navigate('/signin');  // Navigate to the login page after successful signup
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handlesubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Username'
          id='username'
          className='bg-slate-100 p-3'
          onChange={handlechange} // Corrected to onChange
        />
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3'
          onChange={handlechange} // Corrected to onChange
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3'
          onChange={handlechange} // Corrected to onChange
        />
        <button
          type='submit'
          className='bg-blue-950 rounded-lg text-white p-3 hover:opacity-95'
          disabled={loading}  // Disable button while loading
        >
          {loading ? 'Signing Up...' : 'Sign Up'}  {/* Change button text based on loading */}
        </button>
      </form>

      {/* Show error message if there's an error */}
      {error && (
        <div className='text-red-500 mt-3 text-center'>
          <p>Something went wrong</p>
        </div>
      )}

      <div className='flex gap-2 mt-5'>
        <p>Already have an account? </p>
        <Link to='/Signin'>
          <span className='text-blue-500'>Sign-in</span>
        </Link>
      </div>
    </div>
  );
}
