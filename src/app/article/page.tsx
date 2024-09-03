import React from 'react';
import ArticleCard from '../components/Articles/ArticleCard';
import styles from './article.module.css';
import Image from 'next/image';

const ArticlePage = () => {
  return (
    <div className={styles.index_bg}>
        <div className={`container pt-28 pb-8 px-5 md:px-0 mx-auto`}>
            <div className={`flex flex-col gap-5 p-5 rounded-[25px] bg-black/20 dark:bg-white/20`}>
                <div>
                    <svg className='self-start fill-black dark:fill-white' height="40" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    <h2 className={`text-3xl font-bold text-center`}>Judul</h2>
                    <p className={`text-2xl text-center`}>author|time</p>
                </div>
                <Image
                    src={"/images/example.jpg"}
                    alt="Image description"
                    height={500}
                    width={500}
                    className="rounded-[25px] w-full"
                    />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quae libero voluptatibus voluptas modi quod adipisci vel et a possimus nostrum assumenda consectetur sunt quia, quibusdam tempore ut. Dolor, placeat.
                    <br></br>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum nisi ex, voluptatum alias modi eum a earum asperiores magnam quas dignissimos sint quasi aliquam similique vitae atque saepe cupiditate fugiat!
                    <br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, odio! Culpa error itaque, tenetur amet omnis iste fuga aut praesentium, et cum harum placeat. Quia fugit expedita voluptas aut consequatur.
                </p>
                <h2 className={`text-3xl font-bold text-center`}>Artikel Lainnya</h2>
                <div className={`grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-5`}>
                    <ArticleCard></ArticleCard>
                    <ArticleCard></ArticleCard>
                    <ArticleCard></ArticleCard>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ArticlePage;
