import React, { useEffect, useState } from "react";

import "./ProgressBar.css/"

 function ProgressBar() {
    
    const [scrollPercentage, setScrollPercentage] = useState(12)
    
    useEffect(() => {

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            
            const scrollPercent = (scrollY / (documentHeight - windowHeight))*100

            setScrollPercentage(scrollPercent)
        }

        window.addEventListener("scroll", handleScroll);

        return()=> {
            window.removeEventListener("scroll", handleScroll)
        }
    
    },[])



    return (
        <div className="progress-container">
            <div
                className="progress-fill"
                style={{
                width: `${scrollPercentage}%`,
                }}
            >
                    <span className="light-effect"></span>
                </div>
            </div>
 )}

 export default ProgressBar;