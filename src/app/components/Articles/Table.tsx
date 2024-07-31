"use client"

import React from 'react'
import styles from './add.module.css'

const Table = () => {
    return (
        <div>
            <table className={`w-full`}>
                <thead>
                    <tr className={`${styles.head} ${styles.row}`}>
                        <th className={`${styles.column} ${styles.head}`}>No</th>
                        <th className={`${styles.column}`}>Title</th>
                        <th className={`${styles.column}`}>Action</th>                        
                        <th className={`${styles.column} ${styles.head}`}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={`${styles.row}`}>
                        <td className={`${styles.column}`}>1</td>
                        <td className={`${styles.column}`}>Kenapa yang ngerjain page ini ganteng banget</td>
                        <td className={`${styles.column} flex gap-2`}>
                            <button className={`${styles.operand} flex gap-2`}>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 13.25V10.625C16.5 9.72989 16.1444 8.87145 15.5115 8.23851C14.8786 7.60558 14.0201 7.25 13.125 7.25H11.625C11.3266 7.25 11.0405 7.13147 10.8295 6.9205C10.6185 6.70952 10.5 6.42337 10.5 6.125V4.625C10.5 3.72989 10.1444 2.87145 9.51149 2.23851C8.87855 1.60558 8.02011 1.25 7.125 1.25H5.25M5.25 14H12.75M5.25 17H9M7.5 1.25H2.625C2.004 1.25 1.5 1.754 1.5 2.375V19.625C1.5 20.246 2.004 20.75 2.625 20.75H15.375C15.996 20.75 16.5 20.246 16.5 19.625V10.25C16.5 7.86305 15.5518 5.57387 13.864 3.88604C12.1761 2.19821 9.88695 1.25 7.5 1.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Edit
                            </button>
                            <button className={`${styles.operand} flex gap-2`}>
                                <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 13.25V10.625C16 9.72989 15.6444 8.87145 15.0115 8.23851C14.3786 7.60558 13.5201 7.25 12.625 7.25H11.125C10.8266 7.25 10.5405 7.13147 10.3295 6.9205C10.1185 6.70952 10 6.42337 10 6.125V4.625C10 3.72989 9.64442 2.87145 9.01149 2.23851C8.37855 1.60558 7.52011 1.25 6.625 1.25H4.75M11.5 13.25L8.5 10.25M8.5 10.25L5.5 13.25M8.5 10.25V16.25M7 1.25H2.125C1.504 1.25 1 1.754 1 2.375V19.625C1 20.246 1.504 20.75 2.125 20.75H14.875C15.496 20.75 16 20.246 16 19.625V10.25C16 7.86305 15.0518 5.57387 13.364 3.88604C11.6761 2.19821 9.38695 1.25 7 1.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Unpublish
                            </button>
                            <button className={`${styles.operand} flex gap-2`}>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 13.25V10.625C16.5 9.72989 16.1444 8.87145 15.5115 8.23851C14.8786 7.60558 14.0201 7.25 13.125 7.25H11.625C11.3266 7.25 11.0405 7.13147 10.8295 6.9205C10.6185 6.70952 10.5 6.42337 10.5 6.125V4.625C10.5 3.72989 10.1444 2.87145 9.51149 2.23851C8.87855 1.60558 8.02011 1.25 7.125 1.25H5.25M12 13.25H6M7.5 1.25H2.625C2.004 1.25 1.5 1.754 1.5 2.375V19.625C1.5 20.246 2.004 20.75 2.625 20.75H15.375C15.996 20.75 16.5 20.246 16.5 19.625V10.25C16.5 7.86305 15.5518 5.57387 13.864 3.88604C12.1761 2.19821 9.88695 1.25 7.5 1.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Delete
                            </button>
                        </td>
                        <td className={`${styles.column}`}>
                            <div className={`px-3 py-2 bg-white flex text-black rounded-[20px] font-bold gap-2`}>
                                <div className={`${styles.published}`}></div>
                                Published
                            </div>
                        </td>
                    </tr>
                    <tr className={`${styles.row}`}>
                        <td className={`${styles.column}`}>2</td>
                        <td className={`${styles.column}`}>Apa itu web programming</td>
                        <td className={`${styles.column} flex gap-2`}>
                            <button className={`${styles.operand} flex gap-2`}>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 13.25V10.625C16.5 9.72989 16.1444 8.87145 15.5115 8.23851C14.8786 7.60558 14.0201 7.25 13.125 7.25H11.625C11.3266 7.25 11.0405 7.13147 10.8295 6.9205C10.6185 6.70952 10.5 6.42337 10.5 6.125V4.625C10.5 3.72989 10.1444 2.87145 9.51149 2.23851C8.87855 1.60558 8.02011 1.25 7.125 1.25H5.25M5.25 14H12.75M5.25 17H9M7.5 1.25H2.625C2.004 1.25 1.5 1.754 1.5 2.375V19.625C1.5 20.246 2.004 20.75 2.625 20.75H15.375C15.996 20.75 16.5 20.246 16.5 19.625V10.25C16.5 7.86305 15.5518 5.57387 13.864 3.88604C12.1761 2.19821 9.88695 1.25 7.5 1.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Edit
                            </button>
                            <button className={`${styles.operand} flex gap-2`}>
                                <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 13.25V10.625C16 9.72989 15.6444 8.87145 15.0115 8.23851C14.3786 7.60558 13.5201 7.25 12.625 7.25H11.125C10.8266 7.25 10.5405 7.13147 10.3295 6.9205C10.1185 6.70952 10 6.42337 10 6.125V4.625C10 3.72989 9.64442 2.87145 9.01149 2.23851C8.37855 1.60558 7.52011 1.25 6.625 1.25H4.75M11.5 13.25L8.5 10.25M8.5 10.25L5.5 13.25M8.5 10.25V16.25M7 1.25H2.125C1.504 1.25 1 1.754 1 2.375V19.625C1 20.246 1.504 20.75 2.125 20.75H14.875C15.496 20.75 16 20.246 16 19.625V10.25C16 7.86305 15.0518 5.57387 13.364 3.88604C11.6761 2.19821 9.38695 1.25 7 1.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Publish
                            </button>
                            <button className={`${styles.operand} flex gap-2`}>
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 13.25V10.625C16.5 9.72989 16.1444 8.87145 15.5115 8.23851C14.8786 7.60558 14.0201 7.25 13.125 7.25H11.625C11.3266 7.25 11.0405 7.13147 10.8295 6.9205C10.6185 6.70952 10.5 6.42337 10.5 6.125V4.625C10.5 3.72989 10.1444 2.87145 9.51149 2.23851C8.87855 1.60558 8.02011 1.25 7.125 1.25H5.25M12 13.25H6M7.5 1.25H2.625C2.004 1.25 1.5 1.754 1.5 2.375V19.625C1.5 20.246 2.004 20.75 2.625 20.75H15.375C15.996 20.75 16.5 20.246 16.5 19.625V10.25C16.5 7.86305 15.5518 5.57387 13.864 3.88604C12.1761 2.19821 9.88695 1.25 7.5 1.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Delete
                            </button>
                        </td>
                        <td className={`${styles.column}`}>
                            <div className={`px-3 py-2 bg-white flex text-black rounded-[20px] font-bold gap-2`}>
                                <div className={`${styles.draft}`}></div>
                                Draft
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
