"use client"

import React from 'react'
import styles from './Download.module.css'

const Table = () => {
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
                    <th className={`${styles.column} ${styles.head}`}>Major</th>
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
                </tr>
                <tr className={`${styles.row}`}>
                    <td className={`${styles.column}`}>2</td>
                    <td className={`${styles.column}`}>Dzaki Ahmad</td>
                    <td className={`${styles.column}`}>jeki@gmail.com</td>
                    <td className={`${styles.column}`}>08214342239</td>
                    <td className={`${styles.column}`}>Universitas Padjadjaran</td>
                    <td className={`${styles.column}`}>FMIPA</td>
                    <td className={`${styles.column}`}>Matematika</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table
