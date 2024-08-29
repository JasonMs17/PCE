import React from 'react'
import styles from './articles.module.css'
import Add from '@/app/components/Articles/Add'
import Table from '@/app/components/Articles/Table'

const page = () => {
  return (
    <div className={`${styles.index_bg} flex justify-center items-center px-10 md:px-20 py-40 gap-10 flex-col`}>
        <div className='flex justify-between w-full flex-col md:flex-row gap-4 text-center md:text-start justify-end'>
            <h1 className='font-bold md:text-4xl text-white text-3xl'>Daftar Artikel</h1>
            <Add />
        </div>
        <div className={`w-full h-[75vh] bg-black/20 p-4 md:p-10 rounded-[20px] gap-10 flex flex-col overflow-y-scroll ${styles.no_scrollbar}`}>
            <Table />
        </div>
    </div>
  )
}

export default page
