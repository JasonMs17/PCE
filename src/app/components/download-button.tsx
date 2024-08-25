"use client"; // This directive tells Next.js to treat this as a Client Component

import React from "react";

function DownloadButton() {
    const handleDownload = async () => {
        console.log("CLICKED");

        try {
            // Make a GET request to the backend API endpoint
            const response = await fetch("/api/download/mentoring", {
                method: "GET",
            });

            // Check if the request was successful
            if (!response.ok) {
                throw new Error("Failed to download file");
            }

            // Convert the response into a blob
            const blob = await response.blob();

            // Create a download link element
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;

            // Set the file name and trigger the download
            link.setAttribute("download", "class_program_list.xlsx");
            document.body.appendChild(link);
            link.click();

            // Cleanup by removing the link element
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url); // Clean up the URL object
        } catch (error) {
            console.error("Error downloading the file:", error);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={handleDownload}
                className="z-50 mt-5 bg-blue-500 text-white px-4 py-2 rounded" // Use z-50 if you want the button to be on top of other elements
            >
                Download
            </button>
        </div>
    );
}

export default DownloadButton;
