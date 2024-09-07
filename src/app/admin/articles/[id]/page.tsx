"use client"

import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import styles from './edit.module.css';
import { useRouter } from 'next/navigation';

const ArticleEditPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [author, setAuthor] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/articles-admin/${id}`);
        const data = await response.json();
        if (data.status === 200) {
          setTitle(data.article.title);
          setBody(data.article.body);
          setThumbnail(data.article.thumbnail);
          setAuthor(data.article.author);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/articles-admin/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body,
          thumbnail,
          author,
        }),
      });
      const data = await response.json();
      if (data.status === 200) {
        alert('Article updated successfully');
        router.push('/admin/articles');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error updating article:', error);
      alert('An error occurred while updating the article.');
    }
  };

  return (
    <div className={`${styles.editPage}`}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Edit Article</h2>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="thumbnail">Thumbnail URL</label>
          <input
            id="thumbnail"
            name="thumbnail"
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Update Article
        </button>
      </form>
    </div>
  );
};

export default ArticleEditPage;