import React, { useEffect, useRef } from "react";
import "./Cards.css";

function Cards({ title, image, video }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!videoRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current.play();
                    } else {
                        videoRef.current.pause();
                    }
                });
            },
            { threshold: 0.5 } // Play video when 50% is visible
        );

        observer.observe(videoRef.current);

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        };
    }, []);

    return (
        <div className="card">
            <h1>{title}</h1>
            <div className="hovercard">
                {image && <img src={image} alt="Project Preview" />}
                {video && (
                    <video ref={videoRef} src={video} loop muted playsInline></video>
                )}
            </div>
        </div>
    );
}

export default Cards;
