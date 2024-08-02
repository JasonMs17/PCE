"use client"

import React from 'react'
import styles from './Selector.module.css'
import { useSelectorContext } from './Selector-Context';

const Form = () => {
    const { selected, setSelected } = useSelectorContext();

    if (selected === 1) {
        return (
            <div className='flex flex-col p-5 text-white gap-5 text-xl'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="nama">Nama</label>
                    <input className={styles.input} type="text" name="nama" id="nama" placeholder='Muhammad Sunarya' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input className={styles.input} type="email" name="email" id="email" placeholder='sunarya@gmail.com' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="no">Nomor Telepon (WA)</label>
                    <input className={styles.input} type="text" inputMode='numeric' pattern='\d*' name="no" id="no" placeholder='08123142412' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="univ">Universitas</label>
                    <input className={styles.input} type="text" name="univ" id="univ" placeholder='Universitas Padjadjaran' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="fakultas">Fakultas</label>
                    <input className={styles.input} type="text" name="fakultas" id="fakultas" placeholder='FMIPA' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="jurusan">Jurusan</label>
                    <input className={styles.input} type="text" name="jurusan" id="jurusan" placeholder='Biologi' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="sektor">Pilihan Sektor</label>
                    <select className={`${styles.input} ${styles.select}`} name="sektor" id="sektor" required>
                        <option value="kesehatan" defaultValue={'selected'}>Kesehatan</option>
                        <option value="pertanian">Pertanian</option>
                        <option value="kebumian">Kebumian</option>
                        <option value="peternakan">Peternakan dan Kesehatan Hewan</option>
                        <option value="pemerintahan">Pemerintahan</option>
                        <option value="nirlaba">Nirlaba</option>
                        <option value="swasta">Swasta</option>
                        <option value="media">Media dan Televisi</option>
                    </select>
                </div>
            </div>
        )
    }
    else if (selected === 2) {
        return (
            <div className='flex flex-col p-5 text-white gap-5 text-xl'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="nama">Nama</label>
                    <input className={styles.input} type="text" name="nama" id="nama" placeholder='Muhammad Sunarya' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input className={styles.input} type="email" name="email" id="email" placeholder='sunarya@gmail.com' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="no">Nomor Telepon (WA)</label>
                    <input className={styles.input} type="text" inputMode='numeric' pattern='\d*' name="no" id="no" placeholder='08123142412' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="univ">Universitas</label>
                    <input className={styles.input} type="text" name="univ" id="univ" placeholder='Universitas Padjadjaran' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="fakultas">Fakultas</label>
                    <input className={styles.input} type="text" name="fakultas" id="fakultas" placeholder='FMIPA' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="jurusan">Jurusan</label>
                    <input className={styles.input} type="text" name="jurusan" id="jurusan" placeholder='Biologi' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="schedule">Schedule</label>
                    <input className={styles.input} type="date" name="schedule" id="schedule" required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="mentor">Mentor</label>
                    <select className={`${styles.input} ${styles.select}`} name="mentor" id="mentor" required>
                        <option value="satu" defaultValue={'selected'}>Mentor 1</option>
                        <option value="dua">Mentor 2</option>
                    </select>
                </div>
            </div>
        )
    }
    else if (selected === 3) {
        return (
            <div className='flex flex-col p-5 text-white gap-5 text-xl'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="nama">Nama</label>
                    <input className={styles.input} type="text" name="nama" id="nama" placeholder='Muhammad Sunarya' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input className={styles.input} type="email" name="email" id="email" placeholder='sunarya@gmail.com' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="no">Nomor Telepon (WA)</label>
                    <input className={styles.input} type="text" inputMode='numeric' pattern='\d*' name="no" id="no" placeholder='08123142412' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="univ">Universitas</label>
                    <input className={styles.input} type="text" name="univ" id="univ" placeholder='Universitas Padjadjaran' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="fakultas">Fakultas</label>
                    <input className={styles.input} type="text" name="fakultas" id="fakultas" placeholder='FMIPA' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="jurusan">Jurusan</label>
                    <input className={styles.input} type="text" name="jurusan" id="jurusan" placeholder='Biologi' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="attachment">Twibbon</label>
                    <input className={styles.input} type="file" name="attachment" id="attachment" required />
                </div>
            </div>
        )
    }
    else if (selected === 4)
    {
        return (
            <div className='flex flex-col p-5 text-white gap-5 text-xl'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="nama">Nama</label>
                    <input className={styles.input} type="text" name="nama" id="nama" placeholder='Muhammad Sunarya' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input className={styles.input} type="email" name="email" id="email" placeholder='sunarya@gmail.com' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="univ">Universitas</label>
                    <input className={styles.input} type="text" name="univ" id="univ" placeholder='Universitas Padjadjaran' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="fakultas">Fakultas</label>
                    <input className={styles.input} type="text" name="fakultas" id="fakultas" placeholder='FMIPA' autoComplete='off' required />
                </div>
            </div>
        )
    }
}

export default Form
