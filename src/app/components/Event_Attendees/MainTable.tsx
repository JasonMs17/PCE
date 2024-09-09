"use client"

import React, { useEffect, useState } from 'react'
import styles from './Download.module.css'

const MainTable = () => {
    const [attendees, setAttendees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/main-event');
            const result = await response.json();
            if (result.status === 200) {
                setAttendees(result.data);
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
                        <th className={`${styles.column}`}>University</th>
                        <th className={`${styles.column} ${styles.head}`}>Faculty</th>
                    </tr>
                </thead>
                <tbody>
                    {attendees.map((attendee, index) => (
                        <tr className={`${styles.row}`} key={attendee.email}>
                            <td className={`${styles.column}`}>{index + 1}</td>
                            <td className={`${styles.column}`}>{attendee.nama}</td>
                            <td className={`${styles.column}`}>{attendee.email}</td>
                            <td className={`${styles.column}`}>{attendee.universitas}</td>
                            <td className={`${styles.column}`}>{attendee.fakultas}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MainTable
