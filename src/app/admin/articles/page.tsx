import React from 'react'
import styles from './articles.module.css'

const page = () => {
  return (
    <div className={`${styles.index_bg} flex justify-center items-center px-20 py-40 gap-10 flex-col`}>
        <div className='flex justify-between w-full'>
            <h1 className='font-bold text-4xl text-white'>Daftar Artikel</h1>
            
        </div>
        <div className={`w-full h-[75vh] bg-black/20 p-10 rounded-[20px] gap-10 flex flex-col`}>
            
        </div>
    </div>
  )
}

export default page
