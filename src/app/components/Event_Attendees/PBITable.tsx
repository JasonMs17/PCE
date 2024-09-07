"use client"

import React, { useEffect, useState } from 'react'
import styles from './Download.module.css'

const PBITable = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/project');
            const result = await response.json();
            if (result.status === 200) {
                setProjects(result.data);
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
                        <th className={`${styles.column}`}>Phone Number</th>
                        <th className={`${styles.column}`}>University</th>
                        <th className={`${styles.column}`}>Faculty</th>
                        <th className={`${styles.column}`}>Major</th>
                        <th className={`${styles.column} ${styles.head}`}>Twibbon URL</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr className={`${styles.row}`} key={project.email}>
                            <td className={`${styles.column}`}>{index + 1}</td>
                            <td className={`${styles.column}`}>{project.nama}</td>
                            <td className={`${styles.column}`}>{project.email}</td>
                            <td className={`${styles.column}`}>{project.no_telp}</td>
                            <td className={`${styles.column}`}>{project.universitas}</td>
                            <td className={`${styles.column}`}>{project.fakultas}</td>
                            <td className={`${styles.column}`}>{project.jurusan}</td>
                            <td className={`${styles.column}`}>{project.twibbonUrl}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PBITable
