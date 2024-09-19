"use client"

import React from 'react'
import { useSelectorContext } from './Selector-Context'
import styles from './Selector.module.css'

const Label = () => {
    const {selected, setSelected} = useSelectorContext()

    if (selected === 1) {
        return (
            <div className='h-[100%] w-[5%] bg-black/20 rounded-[15px] md:flex flex-col justify-between items-center md:py-10 md:px-6 hidden'>
                <label htmlFor='nama' className={`${styles.status} ${styles.valid}`}></label>
                <label htmlFor='email' className={`${styles.status} ${styles.valid_active}`}></label>
                <label htmlFor='no' className={`${styles.status} ${styles.invalid}`}></label>
                <label htmlFor='univ' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='fakultas' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='jurusan' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='sektor' className={`${styles.status} ${styles.incomplete}`}></label>
            </div>
        )
    }
    else if (selected === 2) {
        return (
            <div className='h-[100%] w-[5%] bg-black/20 rounded-[15px] md:flex flex-col justify-between items-center md:py-10 md:px-6 hidden'>
                <label htmlFor='nama' className={`${styles.status} ${styles.valid}`}></label>
                <label htmlFor='email' className={`${styles.status} ${styles.valid_active}`}></label>
                <label htmlFor='no' className={`${styles.status} ${styles.invalid}`}></label>
                <label htmlFor='univ' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='fakultas' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='jurusan' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='sektor' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='mentor' className={`${styles.status} ${styles.incomplete}`}></label>
            </div>
        )
    }
    else if (selected === 3) {
        return (
            <div className='h-[100%] w-[5%] bg-black/20 rounded-[15px] md:flex flex-col justify-between items-center md:py-10 md:px-6 hidden'>
                <label htmlFor='namaTim' className={`${styles.status} ${styles.valid}`}></label>
                <label htmlFor='namaKetua' className={`${styles.status} ${styles.valid}`}></label>
                <label htmlFor='nama1' className={`${styles.status} ${styles.valid}`}></label>
                <label htmlFor='nama2' className={`${styles.status} ${styles.valid}`}></label>
                <label htmlFor='email' className={`${styles.status} ${styles.valid_active}`}></label>
                <label htmlFor='no' className={`${styles.status} ${styles.invalid}`}></label>
                <label htmlFor='univ' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='fakultas' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='jurusan' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='sektor' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='twibbon' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='attachment' className={`${styles.status} ${styles.incomplete}`}></label>
            </div>
        )
    }
    else if (selected === 4) {
        return (
            <div className='h-[100%] w-[5%] bg-black/20 rounded-[15px] md:flex flex-col justify-between items-center md:py-10 md:px-6 hidden'>
                <label htmlFor='nama' className={`${styles.status} ${styles.valid}`}></label>
                <label htmlFor='email' className={`${styles.status} ${styles.valid_active}`}></label>
                <label htmlFor='univ' className={`${styles.status} ${styles.incomplete}`}></label>
                <label htmlFor='fakultas' className={`${styles.status} ${styles.incomplete}`}></label>
            </div>
        )
    }
}

export default Label
