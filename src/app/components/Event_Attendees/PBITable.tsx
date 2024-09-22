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
                        <th className={`${styles.column}`}>Team Name</th>
                        <th className={`${styles.column}`}>Team Leader Name</th>
                        <th className={`${styles.column}`}>Team Member 1 Name</th>
                        <th className={`${styles.column}`}>Team Member 2 Name</th>
                        <th className={`${styles.column}`}>Email</th>
                        <th className={`${styles.column}`}>Phone Number</th>
                        <th className={`${styles.column}`}>University</th>
                        <th className={`${styles.column}`}>Faculty</th>
                        <th className={`${styles.column}`}>Major</th>
                        <th className={`${styles.column}`}>Sector</th>
                        <th className={`${styles.column}`}>Twibbon URL</th>
                        <th className={`${styles.column} ${styles.head}`}>Proof of Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr className={`${styles.row}`} key={project.email}>
                            <td className={`${styles.column}`}>{index + 1}</td>
                            <td className={`${styles.column}`}>{project.namaTim}</td>
                            <td className={`${styles.column}`}>{project.namaKetua}</td>
                            <td className={`${styles.column}`}>{project.nama1}</td>
                            <td className={`${styles.column}`}>{project.nama2}</td>
                            <td className={`${styles.column}`}>{project.email}</td>
                            <td className={`${styles.column}`}>{project.no_telp}</td>
                            <td className={`${styles.column}`}>{project.universitas}</td>
                            <td className={`${styles.column}`}>{project.fakultas}</td>
                            <td className={`${styles.column}`}>{project.jurusan}</td>
                            <td className={`${styles.column}`}>
                                {project.sectorCategory.length > 0 
                                    ? project.sectorCategory.map(sector => sector.name).join(', ') 
                                    : 'No sector selected'}
                            </td>
                            <td className={`${styles.column}`}>
                                <a href={project.twibbonUrl} target="_blank" rel="noopener noreferrer">
                                    View Twibbon
                                </a>
                            </td>
                            <td className={`${styles.column}`}>
                                <a href={project.pembayaranUrl} target="_blank" rel="noopener noreferrer">
                                    View Proof of Payment
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PBITable
