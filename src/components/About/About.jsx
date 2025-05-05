import React from 'react';
import "./About.css";
import skill from '../../assets/skill.png';
import java from '../../assets/java.png';
import dsa from '../../assets/dsa.png';
import Cards from '../Cards/Cards';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function About() {
    useGSAP(() => {
        gsap.from(".circle", {
            x: -100,
            duration: 1,
            stagger: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".circle",
                scroller: "body",
                scrub: 2,
                // markers: true,
                start: "top 50%",
                end: "top 20%",
            }
        });

        gsap.from(".line", {
            x: -100,
            duration: 1,
            stagger: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".line",
                scroller: "body",
                scrub: 2,
                // markers: true,
                start: "top 60%",
                end: "top 40%",
            }
        });

        gsap.from(".aboutdetails h1", {
            x: -100,
            duration: 1,
            stagger: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".aboutdetails h1",
                scroller: "body",
                scrub: 2,
                // markers: true,
                start: "top 60%",
                end: "top 40%",
            }
        });

        gsap.from(".aboutdetails ul", {
            y: 100,
            duration: 1,
            stagger: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".aboutdetails li",
                scroller: "body",
                scrub: 2,
                // markers: true,
                start: "top 60%",
                end: "top 40%",
            }
        });
        gsap.from(".rightabout ", {
            x: 100,
            duration: 1,
            stagger: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".aboutdetails h1",
                scroller: "body",
                scrub: 2,
                // markers: true,
                start: "top 60%",
                end: "top 40%",
            }
        });
    });

    return (
        <div id='about'>
            <div className="leftabout">
                <div className="circle-line">
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>
                <div className="aboutdetails">
                    <div className="personal">
                        <h1>Personal Information</h1>
                        <ul>
                            <li><span>Name</span>: Pranav Teotia</li>
                            <li><span>GENDER</span>: MALE</li>
                            <li><span>LANGUAGE KNOWN</span>: HINDI, ENGLISH</li>
                        </ul>
                    </div>
                    <div className="education">
                        <h1>Education</h1>
                        <ul>
                            <li><span>DEGREE</span>: B.TECH</li>
                            <li><span>BRANCH</span>: COMPUTER SCIENCE & ENGINEERING(AI)</li>
                            <li><span>BATCH</span>: 2021-2025</li>
                            <li><span>PERCENTAGE</span>: 68%</li>

                        </ul>
                        <ul>
                            <li><span>DEGREE</span>: SENIOR SECONDARY SCHOOL</li>
                            <li><span>BRANCH</span>: SCIENCE(PCM)</li>
                            <li><span>BATCH</span>: 2020-2021</li>
                            <li><span>PERCENTAGE</span>: 89.4%</li>


                        </ul>
                        <ul>
                            <li><span>DEGREE</span>: SECONDARY SCHOOL</li>
                            <li><span>BATCH</span>: 2018-2019</li>
                            <li><span>PERCENTAGE</span>: 84%</li>

                        </ul>
                    </div>
                    <div className="skill">
                        <h1>Skill</h1>
                        <ul>
                            <li>JAVA</li>
                            <li>DSA [JAVA]</li>
                            <li>
                                FRONTEND:<br />
                                [HTML, CSS, TAILWINDCSS, JAVASCRIPT, REACT.JS]
                            </li>
                            <li>
                                BACKEND:<br />
                                [SPRINGBOOT, Spring MVC, Spring Data JPA, Hibernate, MySQL, RESTful APIs]
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rightabout">
                <Cards title="FRONTEND SKILL" image={skill} />
                <Cards title="JAVA" image={java} />
                <Cards title="DATA STRUCTURE & ALGORITHM" image={dsa} />
            </div>
        </div>
    );
}

export default About;
