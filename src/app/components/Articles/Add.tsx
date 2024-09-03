"use client";

import React, { useState } from "react";
import styles from "./add.module.css";
import Form from "./Form";

const Add = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    thumbnail: "",
    author: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.error) {
        alert("Failed to add article");
      } else {
        alert("Article added successfully");
        setPopupVisible(false);
        setFormData({
          title: "",
          body: "",
          thumbnail: "",
          author: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className='flex justify-end'>
      <button
        className={`${styles.add_bg} p-2 md:px-10 md:py-3 rounded-[50px] md:text-2xl text-l font-bold text-white`}
        onClick={() => setPopupVisible(true)}
      >
        + Add Article
      </button>

      {isPopupVisible && (
        <div className={`${styles.popupOverlay}`}>
          <div className={`${styles.popup}`}>
            <Form
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              setPopupVisible={setPopupVisible}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Add;
