"use client"

import React from 'react'
import Image from 'next/image'
import styles from './article.module.css'

const ArticleCard = ({title="A article", description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at impedit enim a numquam eum suscipit, necessitatibus totam, laborum expedita iste aut aliquid reiciendis omnis, explicabo dolorem repellat quas doloribus.", author="Admin", time='XX XXXXX XXXX', src='/images/example.jpg'}) => {
    return (
        <div className={`relative hover:shadow-xl rounded-[25px] overflow-hidden`}>
            <div className={`absolute left-0 right-0 top-0 bottom-0 bg-cover bg-[url(/images/example.jpg)]`}>
            </div>
            <div className={`absolute ${styles.bg_card} left-0 right-0 top-0 bottom-0`}></div>
            <div className={`relative flex flex-col justify-end p-5 text-white`}>
                <p>{time}</p>
                <div className='p-10'></div>
                <h2 className={`text-lg font-bold`}>{title}</h2>
                <p className='mb-2'>{`by ${author}`}</p>
                <p className={`line-clamp-2 `}>{description}</p>
            </div>
        </div>
    );
}

export default ArticleCard