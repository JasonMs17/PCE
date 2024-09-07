"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import ArticleCard from "../../components/Articles/ArticleCard";
import styles from "./article.module.css";

const ArticlePage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        const response = await fetch(`/api/articles/${id}`);
        const data = await response.json();
        if (data.status === 200) {
          setArticle(data.article);
        } else {
          console.error(data.message);
        }
      };

      fetchArticle();
    }
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className={styles.index_bg}>
      <div className={`container pt-28 pb-8 px-5 md:px-0 mx-auto`}>
        <div
          className={`flex flex-col gap-5 p-5 rounded-[25px] bg-black/20 dark:bg-white/20`}
        >
          <div>
            <a href="/articles">
              <svg
                className="self-start fill-black dark:fill-white"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </a>
            <h2 className={`text-3xl font-bold text-center`}>
              {article.title}
            </h2>
            <p className={`text-2xl text-center`}>
              {article.author} |{" "}
              {new Date(article.published_date).toLocaleDateString()}
            </p>
          </div>

          <img src={article.thumbnail} alt="Article Thumbnail" border="0" />

          {/* Render body markdown content */}
          <ReactMarkdown>{article.body}</ReactMarkdown>

          {/* <h2 className={`text-3xl font-bold text-center`}>Artikel Lainnya</h2>
                    <div className={`grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-5`}>
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
