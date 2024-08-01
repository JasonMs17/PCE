import React from 'react'
import styles from './admin.module.css'
import Image from 'next/image'

const page = () => {
    return (
        <div className={`${styles.index_bg} flex justify-center items-center px-20 py-40 gap-10 flex-col`}>
            <div className='w-[80%] h-[75vh] bg-white/80 flex rounded-[50px] dark:bg-black/80 '>
                <div className='w-[40%] flex items-center justify-center'>
                    <img src="/images/auth.png" alt="auth" className='w-[70%] object-cover' />
                </div>
                <div className='p-10 w-[60%] bg-[#023662]/80 rounded-[50px] flex justify-center items-center flex-col'>
                    <form action="post" className='flex gap-10 flex-col w-full'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-white text-4xl font-bold ' htmlFor="email">Email</label>
                            <input className='p-3 text-2xl bg-transparent border-2 border-solid border-white rounded-[8px] ' type="text" name="email" id="email" placeholder='email@gmail.com' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-white text-4xl font-bold ' htmlFor="password">Password</label>
                            <input className='p-3 text-2xl bg-transparent border-2 border-solid border-white rounded-[8px] ' type="password" name="password" id="password" placeholder='password' />
                        </div>
                        <div className='flex flex-col'>
                            <button className='bg-white p-3 text-black text-center rounded-[8px] font-medium text-2xl' type="submit">Masuk</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page
