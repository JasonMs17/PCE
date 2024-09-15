import { useState } from 'react';

const FloatingNotification = ({ message, type, isVisible, setIsVisible }) => {
    // Types: "success", "error", "warning" to dynamically apply styles.
    const boxStyles = {
        success: "bg-green-500",
        error: "bg-red-500",
        warning: "bg-yellow-500",
    };

    if (!isVisible) return null; // Don't render the component if it's not visible

    return (
        <div className={`fixed top-60 min-h-20 right-52 p-4 z-50 rounded-lg shadow-lg text-white ${boxStyles[type]} transition-all duration-300`}>
            <div className="flex justify-between items-center">
                <span>{message}</span>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setIsVisible(false);
                    }}
                    className="ml-4 text-white bg-black/20 px-2 py-1 rounded-full focus:outline-none"
                    >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default FloatingNotification;