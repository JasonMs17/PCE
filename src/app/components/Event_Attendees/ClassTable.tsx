"use client"

import React, { useEffect, useState } from 'react'
import styles from './Download.module.css'

const ClassTable = () => {
    const [classPrograms, setClassPrograms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/class-program');
            const result = await response.json();
            if (result.status === 200) {
                setClassPrograms(result.data);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <table className={`w-full`}>
                <thead>
                    <tr className={`${styles.head} ${styles.row}`}>
                        <th className={`${styles.column} ${styles.head}`}>No</th>
                        <th className={`${styles.column}`}>Name</th>
                        <th className={`${styles.column}`}>Email</th>
                        <th className={`${styles.column}`}>WhatsApp Number</th>
                        <th className={`${styles.column}`}>University</th>
                        <th className={`${styles.column}`}>Faculty</th>
                        <th className={`${styles.column}`}>Major</th>
                        <th className={`${styles.column} ${styles.head}`}>Sector Category</th>
                    </tr>
                </thead>
                <tbody>
                    {classPrograms.map((program, index) => (
                        <tr className={`${styles.row}`} key={program.email}>
                            <td className={`${styles.column}`}>{index + 1}</td>
                            <td className={`${styles.column}`}>{program.name}</td>
                            <td className={`${styles.column}`}>{program.email}</td>
                            <td className={`${styles.column}`}>{program.whatsappNumber}</td>
                            <td className={`${styles.column}`}>{program.university}</td>
                            <td className={`${styles.column}`}>{program.faculty}</td>
                            <td className={`${styles.column}`}>{program.major}</td>
                            <td className={`${styles.column}`}>{program.sectorCategory.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClassTable
