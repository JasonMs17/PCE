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

    return (
        <div>
            <table className={`w-full`}>
                <thead>
                    <tr className={`${styles.head} ${styles.row}`}>
                        <th className={`${styles.column} ${styles.head}`}>No</th>
                        <th className={`${styles.column}`}>Name</th>
                        <th className={`${styles.column}`}>Email</th>
                        <th className={`${styles.column}`}>WhatsApp Number</th>
                        <th className={`${styles.column}`}>Schedule</th>
                        <th className={`${styles.column}`}>University</th>
                        <th className={`${styles.column}`}>Faculty</th>
                        <th className={`${styles.column}`}>Major</th>
                        <th className={`${styles.column}`}>Mentor</th>
                        <th className={`${styles.column}`}>Sector Category</th>
                    </tr>
                </thead>
                <tbody>
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
                            <td className={`${styles.column}`}>{mentoring.mentor.name}</td>
                            <td className={`${styles.column}`}>{mentoring.sectorCategory.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MentoringTable
