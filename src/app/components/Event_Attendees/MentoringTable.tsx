"use client"

import React, { useEffect, useState } from 'react'
import styles from './Download.module.css'

const MentoringTable = () => {
    const [mentoringData, setMentoringData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/mentoring');
            const result = await response.json();
            if (result.status === 200) {
                setMentoringData(result.data);
            }

        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this data?");
        if (!confirmDelete) return;

        const response = await fetch(`/api/mentoring?id=${id}`, {

            method: 'DELETE',

        });

        const result = await response.json();

        if (result.status === 200) {

            setMentoringData((prevData) => prevData.filter(mentoring => mentoring._id !== id));

        } else {

            console.error('Failed to delete data:', result.message);

        }

    };

    return (
        <div>
            <table className={`w-full`}>
                <thead>
                    <tr className={`${styles.head} ${styles.row}`}>
                        <th className={`${styles.column}`}>No</th>
                        <th className={`${styles.column}`}>Name</th>
                        <th className={`${styles.column}`}>Email</th>
                        <th className={`${styles.column}`}>WhatsApp Number</th>
                        <th className={`${styles.column}`}>Schedule</th>
                        <th className={`${styles.column}`}>University</th>
                        <th className={`${styles.column}`}>Faculty</th>
                        <th className={`${styles.column}`}>Major</th>
                        <th className={`${styles.column}`}>Mentor</th>
                        <th className={`${styles.column}`}>Sector Category</th>
                        <th className={`${styles.column}`}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {mentoringData && (
                        <tr>
                            <td className={`${styles.column}`} colSpan={11}><b>Empty Set</b></td>
                        </tr>
                    )}
                    {mentoringData.map((mentoring, index) => (
                        <tr className={`${styles.row}`} key={mentoring.email}>
                            <td className={`${styles.column}`}>{index + 1}</td>
                            <td className={`${styles.column}`}>{mentoring.name}</td>
                            <td className={`${styles.column}`}>{mentoring.email}</td>
                            <td className={`${styles.column}`}>{mentoring.whatsappNumber}</td>
                            <td className={`${styles.column}`}>{mentoring.schedule}</td>
                            <td className={`${styles.column}`}>{mentoring.university}</td>
                            <td className={`${styles.column}`}>{mentoring.faculty}</td>
                            <td className={`${styles.column}`}>{mentoring.major}</td>
                            <td className={`${styles.column}`}>{(mentoring.mentor)? mentoring.mentor.name : "Mentor's Data is Null"}</td>
                            <td className={`${styles.column}`}>{(mentoring.sectorCategory)? mentoring.sectorCategory.name : "Sector's Data is Null"}</td>
                            <td className={`${styles.column}`}>
                                <button className={`${styles.operand} flex gap-2`} onClick={() => handleDelete(mentoring._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                                    Delete
                                </button> 
                            </td>     
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MentoringTable
