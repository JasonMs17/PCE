"use client"

import React from 'react'
import styles from './Download.module.css'

const MentoringTable = () => {
    return (
        <div>
            <table className={`w-full`}>
                <thead>
                    <tr className={`${styles.head} ${styles.row}`}>
                        <th className={`${styles.column} ${styles.head}`}>No</th>
                        <th className={`${styles.column}`}>Name</th>
                        <th className={`${styles.column}`}>Email</th>
                        <th className={`${styles.column}`}>Phone Number</th>
                        <th className={`${styles.column}`}>University</th>
                        <th className={`${styles.column}`}>Faculty</th>
                        <th className={`${styles.column}`}>Major</th>
                        <th className={`${styles.column}`}>Schedule</th>
                        <th className={`${styles.column} ${styles.head}`}>Mentor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={`${styles.row}`}>
                        <td className={`${styles.column}`}>1</td>
                        <td className={`${styles.column}`}>Muhammad Sunarya</td>
                        <td className={`${styles.column}`}>sunarya@gmail.com</td>
                        <td className={`${styles.column}`}>08214984729</td>
                        <td className={`${styles.column}`}>Universitas Padjadjaran</td>
                        <td className={`${styles.column}`}>FMIPA</td>
                        <td className={`${styles.column}`}>Kimia</td>
                        <td className={`${styles.column}`}>10 Oktober 2024</td>
                        <td className={`${styles.column}`}>Mentor 1</td>
                    </tr>
                    <tr className={`${styles.row}`}>
                        <td className={`${styles.column}`}>2</td>
                        <td className={`${styles.column}`}>Dzaki Ahmad</td>
                        <td className={`${styles.column}`}>jeki@gmail.com</td>
                        <td className={`${styles.column}`}>08214342239</td>
                        <td className={`${styles.column}`}>Universitas Padjadjaran</td>
                        <td className={`${styles.column}`}>FMIPA</td>
                        <td className={`${styles.column}`}>Matematika</td>
                        <td className={`${styles.column}`}>12 Oktober 2024</td>
                        <td className={`${styles.column}`}>Mentor 2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MentoringTable
