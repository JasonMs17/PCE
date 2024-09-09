"use client"

import React from 'react'
import styles from './Selector.module.css'
import { useSelectorContext } from './Selector-Context';
import { useEffect, useState } from "react";



const Form = () => {

    const [sectors, setSectors] = useState([]);
    const [mentors, setMentors] = useState([]);


    useEffect(() => {
        const fetchSectors = async () => {
          try {
            const response2 = await fetch("/api/mentor");
            const response1 = await fetch("/api/sector-category");
            const result2 = await response2.json();
            const result1 = await response1.json();
    
            setSectors(result1.data);
            setMentors(result2.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchSectors();
      }, []);
    

    // useEffect(() => {
    //     const fetchMentors = async () => {
    //     try {
    //         const response = await fetch("/api/mentor");
    //         const result = await response.json();
    //         setMentors(result.data);
    //     } catch (error) {
    //         console.error("Error fetching mentors:", error);
    //     }
    //     };

    //     fetchMentors();
    // }, []);

    const { selected, setSelected } = useSelectorContext();

    if (selected === 1) {
        return (
            <form action="api/class-program" method="POST" className='flex flex-col md:w-[92.5%] w-full gap-2'>
                <div className={`h-[90%] md:w-full bg-black/20 rounded-[15px] overflow-y-scroll ${styles.no_scrollbar}`}>
                <div className='flex flex-col md:p-5 p-4 text-white gap-5 text-xl'>
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
                        {sectors.map((sector) => (
                            <option value={sector.name}>{sector.name} ({sector.theme}) - {sector.date}</option>
                        ))}
                    </select>
                </div>
            </div>
                </div>
                <div className='h-[5%]'>
                  <button type="submit" className='bg-white px-5 py-3 flex text-black justify-center items-center rounded-[70px] gap-2 font-semibold'>
                    Submit
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.99991 8L0.95166 1.34375C5.85131 2.76875 10.4717 5.01984 14.6137 8C10.4719 10.9801 5.8518 13.2312 0.95241 14.6562L2.99991 8ZM2.99991 8H8.62491" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
        )
    }
    else if (selected === 2) {
        return (
            <form action="api/mentoring" method="POST" className='flex flex-col md:w-[92.5%] w-full gap-2'>
                <div className={`h-[90%] md:w-full bg-black/20 rounded-[15px] overflow-y-scroll ${styles.no_scrollbar}`}>
                <div className='flex flex-col md:p-5 p-4 text-white gap-5 text-xl'>
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
                    <label htmlFor="cv">Curriculum Vitae</label>
                    <input className={styles.input} type="text" name="cv" id="cv" placeholder='https://drive.google.com/...' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="sektor">Pilihan Sektor</label>
                    <select className={`${styles.input} ${styles.select}`} name="sektor" id="sektor" required>
                        {sectors.map((sector) => (
                            <option value={sector.name}>{sector.name} ({sector.theme}) - {sector.date}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="mentor">Mentor</label>
                    <select className={`${styles.input} ${styles.select}`} name="mentor" id="mentor" required>
                        {/* {mentors.map((mentor) => (
                            <option value={mentor.name}>{mentor.name} - sisa quota : {mentor.quota}</option>
                        ))} */}
                         <option value="Nama Mentor satu">Mentor satu - sisa quota : 20</option>
                         <option value="Nama Mentor dua">Mentor dua - sisa quota : 30</option>
                    </select>
                </div>
            </div>
                </div>
                <div className='h-[5%]'>
                  <button type="submit" className='bg-white px-5 py-3 flex text-black justify-center items-center rounded-[70px] gap-2 font-semibold'>
                    Submit
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.99991 8L0.95166 1.34375C5.85131 2.76875 10.4717 5.01984 14.6137 8C10.4719 10.9801 5.8518 13.2312 0.95241 14.6562L2.99991 8ZM2.99991 8H8.62491" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
        )
    }
    else if (selected === 3) {
        return (
            <form action="api/project" method="POST" encType="multipart/form-data" className='flex flex-col md:w-[92.5%] w-full gap-2'>
                <div className={`h-[90%] md:w-full bg-black/20 rounded-[15px] overflow-y-scroll ${styles.no_scrollbar}`}>
                <div className='flex flex-col md:p-5 p-4 text-white gap-5 text-xl'>
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
                </div>
                <div className='h-[5%]'>
                  <button type="submit" className='bg-white px-5 py-3 flex text-black justify-center items-center rounded-[70px] gap-2 font-semibold'>
                    Submit
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.99991 8L0.95166 1.34375C5.85131 2.76875 10.4717 5.01984 14.6137 8C10.4719 10.9801 5.8518 13.2312 0.95241 14.6562L2.99991 8ZM2.99991 8H8.62491" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
        )
    }
    else if (selected === 4)
    {
        return (
            <form action="api/main-event" method="POST" className='flex flex-col md:w-[92.5%] w-full gap-2'>
                <div className={`h-[90%] md:w-full bg-black/20 rounded-[15px] overflow-y-scroll ${styles.no_scrollbar}`}>
                <div className='flex flex-col md:p-5 p-4 text-white gap-5 text-xl'>
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
                </div>
                <div className='h-[5%]'>
                  <button type="submit" className='bg-white px-5 py-3 flex text-black justify-center items-center rounded-[70px] gap-2 font-semibold'>
                    Submit
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.99991 8L0.95166 1.34375C5.85131 2.76875 10.4717 5.01984 14.6137 8C10.4719 10.9801 5.8518 13.2312 0.95241 14.6562L2.99991 8ZM2.99991 8H8.62491" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
        )
    }
}

export default Form
