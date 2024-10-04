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
                console.log(result.data);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this data?");
        if (!confirmDelete) return;

        const response = await fetch(`/api/project?id=${id}`, {
            
            method: 'DELETE',

        });

        const result = await response.json();

        if (result.status === 200) {

            setProjects((prevProjects) => prevProjects.filter(project => project._id !== id));

        } else {

            console.error('Failed to delete data:', result.message);

        }
    };

    const handleConfirm = async (id) => {
        const confirming = window.confirm("Are you sure you want to confirm the payment of this register?");
        if (!confirming) return;

        const response = await fetch(`/api/project?id=${id}`, {
            
            method: 'PUT',

        });

        const result = await response.json();

        if (result.status === 200) {

            setProjects((prevProjects) => {
                prevProjects.forEach(user => {
                    if (user._id === id){
                        user.isConfirmed = true;
                    }
                });
                return prevProjects;
            });

            window.alert(result.message);

        } else {

            console.error('Failed to delete data:', result.message);
            window.alert(result.message);
        }
    };

    return (
        <div className={`overflow-scroll`}>
            <table className={`w-full overflow-scroll`}>
                <thead>
                    <tr className={`${styles.head} ${styles.row}`}>
                        <th className={`${styles.column}`}>No</th>
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
                        <th className={`${styles.column}`}>Proof of Payment</th>
                        <th className={`${styles.column}`}>Confirm Payment</th>
                        <th className={`${styles.column}`}>Actions</th>
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
                            <td className={`${styles.column}`}>a</td>
                            <td className={`${styles.column}`}>
                                <a href={project.twibbonUrl} className={`${styles.link}`} target="_blank" rel="noopener noreferrer">
                                    View Twibbon
                                </a>
                            </td>
                            <td className={`${styles.column}`}>
                                <a href={project.pembayaranUrl} className={`${styles.link}`} target="_blank" rel="noopener noreferrer">
                                    View Proof of Payment
                                </a>
                            </td>
                            <td className={`${styles.column}`}>
                                <button className={`${styles.operand} flex gap-2`} onClick={() => handleConfirm(project._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"/>
                                </svg>

                                    Confirm Payment
                                </button> 
                            </td>
                            <td className={`${styles.column}`}>
                                <button className={`${styles.operand} flex gap-2`} onClick={() => handleDelete(project._id)}>
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

export default PBITable
