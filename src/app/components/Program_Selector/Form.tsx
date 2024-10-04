"use client"

import React from 'react'
import styles from './Selector.module.css'
import { useSelectorContext } from './Selector-Context';
import FloatingNotification from './Floating_Notification';
import { useEffect, useState, ChangeEvent } from "react";
import Mentoring from '@/models/Mentoring';



const Form = () => {

    const [sectors, setSectors] = useState([]);
    const [mentors, setMentors] = useState([]);
    const [filteredMentors, setFilteredMentors] = useState([]);
    const [isShowMentor, setIsShowMentors] = useState(false);

    useEffect(() => {
        const fetchSectors = async () => {
          try {
            const response2 = await fetch("/api/mentor");
            const response1 = await fetch("/api/sector-category");
            const result2 = await response2.json();
            const result1 = await response1.json();
    
            await setSectors(result1.data);
            await setMentors(result2.mentors);
            console.log("DATA MENTOR : ", result2);
            console.log("DATA SEKTOR : ", result1);
          } catch (error instanceOf Error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchSectors();
      }, []);
    


    const { selected, setSelected } = useSelectorContext();


    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const form = e.target as HTMLFormElement; // Get the form element that triggered the submit event
        const formData = new FormData(form); // Gather form data
        let apiEndpoint = "";
        
        // Determine which form is being submitted based on the 'selected' state
        switch (selected) {
            case 1:
                apiEndpoint = "/api/class-program";
                break;
            case 2:
                apiEndpoint = "/api/mentoring";
                break;
            case 3:
                apiEndpoint = "/api/project";
                break;
            case 4:
                apiEndpoint = "/api/main-event";
                break;
            default:
                console.error("No valid form selected");
                return;
        }
        

        setLoading(true);
        try {
            console.log("Sending to "+apiEndpoint,Array.from(formData.entries()));
            const response = await fetch(apiEndpoint, {
                method: "POST",
                body: formData,
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log("Form submitted to "+apiEndpoint+" responded with:", result);
                if(result['status'] == 200){
                    setMessage(result['message']);
                    setType('success');

                    form.reset();

                    if(apiEndpoint == "/api/class-program"){
                        const button = document.querySelector('[aria-description="2"]');
                        if(button) {
                            button.click();
                            console.log();
                        }
                    }
                }else{
                    setMessage(result['message']);
                    setType('error');
                }
            } else {
                setMessage(response.statusText);
                setType('error');
            }
        } catch (error instanceOf Error) {
            console.error("Error during form submission:", error);
        }finally{
            setIsVisible(true); //munculkan floating notification
            setLoading(false); //matikan animasi loading
        }
    };

    const showMentor = (event: ChangeEvent<HTMLSelectElement>) =>{
        setIsShowMentors(true);
        setFilteredMentors(mentors.filter(mentor => mentor.sectorCategory.name === event.target.value));
        console.log(filteredMentors);
    }
    


    if (selected === 1) {
        return (
            <form action="api/class-program" onSubmit={handleSubmit} className='flex flex-col md:w-[92.5%] w-full gap-2'>
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
                    <select onChange={showMentor} className={`${styles.input} ${styles.select}`} name="sektor" id="sektor" required>
                        {sectors.map((sector) => (
                           <option key={sector.name} value={sector.name}>
                               {sector.name} ({sector.theme}) - {sector.date}
                           </option>
                         ))}
                    </select>
                </div>
            </div>
                </div>
                <div className='h-[5%] flex'>
                  <button type="submit" className='bg-white px-5 py-6 flex text-black justify-center items-center rounded-[70px] gap-2 font-semibold'>
                    Submit
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.99991 8L0.95166 1.34375C5.85131 2.76875 10.4717 5.01984 14.6137 8C10.4719 10.9801 5.8518 13.2312 0.95241 14.6562L2.99991 8ZM2.99991 8H8.62491" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Loading spinner */}
                  {loading && (
                        <div className="flex items-center h-full justify-center mt-2 p-5">
                            <div className="w-10 h-10 mr-2 w-min-10 h-min-10 w-max-10 h-max-10 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                            <h2>Sending, please wait...</h2>
                        </div>
                  )}
                </div>
                {/* Floating message box */}
                <FloatingNotification
                    message={message}
                    type={type}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                />
              </form>
        )
    }
    else if (selected === 2) {
        return (
            <form action="api/mentoring" onSubmit={handleSubmit} className='flex flex-col md:w-[92.5%] w-full gap-2'>
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
  <option key={sector.name} value={sector.name}>
    {sector.name} ({sector.theme}) - {sector.date}
  </option>
))}
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="mentor">Mentor</label>
                    {isShowMentor && (<select className={`${styles.input} ${styles.select}`} name="mentor" id="mentor" required>
                        {filteredMentors.map((mentor) => (
                            <option key={mentor.name} value={mentor.name}>{mentor.name}</option>
                        ))}
                    </select>
                    )}
                </div>
            </div>
                </div>
                <div className='h-[5%] flex'>
                    <button type="submit" className='bg-white px-5 py-6 flex text-black justify-center items-center rounded-[70px] gap-2 font-semibold'>
                        Submit
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.99991 8L0.95166 1.34375C5.85131 2.76875 10.4717 5.01984 14.6137 8C10.4719 10.9801 5.8518 13.2312 0.95241 14.6562L2.99991 8ZM2.99991 8H8.62491" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Loading spinner */}
                    {loading && (
                            <div className="flex items-center h-full justify-center mt-2 p-5">
                                <div className="w-10 h-10 mr-2 w-min-10 h-min-10 w-max-10 h-max-10 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                                <h2>Sending, please wait...</h2>
                            </div>
                    )}
                </div>
                {/* Floating message box */}
                <FloatingNotification
                    message={message}
                    type={type}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                />
              </form>
        )
    }
    else if (selected === 3) {
        return (
            <form action="api/project" method="POST" onSubmit={handleSubmit} encType="multipart/form-data" className='flex flex-col md:w-[92.5%] w-full gap-2'>
                <div className={`h-[90%] md:w-full bg-black/20 rounded-[15px] overflow-y-scroll ${styles.no_scrollbar}`}>
                <div className='flex flex-col md:p-5 p-4 text-white gap-5 text-xl'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="namaTim">Nama Tim</label>
                    <input className={styles.input} type="text" name="namaTim" id="namaTim" placeholder='Nama Tim' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="namaKetua">Nama Ketua</label>
                    <input className={styles.input} type="text" name="namaKetua" id="namaKetua" placeholder='Muhammad Sunarya' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="nama1">Nama Anggota 1</label>
                    <input className={styles.input} type="text" name="nama1" id="nama1" placeholder='Muhammad Sunarya' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="nama2">Nama Anggota 2</label>
                    <input className={styles.input} type="text" name="nama2" id="nama2" placeholder='Muhammad Sunarya' autoComplete='off' />
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
                        {["Project Ideation", "Marketing Campaign"].map((sector) => (
                            <option key={sector} value={sector}>{sector}</option>
                        ))}
                    </select>
                </div>
         option  <div className='flex flex-col gap-2'>
                    <label htmlFor="twibbon">Link Drive Twibbon</label>
                    <input className={styles.input} type="text" name="twibbonUrl" id="twibbon" placeholder='https://drive.google.com/...' autoComplete='off' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="attachment">Bukti Pembayaran</label>
                    <input className={styles.input} type="file" name="pembayaran" id="pembayaran" required />
                </div>
            </div>
                </div>
                <div className='h-[5%] flex'>
                    <button type="submit" className='bg-white px-5 py-6 flex text-black justify-center items-center rounded-[70px] gap-2 font-semibold'>
                        Submit
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.99991 8L0.95166 1.34375C5.85131 2.76875 10.4717 5.01984 14.6137 8C10.4719 10.9801 5.8518 13.2312 0.95241 14.6562L2.99991 8ZM2.99991 8H8.62491" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Loading spinner */}
                    {loading && (
                            <div className="flex items-center h-full justify-center mt-2 p-5">
                                <div className="w-10 h-10 mr-2 w-min-10 h-min-10 w-max-10 h-max-10 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                                <h2>Sending, please wait...</h2>
                            </div>
                    )}
                </div>
                {/* Floating message box */}
                <FloatingNotification
                    message={message}
                    type={type}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                />
              </form>
        )
    }
    else if (selected === 4)
    {
        return (
            <form action="api/main-event" method="POST" onSubmit={handleSubmit} className='flex flex-col md:w-[92.5%] w-full gap-2'>
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
                <div className='h-[5%] flex'>
                    <button type="submit" className='bg-white px-5 py-6 flex text-black justify-center items-center rounded-[70px] gap-2 font-semibold'>
                        Submit
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.99991 8L0.95166 1.34375C5.85131 2.76875 10.4717 5.01984 14.6137 8C10.4719 10.9801 5.8518 13.2312 0.95241 14.6562L2.99991 8ZM2.99991 8H8.62491" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Loading spinner */}
                    {loading && (
                            <div className="flex items-center h-full justify-center mt-2 p-5">
                                <div className="w-10 h-10 mr-2 w-min-10 h-min-10 w-max-10 h-max-10 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                                <h2>Sending, please wait...</h2>
                            </div>
                    )}
                </div>
                {/* Floating message box */}
                <FloatingNotification
                    message={message}
                    type={type}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                />
              </form>
        )
    }
}

export default Form
