"use client"

import React from 'react'
import styles from './Download.module.css'

const MainTable = () => {
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
                    <tr className={`${styles.row}`}>
                        <td className={`${styles.column}`}>1</td>
                        <td className={`${styles.column}`}>Muhammad Sunarya</td>
                        <td className={`${styles.column}`}>sunarya@gmail.com</td>
                        <td className={`${styles.column}`}>Universitas Padjadjaran</td>
                        <td className={`${styles.column}`}>FMIPA</td>
                    </tr>
                    <tr className={`${styles.row}`}>
                        <td className={`${styles.column}`}>2</td>
                        <td className={`${styles.column}`}>Dzaki Ahmad</td>
                        <td className={`${styles.column}`}>jeki@gmail.com</td>
                        <td className={`${styles.column}`}>Universitas Padjadjaran</td>
                        <td className={`${styles.column}`}>FMIPA</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MainTable
