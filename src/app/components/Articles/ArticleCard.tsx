"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './article.module.css';

const ArticleCard = ({ title, body, author, published_date, id }) => {
    const router = useRouter();
    const formattedDate = new Date(published_date).toLocaleDateString();

    const handleClick = () => {
        router.push(`/articles/${id}`);
    };

    return (
        <div className={`relative hover:shadow-xl rounded-[25px] w-full                      overflow-hidden cursor-pointer`} onClick={handleClick}>
            <div className={`absolute left-0 right-0 top-0 bottom-0 bg-cover bg-[url(/images/example.jpg)]`}>
            </div>
            <div className={`absolute ${styles.bg_card} left-0 right-0 top-0 bottom-0`}></div>
            <div className={`relative flex flex-col justify-end p-5 text-white`}>
                <p>{formattedDate}</p>
                <div className='p-10'></div>
                <h2 className={`text-lg font-bold`}>{title}</h2>
                <p className='mb-2'>{`by ${author}`}</p>
                <p className={`line-clamp-2 `}>{body}</p>
            </div>
        </div>
    );
}

export default ArticleCard;