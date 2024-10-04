"use client";

import React, { useEffect, useState } from "react";
import styles from "./add.module.css";
import { IArticle } from "@/models/Article";
import { useRouter } from 'next/navigation';

const Table = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/articles-admin", {
          method: "GET",
        });
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const togglePublishStatus = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/articles-admin/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isPublished: !currentStatus,
        }),
      });

      const data = await response.json();
      if (data.status === 200) {
        setArticles((prevArticles) => 
            prevArticles.map((article) => {
                if (article._id === id) {
                    // Create a new object with the updated isPublished property
                    return {
                        ...article,
                        isPublished: !currentStatus,
                    } as IArticle; // Type assertion here
                }
                return article; // Return the unchanged article
            })
        );
    } else {
        console.error(data.message);
    }
    
    } catch (error) {
      console.error("Error updating article status:", error);
    }
  };

  
const deleteArticle = async (id: string) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this article?");
  if (!confirmDelete) return; // Cancel deletion

  try {
    const response = await fetch(`/api/articles-admin/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (data.status === 200) {
      setArticles((prevArticles) => prevArticles.filter((article) => article._id !== id));
      alert("Article deleted successfully.");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Error deleting article:", error);
    alert("An error occurred while deleting the article.");
  }
};

  return (
    <div>
      {articles && articles.length > 0 ? (
        <table className={`w-full`}>
          <thead>
            <tr className={`${styles.head} ${styles.row}`}>
              <th className={`${styles.column} ${styles.head}`}>No</th>
              <th className={`${styles.column}`}>Title</th>
              <th className={`${styles.column}`}>Action</th>
              {/* <th className={`${styles.column} ${styles.head}`}>Status</th> */}
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={article.id} className={`${styles.row}`}>
                <td className={`${styles.column}`}>{index + 1}</td>
                <td className={`${styles.column}`}>{article.title}</td>
                <td className={`${styles.column} flex gap-2`}>
                  <button className={`${styles.operand} flex gap-2`} onClick={() => router.push(`/admin/articles/${article._id}`)}>
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 13.25V10.625C16.5 9.72989 16.1444 8.87145 15.5115 8.23851C14.8786 7.60558 14.0201 7.25 13.125 7.25H11.625C11.3266 7.25 11.0405 7.13147 10.8295 6.9205C10.6185 6.70952 10.5 6.42337 10.5 6.125V4.625C10.5 3.72989 10.1444 2.87145 9.51149 2.23851C8.87855 1.60558 8.02011 1.25 7.125 1.25H5.25M5.25 14H12.75M5.25 17H9M7.5 1.25H2.625C2.004 1.25 1.5 1.754 1.5 2.375V19.625C1.5 20.246 2.004 20.75 2.625 20.75H15.375C15.996 20.75 16.5 20.246 16.5 19.625V10.25C16.5 7.86305 15.5518 5.57387 13.864 3.88604C12.1761 2.19821 9.88695 1.25 7.5 1.25Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    className={`${styles.operand} flex gap-2`}
                    onClick={() =>
                      togglePublishStatus(article._id, article.isPublished)
                    }
                  >
                    <svg
                      width="17"
                      height="22"
                      viewBox="0 0 17 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 13.25V10.625C16 9.72989 15.6444 8.87145 15.0115 8.23851C14.3786 7.60558 13.5201 7.25 12.625 7.25H11.125C10.8266 7.25 10.5405 7.13147 10.3295 6.9205C10.1185 6.70952 10 6.42337 10 6.125V4.625C10 3.72989 9.64442 2.87145 9.01149 2.23851C8.37855 1.60558 7.52011 1.25 6.625 1.25H4.75M11.5 13.25L8.5 10.25M8.5 10.25L5.5 13.25M8.5 10.25V16.25M7 1.25H2.125C1.504 1.25 1 1.754 1 2.375V19.625C1 20.246 1.504 20.75 2.125 20.75H14.875C15.496 20.75 16 20.246 16 19.625V10.25C16 7.86305 15.0518 5.57387 13.364 3.88604C11.6761 2.19821 9.38695 1.25 7 1.25Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {article.isPublished ? "Unpublish" : "Publish"}
                  </button>
                  <button className={`${styles.operand} flex gap-2`} onClick={() => deleteArticle(article._id)}>
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 13.25V10.625C16.5 9.72989 16.1444 8.87145 15.5115 8.23851C14.8786 7.60558 14.0201 7.25 13.125 7.25H11.625C11.3266 7.25 11.0405 7.13147 10.8295 6.9205C10.6185 6.70952 10.5 6.42337 10.5 6.125V4.625C10.5 3.72989 10.1444 2.87145 9.51149 2.23851C8.87855 1.60558 8.02011 1.25 7.125 1.25H5.25M12 13.25H6M7.5 1.25H2.625C2.004 1.25 1.5 1.754 1.5 2.375V19.625C1.5 20.246 2.004 20.75 2.625 20.75H15.375C15.996 20.75 16.5 20.246 16.5 19.625V10.25C16.5 7.86305 15.5518 5.57387 13.864 3.88604C12.1761 2.19821 9.88695 1.25 7.5 1.25Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Delete
                  </button> 
                </td>
                {/* <td className={`${styles.column}`}>
                  <div
                    className={`px-3 py-2 bg-white flex text-black rounded-[20px] font-bold gap-2`}
                  >
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.125 1.25H2.625C2.004 1.25 1.5 1.754 1.5 2.375V19.625C1.5 20.246 2.004 20.75 2.625 20.75H15.375C15.996 20.75 16.5 20.246 16.5 19.625V10.625M7.125 1.25H7.5C9.88695 1.25 12.1761 2.19821 13.864 3.88604C15.5518 5.57387 16.5 7.86305 16.5 10.25V10.625M7.125 1.25C8.02011 1.25 8.87855 1.60558 9.51149 2.23851C10.1444 2.87145 10.5 3.72989 10.5 4.625V6.125C10.5 6.746 11.004 7.25 11.625 7.25H13.125C14.0201 7.25 14.8786 7.60558 15.5115 8.23851C16.1444 8.87145 16.5 9.72989 16.5 10.625M6 14L8.25 16.25L12 11"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {article.isPublished}
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No articles available.</p>
      )}
    </div>
  );
};

export default Table;
