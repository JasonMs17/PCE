"use client";

import React, { useEffect, useState } from "react";
import ArticleCard from "../components/Articles/ArticleCard";
import styles from "./articles.module.css";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/articles");
        const data = await response.json();
        if (data.status === 200) {
          setArticles(data.articles);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching articles: ", error);
      }
    };

    fetchArticles();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredArticles = articles.filter((article) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(lowerCaseQuery) ||
      article.body.toLowerCase().includes(lowerCaseQuery) ||
      article.author.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <div className={`container pt-28 pb-8 px-5 md:px-0 mx-auto`}>
      <h2 className={`text-4xl font-bold text-center mb-5`}>Articles</h2>
      <div
        className={`flex flex-col gap-5 p-5 rounded-[25px] bg-black/20 dark:bg-white/20`}
      >
        <div
          className={`flex flex-row p-5 gap-5 align-center rounded-[25px] bg-black/30 dark:bg-white/30 text-white`}
        >
          <svg
            fill="white"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className={`text-xl bg-transparent focus:outline-none w-full`}
          />
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5`}>
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article._id}
              id={article._id}
              title={article.title}
              body={article.body}
              thumbnail={article.thumbnail}
              author={article.author}
              published_date={article.published_date}
            />
          ))}
        </div>
        <div className="self-center rounded-full bg-black/30 dark:bg-white/30">
          <ul className="flex align-stretch text-white gap-4 text-xl py-2">
            <li className="rounded-full flex-1 px-6 py-2 bg-white">
              <a href="#">
                <svg
                  className="m-auto"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </a>
            </li>
            <li className="rounded-full flex-1 px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out">
              1
            </li>
            <li className="rounded-full flex-1 px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out">
              2
            </li>
            <li className="rounded-full flex-1 px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out">
              3
            </li>
            <li className="rounded-full flex-1 px-4 py-2 hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out">
              <a href="#">
                <svg
                  className="m-auto"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
