"use client"; 

import React, { useState } from 'react';
import styles from './admin.module.css';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setError('');
        console.log("login successfull ", response); //debug
        router.push('/admin/event-attendees');
      } else {
        console.log("error login", data);
        setError(data.message);
      }
    } catch (error) {
      console.log("error login", error); //debug
      setError('Something went wrong, '+error.message);
    }finally{
      setLoading(false);
    }
  };

  return (
      <div className={`${styles.index_bg} flex justify-center items-center px-5 md:px-20 py-40 gap-10 flex-col`}>
          <div className='w-[100%] md:w-[80%] md:h-[75vh] bg-white/80 flex rounded-[50px] dark:bg-black/80'>
              <div className='hidden w-[40%] md:flex items-center justify-center'>
          <img src="/images/auth.png" alt="auth" className='w-[70%] object-cover' />
        </div>
        <div className='px-5 py-10 md:p-10 w-[100%] md:w-[60%] bg-[#023662]/80 rounded-[50px] flex justify-center items-center flex-col gap-12'>
            <h1 className='flex text-4xl font-bold text-center text-white'>Portal Admin PCE</h1>
          <form onSubmit={handleSubmit} className='flex gap-10 flex-col w-full'>
            <div className='flex flex-col gap-2'>
              <label className='text-white text-4xl font-bold' htmlFor="username">Username</label>
              <input
                className='p-3 text-xl md:text-2xl bg-transparent border-2 border-solid border-white rounded-[8px] '
                type="text"
                name="username"
                id="username"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-white text-2xl font-bold md:text-4xl' htmlFor="password">Password</label>
              <input
                className='p-3 text-xl md:text-2xl bg-transparent border-2 border-solid border-white rounded-[8px] '
                type="password"
                name="password"
                id="password"
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className='text-red-500'>{error}</p>}
            <div className='flex flex-col'>
                <button className='bg-white p-3 text-black text-center rounded-[20px] font-medium text-xl md:text-2xl' type="submit">Masuk</button>
            </div>
            {/* Loading spinner */}
            {loading && (
                  <div className="flex items-center h-full justify-center p-5">
                      <div className="w-10 h-10 mr-2 w-min-10 h-min-2 w-max-10 h-max-10 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                      <h2 className="text-white">Log you in, please wait...</h2>
                  </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
