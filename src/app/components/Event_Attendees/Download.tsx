"use client";

import React, { useState } from "react";
import styles from "./Download.module.css";

const Download = () => {
  const [selectedOption, setSelectedOption] = useState("classProgram"); // Default selection

  const handleDownload = async () => {
    let url = "";

    // Determine the API endpoint based on the selected option
    switch (selectedOption) {
      case "classProgram":
        url = "/api/download/class-program";
        break;
      case "mentoring":
        url = "/api/download/mentoring";
        break;
      case "project":
        url = "/api/download/project";
        break;
      case "mainEvent":
        url = "/api/download/main-event";
        break;
      default:
        return;
    }

    // Fetch the data from the selected API
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `${selectedOption}_list.xlsx`; // Dynamic filename based on selection
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      console.error("Download failed:", response.statusText);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="form-select block w-full mt-1 bg-transparent"
        >
          <option value="classProgram">Class Program</option>
          <option value="mentoring">Mentoring</option>
          <option value="project">Project</option>
          <option value="mainEvent">Main Event</option>
        </select>
      </div>
      <div className={styles.column}>
        <button
          className={`${styles.download_bg} md:px-5 md:py-2 p-1 rounded-[20em] flex gap-3 md:text-2xl text-m justify-center items-center text-white`}
          onClick={handleDownload}
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 15V17.25C1 17.8467 1.23705 18.419 1.65901 18.841C2.08097 19.2629 2.65326 19.5 3.25 19.5H16.75C17.3467 19.5 17.919 19.2629 18.341 18.841C18.7629 18.419 19 17.8467 19 17.25V15M14.5 10.5L10 15M10 15L5.5 10.5M10 15V1.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Download
        </button>
      </div>
    </div>
  );
};

export default Download;
